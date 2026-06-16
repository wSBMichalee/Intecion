"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { partnerChallenges } from "@/lib/constants";
import { SparkleIcon, HexagonIcon, DiamondIcon, WaveIcon, NetworkIcon, OrbitIcon } from "@/components/ui/icons/ChallengeIcons";

const ICONS = {
  sparkle: SparkleIcon,
  hexagon: HexagonIcon,
  diamond: DiamondIcon,
  wave: WaveIcon,
  network: NetworkIcon,
  orbit: OrbitIcon,
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function PartnerChallenges() {
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="bg-white py-16 lg:py-24 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 mb-12">
        <h2 className="font-heading text-3xl md:text-h2 text-ink-900 font-bold">
          Współpracujemy z firmami, które:
        </h2>
      </div>

      <div className="relative w-full">
        {/* Embla Viewport */}
        <div className="overflow-hidden w-full" ref={emblaRef}>
          <div className="flex">
            {partnerChallenges.map((challenge) => {
              const IconComponent = ICONS[challenge.icon as keyof typeof ICONS];
              return (
                <div
                  key={challenge.id}
                  className="flex-[0_0_85%] md:flex-[0_0_50%] xl:flex-[0_0_25%] min-w-0"
                >
                  <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className={`h-full flex flex-col justify-between p-6 lg:p-10 xl:px-8 min-h-[300px] lg:min-h-[340px] transition-transform duration-300 hover:z-10 cursor-default ${challenge.bgColor} ${challenge.textColor}`}
                  >
                    <div className="mb-6">
                      <IconComponent className="w-[70px] h-[80px]" />
                    </div>
                    <p className="font-body text-base font-medium leading-snug">
                      {challenge.text}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel Arrows */}
        <AnimatePresence>
          {canScrollPrev && (
            <motion.button 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={scrollPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-white flex items-center justify-center text-brand-600 z-20 shadow-[10px_0_20px_rgba(0,0,0,0.1)] hover:text-brand-500 hover:w-20 transition-all duration-300 group"
              aria-label="Poprzednie wyzwania"
            >
              <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 group-hover:-translate-x-1 transition-transform" />
            </motion.button>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {canScrollNext && (
            <motion.button 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={scrollNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-white flex items-center justify-center text-brand-600 z-20 shadow-[-10px_0_20px_rgba(0,0,0,0.1)] hover:text-brand-500 hover:w-20 transition-all duration-300 group"
              aria-label="Następne wyzwania"
            >
              <ChevronRight className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="max-w-[1200px] mx-auto px-6 mt-16 md:mt-20"
      >
        <div className="max-w-2xl mx-auto">
          <p className="text-gray-600 italic text-center font-body text-base md:text-lg">
            Tworzymy system sprzedaży, który łączy strony internetowe, marketing internetowy i rozwiązania IT, aby Twoja firma zdobywała klientów szybciej i skuteczniej
          </p>
          <p className="text-ink-900 font-medium text-center md:text-right mt-4 text-lg">
            Scott Brinker
          </p>
        </div>
      </motion.div>
    </section>
  );
}
