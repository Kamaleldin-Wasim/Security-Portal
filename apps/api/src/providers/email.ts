import nodemailer from "nodemailer";
import { config } from "../core/config";

const transporter = nodemailer.createTransport({
  host: config.SMTP_HOST,
  port: config.SMTP_PORT,
  secure: config.SMTP_SECURE,
  auth: {
    user: config.EMAIL_USER,
    pass: config.EMAIL_PASS,
  },
});

export async function notifyAdmin(subject: string, htmlContent: string) {
  const { EMAIL_USER, EMAIL_PASS, ADMIN_EMAIL } = config;
  
  if (!EMAIL_USER || !EMAIL_PASS || !ADMIN_EMAIL) {
    console.warn("⚠️ Email credentials or ADMIN_EMAIL not provided. Email notification skipped.");
    if (config.NODE_ENV === "development") {
      console.log("--- Email Debug ---");
      console.log("Subject:", subject);
      console.log("Content:", htmlContent);
      console.log("-------------------");
    }
    return;
  }

  try {
    const info = await transporter.sendMail({
      from: `"ShieldGuard Security" <${EMAIL_USER}>`,
      to: ADMIN_EMAIL,
      subject: subject,
      html: htmlContent,
    });
    console.log("✅ Admin notified via email: %s", info.messageId);
    return info;
  } catch (error) {
    console.error("❌ Error sending email to admin:", error);
    // In production, you might want to use a more robust logging service or retry logic here
  }
}
