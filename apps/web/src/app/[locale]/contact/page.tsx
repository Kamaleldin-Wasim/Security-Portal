import { InlineFormCard, PageHero } from "@/components/sections";
import { brand, text } from "@/data/content";
import { isLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <>
      <PageHero
        locale={locale}
        eyebrow={locale === "ar" ? "تواصل معنا" : "Contact"}
        title={locale === "ar" ? "تواصل مباشر مع فريق التشغيل والمبيعات" : "Direct contact with our operations and sales team"}
        description={
          locale === "ar"
            ? "للاستفسارات التشغيلية والطلبات التجارية والتنسيق السريع للمواقع والفعاليات."
            : "For commercial inquiries, urgent site activation, and coordination for events and facilities."
        }
      />
      <section className="section-space">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="glass-card rounded-[32px] p-8">
            <h2 className="font-arabic text-3xl font-bold text-navy">
              {locale === "ar" ? "بيانات التواصل" : "Contact details"}
            </h2>
            <div className="mt-6 space-y-3 text-sm leading-7 text-navy/80">
              <p>{brand.phone}</p>
              <p>{brand.email}</p>
              <p>{text(locale, brand.address)}</p>
            </div>
            <div className="mt-8 rounded-[28px] bg-cream p-6">
              <h3 className="font-arabic text-xl font-bold text-navy">{locale === "ar" ? "الموقع" : "Location"}</h3>
              <p className="mt-3 text-sm leading-7 text-navy/75">
                {locale === "ar"
                  ? "يمكن استبدال هذا القسم بخريطة Google Maps أو Mapbox لمكتب الشركة في الرياض."
                  : "This area is ready for an embedded Google Maps or Mapbox location for the Riyadh office."}
              </p>
            </div>
          </div>
          <InlineFormCard
            locale={locale}
            title={locale === "ar" ? "أرسل رسالتك" : "Send your message"}
            endpoint="/api/messages"
            fields={[
              { name: "name", label: locale === "ar" ? "الاسم" : "Name" },
              { name: "company", label: locale === "ar" ? "الجهة / الشركة" : "Company" },
              { name: "phone", label: locale === "ar" ? "رقم الجوال" : "Phone" },
              { name: "email", label: locale === "ar" ? "البريد الإلكتروني" : "Email", type: "email" },
              { name: "message", label: locale === "ar" ? "نص الرسالة" : "Message", type: "textarea" }
            ]}
          />
        </div>
      </section>
    </>
  );
}
