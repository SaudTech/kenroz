import { NextResponse } from "next/server";
import { Resend } from "resend";

const ALLOWED_RESUME_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

const MAX_RESUME_SIZE = 5 * 1024 * 1024; // 5MB

export const runtime = "nodejs";

export async function POST(request: Request) {
  const formData = await request.formData();

  const requiredFields = [
    "fullName",
    "email",
    "countryCode",
    "phone",
    "description",
    "job",
  ];

  const missing = requiredFields.filter((field) => {
    const value = formData.get(field);
    if (typeof value === "string") {
      return value.trim() === "";
    }
    return !value;
  });

  if (missing.length > 0) {
    return NextResponse.json(
      {
        ok: false,
        error: `Missing required fields: ${missing.join(", ")}`,
      },
      { status: 400 },
    );
  }

  const email = formData.get("email");
  const emailValue = typeof email === "string" ? email.trim() : "";
  if (emailValue) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailValue)) {
      return NextResponse.json(
        {
          ok: false,
          error: "Please provide a valid email address.",
        },
        { status: 400 },
      );
    }
  }

  const resume = formData.get("resume");
  if (!resume || typeof resume === "string") {
    return NextResponse.json(
      {
        ok: false,
        error: "Resume is required.",
      },
      { status: 400 },
    );
  }

  const resumeBlob = resume as Blob;
  if (resumeBlob.size > MAX_RESUME_SIZE) {
    return NextResponse.json(
      {
        ok: false,
        error: "Resume file must be less than 5MB.",
      },
      { status: 400 },
    );
  }

  if (!ALLOWED_RESUME_TYPES.has(resumeBlob.type)) {
    return NextResponse.json(
      {
        ok: false,
        error: "Only PDF or Word documents are allowed.",
      },
      { status: 400 },
    );
  }

  const fullName = String(formData.get("fullName") ?? "").trim();
  const job = String(formData.get("job") ?? "").trim();
  const countryCode = String(formData.get("countryCode") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const description = String(formData.get("description") ?? "").trim();
  const linkedin = String(formData.get("linkedin") ?? "").trim();

  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) {
    console.error("RESEND_API_KEY is not configured");
    return NextResponse.json(
      {
        ok: false,
        error: "Application service is unavailable. Please try again later.",
      },
      { status: 500 },
    );
  }

  try {
    const resumeFile = resume as File;
    const resumeBuffer = Buffer.from(await resumeFile.arrayBuffer());
    const resend = new Resend(resendApiKey);

    await resend.emails.send({
      from: "Kenroz Careers <careers@kenroz.com>",
      to: ["saud.zubedi@kenroz.com"],
      replyTo: emailValue || undefined,
      subject: `New Job Application: ${job}`,
      html: `
        <div style="font-family: Inter, Roboto, Arial, sans-serif; color: #0f172a;">
          <h2 style="margin:0 0 12px;">New Job Application</h2>
          <p style="margin:0 0 16px; color:#334155;">${fullName} has applied for the <strong>${job}</strong> role.</p>
          <table style="border-collapse: collapse; width: 100%;">
            <tbody>
              <tr>
                <td style="padding:8px 0; font-weight:600; width:160px;">Full Name</td>
                <td style="padding:8px 0;">${fullName}</td>
              </tr>
              <tr>
                <td style="padding:8px 0; font-weight:600;">Email</td>
                <td style="padding:8px 0;">${emailValue}</td>
              </tr>
              <tr>
                <td style="padding:8px 0; font-weight:600;">Phone</td>
                <td style="padding:8px 0;">${countryCode} ${phone}</td>
              </tr>
              ${linkedin ? `<tr><td style="padding:8px 0; font-weight:600;">LinkedIn</td><td style="padding:8px 0;"><a href="${linkedin}">${linkedin}</a></td></tr>` : ""}
              <tr>
                <td style="padding:8px 0; font-weight:600; vertical-align: top;">Summary</td>
                <td style="padding:8px 0; white-space: pre-wrap;">${description}</td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
      attachments: [
        {
          filename:
            resumeFile.name ||
            `${fullName.replace(/\s+/g, "-")}-resume.${
              resumeFile.type === "application/pdf"
                ? "pdf"
                : resumeFile.type === "application/msword"
                  ? "doc"
                  : "docx"
            }`,
          content: resumeBuffer.toString("base64"),
          contentType: resumeFile.type || "application/octet-stream",
        },
      ],
    });
  } catch (error) {
    console.error("Failed to send job application email", error);
    return NextResponse.json(
      {
        ok: false,
        error: "Failed to submit application. Please try again later.",
      },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
