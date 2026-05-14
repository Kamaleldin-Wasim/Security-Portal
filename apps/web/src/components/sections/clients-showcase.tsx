"use client";

import Image from "next/image";
import { Locale } from "@/lib/i18n";
import { SectionHeading } from "./section-heading";

export function ClientsShowcase({ locale }: { locale: Locale }) {
  const clients = [
    { name: "ALFA HOLDING", logo: "/ALFA HOLDING.png" },
    { name: "RIYADH EXPO", logo: "/RIYADH EXPO.png" },
    { name: "SAUDI URBAN", logo: "/SAUDI URBAN.jpg" },
    { name: "NEXUS TOWERS", logo: "/NEXUS TOWERS.png" },
    { name: "ALMAJD FACILITIES", logo: "/ALMAJD FACILITIES.jpg" },
    { name: "GULF VISION", logo: "/GULF VISION.png" },
  ];

  // Double the clients array for seamless infinite loop
  const duplicatedClients = [...clients, ...clients, ...clients, ...clients];

  return (
    <section className="section-space bg-white overflow-hidden">
      <div className="container-shell">
        <SectionHeading
          locale={locale}
          title={locale === "ar" ? "شركاء وثقة مؤسسية" : "Clients and institutional trust"}
          description={
            locale === "ar"
              ? "نعتز بشراكاتنا الاستراتيجية التي تعكس التزامنا بأعلى معايير الانضباط والجودة."
              : "We take pride in our strategic partnerships, reflecting our commitment to the highest standards of discipline and quality."
          }
        />
      </div>

      <div className="mt-16 relative flex overflow-x-hidden group" dir="ltr">
        <div className="animate-marquee whitespace-nowrap flex py-12 hover:[animation-play-state:paused]">
          {duplicatedClients.map((client, idx) => (
            <div 
              key={`${client.name}-${idx}`} 
              className="mx-12 flex flex-col items-center justify-center grayscale opacity-50 transition-all duration-500 hover:grayscale-0 hover:opacity-100 hover:scale-105"
            >
              <div className="relative h-32 w-64 transition-transform">
                <div className="flex items-center justify-center h-full w-full border border-navy/5 rounded-2xl bg-cream/30 p-6 shadow-sm hover:shadow-premium hover:border-gold/30 overflow-hidden">
                   <Image 
                    src={client.logo} 
                    alt={client.name}
                    fill
                    className="object-contain p-4"
                   />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
