import { Suspense } from "react";
import { Metadata } from "next";
import { Locale } from "@/lib/i18n";
import { SectionHeading } from "@/components/sections/section-heading";
import { BlogList } from "@/components/blog/blog-list";
import { CategoryFilter } from "@/components/blog/category-filter";

interface Props {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "ar" ? "المدونة | شركة الفهاد" : "Blog | Al-Fahhad Company",
    description: locale === "ar" 
      ? "تابع آخر أخبارنا ومقالاتنا حول حلول الأمن والخدمات اللوجستية." 
      : "Follow our latest news and articles about security and logistics solutions.",
  };
}

export default async function BlogIndexPage({ params }: Props) {
  const { locale } = await params;

  return (
    <main className="section-space pt-32">
      <div className="container-shell">
        <SectionHeading
          locale={locale}
          title={locale === "ar" ? "المدونة والأخبار" : "Blog & News"}
          description={
            locale === "ar"
              ? "استكشف أحدث المقالات والرؤى حول قطاع الأمن والخدمات في المملكة."
              : "Explore the latest articles and insights about the security and services sector in the Kingdom."
          }
        />

        <div className="mt-12">
          <Suspense fallback={<div className="h-10 w-full animate-pulse bg-navy/5 rounded-full" />}>
            <CategoryFilter locale={locale} />
          </Suspense>
        </div>

        <div className="mt-16">
          <Suspense fallback={<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"><div className="h-96 bg-navy/5 animate-pulse rounded-3xl" /></div>}>
            <BlogList locale={locale} />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
