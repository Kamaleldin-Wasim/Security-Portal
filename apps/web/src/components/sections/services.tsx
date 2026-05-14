"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Shield } from "lucide-react";
import { services, text } from "@/data/content";
import { Locale } from "@/lib/i18n";
import { SectionHeading } from "./section-heading";

export function ServicesGrid({ locale }: { locale: Locale }) {
  const serviceImages: Record<string, string> = {
    guards: "https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=800&auto=format&fit=crop",
    vip: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
    events: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=800&auto=format&fit=crop",
    cctv: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=800&auto=format&fit=crop",
    access: "https://images.unsplash.com/photo-1558021211-6d1403321394?q=80&w=800&auto=format&fit=crop",
    patrol: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    consulting: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
  };

  return (
    <section className="section-space">
      <div className="container-shell">
        <SectionHeading
          locale={locale}
          title={locale === "ar" ? "خدمات أمنية متكاملة" : "Integrated security services"}
          description={
            locale === "ar"
              ? "من فرق الحراسات إلى الأنظمة التقنية، صممنا خدماتنا لتلائم احتياجات الشركات والجهات الحساسة والفعاليات الكبرى."
              : "From manned guarding to technical systems, our service model is designed for enterprise, government, and event operations."
          }
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, idx) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="glass-card group overflow-hidden rounded-[32px]"
            >
              <div className="relative h-48 w-full overflow-hidden bg-navy/10">
                <Image src={serviceImages[service.slug] || serviceImages.guards} alt={text(locale, service.title)} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-7">
                <div className="mb-5 inline-flex rounded-2xl bg-gold/15 p-3 text-gold">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="font-arabic text-2xl font-bold text-navy">{text(locale, service.title)}</h3>
                <p className="mt-4 text-sm leading-7 text-navy/75">{text(locale, service.summary)}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.bullets[locale].map((bullet) => (
                    <span key={bullet} className="rounded-full bg-cream px-3 py-2 text-xs font-medium text-royal">
                      {bullet}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/${locale}/services/${service.slug}` as any}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-navy"
                >
                  {locale === "ar" ? "تفاصيل الخدمة" : "Service details"}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
