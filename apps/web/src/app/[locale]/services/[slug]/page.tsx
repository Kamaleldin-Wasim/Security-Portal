import { InlineFormCard, PageHero } from "@/components/sections";
import { services, text } from "@/data/content";
import { isLocale, locales } from "@/lib/i18n";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return locales.flatMap((locale) => services.map((service) => ({ locale, slug: service.slug })));
}

export default async function ServiceDetailPage({
  params
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  return (
    <>
      <PageHero
        locale={locale}
        eyebrow={locale === "ar" ? "تفاصيل الخدمة" : "Service Detail"}
        title={text(locale, service.title)}
        description={text(locale, service.summary)}
      />
      <section className="section-space">
        <div className="container-shell grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="glass-card rounded-[32px] p-8">
            <h2 className="font-arabic text-3xl font-bold text-navy">
              {locale === "ar" ? "ماذا تشمل الخدمة؟" : "What this service includes"}
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {service.bullets[locale].map((bullet) => (
                <div key={bullet} className="rounded-2xl bg-cream p-5 text-sm font-medium text-royal">
                  {bullet}
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-[28px] bg-navy p-7 text-white">
              <h3 className="font-arabic text-2xl font-bold">
                {locale === "ar" ? "منهجية التنفيذ" : "Execution approach"}
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/80">
                {locale === "ar"
                  ? "نبدأ بتقييم الاحتياج والمخاطر، ثم نضع خطة تشغيل وتوزيع للكوادر أو الأنظمة، يليها الإشراف المستمر ورفع تقارير متابعة واضحة."
                  : "We begin with risk and requirement assessment, then build the operating plan, deploy teams or systems, and maintain structured oversight with reporting."}
              </p>
            </div>
          </div>
          <InlineFormCard
            locale={locale}
            title={locale === "ar" ? "اطلب هذه الخدمة" : "Request this service"}
            endpoint="/api/quotes"
            fields={[
              { name: "name", label: locale === "ar" ? "الاسم" : "Name" },
              { name: "company", label: locale === "ar" ? "الجهة / الشركة" : "Company" },
              { name: "phone", label: locale === "ar" ? "رقم الجوال" : "Phone" },
              { name: "email", label: locale === "ar" ? "البريد الإلكتروني" : "Email", type: "email" },
              { name: "serviceType", label: locale === "ar" ? "الخدمة المطلوبة" : "Service", type: "text" },
              { name: "location", label: locale === "ar" ? "الموقع" : "Location", type: "text" },
              { name: "details", label: locale === "ar" ? "تفاصيل الطلب" : "Project details", type: "textarea" }
            ]}
          />
        </div>
      </section>
    </>
  );
}
