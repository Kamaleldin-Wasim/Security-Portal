import { InlineFormCard, PageHero } from "@/components/sections";
import { careersHighlights } from "@/data/content";
import { isLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";

export default async function CareersPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <>
      <PageHero
        locale={locale}
        eyebrow={locale === "ar" ? "الوظائف" : "Careers"}
        title={locale === "ar" ? "انضم إلى فريق أمني منضبط وطموح" : "Join a disciplined and ambitious security team"}
        description={
          locale === "ar"
            ? "صفحة توظيف عملية تستهدف استقطاب الحراس والحارسات والكوادر التشغيلية، مع إبراز بيئة العمل والتدريب."
            : "A recruitment-focused page designed to attract guards and operational staff with a clear hiring message."
        }
      />
      <section className="section-space">
        <div className="container-shell grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-4">
            {careersHighlights.map((item) => (
              <div key={item.ar} className="glass-card rounded-[28px] p-6 text-sm leading-7 text-navy/80">
                {locale === "ar" ? item.ar : item.en}
              </div>
            ))}
          </div>
          <InlineFormCard
            locale={locale}
            title={locale === "ar" ? "قدم طلبك الآن" : "Apply now"}
            endpoint="/api/job-applications"
            fields={[
              { name: "fullName", label: locale === "ar" ? "الاسم الكامل" : "Full name" },
              { name: "phone", label: locale === "ar" ? "رقم الجوال" : "Phone" },
              { name: "email", label: locale === "ar" ? "البريد الإلكتروني" : "Email", type: "email" },
              { name: "city", label: locale === "ar" ? "المدينة" : "City" },
              { name: "experience", label: locale === "ar" ? "الخبرة" : "Experience", type: "textarea" }
            ]}
          />
        </div>
      </section>
    </>
  );
}
