"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const services = [
  {
    id: 1,
    title: "Strony internetowe",
    desc: "Projektowanie i kodowanie szybkich, nowoczesnych stron www dla firm. Skupiamy się na UX, konwersji i niezawodnym działaniu na każdym urządzeniu.",
    colSpan: "md:col-span-2",
    // Web browser mockup -> service-bg.png
    decoration: (
      <div className="absolute -right-8 -bottom-10 w-56 h-56 transform group-hover:-translate-y-2 group-hover:-translate-x-2 transition-transform duration-500">
        <Image src="/images/services/service-bg.png" alt="Strony internetowe grafika" fill className="object-contain" />
      </div>
    ),
  },
  {
    id: 2,
    title: "Aplikacje mobilne",
    desc: "Natywne i multiplatformowe aplikacje na smartfony (iOS i Android). Budujemy produkty cyfrowe i rozwiązania SaaS dopasowane do Twoich potrzeb.",
    colSpan: "md:col-span-1",
    // Mobile phone mockup
    decoration: (
      <div className="absolute -right-4 -bottom-16 w-32 h-56 bg-navy-950 rounded-3xl border-[4px] border-gray-800 shadow-2xl overflow-hidden transform group-hover:-translate-y-3 group-hover:-translate-x-1 transition-transform duration-500 flex flex-col">
        <div className="absolute top-0 inset-x-0 h-4 flex justify-center mt-1">
          <div className="w-10 h-3 bg-gray-800 rounded-full"></div>
        </div>
        <div className="flex-1 mt-6 px-3 flex flex-col gap-3">
          <div className="w-full h-16 bg-gradient-to-br from-brand-600 to-brand-deep rounded-xl"></div>
          <div className="w-full h-10 bg-white/10 rounded-lg"></div>
          <div className="grid grid-cols-2 gap-2">
            <div className="h-10 bg-white/5 rounded-lg"></div>
            <div className="h-10 bg-white/5 rounded-lg"></div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "Marketing online i pozycjonowanie",
    desc: "Zwiększamy widoczność w Google (SEO/GEO) oraz projektujemy rentowne kampanie reklamowe (Ads), aby generować ciągły ruch i sprzedaż.",
    colSpan: "md:col-span-1",
    // Abstract Target / C logo -> service-marketing.png
    decoration: (
      <div className="absolute -right-8 -bottom-8 w-64 h-64 transform group-hover:scale-105 transition-transform duration-700">
        <Image src="/images/services/service-marketing.png" alt="Marketing online" fill className="object-contain" />
      </div>
    ),
  },
  {
    id: 4,
    title: "Cyberbezpieczeństwo",
    desc: "Audyty, testy penetracyjne i zabezpieczanie systemów przed atakami. Chronimy Twoje dane i infrastrukturę IT.",
    colSpan: "md:col-span-2",
    // Terminal mockup -> service-security.png
    decoration: (
      <div className="absolute -right-6 -bottom-6 w-56 h-56 transform group-hover:scale-105 transition-transform duration-500">
        <Image src="/images/services/service-security.png" alt="Cyberbezpieczeństwo terminal" fill className="object-contain" />
      </div>
    ),
  },
  {
    id: 5,
    title: "Infrastruktura IT",
    desc: "Konfiguracja serwerów, sieci i rozwiązań chmurowych. Budujemy stabilne fundamenty dla działania Twojej firmy.",
    colSpan: "md:col-span-2",
    // Server racks mockup -> service-infra.png
    decoration: (
      <div className="absolute -right-4 bottom-0 w-48 h-48 transform group-hover:-translate-x-2 transition-transform duration-500">
        <Image src="/images/services/service-infra.png" alt="Infrastruktura IT serwery" fill className="object-contain" />
      </div>
    ),
  },
  {
    id: 6,
    title: "Outsourcing IT",
    desc: "Zewnętrzny dział IT dla Twojej firmy. Zapewniamy stabilne zaplecze technologiczne i wsparcie helpdesk na najwyższym poziomie.",
    colSpan: "md:col-span-1",
    // Network / nodes mockup -> service-outsourcing.png
    decoration: (
      <div className="absolute -right-4 bottom-0 w-48 h-48 transform group-hover:-translate-x-2 transition-transform duration-500">
        <Image src="/images/services/service-outsourcing.png" alt="Outsourcing IT" fill className="object-contain" />
      </div>
    ),
  },
  {
    id: 7,
    title: "Dedykowane oprogramowanie",
    desc: "Tworzymy systemy CRM, ERP oraz automatyzacje procesów. Narzędzia, które idealnie odpowiadają na wyzwania Twojego biznesu.",
    colSpan: "md:col-span-1",
    // Dashboard mockup -> service-software.png
    decoration: (
      <div className="absolute -right-6 -bottom-6 w-64 h-56 transform group-hover:-translate-y-2 group-hover:-translate-x-2 transition-transform duration-500">
        <Image src="/images/services/service-software.png" alt="Dedykowane oprogramowanie dashboard" fill className="object-contain" />
      </div>
    ),
  },
  {
    id: 8,
    title: "Szkolenia z cyberbezpieczeństwa",
    desc: "Edukujemy pracowników, przeprowadzamy symulacje phishingu i uczymy, jak rozpoznawać i unikać cyfrowych zagrożeń.",
    colSpan: "md:col-span-2",
    // Shield mockup
    decoration: (
      <div className="absolute -right-4 -bottom-4 w-40 h-40 transform group-hover:scale-110 transition-transform duration-500">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-500/20 to-transparent blur-xl"></div>
        <svg viewBox="0 0 100 100" className="w-full h-full text-green-500/80 drop-shadow-[0_0_15px_rgba(34,197,94,0.4)]" fill="none" stroke="currentColor" strokeWidth="4">
          <path d="M50 15 L20 25 V45 C20 65 40 80 50 85 C60 80 80 65 80 45 V25 Z" strokeLinejoin="round" />
          <path d="M40 50 L48 58 L65 38" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    ),
  },
];

export function Services() {
  return (
    <section id="nasze-uslugi" className="bg-navy-950 py-24 lg:py-32 overflow-hidden relative">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-16"
        >
          <h2 className="font-heading text-3xl md:text-5xl text-white font-bold mb-6">
            Nasze usługi
          </h2>
          <p className="font-body text-gray-400 text-lg leading-relaxed">
            Dostarczamy kompleksowe rozwiązania technologiczne i marketingowe. Zobacz, w jakich obszarach możemy Ci pomóc.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className={`group relative bg-navy-900 border border-white/5 hover:border-white/10 rounded-3xl p-8 md:p-10 min-h-[340px] flex flex-col justify-between overflow-hidden transition-colors ${service.colSpan || 'md:col-span-1'}`}
            >
              {/* Content */}
              <div className="relative z-10 max-w-[65%]">
                <h3 className="font-heading text-xl md:text-2xl font-bold text-white mb-4 leading-tight">
                  {service.title}
                </h3>
                <p className="font-body text-gray-400 text-sm md:text-base leading-relaxed">
                  {service.desc}
                </p>
              </div>

              {/* Action Button */}
              <div className="relative z-10 mt-8">
                <button
                  className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-white border border-white/10 group-hover:bg-brand-600 group-hover:border-brand-500 transition-all duration-300"
                  aria-label={`Więcej o: ${service.title}`}
                >
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" strokeWidth={2.5} />
                </button>
              </div>

              {/* Background Decoration (right side) */}
              {service.decoration}
              
              {/* Subtle hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-600/0 to-brand-600/0 group-hover:from-brand-600/5 group-hover:to-transparent pointer-events-none transition-colors duration-500"></div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
