"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "@/lib/constants";
import ArrowButton from "@/components/ui/ArrowButton";

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative w-full overflow-hidden py-20 lg:py-28"
      style={{
        background:
          "radial-gradient(ellipse at top left, #0068ad25 0%, transparent 60%), #010d18",
      }}
    >
      {/* Arrow — Left */}
      <ArrowButton 
        direction="left" 
        onClick={scrollPrev} 
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20" 
      />

      {/* Arrow — Right */}
      <ArrowButton 
        direction="right" 
        onClick={scrollNext} 
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20" 
      />

      {/* Content — centered, max-width to avoid overlapping arrows */}
      <div className="text-center px-16 md:px-20 lg:px-24">
        {/* Label */}
        <p className="font-mono uppercase text-xs tracking-widest text-white/50 mb-6">
          ONI JUŻ SPRZEDAJĄ, CZAS NA TWÓJ RUCH!
        </p>

        {/* Heading */}
        <h2 className="font-heading text-white font-bold text-2xl md:text-3xl lg:text-4xl mb-10 leading-snug max-w-2xl mx-auto">
          Nie wszystko, co przeczytasz w internecie
          <br className="hidden md:block" /> jest prawdą... ale to jest!
        </h2>

        {/* Embla carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="flex-[0_0_100%] min-w-0 flex flex-col items-center"
              >
                {/* Stars */}
                <div className="flex items-center justify-center gap-1 mb-6">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                    >
                      <Star
                        className="w-6 h-6"
                        fill="#017bd0"
                        stroke="none"
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-white/80 text-lg italic max-w-xl mx-auto mb-8 leading-relaxed">
                  {t.quote}
                </p>

                {/* Avatar pill */}
                <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  {/* Avatar circle with initial */}
                  <div className="w-10 h-10 rounded-full bg-[#0068ad]/60 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {t.author[0]}
                  </div>
                  <span className="text-white font-medium pr-2">
                    ~ {t.author}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
