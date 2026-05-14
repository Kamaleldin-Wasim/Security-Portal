import { ChevronRight, Shield, Users } from "lucide-react";
import { Locale } from "@/lib/i18n";

export function FeatureColumns({ locale }: { locale: Locale }) {
  const items = [
    {
      icon: Users,
      title: locale === "ar" ? "كوادر مؤهلة" : "Qualified teams",
      description:
        locale === "ar"
          ? "توظيف وتوزيع الكوادر وفق طبيعة الموقع ومستوى الحساسية والهوية المؤسسية."
          : "Teams aligned to site sensitivity, operating profile, and visitor experience."
    },
    {
      icon: Shield,
      title: locale === "ar" ? "تشغيل منضبط" : "Disciplined operations",
      description:
        locale === "ar"
          ? "خطة تشغيل واضحة، إشراف ميداني، وتقارير متابعة تدعم القرار الإداري."
          : "Clear operating plans, field supervision, and reporting that supports management decisions."
    },
    {
      icon: ChevronRight,
      title: locale === "ar" ? "استجابة سريعة" : "Rapid response",
      description:
        locale === "ar"
          ? "قنوات تواصل مباشرة وخطط تصعيد واضحة للطلبات والفعاليات الطارئة."
          : "Direct communication channels and clear escalation for urgent activations."
    }
  ];

  return (
    <section className="section-space">
      <div className="container-shell grid gap-6 lg:grid-cols-3">
        {items.map((item) => (
          <div key={item.title} className="glass-card rounded-[32px] p-7">
            <item.icon className="h-8 w-8 text-gold" />
            <h3 className="mt-6 font-arabic text-2xl font-bold text-navy">{item.title}</h3>
            <p className="mt-4 text-sm leading-7 text-navy/75">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
