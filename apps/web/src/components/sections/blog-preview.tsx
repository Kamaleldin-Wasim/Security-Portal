import { BriefcaseBusiness } from "lucide-react";
import { blogPosts, text } from "@/data/content";
import { Locale } from "@/lib/i18n";
import { SectionHeading } from "./section-heading";

export function BlogPreviewSection({ locale }: { locale: Locale }) {
  return (
    <section className="section-space">
      <div className="container-shell">
        <SectionHeading
          locale={locale}
          title={locale === "ar" ? "الرؤى والمقالات" : "Insights & articles"}
          description={
            locale === "ar"
              ? "قسم معرفي يدعم SEO ويعزز مكانة الشركة كمرجع موثوق."
              : "A knowledge section that supports SEO and positions the company as a trusted authority."
          }
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {blogPosts.map((post) => (
            <div key={post.slug} className="glass-card rounded-[32px] p-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-gold/15 px-3 py-2 text-xs font-semibold text-gold">
                <BriefcaseBusiness className="h-4 w-4" />
                {locale === "ar" ? "مقالة" : "Insight"}
              </div>
              <h3 className="mt-5 font-arabic text-2xl font-bold text-navy">{text(locale, post.title)}</h3>
              <p className="mt-4 text-sm leading-7 text-navy/75">{text(locale, post.excerpt)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
