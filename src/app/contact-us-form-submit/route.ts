import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Use Edge runtime
export const runtime = "edge";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      fullName,
      email,
      countryCode,
      phone,
      interest,
      message,
      context,
      contactType,
    } = body || {};

    if (
      !fullName ||
      !email ||
      !countryCode ||
      !phone ||
      !interest ||
      !message ||
      !contactType
    ) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const allowedContactTypes = new Map<
      string,
      "Service Inquiry" | "Engage with Expert" | "General Contact"
    >([
      ["service inquiry", "Service Inquiry"],
      ["engage with expert", "Engage with Expert"],
      ["general contact", "General Contact"],
    ]);

    const normalizedContactType = String(contactType).trim().toLowerCase();
    const resolvedContactType =
      allowedContactTypes.get(normalizedContactType) ?? "General Contact";

    // Send the email
    await resend.emails.send({
      from: "Kenroz Contact <support@kenroz.com>",
      to: ["saud.zubedi@kenroz.com"],
      subject: `New ${resolvedContactType}: ${fullName}`,
      replyTo: email,
      html: `
        <div style="font-family: Inter, Roboto, Arial, sans-serif; color: #0f172a;">
          <h2 style="margin:0 0 12px;">New Contact Submission</h2>
          <p style="margin:0 0 16px; color:#334155;">You have received a new inquiry from the website contact form.</p>
          <table style="border-collapse: collapse; width: 100%;">
            <tbody>
              <tr>
                <td style="padding:8px 0; font-weight:600; width:160px;">Full Name</td>
                <td style="padding:8px 0;">${fullName}</td>
              </tr>
              <tr>
                <td style="padding:8px 0; font-weight:600;">Email</td>
                <td style="padding:8px 0;">${email}</td>
              </tr>
              <tr>
                <td style="padding:8px 0; font-weight:600;">Phone</td>
                <td style="padding:8px 0;">${countryCode} ${phone}</td>
              </tr>
              <tr>
                <td style="padding:8px 0; font-weight:600;">Contact Type</td>
                <td style="padding:8px 0;">${resolvedContactType}</td>
              </tr>
              <tr>
                <td style="padding:8px 0; font-weight:600;">Interest</td>
                <td style="padding:8px 0;">${interest}</td>
              </tr>
              ${context ? `<tr><td style="padding:8px 0; font-weight:600;">Context</td><td style="padding:8px 0;">${context}</td></tr>` : ""}
              <tr>
                <td style="padding:8px 0; font-weight:600; vertical-align: top;">Message</td>
                <td style="padding:8px 0; white-space: pre-wrap;">${message}</td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}