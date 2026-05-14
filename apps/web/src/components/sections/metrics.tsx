import { metrics, text } from "@/data/content";
import { Locale } from "@/lib/i18n";

export function MetricsStrip({ locale }: { locale: Locale }) {
  return (
    <section className="-mt-8 relative z-10">
      <div className="container-shell">
        <div className="grid gap-4 rounded-[32px] bg-white p-6 shadow-premium sm:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.value} className="rounded-3xl border border-navy/5 bg-cream p-5">
              <div className="text-3xl font-bold text-gold">{metric.value}</div>
              <div className="mt-2 text-sm text-navy/75">{text(locale, metric.title)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
