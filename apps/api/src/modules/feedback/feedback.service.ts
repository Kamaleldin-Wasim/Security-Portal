import { prisma } from "../../providers/db";
import { notifyAdmin } from "../../providers/email";
import { 
  CreateJobApplicationDto, 
  CreateMessageDto, 
  CreateQuoteDto 
} from "./feedback.validation";

export class FeedbackService {
  async createMessage(data: CreateMessageDto) {
    const result = await prisma.message.create({
      data: {
        ...data,
        email: data.email || null,
        company: data.company || null,
      },
    });

    await notifyAdmin(
      "رسالة تواصل جديدة",
      `<div dir="rtl" style="font-family: sans-serif;">
        <h2 style="color: #061A2F;">رسالة جديدة من الموقع</h2>
        <p><strong>الاسم:</strong> ${result.name}</p>
        <p><strong>الشركة:</strong> ${result.company || "غير متوفر"}</p>
        <p><strong>الجوال:</strong> ${result.phone}</p>
        <p><strong>البريد:</strong> ${result.email || "غير متوفر"}</p>
        <p><strong>الرسالة:</strong><br/>${result.message.replace(/\n/g, "<br/>")}</p>
      </div>`
    );

    return result;
  }

  async createQuote(data: CreateQuoteDto) {
    const result = await prisma.quoteRequest.create({
      data: {
        ...data,
        email: data.email || null,
        company: data.company || null,
        location: data.location || null,
      },
    });

    await notifyAdmin(
      "طلب تسعيرة أمنية جديد",
      `<div dir="rtl" style="font-family: sans-serif;">
        <h2 style="color: #C8A45D;">طلب تسعيرة جديد</h2>
        <p><strong>الاسم:</strong> ${result.name}</p>
        <p><strong>الشركة:</strong> ${result.company || "غير متوفر"}</p>
        <p><strong>الجوال:</strong> ${result.phone}</p>
        <p><strong>البريد:</strong> ${result.email || "غير متوفر"}</p>
        <p><strong>نوع الخدمة المطلوبة:</strong> ${result.serviceType}</p>
        <p><strong>موقع المشروع:</strong> ${result.location || "غير متوفر"}</p>
        <p><strong>تفاصيل إضافية:</strong><br/>${result.details.replace(/\n/g, "<br/>")}</p>
      </div>`
    );

    return result;
  }

  async createJobApplication(data: CreateJobApplicationDto) {
    const result = await prisma.jobApplication.create({
      data: {
        ...data,
        city: data.city || null,
        email: data.email || null,
      },
    });

    await notifyAdmin(
      "طلب توظيف جديد",
      `<div dir="rtl" style="font-family: sans-serif;">
        <h2 style="color: #061A2F;">طلب توظيف جديد</h2>
        <p><strong>الاسم:</strong> ${result.fullName}</p>
        <p><strong>الجوال:</strong> ${result.phone}</p>
        <p><strong>البريد:</strong> ${result.email || "غير متوفر"}</p>
        <p><strong>المدينة:</strong> ${result.city || "غير متوفر"}</p>
        <p><strong>الخبرة:</strong> ${result.experience}</p>
      </div>`
    );

    return result;
  }
}

export const feedbackService = new FeedbackService();
