"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { BadgeCheck, Check } from "lucide-react";
import { brand, hero, text } from "@/data/content";
import { Locale } from "@/lib/i18n";

export function PageHero({
  locale,
  title,
  description,
  eyebrow,
  imageSrc
}: {
  locale: Locale;
  title: string;
  description: string;
  eyebrow?: string;
  imageSrc?: string;
}) {
  let bgImage = imageSrc || "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1200&auto=format&fit=crop";

  if (!imageSrc) {
    if (eyebrow?.includes("نحن") || eyebrow?.includes("About")) {
      bgImage = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop";
    } else if (eyebrow?.includes("خدمات") || eyebrow?.includes("Services")) {
      bgImage = "https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=1200&auto=format&fit=crop";
    } else if (eyebrow?.includes("قطاعات") || eyebrow?.includes("Industries")) {
      bgImage = "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop";
    } else if (eyebrow?.includes("مشاريع") || eyebrow?.includes("Projects")) {
      bgImage = "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=1200&auto=format&fit=crop";
    }
  }

  return (
    <section className="relative overflow-hidden bg-white text-navy pt-16 pb-16">
      <div className="container-shell grid gap-12 lg:grid-cols-2 items-center">
        <div className="max-w-2xl">
          {eyebrow && (
            <p className="mb-5 inline-flex rounded-full border border-gold/30 bg-cream px-4 py-2 text-sm text-gold">
              {eyebrow}
            </p>
          )}
          <h1 className="font-arabic text-4xl font-bold leading-tight sm:text-5xl">{title}</h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-navy/80 sm:text-lg">{description}</p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative h-64 lg:h-96 w-full rounded-[32px] overflow-hidden shadow-premium"
        >
          <Image src={bgImage} alt={title} fill priority className="object-cover transition-transform duration-700 hover:scale-105" />
        </motion.div>
      </div>
    </section>
  );
}

export function HomeHero({ locale }: { locale: Locale }) {
  return (
    <section className="relative overflow-hidden text-white pb-16">
      <Image
        src="https://images.unsplash.com/photo-1682685797769-481b48222adf?q=80&w=1170&auto=format&fit=crop"
        alt="Riyadh Corporate Security Skyline"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/40 z-10" />
      <div className="container-shell section-space relative grid items-center gap-16 lg:grid-cols-2 z-20">
        <div className="max-w-2xl">
          <p className="mb-5 inline-flex rounded-full border border-gold/30 bg-white/5 px-4 py-2 text-sm text-gold">
            {text(locale, hero.eyebrow)}
          </p>
          <h1 className="font-arabic text-4xl font-bold leading-tight md:text-5xl lg:text-[3.5rem] lg:leading-[1.15]">
            {text(locale, hero.title)}
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/80">{text(locale, hero.description)}</p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href={`/${locale}/quote`}
              className="rounded-full bg-gold px-7 py-4 text-center text-sm font-bold text-navy transition hover:bg-[#d7b575]"
            >
              {locale === "ar" ? "ابدأ بطلب عرض سعر" : "Start Your Quote Request"}
            </Link>
            <Link
              href={`/${locale}/services`}
              className="rounded-full border border-white/20 px-7 py-4 text-center text-sm font-semibold text-white transition hover:border-gold hover:text-gold bg-white/10 backdrop-blur-md"
            >
              {locale === "ar" ? "استكشف الخدمات" : "Explore Services"}
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {hero.stats.map((item) => (
              <div key={item.number} className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <div className="text-2xl font-bold text-gold">{item.number}</div>
                <div className="mt-2 text-sm text-white/75">{text(locale, item.label)}</div>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-card gold-ring rounded-[32px] p-7 text-navy"
        >
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-gold/20 p-3 text-gold">
              <BadgeCheck className="h-7 w-7" />
            </div>
            <div>
              <p className="font-arabic text-xl font-bold">{locale === "ar" ? "جاهزية تشغيلية عالية" : "Operational readiness"}</p>
              <p className="text-m text-navy/70">
                {locale === "ar" ? "حلول مصممة للمواقع الحساسة والمنشآت الراقية" : "Built for sensitive sites and premium facilities"}
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            {[
              locale === "ar" ? "مشرفون ميدانيون وتقارير متابعة واضحة" : "Field supervisors with structured reporting",
              locale === "ar" ? "تنسيق تشغيلي للفعاليات والوفود والزيارات" : "Operations coordination for events, delegations, and visits",
              locale === "ar" ? "تكامل بين العنصر البشري والأنظمة التقنية" : "Integrated manned guarding and technical systems"
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl bg-cream p-4">
                <Check className="mt-0.5 h-5 w-5 text-gold" />
                <span className="text-m leading-7">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-3xl bg-navy p-6 text-white shadow-inner">
            <p className="text-xs uppercase tracking-[0.2em] text-gold">{locale === "ar" ? "قنوات مباشرة" : "Direct channels"}</p>
            <p className="mt-3 text-sm text-white/80">
              {locale === "ar" ? "للطلبات العاجلة والتشغيل السريع للفعاليات والمواقع." : "For urgent deployments, events, and rapid site activation."}
            </p>
            <p dir="ltr" className={`mt-4 text-xl font-semibold ${locale === 'ar' ? 'text-right' : 'text-left'}`}>{brand.phone}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
