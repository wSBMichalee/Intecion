"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function BlueCta() {
  const scrollToServices = () => {
    const servicesSection = document.getElementById("nasze-uslugi");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full bg-[#064d7b] py-16 md:py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.05] pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <pattern
            id="bluecta-pattern"
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1.5" fill="currentColor" className="text-white" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#bluecta-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[900px] mx-auto px-6 flex flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.5 }}
          className="font-heading text-xl md:text-2xl lg:text-3xl text-white font-medium leading-relaxed mb-10"
        >
          Teraz, kiedy wiesz jak pracujemy i jak dbamy o Twój biznes, zobacz jakie konkretnie działania możemy dla Ciebie wdrożyć
        </motion.p>

        <motion.button
          onClick={scrollToServices}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-white/50 group"
          aria-label="Przewiń do usług"
        >
          <ChevronDown className="w-8 h-8 text-[#064d7b] group-hover:translate-y-1 transition-transform" strokeWidth={3} />
        </motion.button>
      </div>
    </section>
  );
}
