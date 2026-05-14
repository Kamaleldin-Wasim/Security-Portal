import {
  BlogPreviewSection,
  ClientsShowcase,
  FaqSection,
  FeatureColumns,
  FinalCta,
  HomeHero,
  MetricsStrip,
  ProjectsSection,
  SectorsSection,
  ServicesGrid,
  TestimonialsSection
} from "@/components/sections";
import { isLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";

export default async function HomePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <>
      <HomeHero locale={locale} />
      <MetricsStrip locale={locale} />
      <ServicesGrid locale={locale} />
      <FeatureColumns locale={locale} />
      <SectorsSection locale={locale} />
      <ProjectsSection locale={locale} />
      <ClientsShowcase locale={locale} />
      <TestimonialsSection locale={locale} />
      <BlogPreviewSection locale={locale} />
      <FaqSection locale={locale} />
      <FinalCta locale={locale} />
    </>
  );
}
