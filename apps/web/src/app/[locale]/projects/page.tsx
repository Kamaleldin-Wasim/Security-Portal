import { FinalCta, PageHero, ProjectsSection } from "@/components/sections";
import { isLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";

export default async function ProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <>
      <PageHero
        locale={locale}
        eyebrow={locale === "ar" ? "المشاريع" : "Projects"}
        title={locale === "ar" ? "قصص تشغيل تظهر الجاهزية والانضباط" : "Operational stories that demonstrate readiness"}
        description={
          locale === "ar"
            ? "أمثلة لمشاريع يمكن تطويرها لاحقاً ببيانات العميل الفعلية، مع الحفاظ على أسلوب عرض تنفيذي وموثوق."
            : "Example case studies that can later be replaced with real client-approved projects and quantified outcomes."
        }
      />
      <ProjectsSection locale={locale} />
      <FinalCta locale={locale} />
    </>
  );
}
