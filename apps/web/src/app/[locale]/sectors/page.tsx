import { FinalCta, PageHero, SectorsSection } from "@/components/sections";
import { isLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";

export default async function SectorsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <>
      <PageHero
        locale={locale}
        eyebrow={locale === "ar" ? "القطاعات" : "Sectors"}
        title={locale === "ar" ? "حلول أمنية تناسب القطاعات الحساسة والمتنوعة" : "Security built for diverse and sensitive sectors"}
        description={
          locale === "ar"
            ? "نخدم الجهات الحكومية والشركات والمنشآت التجارية والفعاليات عبر خطط تشغيل مصممة لطبيعة كل قطاع."
            : "We support public sector, enterprise, commercial, and event clients with sector-specific operating plans."
        }
      />
      <SectorsSection locale={locale} />
      <FinalCta locale={locale} />
    </>
  );
}
