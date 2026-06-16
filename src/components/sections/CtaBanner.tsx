"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function CtaBanner() {
  return (
    <section className="relative w-full bg-navy-950 py-20 lg:py-28 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-600/20 via-navy-950 to-navy-950"></div>
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.05] pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <pattern
            id="cta-pattern"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1.5" fill="#ffffff" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#cta-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.5 }}
          className="font-heading text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-10 leading-tight max-w-4xl mx-auto"
        >
          Sprawdź, jak możemy to zrobić dla Ciebie!
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button variant="primary" size="lg">
            DARMOWA KONSULTACJA
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
