import { FeatureColumns, FinalCta, PageHero } from "@/components/sections";
import { isLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <>
      <PageHero
        locale={locale}
        eyebrow={locale === "ar" ? "من نحن" : "About Us"}
        title={locale === "ar" ? "شريك أمني سعودي يوازن بين الهيبة والانضباط التشغيلي" : "A Saudi security partner built on trust, discipline, and premium delivery"}
        description={
          locale === "ar"
            ? "نؤمن أن الأمن الفعّال لا يقتصر على التواجد، بل يعتمد على التخطيط والانضباط والمتابعة المستمرة. لذلك صممنا نموذج عمل يجمع بين الكوادر المؤهلة والإشراف الميداني والحلول التقنية."
            : "Effective security is not only about presence. It depends on planning, discipline, and continuous oversight. Our model combines qualified teams, field supervision, and technical systems."
        }
      />
      <section className="section-space">
        <div className="container-shell grid gap-6 lg:grid-cols-3">
          {[
            {
              title: locale === "ar" ? "رؤيتنا" : "Our vision",
              body:
                locale === "ar"
                  ? "أن نكون مرجعاً وطنياً موثوقاً في تقديم الخدمات الأمنية المتكاملة للجهات التي تبحث عن الجودة والهيبة والانضباط."
                  : "To become a trusted national benchmark in integrated security services for clients that value quality, authority, and discipline."
            },
            {
              title: locale === "ar" ? "رسالتنا" : "Our mission",
              body:
                locale === "ar"
                  ? "تقديم خدمات أمنية عالية الكفاءة تدعم استمرارية أعمال العملاء وتحمي سمعتهم وممتلكاتهم وزوارهم."
                  : "To deliver high-performance security services that protect client operations, reputation, assets, and visitors."
            },
            {
              title: locale === "ar" ? "قيمنا" : "Our values",
              body:
                locale === "ar"
                  ? "الموثوقية، السرية، الجاهزية، المسؤولية، والالتزام التشغيلي في جميع مراحل التنفيذ."
                  : "Reliability, discretion, readiness, accountability, and operational consistency across every stage."
            }
          ].map((item) => (
            <div key={item.title} className="glass-card rounded-[32px] p-7">
              <h2 className="font-arabic text-2xl font-bold text-navy">{item.title}</h2>
              <p className="mt-4 text-sm leading-7 text-navy/75">{item.body}</p>
            </div>
          ))}
        </div>
      </section>
      <FeatureColumns locale={locale} />
      <FinalCta locale={locale} />
    </>
  );
}
