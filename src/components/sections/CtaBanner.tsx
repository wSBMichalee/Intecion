"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function CtaBanner() {
  return (
    <section className="relative w-[calc(100%-20px)] mx-auto rounded-[20px] bg-navy-950 py-20 lg:py-28 overflow-hidden my-10">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero-bg-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#001625]/75"></div>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 flex flex-col items-center justify-center text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.5 }}
          className="font-heading text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-10 leading-tight mx-auto md:whitespace-nowrap"
        >
          Sprawdź, jak możemy to zrobić dla Ciebie!
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 w-full flex justify-center"
        >
          <Button size="lg" className="mx-auto">
            DARMOWA KONSULTACJA
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
