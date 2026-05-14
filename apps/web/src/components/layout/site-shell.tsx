"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MessageCircle, PhoneCall, ShieldCheck } from "lucide-react";
import { alternateLocale, Locale, localeMeta } from "@/lib/i18n";
import { brand, ctaLabels, navItems, text } from "@/data/content";
import { ProgressBar } from "@/components/ui/progress-bar";

type SiteShellProps = {
  locale: Locale;
  children: React.ReactNode;
};

export function SiteShell({ locale, children }: SiteShellProps) {
  const pathname = usePathname();
  const otherLocale = alternateLocale(locale);

  const switchHref = pathname.replace(`/${locale}`, `/${otherLocale}`) || `/${otherLocale}`;

  return (
    <div className="min-h-screen bg-cream">
      <ProgressBar />
      <header className="sticky top-0 z-50 border-b border-navy/10 bg-white/95 backdrop-blur-md">
        <div className="container-shell flex items-center justify-between py-3">
          <Link href={`/${locale}`} className="flex items-center gap-2.5 shrink-0">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy/5 text-3xl">
              🛡️
            </div>
            <div className="min-w-0">
              <div className="font-arabic text-sm font-bold text-navy leading-tight truncate max-w-[180px] sm:max-w-none sm:text-base">{text(locale, brand.name)}</div>
              <div className="hidden md:block text-[11px] text-royal/60 leading-tight truncate max-w-[200px] lg:max-w-none">{text(locale, brand.tagline)}</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-5 lg:flex">
            {navItems.slice(0, 5).map((item) => (
              <Link
                key={item.href}
                href={`/${locale}${item.href}` as any}
                className="text-sm font-medium text-navy/75 transition-colors hover:text-gold whitespace-nowrap"
              >
                {text(locale, item.label)}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href={switchHref}
              className="rounded-full border border-navy/10 px-3.5 py-2 text-sm font-semibold text-navy transition-colors hover:border-gold hover:text-gold"
            >
              {localeMeta[otherLocale].label}
            </Link>
            <Link
              href={`/${locale}/quote` as any}
              className="hidden rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-royal sm:inline-flex"
            >
              {text(locale, ctaLabels.quote)}
            </Link>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
        <a
          href={`https://wa.me/${brand.whatsapp}`}
          target="_blank"
          rel="noreferrer"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1FAF5A] text-white shadow-premium transition hover:scale-110"
          aria-label={text(locale, ctaLabels.whatsapp)}
        >
          <MessageCircle className="h-6 w-6" />
        </a>
      </div>

      <footer className="bg-navy py-14 text-white">
        <div className="container-shell grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-arabic text-2xl font-bold text-gold">{text(locale, brand.name)}</h3>
            <p className="mt-3 max-w-md text-sm leading-7 text-white/75">{text(locale, brand.tagline)}</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              {locale === "ar" ? "روابط سريعة" : "Quick Links"}
            </h4>
            <div className="mt-4 flex flex-col gap-2 text-sm text-white/75">
              {navItems.slice(1, 6).map((item) => (
                <Link key={item.href} href={`/${locale}${item.href}` as any} className="hover:text-white">
                  {text(locale, item.label)}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              {locale === "ar" ? "معلومات التواصل" : "Contact"}
            </h4>
            <div className="mt-4 space-y-2 text-sm text-white/75">
              <p dir="ltr" className={locale === "ar" ? "text-right" : "text-left"}>{brand.phone}</p>
              <p>{brand.email}</p>
              <p>{text(locale, brand.address)}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
