"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

interface ConsultationFormProps {
  label?: string;
  heading?: string;
  description?: string;
  className?: string;
}

export function ConsultationForm({
  label,
  heading = "Darmowa konsultacja",
  description = "Opowiedz nam o swoim biznesie — odezwiemy się i zaproponujemy optymalne rozwiązania szyte na miarę.",
  className = "",
}: ConsultationFormProps) {
  return (
    <section className={`bg-navy-950 py-20 lg:py-28 relative overflow-hidden ${className}`}>
      {/* Background radial glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,_var(--tw-gradient-stops))] from-brand-600/10 to-transparent pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Text & Social Proof */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.6 }}
          >
            {label && (
              <p className="font-mono text-brand-400 text-sm font-bold uppercase tracking-wider mb-4">
                {label}
              </p>
            )}
            <h2 className="font-heading text-3xl md:text-5xl text-white font-bold mb-6 leading-tight">
              {heading}
            </h2>
            <p className="font-body text-gray-400 text-lg leading-relaxed mb-12 max-w-lg">
              {description}
            </p>

            {/* Social Proof */}
            <div className="flex items-center gap-6">
              <div className="flex">
                {/* 3 Avatars Stacked */}
                <div className="w-12 h-12 rounded-full bg-gray-400 flex items-center justify-center text-white font-bold text-sm border-2 border-navy-950 z-30 shadow-sm">
                  AB
                </div>
                <div className="w-12 h-12 rounded-full bg-gray-500 flex items-center justify-center text-white font-bold text-sm border-2 border-navy-950 -ml-3 z-20 shadow-sm">
                  CD
                </div>
                <div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center text-white font-bold text-sm border-2 border-navy-950 -ml-3 z-10 shadow-sm">
                  EF
                </div>
              </div>
              <div>
                <div className="flex gap-1 mb-1 text-brand-500">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                  ))}
                </div>
                <p className="font-body text-white font-medium text-sm">
                  Zaufało nam 200+ firm
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form className="bg-navy-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10 flex flex-col gap-5 relative overflow-hidden">
              {/* Form glass reflection */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

              <div>
                <input
                  type="text"
                  placeholder="IMIĘ"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-brand-500 focus:border-brand-500 transition-all font-body text-base"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="E-MAIL"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-brand-500 focus:border-brand-500 transition-all font-body text-base"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="TELEFON"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-brand-500 focus:border-brand-500 transition-all font-body text-base"
                />
              </div>
              <div className="pt-2">
                <Button variant="primary" size="lg" className="w-full">
                  DARMOWA KONSULTACJA
                </Button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
