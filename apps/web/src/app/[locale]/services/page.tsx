import { FinalCta, PageHero, ServicesGrid } from "@/components/sections";
import { isLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <>
      <PageHero
        locale={locale}
        eyebrow={locale === "ar" ? "الخدمات" : "Services"}
        title={locale === "ar" ? "منظومة خدمات أمنية متكاملة" : "A complete portfolio of security services"}
        description={
          locale === "ar"
            ? "نقدم خدمات أمنية بشرية وتقنية واستشارية قابلة للتخصيص بما يتناسب مع احتياجات الموقع أو الفعالية أو الجهة."
            : "We provide tailored security delivery across manned services, technical systems, and consulting support."
        }
      />
      <ServicesGrid locale={locale} />
      <FinalCta locale={locale} />
    </>
  );
}
