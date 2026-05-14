import { InlineFormCard, PageHero } from "@/components/sections";
import { isLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";

export default async function QuotePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <>
      <PageHero
        locale={locale}
        eyebrow={locale === "ar" ? "اطلب عرض سعر" : "Request a Quote"}
        title={locale === "ar" ? "ابدأ طلبك وسنجهز لك عرضاً مناسباً" : "Start your request and receive a tailored proposal"}
        description={
          locale === "ar"
            ? "نلتقط تفاصيل الموقع أو الفعالية أو الخدمة المطلوبة لنبني تصوراً تشغيلياً وتسعيرياً أولياً."
            : "Share your site, event, or service needs so we can prepare an initial operating and pricing proposal."
        }
      />
      <section className="section-space">
        <div className="container-shell grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <InlineFormCard
            locale={locale}
            title={locale === "ar" ? "تفاصيل طلب عرض السعر" : "Quote request details"}
            endpoint="/api/quotes"
            fields={[
              { name: "name", label: locale === "ar" ? "الاسم" : "Name" },
              { name: "company", label: locale === "ar" ? "الجهة / الشركة" : "Company" },
              { name: "phone", label: locale === "ar" ? "رقم الجوال" : "Phone" },
              { name: "email", label: locale === "ar" ? "البريد الإلكتروني" : "Email", type: "email" },
              { name: "serviceType", label: locale === "ar" ? "نوع الخدمة" : "Service type" },
              { name: "location", label: locale === "ar" ? "الموقع" : "Location" },
              { name: "details", label: locale === "ar" ? "تفاصيل إضافية" : "Additional details", type: "textarea" }
            ]}
          />
          <div className="glass-card rounded-[32px] p-8">
            <h2 className="font-arabic text-3xl font-bold text-navy">
              {locale === "ar" ? "ما الذي يحدث بعد الإرسال؟" : "What happens next?"}
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-7 text-navy/75">
              <p>{locale === "ar" ? "1. مراجعة أولية للاحتياج والموقع أو طبيعة الفعالية." : "1. Initial review of your site, service scope, or event requirements."}</p>
              <p>{locale === "ar" ? "2. التواصل معكم لتأكيد التفاصيل أو ترتيب زيارة عند الحاجة." : "2. Follow-up to confirm details or arrange a site review if needed."}</p>
              <p>{locale === "ar" ? "3. إعداد عرض فني ومالي مبدئي." : "3. Preparation of an initial technical and commercial proposal."}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
