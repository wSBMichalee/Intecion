"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import ArrowButton from "@/components/ui/ArrowButton";
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

const itemVariants: Variants = {
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
                  className="flex-[0_0_481px] min-w-0"
                >
                  <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className={`h-[456px] flex flex-col justify-between p-8 lg:p-10 transition-transform duration-300 hover:scale-[1.02] hover:z-10 cursor-default ${challenge.bgColor} ${challenge.textColor}`}
                  >
                    <div className="mb-6 opacity-80">
                      <IconComponent className="w-16 h-16" />
                    </div>
                    <p className="font-body text-xl font-medium leading-tight pr-4">
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
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 top-1/2 -translate-y-1/2 ml-4 md:ml-8 z-20"
            >
              <ArrowButton direction="left" onClick={scrollPrev} variant="white" className="shadow-lg" />
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {canScrollNext && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 top-1/2 -translate-y-1/2 mr-4 md:mr-8 z-20"
            >
              <ArrowButton direction="right" onClick={scrollNext} variant="white" className="shadow-lg" />
            </motion.div>
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
        <div className="max-w-2xl mx-auto flex flex-col md:flex-row items-center gap-6">
          <div className="w-16 h-[2px] bg-brand-600 hidden md:block flex-shrink-0" />
          <div>
            <p className="text-gray-500 italic font-body text-base md:text-lg">
              Tworzymy system sprzedaży, który łączy strony internetowe, marketing internetowy i rozwiązania IT, aby Twoja firma zdobywała klientów szybciej i skuteczniej
            </p>
            <p className="text-ink-900 font-bold text-left mt-4 text-base tracking-wide uppercase">
              Scott Brinker
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
