"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { projects, text } from "@/data/content";
import { Locale } from "@/lib/i18n";
import { SectionHeading } from "./section-heading";

export function ProjectsSection({ locale }: { locale: Locale }) {
  const images = [
    "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=800&auto=format&fit=crop"
  ];

  return (
    <section className="section-space">
      <div className="container-shell">
        <SectionHeading
          locale={locale}
          title={locale === "ar" ? "نماذج من المشاريع" : "Selected case studies"}
          description={
            locale === "ar"
              ? "صياغة قصص مشاريع تركز على النتائج تعزز الثقة لدى العميل وتوضح طريقة العمل."
              : "Outcome-oriented case studies help demonstrate credibility and operational discipline."
          }
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title.ar}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="glass-card group overflow-hidden rounded-[32px]"
            >
              <div className="relative h-48 w-full overflow-hidden bg-navy/10">
                <Image src={images[idx]} alt={text(locale, project.title)} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-7">
                <div className="inline-flex rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold text-gold">
                  {locale === "ar" ? "دراسة حالة" : "Case Study"}
                </div>
                <h3 className="mt-5 font-arabic text-2xl font-bold text-navy">{text(locale, project.title)}</h3>
                <p className="mt-4 text-sm leading-7 text-navy/75">{text(locale, project.result)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
