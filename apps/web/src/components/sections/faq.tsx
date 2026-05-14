import { faq, text } from "@/data/content";
import { Locale } from "@/lib/i18n";
import { SectionHeading } from "./section-heading";

export function FaqSection({ locale }: { locale: Locale }) {
  return (
    <section className="section-space">
      <div className="container-shell">
        <SectionHeading
          locale={locale}
          title={locale === "ar" ? "الأسئلة الشائعة" : "Frequently asked questions"}
          description={
            locale === "ar"
              ? "إجابات سريعة تساعد العملاء المحتملين على اتخاذ القرار والتواصل بثقة."
              : "Quick answers that help buyers move forward with confidence."
          }
        />
        <div className="mt-10 space-y-4">
          {faq.map((item) => (
            <div key={item.q.ar} className="glass-card rounded-[28px] p-6">
              <h3 className="font-arabic text-xl font-bold text-navy">{text(locale, item.q)}</h3>
              <p className="mt-3 text-sm leading-7 text-navy/75">{text(locale, item.a)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
