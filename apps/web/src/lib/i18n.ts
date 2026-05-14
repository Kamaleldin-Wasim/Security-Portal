export const locales = ["ar", "en"] as const;

export type Locale = (typeof locales)[number];

export const localeMeta: Record<Locale, { dir: "rtl" | "ltr"; label: string }> = {
  ar: { dir: "rtl", label: "العربية" },
  en: { dir: "ltr", label: "English" }
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function alternateLocale(locale: Locale): Locale {
  return locale === "ar" ? "en" : "ar";
}
