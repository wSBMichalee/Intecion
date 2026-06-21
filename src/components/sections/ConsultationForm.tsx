"use client";

import { motion } from "framer-motion";

interface ConsultationFormProps {
  label?: string;
  heading?: string;
  description?: string;
  className?: string;
}

export function ConsultationForm({
  label,
  heading = "Darmowa konsultacja",
  description = "Opowiedz nam o swoim biznesie — odezwiemy się\ni zaproponujemy optymalne rozwiązania szyte na miarę.",
  className = "",
}: ConsultationFormProps) {
  return (
    <section className={`w-[calc(100%-20px)] mx-auto rounded-[20px] bg-black py-20 lg:py-28 relative overflow-hidden my-10 ${className}`}>
      {/* Background radial glow on the left */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-[#007acc]/20 via-black/0 to-transparent pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
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
            <h2 className="text-4xl md:text-[44px] text-white font-semibold mb-6 tracking-tight leading-tight">
              {heading}
            </h2>
            <p className="text-gray-400 text-[17px] leading-relaxed mb-10 max-w-[420px] whitespace-pre-line">
              {description}
            </p>

            {/* Social Proof Badge */}
            <div className="flex items-center gap-4 bg-[#0a0a0a] border border-white/5 rounded-2xl py-3 px-5 w-max">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-[3px] border-[#0a0a0a] overflow-hidden bg-blue-900 relative">
                  <img src="https://i.pravatar.cc/100?img=11" alt="User 1" className="w-full h-full object-cover" />
                </div>
                <div className="w-10 h-10 rounded-full border-[3px] border-[#0a0a0a] overflow-hidden bg-purple-900 relative z-10">
                  <img src="https://i.pravatar.cc/100?img=12" alt="User 2" className="w-full h-full object-cover" />
                </div>
                <div className="w-10 h-10 rounded-full border-[3px] border-[#0a0a0a] overflow-hidden bg-pink-900 relative z-20">
                  <img src="https://i.pravatar.cc/100?img=5" alt="User 3" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="flex flex-col">
                <p className="text-white text-[11px] font-bold mb-1">Zaufało nam 200+ firm</p>
                <div className="flex gap-0.5 text-[#007acc]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex lg:justify-end"
          >
            <form className="flex flex-col gap-3 w-full max-w-[420px]">
              <div>
                <input
                  type="text"
                  placeholder="IMIĘ"
                  className="w-full bg-[#0f0f0f] border border-white/5 rounded px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-[#007acc] focus:border-[#007acc] transition-all font-mono text-xs uppercase tracking-wide"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="E-MAIL"
                  className="w-full bg-[#0f0f0f] border border-white/5 rounded px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-[#007acc] focus:border-[#007acc] transition-all font-mono text-xs uppercase tracking-wide"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="TELEFON"
                  className="w-full bg-[#0f0f0f] border border-white/5 rounded px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-[#007acc] focus:border-[#007acc] transition-all font-mono text-xs uppercase tracking-wide"
                />
              </div>
              
              <div className="flex mt-1">
                <button type="button" className="flex-1 bg-[#007acc] text-white font-bold text-xs uppercase tracking-widest h-[52px] rounded-none rounded-l hover:bg-[#006bb3] transition-colors">
                  DARMOWA KONSULTACJA
                </button>
                <div className="w-[52px] h-[52px] bg-white rounded-r flex items-center justify-center text-[#007acc] cursor-pointer hover:bg-gray-100 transition-colors">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </div>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
