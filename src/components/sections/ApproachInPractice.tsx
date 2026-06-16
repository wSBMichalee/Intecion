"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Info } from "lucide-react";

const processCards = [
  {
    id: 1,
    bg: "bg-[#0068ad]",
    titleColor: "text-white",
    descColor: "text-white/80",
    iconBg: "bg-white/20 hover:bg-white/30",
    iconColor: "text-white",
    title: "Tworzymy skuteczną, długofalową strategię",
    desc: "Wszystkie rozwiązania od kampanii reklamowych, przez strony i dedykowane oprogramowania dobieramy strategicznie, aby maksymalizować efektywność sprzedaży",
  },
  {
    id: 2,
    bg: "bg-[#0a0a0a]",
    titleColor: "text-white",
    descColor: "text-white/80",
    iconBg: "bg-white/20 hover:bg-white/30",
    iconColor: "text-white",
    title: "Projektujemy rozwiązania pod Twoje cele biznesowe",
    desc: "Wybieramy tylko te rozwiązania – strony, aplikacje, oprogramowania, które faktycznie przyniosą efekty i wraz z działaniami reklamowymi stworzą spójny system sprzedaży",
  },
  {
    id: 3,
    bg: "bg-[#f1f5f9]",
    titleColor: "text-[#111827]",
    descColor: "text-gray-500",
    iconBg: "bg-gray-300/60 hover:bg-gray-300",
    iconColor: "text-gray-500",
    title: "Wdrażamy działania reklamowe",
    desc: "Wszystkie działania (SEO/GEO, kampanie ads, media społecznościowe) są dobierane pod kątem Twoich celów biznesowych, aby generować ruch i konwersje",
  },
  {
    id: 4,
    bg: "bg-[#0068ad]",
    titleColor: "text-white",
    descColor: "text-white/80",
    iconBg: "bg-white/20 hover:bg-white/30",
    iconColor: "text-white",
    title: "Optymalizujemy i skalujemy działania",
    desc: "Na tym etapie wiemy, które kanały działają najlepiej, jakie komunikaty przyciągają klientów i gdzie warto zwiększać budżet. Optymalizujemy działania i eliminujemy to, co nie przynosi efektów.",
  },
];

export function ApproachInPractice() {
  return (
    <section className="bg-[#f8f9fb] py-16 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* ── HEADING ──────────────────────────────────────────────────── */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-heading text-[2rem] md:text-[2.5rem] lg:text-[3rem] text-[#111827] font-bold mb-10 md:mb-12 leading-tight"
        >
          Nasze podejście w praktyce
        </motion.h2>

        {/* ── TOP CARD ─────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="relative bg-white rounded-2xl overflow-hidden shadow-sm mb-6"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[58%_42%]">
            {/* Left — image, fixed height container */}
            <div className="relative h-[280px] lg:h-[360px] w-full">
              <Image
                src="/images/approach-bg.png"
                alt="Analiza branży i działań"
                fill
                className="object-cover object-center"
                priority
              />
            </div>

            {/* Right — text */}
            <div className="p-8 lg:p-12 flex flex-col justify-center bg-white">
              <h3 className="font-heading text-xl lg:text-2xl font-bold text-[#111827] leading-snug">
                Analizujemy Twoją branżę i obecne działania
              </h3>
              <p className="text-gray-500 text-base mt-4 leading-relaxed">
                Sprawdzamy, skąd dziś przychodzą Twoi klienci, które działania
                marketingowe działają, a które generują koszty, jak wygląda
                proces sprzedaży i gdzie tracone są leady
              </p>
            </div>
          </div>

          {/* Info button — absolute bottom-right of the whole card */}
          <button
            aria-label="Więcej informacji"
            className="absolute bottom-5 right-5 w-11 h-11 rounded-full bg-[#0068ad] flex items-center justify-center hover:bg-[#0057a0] hover:scale-110 transition-all duration-200 z-10 shadow-md"
          >
            <Info className="w-4 h-4 text-white" strokeWidth={2.5} />
          </button>
        </motion.div>

        {/* ── BOTTOM 4 CARDS ───────────────────────────────────────────── */}
        <div className="relative rounded-2xl overflow-hidden">

          {/* Hex SVG pattern — rendered as inline SVG background */}
          <svg
            className="absolute inset-0 w-full h-full z-0 opacity-[0.07]"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="hex-bg"
                width="56"
                height="64"
                patternUnits="userSpaceOnUse"
                patternTransform="scale(1.2)"
              >
                {/* Flat-top hexagon */}
                <polygon
                  points="28,4 52,18 52,46 28,60 4,46 4,18"
                  fill="none"
                  stroke="#64748b"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hex-bg)" />
          </svg>

          {/* Cards grid */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {processCards.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col justify-between min-h-[300px] p-6 lg:p-8 ${card.bg}`}
              >
                {/* Text */}
                <div>
                  <h4 className={`font-heading font-bold text-[1.05rem] leading-snug ${card.titleColor}`}>
                    {card.title}
                  </h4>
                  <p className={`text-sm mt-4 leading-relaxed ${card.descColor}`}>
                    {card.desc}
                  </p>
                </div>

                {/* Info icon bottom-right */}
                <div className="flex justify-end mt-6">
                  <button
                    aria-label="Więcej informacji"
                    className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 ${card.iconBg}`}
                  >
                    <Info className={`w-4 h-4 ${card.iconColor}`} strokeWidth={2} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
