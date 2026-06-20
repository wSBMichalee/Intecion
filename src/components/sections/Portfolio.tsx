"use client";

import { motion } from "framer-motion";
import ArrowButton from "@/components/ui/ArrowButton";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useState, useEffect, useCallback } from "react";
import { portfolioProjects } from "@/lib/constants";

const GlobeIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </svg>
);

const ProjectImage = ({ src, alt }: { src: string; alt: string }) => {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div className="absolute inset-0 bg-white/30 rounded-2xl flex items-center justify-center overflow-hidden border border-white/50 backdrop-blur-sm m-4 lg:m-0">
        <span className="text-ink-900/60 font-bold font-heading text-xl text-center px-4">
          Brak zdjęcia<br />{alt}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={`${alt} mockup`}
      fill
      className="object-contain lg:object-right p-4 lg:p-0 drop-shadow-2xl"
      onError={() => setError(true)}
    />
  );
};

export function Portfolio() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  // If no projects, return null to avoid errors
  if (!portfolioProjects || portfolioProjects.length === 0) {
    return null;
  }

  const activeProject = portfolioProjects[selectedIndex] || portfolioProjects[0];

  return (
    <section className="bg-white py-16 lg:py-24 overflow-hidden relative transition-colors duration-500">
      <div className="max-w-[1200px] mx-auto px-6 mb-12 relative z-10">
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
            Zobacz, jakie rezultaty osiągają wyjątkowe firmy, z którymi współpracujemy.
          </p>
        </motion.div>
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-3xl shadow-[0_8px_40px_rgb(0,0,0,0.06)] border border-gray-100 bg-white" ref={emblaRef}>
            <div className="flex">
              {portfolioProjects.map((project) => (
                <div key={project.id} className="flex-[0_0_100%] min-w-0 relative">
                  <div className={`w-full ${project.bgColor} relative transition-colors duration-500`}>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] p-8 md:p-12 lg:p-16 gap-12 relative z-10 min-h-[500px]">
                      {/* Left Content */}
                      <div className="flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-8 min-h-[60px]">
                          {project.logoType === "image" && project.logoSrc ? (
                            <Image src={project.logoSrc} alt={project.id} width={200} height={60} className="object-contain h-12 w-auto" />
                          ) : project.logoType === "text-icon" ? (
                            <div className="flex items-center gap-2">
                              <GlobeIcon className="w-8 h-8" style={{ color: project.accentColor }} />
                              <span className="font-heading text-2xl lg:text-3xl font-black uppercase tracking-wide" style={{ color: project.accentColor }}>{project.logoText}</span>
                            </div>
                          ) : (
                            <span className="font-heading text-3xl lg:text-4xl font-black uppercase tracking-wider" style={{ color: project.accentColor }}>{project.logoText}</span>
                          )}
                        </div>

                        <h3 className="font-heading text-3xl md:text-4xl font-bold mb-6" style={{ color: project.accentColor }}>
                          {project.headline}
                        </h3>

                        <p className="font-body text-gray-700 text-lg mb-8 leading-relaxed max-w-md">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-8 lg:mb-0">
                          {project.tags.map((tag, i) => (
                            <span 
                              key={i} 
                              className="px-4 py-1.5 text-[16px] font-mono font-semibold tracking-wider rounded-sm text-white shadow-sm"
                              style={{ 
                                backgroundColor: project.accentColor, 
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Right Image/Mockup */}
                      <div className="relative w-full h-[300px] md:h-[400px] lg:h-auto min-h-[300px] flex items-center justify-center lg:ml-8">
                        <ProjectImage src={project.imageSrc} alt={project.id} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Bottom Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {portfolioProjects.map((_, index) => {
              const isActive = index === selectedIndex;
              const project = portfolioProjects[index];
              return (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className="h-2.5 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: isActive ? project.accentColor : '#e5e7eb',
                    width: isActive ? '24px' : '10px'
                  }}
                  aria-label={`Przejdź do projektu ${index + 1}`}
                />
              );
            })}
          </div>

          {/* Large Square Arrow Button - positioning slightly outside on desktop */}
          <div className="absolute right-0 -bottom-4 translate-y-full lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 lg:-right-6 z-20">
            <ArrowButton 
              direction="right" 
              onClick={scrollNext} 
              className="shadow-xl" 
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
