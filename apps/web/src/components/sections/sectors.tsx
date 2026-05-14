"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Building2, FileBadge2 } from "lucide-react";
import { certifications, sectors, text } from "@/data/content";
import { Locale } from "@/lib/i18n";
import { SectionHeading } from "./section-heading";

export function SectorsSection({ locale }: { locale: Locale }) {
  const sectorImages = [
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
  ];

  return (
    <section className="section-space bg-white">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            locale={locale}
            title={locale === "ar" ? "قطاعات نخدمها بثقة" : "Industries we protect with confidence"}
            description={
              locale === "ar"
                ? "نساعد الجهات التي تحتاج إلى انضباط تشغيلي وحضور أمني موثوق ينسجم مع مكانتها وحساسية أعمالها."
                : "We support organizations that need reliable, disciplined security aligned with their reputation and operating sensitivity."
            }
          />
          <div className="mt-8 space-y-4">
            {certifications.map((item, idx) => (
              <motion.div
                key={item.ar}
                initial={{ opacity: 0, x: locale === 'ar' ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-3 rounded-3xl bg-cream p-5"
              >
                <FileBadge2 className="mt-1 h-5 w-5 text-gold" />
                <p className="text-sm leading-7 text-navy/80">{text(locale, item)}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {sectors.map((sector, idx) => (
            <motion.div
              key={sector.ar}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-[28px] border border-navy/8 bg-navy p-6 text-white shadow-premium"
            >
              <Image src={sectorImages[idx] || sectorImages[0]} alt={text(locale, sector)} fill className="object-cover opacity-30 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-50 mix-blend-luminosity" />
              <div className="relative z-10">
                <Building2 className="h-8 w-8 text-gold" />
                <h3 className="mt-6 font-arabic text-xl font-bold">{text(locale, sector)}</h3>
                <p className="mt-3 text-sm leading-7 text-white/75">
                  {locale === "ar"
                    ? "حلول أمنية قابلة للتخصيص وفق حجم العمليات ومستوى الحساسية."
                    : "Tailored protection based on operational scale and site sensitivity."}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
