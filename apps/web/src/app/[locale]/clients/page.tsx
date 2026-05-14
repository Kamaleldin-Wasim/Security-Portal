import { ClientsShowcase, FinalCta, PageHero } from "@/components/sections";
import { isLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";

export default async function ClientsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <>
      <PageHero
        locale={locale}
        eyebrow={locale === "ar" ? "العملاء" : "Clients"}
        title={locale === "ar" ? "بناء الثقة المؤسسية من أول نظرة" : "Institutional trust, designed from the first glance"}
        description={
          locale === "ar"
            ? "هذه الصفحة مجهزة لإبراز شعارات العملاء والشركاء والاعتمادات والتصنيفات بمجرد اعتمادها من العميل."
            : "This page is prepared for client logos, partnerships, credentials, and approved institutional references."
        }
      />
      <ClientsShowcase locale={locale} />
      <FinalCta locale={locale} />
    </>
  );
}
