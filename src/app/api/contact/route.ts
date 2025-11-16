import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

type ContactBody = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

export async function POST(req: Request) {
  try {
    const body: ContactBody = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const SMTP_HOST = process.env.SMTP_HOST;
    const SMTP_PORT = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587;
    const SMTP_SECURE = process.env.SMTP_SECURE === "true";
    const SMTP_USER = process.env.SMTP_USER;
    const SMTP_PASS = process.env.SMTP_PASS;
    const TO_EMAIL = process.env.CONTACT_TO_EMAIL || SMTP_USER;

    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !TO_EMAIL) {
      return NextResponse.json({ error: "Mail server not configured" }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_SECURE,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    const mail = {
      from: `${process.env.CONTACT_FROM_NAME || "Website Contact"} <${SMTP_USER}>`,
      to: TO_EMAIL,
      subject: `[Website Contact] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      replyTo: email,
    };

    await transporter.sendMail(mail);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
