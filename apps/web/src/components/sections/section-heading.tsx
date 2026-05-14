import { Locale } from "@/lib/i18n";

interface SectionHeadingProps {
  locale: Locale;
  title: string;
  description: string;
}

export function SectionHeading({ locale, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
        {locale === "ar" ? "شركة الفهاد للحراسات الامنية" : "Al-Fahhad Company for Security Guards"}
      </p>
      <h2 className="mt-4 font-arabic text-3xl font-bold text-navy sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-8 text-navy/75">{description}</p>
    </div>
  );
}
