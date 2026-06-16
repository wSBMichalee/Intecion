"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { challenges } from "@/lib/constants";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import { cn } from "@/lib/utils";

export function Challenges() {
  return (
    <section className="relative bg-white py-16 lg:py-24 overflow-hidden text-ink-900">
      {/* Interactive Grid Pattern Background */}
      <InteractiveGridPattern
        className={cn(
          "absolute inset-0 w-full h-full z-0 text-slate-400",
          "[mask-image:radial-gradient(ellipse_at_center,white_30%,transparent_80%)]"
        )}
        width={40}
        height={40}
        maxOpacity={0.6}
        duration={3}
        repeatDelay={0.5}
        squaresClassName="fill-[#e8f0fe]"
      />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <h2 className="font-heading text-3xl md:text-5xl lg:text-h2 text-ink-900 font-bold max-w-2xl leading-tight mb-12 md:mb-16">
          Z jakimi wyzwaniami najczęściej zgłaszają się do nas firmy
        </h2>

        <div className="flex flex-col">
          {challenges.map((challenge, index) => {
            return (
              <motion.div
                key={challenge.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex justify-between items-center py-6 md:py-8 border-b border-gray-200 gap-8 hover:bg-gray-50/50 transition-colors"
              >
                <p className="font-body text-base md:text-xl font-medium text-ink-900 max-w-full md:max-w-[80%] leading-relaxed">
                  {challenge.text}
                </p>

                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="flex-shrink-0 flex items-center justify-center font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-brand-500 px-4 py-2"
                >
                  {challenge.number}
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Callout Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 md:mt-16 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 bg-gray-50/80 p-6 md:p-8 rounded-2xl border border-gray-100"
        >
          <ChevronRight className="w-8 h-8 md:w-10 md:h-10 text-brand-400 flex-shrink-0" strokeWidth={3} />
          <div>
            <p className="font-body text-brand-600 font-bold text-lg md:text-xl">
              Jeśli rozpoznajesz to w swojej firmie - nie jesteś sam.
            </p>
            <p className="font-body text-gray-600 text-sm md:text-base mt-2 md:mt-1">
              Wiele firm ma poczucie, że inwestycje w marketing i stronę nie przekładają się na sprzedaż.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
