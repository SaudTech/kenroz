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
    
    // Send the email with the dynamic HTML content directly as a string
    await resend.emails.send({
      from: "Kenroz Contact <support@kenroz.com>",
      to: ["saud.zubedi@kenroz.com"],
      subject: `New ${resolvedContactType}: ${fullName}`,
      replyTo: email,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>New Website Inquiry</title>
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
                .message-section {
                    background-color: #f8fafc;
                    border-radius: 6px;
                    padding: 20px;
                    border: 1px solid #e2e8f0;
                }
                .message-content {
                    background-color: #ffffff;
                    padding: 16px;
                    border-radius: 4px;
                    white-space: pre-wrap;
                    line-height: 1.5;
                    border: 1px solid #d1d5db;
                    color: #334155;
                }
                .button-container {
                    text-align: center;
                    margin-top: 24px;
                }
                .reply-button {
                    display: inline-block;
                    background-color: #1a237e;
                    color: #ffffff;
                    text-decoration: none;
                    padding: 12px 24px;
                    border-radius: 6px;
                    font-weight: 600;
                    font-size: 16px;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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
                <h1>New Website Inquiry</h1>
            </div>
            <div class="content">
                <p>A new message has been submitted through the contact form on the **Kenroz** website. Please review the details below to follow up with the user.</p>

                <div class="section-title">Contact Information</div>
                <div class="info-card">
                    <div class="info-item">
                        <span class="label">Full Name</span>
                        <span class="value">${fullName}</span>
                    </div>
                    <div class="info-item">
                        <span class="label">Email Address</span>
                        <span class="value">${email}</span>
                    </div>
                    <div class="info-item">
                        <span class="label">Phone Number</span>
                        <span class="value">${countryCode} ${phone}</span>
                    </div>
                    <div class="info-item">
                        <span class="label">Contact Type</span>
                        <span class="value">${resolvedContactType}</span>
                    </div>
                    <div class="info-item">
                        <span class="label">Interest in</span>
                        <span class="value">${interest}</span>
                    </div>
                </div>

                <div class="section-title">Message Details</div>
                <div class="message-section">
                    <div class="message-content">
                        ${message}
                    </div>
                </div>
                
                <div class="button-container">
                    <a href="mailto:${email}" class="reply-button">Reply to User</a>
                </div>
            </div>
            <div class="footer">
                Powered by your website contact form.
            </div>
        </div>

        </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
