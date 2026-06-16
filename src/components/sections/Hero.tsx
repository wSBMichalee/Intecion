"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

const LIST_ITEMS = [
  "STRONY INTERNETOWE & APLIKACJE",
  "SEO/GEO & KAMPANIE ADS",
  "OPROGRAMOWANIE I INFRASTRUKTURA IT",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 60]);

  return (
    <section className="relative min-h-[100vh] flex flex-col justify-center overflow-hidden">
      {/* Background Parallax Wrapper */}
      <motion.div 
        style={{ y }} 
        className="absolute inset-0 z-0 w-full h-[120%] -top-[10%]"
      >
        <Image
          src="/images/hero-bg-poster.jpg"
          alt="Hero Background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/hero-bg-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#001625]/75 z-[1]" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-container mx-auto px-6 w-full pt-[120px] pb-12 flex-1 flex flex-col justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-heading font-bold text-white max-w-4xl leading-[1.15] tracking-tight text-[clamp(2.5rem,5vw,4rem)]"
        >
          Marketing i technologia,<br className="hidden md:block" />
          <span className="md:hidden"> </span>
          które zwiększają sprzedaż
        </motion.h1>

        <motion.ul
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-20 lg:mt-28 flex flex-col gap-3 max-w-md"
        >
          {LIST_ITEMS.map((item, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              className="font-mono uppercase text-xs tracking-wide text-white/70 border-b border-white/10 pb-3"
            >
              ▪ {item}
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
          className="mt-20 lg:mt-28 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6"
        >
          <p className="text-white/80 max-w-md text-base font-body leading-relaxed">
            Tworzymy system sprzedaży, który łączy strony internetowe, marketing internetowy i rozwiązania IT, aby Twoja firma zdobywała klientów szybciej i skuteczniej
          </p>
          <div className="w-full md:w-auto flex justify-center">
            <Button
              variant="primary"
              size="lg"
              href="#kontakt"
              icon
              className="w-full md:w-auto"
            >
              DARMOWA KONSULTACJA
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
