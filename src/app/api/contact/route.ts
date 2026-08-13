import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required" },
        { status: 400 }
      );
    }

    // ✅ Check env vars
    const smtpEmail = process.env.SMTP_EMAIL;
    const smtpPass = process.env.SMTP_PASSWORD;
    const adminEmail = process.env.ADMIN_EMAIL;

    if (!smtpEmail || !smtpPass || !adminEmail) {
      console.error("Missing env vars:", {
        SMTP_EMAIL: smtpEmail ? "set" : "MISSING",
        SMTP_PASSWORD: smtpPass ? "set" : "MISSING",
        ADMIN_EMAIL: adminEmail ? "set" : "MISSING",
      });
      return NextResponse.json(
        { error: "Server email config missing. Check env variables." },
        { status: 500 }
      );
    }

    // ✅ Proper Gmail SMTP config (reliable)
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // SSL
      auth: {
        user: smtpEmail,
        pass: smtpPass,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Verify connection
    await transporter.verify();

    const mailOptions = {
      from: `"NexGen Leads" <${smtpEmail}>`,
      to: adminEmail,
      subject: `📩 New Lead: ${name} — ${service || "General Inquiry"}`,
      replyTo: email,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Lead</title>
        </head>
        <body style="margin:0; padding:0; background-color:#0a0a0a; font-family:Arial,Helvetica,sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#0a0a0a; padding:40px 20px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color:#111111; border:1px solid #d4af37; border-radius:12px; overflow:hidden;">
                  
                  <!-- Header -->
                  <tr>
                    <td style="background-color:#0f0f0f; padding:30px; text-align:center; border-bottom:2px solid #d4af37;">
                      <h1 style="color:#d4af37; margin:0; font-size:24px; font-weight:bold;">NexGen Book Publishers</h1>
                      <p style="color:#c9b896; margin:8px 0 0 0; font-size:14px;">New Contact Form Submission</p>
                    </td>
                  </tr>

                  <!-- Body -->
                  <tr>
                    <td style="padding:30px;">
                      
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="padding-bottom:20px;">
                            <p style="color:#d4af37; font-size:11px; text-transform:uppercase; letter-spacing:0.1em; margin:0 0 6px 0; font-weight:bold;">Full Name</p>
                            <p style="color:#e5e5e5; font-size:16px; margin:0;">${name}</p>
                          </td>
                        </tr>
                        
                        <tr>
                          <td style="padding-bottom:20px;">
                            <p style="color:#d4af37; font-size:11px; text-transform:uppercase; letter-spacing:0.1em; margin:0 0 6px 0; font-weight:bold;">Email Address</p>
                            <p style="color:#e5e5e5; font-size:16px; margin:0;">${email}</p>
                          </td>
                        </tr>

                        <tr>
                          <td style="padding-bottom:20px;">
                            <p style="color:#d4af37; font-size:11px; text-transform:uppercase; letter-spacing:0.1em; margin:0 0 6px 0; font-weight:bold;">Phone Number</p>
                            <p style="color:#e5e5e5; font-size:16px; margin:0;">${phone || "Not provided"}</p>
                          </td>
                        </tr>

                        <tr>
                          <td style="padding-bottom:20px;">
                            <p style="color:#d4af37; font-size:11px; text-transform:uppercase; letter-spacing:0.1em; margin:0 0 6px 0; font-weight:bold;">Service Interested</p>
                            <p style="color:#e5e5e5; font-size:16px; margin:0;">${service || "Not selected"}</p>
                          </td>
                        </tr>

                        <tr>
                          <td style="padding-bottom:10px;">
                            <p style="color:#d4af37; font-size:11px; text-transform:uppercase; letter-spacing:0.1em; margin:0 0 6px 0; font-weight:bold;">Message</p>
                            <p style="color:#e5e5e5; font-size:15px; line-height:1.6; margin:0; white-space:pre-wrap;">${message}</p>
                          </td>
                        </tr>
                      </table>

                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background-color:#0f0f0f; padding:20px 30px; text-align:center; border-top:1px solid #333;">
                      <p style="color:#666; font-size:12px; margin:0;">Received from nexgenbookpublishers.com</p>
                      <p style="color:#444; font-size:11px; margin:8px 0 0 0;">${new Date().toLocaleString()}</p>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Contact API Error:", error.message || error);
    return NextResponse.json(
      { error: error.message || "Failed to send email. Please try again." },
      { status: 500 }
    );
  }
}