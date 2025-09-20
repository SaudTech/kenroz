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

  const requiredFields = ["fullName", "phone", "job"];

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
  const phone = String(formData.get("phone") ?? "").trim();

  const jobTitle = job || "General Application";

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
      from: "Kenroz Careers <career@kenroz.com>",
      to: ["career@kenroz.com"],
      subject: `New Job Application: ${jobTitle}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Job Application</title>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
                body {
                    font-family: 'Inter', Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                    background-color: #f1f5f9;
                }
                .container {
                    max-width: 600px;
                    margin: 20px auto;
                    background-color: #ffffff;
                    border-radius: 8px;
                    overflow: hidden;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
                }
                .header {
                    background-color: #1a237e;
                    padding: 32px;
                    color: #ffffff;
                    text-align: center;
                }
                .header h1 {
                    font-size: 24px;
                    margin: 0;
                    font-weight: 700;
                }
                .content {
                    padding: 24px;
                    color: #475569;
                    line-height: 1.6;
                }
                .content p {
                    margin: 0 0 24px;
                }
                .section-title {
                    font-size: 16px;
                    font-weight: 600;
                    color: #1f2937;
                    margin-bottom: 12px;
                    border-bottom: 2px solid #e2e8f0;
                    padding-bottom: 8px;
                }
                .info-card {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 16px;
                    background-color: #f8fafc;
                    border-radius: 6px;
                    padding: 20px;
                    margin-bottom: 24px;
                    border: 1px solid #e2e8f0;
                }
                .info-item {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-size: 14px;
                }
                .label {
                    font-weight: 600;
                    color: #334155;
                }
                .value {
                    text-align: right;
                    color: #64748b;
                }
                .resume-note {
                    text-align: center;
                    margin-top: 24px;
                    font-size: 14px;
                    color: #475569;
                }
                .footer {
                    text-align: center;
                    padding: 20px;
                    font-size: 12px;
                    color: #94a3b8;
                    border-top: 1px solid #e2e8f0;
                }
            </style>
        </head>
        <body>

        <div class="container">
            <div class="header">
                <h1>New Job Application</h1>
            </div>
            <div class="content">
                <p>A new application has been submitted on the <b>Kenroz</b> website for the <strong>${jobTitle}</strong> role. Please review the applicant's details and attached resume below.</p>

                <div class="section-title">Applicant Information</div>
                <div class="info-card">
                    <div class="info-item">
                        <span class="label">Full Name</span>
                        <span class="value">${fullName}</span>
                    </div>
                    <div class="info-item">
                        <span class="label">Phone Number</span>
                        <span class="value">${phone}</span>
                    </div>
                </div>

                <p class="resume-note">The applicant's resume is attached to this email.</p>
            </div>
            <div class="footer">
                © ${new Date().getFullYear()} Kenroz. All rights reserved.
            </div>
        </div>

        </body>
        </html>
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