"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Transparentność i kontrola",
    desc: "Masz dostęp do danych i widzisz wszystko na bieżąco.",
  },
  {
    id: "02",
    title: "Partnerstwo i wspólny cel",
    desc: "Sukces Twojej firmy to nasz sukces. Testujemy różne scenariusze i wspólnie osiągamy wyznaczone cele.",
  },
  {
    id: "03",
    title: "Inicjatywa i konkretne pomysły",
    desc: "Nie czekamy na wytyczne. Analizujemy dane i proaktywnie proponujemy usprawnienia.",
  },
  {
    id: "04",
    title: "Szybka reakcja",
    desc: "Błyskawicznie reagujemy na zmiany rynkowe i na bieżąco optymalizujemy kampanie.",
  },
  {
    id: "05",
    title: "Minimalizacja ryzyka",
    desc: "Nie obiecujemy cudów. Otwarcie rozmawiamy o szansach i zagrożeniach, opierając decyzje na danych.",
  },
];

export function ProcessSteps() {
  return (
    <section className="bg-white py-20 lg:py-32 overflow-hidden border-t border-gray-100">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-16 lg:gap-24">
          
          {/* Left Column - Sticky Heading */}
          <div className="relative">
            {/* Hexagon Pattern Background */}
            <div className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-[url('/images/hexagon-pattern.svg')] opacity-5 pointer-events-none z-0 mix-blend-multiply bg-repeat"></div>
            
            <div className="lg:sticky lg:top-32 relative z-10">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px" }}
                transition={{ duration: 0.5 }}
                className="font-heading text-3xl md:text-5xl text-ink-900 font-bold leading-tight mb-6"
              >
                Dlaczego nasi klienci czują się spokojnie
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-body text-gray-500 text-lg leading-relaxed"
              >
                Współpraca z nami to nie tylko wykonane zadania, to strategiczne doradztwo i ciągłe czuwanie nad tym, aby marketing przynosił realne zyski.
              </motion.p>
            </div>
          </div>

          {/* Right Column - Steps List */}
          <div className="flex flex-col">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative py-10 border-b border-gray-200 flex items-start gap-6 group hover:bg-gray-50/50 transition-colors px-4 -mx-4 rounded-xl"
              >
                {/* Background Outline Number */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-8xl md:text-[140px] font-heading font-black text-transparent opacity-30 select-none z-0 translate-x-4 group-hover:translate-x-0 transition-transform duration-500" style={{ WebkitTextStroke: "2px #e2e8f0" }}>
                  {step.id}
                </div>

                {/* Content */}
                <div className="relative z-10 flex items-start gap-5">
                  <div className="mt-1.5 flex-shrink-0 text-brand-400 group-hover:translate-x-2 transition-transform duration-300">
                    <div className="flex items-center -space-x-2">
                      <ChevronRight className="w-8 h-8 opacity-40 text-brand-400" strokeWidth={3} />
                      <ChevronRight className="w-8 h-8 text-brand-500" strokeWidth={3} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl md:text-2xl font-bold text-brand-600 mb-3">
                      {step.title}
                    </h3>
                    <p className="font-body text-gray-600 text-base md:text-lg leading-relaxed max-w-[85%]">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
