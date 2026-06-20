"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { partnerLogos } from "@/lib/constants";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

export function PartnerLogos() {
  return (
    <section className="w-full bg-gray-50 py-12 md:py-16 border-b border-gray-200">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex overflow-x-auto snap-x snap-mandatory md:flex-wrap lg:flex-nowrap items-center md:justify-center lg:justify-between gap-8 lg:gap-12 pb-4 md:pb-0 hide-scrollbar"
        >
          {partnerLogos.map((partner, index) => {
            return (
              <motion.div
                key={partner.id}
                variants={itemVariants}
                className="flex-shrink-0 snap-center flex justify-center w-[160px] md:w-auto"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={140}
                  height={32}
                  className="w-[120px] md:w-[140px] h-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
