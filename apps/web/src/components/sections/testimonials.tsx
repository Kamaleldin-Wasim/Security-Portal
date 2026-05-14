import { Star } from "lucide-react";
import { testimonials, text } from "@/data/content";
import { Locale } from "@/lib/i18n";
import { SectionHeading } from "./section-heading";

export function TestimonialsSection({ locale }: { locale: Locale }) {
  return (
    <section className="section-space bg-white">
      <div className="container-shell">
        <SectionHeading
          locale={locale}
          title={locale === "ar" ? "ماذا يقول الشركاء" : "What partners say"}
          description={
            locale === "ar"
              ? "نعتز بشراكاتنا الاستراتيجية مع نخبة من المؤسسات والشركات، ونعمل دائماً على تحقيق أعلى معايير الرضا والثقة."
              : "We take pride in our strategic partnerships with leading organizations, always striving to deliver the highest standards of trust and satisfaction."
          }
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {testimonials.map((item) => (
            <div key={item.author.ar} className="rounded-[32px] bg-navy p-8 text-white shadow-premium">
              <div className="flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="mt-6 text-lg leading-8 text-white/85">“{text(locale, item.quote)}”</p>
              <p className="mt-6 text-sm font-semibold text-gold">{text(locale, item.author)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
