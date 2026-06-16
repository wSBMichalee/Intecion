"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export function Portfolio() {
  return (
    <section className="bg-white py-16 lg:py-24 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-ink-900 font-bold mb-6">
            Projekty, z których jesteśmy dumni
          </h2>
          <p className="font-body text-gray-500 text-lg">
            Zobacz, jak nasze strategie i rozwiązania przekładają się na realne wyniki i sukcesy naszych klientów.
          </p>
        </motion.div>
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.6 }}
          className="relative bg-white rounded-3xl overflow-visible shadow-[0_8px_40px_rgb(0,0,0,0.06)] border border-gray-100"
        >
          {/* Radial glow background for the card */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-50/50 to-transparent pointer-events-none rounded-3xl"></div>

          <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] p-8 md:p-12 lg:p-16 gap-12 relative z-10">
            {/* Left Content */}
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#121212] rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  {/* Placeholder for EcoCar logo */}
                  E
                </div>
                <h3 className="font-heading text-2xl font-bold text-[#0fa958]">
                  EcoCar Autodetailing
                </h3>
              </div>

              <p className="font-body text-gray-600 text-lg mb-8 leading-relaxed">
                Stworzyliśmy nowoczesną stronę internetową z intuicyjnym systemem rezerwacji usług oraz zoptymalizowaliśmy widoczność lokalną, co przełożyło się na stały dopływ nowych klientów do studia detailingowego.
              </p>

              <div className="flex flex-wrap gap-2 mb-16">
                <span className="px-4 py-1.5 bg-[#0fa958]/10 text-[#0fa958] text-xs font-bold uppercase tracking-wider rounded-full">
                  STRONA INTERNETOWA & UX
                </span>
                <span className="px-4 py-1.5 bg-[#0fa958]/10 text-[#0fa958] text-xs font-bold uppercase tracking-wider rounded-full">
                  BLOG
                </span>
                <span className="px-4 py-1.5 bg-[#0fa958]/10 text-[#0fa958] text-xs font-bold uppercase tracking-wider rounded-full">
                  SEO LOKALNE
                </span>
              </div>

              {/* Carousel Indicators */}
              <div className="flex gap-2 mt-auto">
                <div className="w-2.5 h-2.5 rounded-full bg-gray-200"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-gray-200"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#0fa958]"></div>
              </div>
            </div>

            {/* Right Image/Mockup */}
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-auto min-h-[300px]">
              {/* Requested Placeholder */}
              <div className="absolute inset-0 bg-gray-200 rounded-2xl flex items-center justify-center overflow-hidden">
                <span className="text-gray-500 font-bold font-heading text-xl">Portfolio EcoCar</span>
              </div>
            </div>
          </div>
          
          {/* Large Square Arrow Button - positioning slightly outside on desktop */}
          <button
            className="absolute right-6 -bottom-6 lg:-right-8 lg:top-1/2 lg:-translate-y-1/2 w-16 h-16 bg-[#0fa958] flex items-center justify-center text-white shadow-xl hover:bg-[#0c8a47] transition-colors z-20 group"
            aria-label="Następny projekt"
          >
            <ChevronRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
