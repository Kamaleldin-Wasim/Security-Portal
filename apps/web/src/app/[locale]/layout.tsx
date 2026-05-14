import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { QueryProvider } from "@/components/providers/query-provider";
import { DirectionProvider } from "@/components/providers/direction-provider";
import { SiteShell } from "@/components/layout/site-shell";
import { brand, text } from "@/data/content";
import { isLocale, localeMeta, Locale, locales } from "@/lib/i18n";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return {
      title: "ShieldGuard Security",
      description: "Premium security services website for Saudi Arabia."
    };
  }

  return {
    metadataBase: new URL("https://www.shieldguard.sa"),
    title: `${text(locale, brand.name)} | ${locale === "ar" ? "حلول أمنية متكاملة" : "Integrated Security Solutions"}`,
    description: text(locale, brand.tagline),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        ar: "/ar",
        en: "/en"
      }
    }
  };
}

export default async function LocaleLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <DirectionProvider locale={locale}>
      <QueryProvider>
        <SiteShell locale={locale as Locale}>{children}</SiteShell>
      </QueryProvider>
    </DirectionProvider>
  );
}
