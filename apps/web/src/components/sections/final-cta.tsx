import Link from "next/link";
import { brand } from "@/data/content";
import { Locale } from "@/lib/i18n";

export function FinalCta({ locale }: { locale: Locale }) {
  return (
    <section className="section-space">
      <div className="container-shell">
        <div className="rounded-[36px] bg-navy p-8 text-white shadow-premium sm:p-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.2em] text-gold">
                {locale === "ar" ? "جاهزون للبدء" : "Ready to activate"}
              </p>
              <h2 className="mt-4 font-arabic text-3xl font-bold sm:text-4xl">
                {locale === "ar"
                  ? "لنصمم منظومة أمنية ترفع مستوى الثقة والانضباط في موقعك"
                  : "Let’s build a security model that strengthens trust and operational discipline"}
              </h2>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href={`/${locale}/quote`} className="rounded-full bg-gold px-7 py-4 text-center text-sm font-bold text-navy transition hover:bg-[#d7b575]">
                {locale === "ar" ? "اطلب عرض سعر" : "Request Proposal"}
              </Link>
              <a href={`tel:${brand.phone}`} className="rounded-full border border-white/15 px-7 py-4 text-center text-sm font-semibold text-white transition hover:bg-white hover:text-navy">
                {locale === "ar" ? "اتصل بفريقنا" : "Call our team"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
