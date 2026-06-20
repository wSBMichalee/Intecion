"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ArrowButton from "@/components/ui/ArrowButton";

export function Services() {
  return (
    <section id="nasze-uslugi" className="bg-white py-24 lg:py-32 overflow-hidden relative">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl text-ink-900 font-black mb-6">
            Nasze usługi
          </h2>
          <p className="font-body text-gray-600 text-lg leading-relaxed max-w-xl">
            Tworzymy dedykowane produkty cyfrowe na najwyższym światowym poziomie. Poznaj obszary, w których czujemy się najlepiej.
          </p>
        </motion.div>

        {/* 12-COLUMN CSS GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* ================= ROW 1 ================= */}
          {/* 1. Strony internetowe (7 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7 group relative bg-navy-950 rounded-2xl overflow-hidden p-8 flex flex-col justify-between min-h-[420px]"
          >
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.15),transparent_60%)] pointer-events-none" />
            <div className="relative z-10 max-w-[60%]">
              <h3 className="text-white font-bold text-lg md:text-xl mb-4">Strony internetowe</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Projektujemy strony internetowe dla firm, które nie tylko wyglądają profesjonalnie, ale przede wszystkim prowadzą użytkownika do kontaktu lub zakupu. Każdy element strony jest dopasowany do potrzeb Twoich klientów i specyfiki branży. Nie działamy na gotowych szablonach — każda strona jest indywidualnie dopasowana do Twojego biznesu
              </p>
            </div>
            <div className="relative z-10 mt-12">
              <ArrowButton variant="white" size="sm" />
            </div>
            {/* Browser Mockup */}
            <div className="absolute -right-8 bottom-8 w-[55%] h-[65%] bg-[#0e1522] rounded-xl border border-white/10 shadow-2xl flex flex-col overflow-hidden group-hover:-translate-x-2 transition-transform duration-500">
              <div className="h-8 bg-[#090d15] border-b border-white/5 flex items-center px-4 gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                <div className="ml-3 h-3 w-32 bg-white/10 rounded-full"></div>
              </div>
              <div className="flex-1 p-5 flex flex-col gap-3 relative">
                <div className="h-3 w-full bg-white/10 rounded-full"></div>
                <div className="h-3 w-5/6 bg-white/10 rounded-full"></div>
                <div className="h-3 w-4/6 bg-white/10 rounded-full"></div>
                <div className="h-3 w-full bg-white/10 rounded-full"></div>
                {/* Second smaller panel */}
                <div className="absolute right-0 bottom-0 w-32 h-20 bg-[#162032] border-t border-l border-white/10 rounded-tl-xl p-3 shadow-lg flex flex-col gap-2">
                  <div className="h-2 w-1/2 bg-white/10 rounded-full"></div>
                  <div className="h-2 w-3/4 bg-white/10 rounded-full"></div>
                  <div className="h-2 w-full bg-white/10 rounded-full"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2. Aplikacje mobilne (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5 group relative bg-navy-950 rounded-2xl overflow-hidden p-8 flex flex-col justify-between min-h-[420px]"
          >
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.15),transparent_60%)] pointer-events-none" />
            <div className="relative z-10 max-w-[70%]">
              <h3 className="text-white font-bold text-lg md:text-xl mb-4">Aplikacje mobilne</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Produkty cyfrowe przybierają najróżniejsze formy. Od aplikacji na smartfony, po złożone systemy SaaS. Zaprojektujemy je razem.
              </p>
            </div>
            <div className="relative z-10 mt-12">
              <ArrowButton variant="white" size="sm" />
            </div>
            {/* Mobile Mockup */}
            <div className="absolute -right-6 -bottom-16 w-48 h-72 bg-[#0e1522] border-[4px] border-[#162032] rounded-[2rem] shadow-2xl flex flex-col items-center pt-5 group-hover:-translate-y-2 group-hover:-translate-x-2 transition-transform duration-500">
              <div className="w-12 h-1.5 bg-[#162032] rounded-full mb-6"></div>
              <div className="w-[85%] h-16 bg-[#131b26] border border-white/5 rounded-xl flex items-center px-3 gap-3 relative">
                <div className="w-10 h-10 rounded-lg bg-[#0e1522] border-2 border-white/10 flex items-center justify-center">
                  <div className="w-5 h-5 rounded-md border-2 border-brand-500 flex items-center justify-center">
                    <div className="w-2 h-2 border border-brand-400 rounded-sm"></div>
                  </div>
                </div>
                <div className="flex-col flex gap-2">
                  <div className="h-2 w-16 bg-white/10 rounded-full"></div>
                  <div className="h-2 w-10 bg-white/10 rounded-full"></div>
                </div>
                {/* Alt key floating */}
                <div className="absolute -left-10 top-1/2 -translate-y-1/2 bg-[#1a2332] px-2 py-1 rounded-md border border-white/5 text-[9px] text-white/50 shadow-xl">Alt</div>
              </div>
              <div className="w-[85%] h-16 bg-[#131b26] border border-white/5 rounded-xl mt-3"></div>
            </div>
          </motion.div>


          {/* ================= ROW 2 ================= */}
          {/* 3. Logo C (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5 group relative bg-[#040812] rounded-2xl overflow-hidden p-8 flex items-center justify-center min-h-[420px]"
          >
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.15),transparent_70%)] pointer-events-none" />
            <div className="relative z-10 w-48 h-48 group-hover:scale-105 transition-transform duration-500">
              <Image src="/images/logo-c.png" alt="Intecion Logo" fill className="object-contain drop-shadow-[0_0_25px_rgba(14,165,233,0.6)]" />
            </div>
          </motion.div>

          {/* 4. Marketing online i pozycjonowanie (7 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7 group relative bg-navy-950 rounded-2xl overflow-hidden p-8 flex flex-col justify-between min-h-[420px]"
          >
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.15),transparent_60%)] pointer-events-none" />
            <div className="relative z-10 max-w-[80%]">
              <h3 className="text-white font-bold text-lg md:text-xl mb-4">Marketing online i pozycjonowanie</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Prowadzimy działania marketingowe, które pomagają firmom systematycznie zwiększać widoczność w internecie poprzez pozycjonowanie stron (SEO / GEO), kampanie ads oraz optymalizację procesu pozyskiwania klientów. Na bieżąco analizujemy dane i zachowania użytkowników, żeby znaleźć miejsca, w których marketing może zwiększyć liczbę klientów
              </p>
            </div>
            <div className="relative z-10 mt-12">
              <ArrowButton variant="white" size="sm" />
            </div>
            {/* Radar decoration */}
            <div className="absolute -right-12 -bottom-12 w-64 h-64 rounded-full border border-white/10 group-hover:scale-105 transition-transform duration-700">
               <div className="absolute inset-8 rounded-full border border-white/5"></div>
               <div className="absolute inset-16 rounded-full border border-white/5"></div>
               <div className="absolute top-1/2 left-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent to-brand-500 origin-left -rotate-45"></div>
               {/* Dot on the first ring */}
               <div className="absolute top-[28%] right-[14%] w-3 h-3 rounded-full bg-brand-400 shadow-[0_0_12px_rgba(14,165,233,1)]"></div>
            </div>
          </motion.div>


          {/* ================= ROW 3 ================= */}
          {/* 5. Infrastruktura IT (7 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7 group relative bg-navy-950 rounded-2xl overflow-hidden p-8 flex flex-col justify-between min-h-[480px]"
          >
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.15),transparent_60%)] pointer-events-none" />
            <div className="relative z-10 max-w-[65%]">
              <h3 className="text-white font-bold text-lg md:text-xl mb-4">Infrastruktura IT</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Projektujemy i wdrażamy infrastrukturę IT dla firm, która wspiera codzienne działanie i rozwój biznesu. Zajmujemy się konfiguracją systemów, poczty, zarządzaniem siecią, dostępami do danych oraz wdrażaniem rozwiązań chmurowych. Tworzymy środowisko, które porządkuje pracę zespołu i eliminuje problemy techniczne, które spowalniają rozwój firmy
              </p>
            </div>
            <div className="relative z-10 mt-12">
              <ArrowButton variant="white" size="sm" />
            </div>
            {/* Terminal mockup */}
            <div className="absolute -right-8 -bottom-4 w-[420px] bg-[#0d1117] rounded-xl border border-white/10 shadow-2xl overflow-hidden font-mono text-[11px] p-5 text-[#27c93f] group-hover:-translate-y-2 transition-transform duration-500 z-10">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              </div>
              <div className="opacity-90 flex flex-col gap-2">
                <p><span className="text-gray-500">$</span> nmap -sV --script vuln 192.168.1.0/24</p>
                <p className="text-[#7BF1A8]">[✓] Port 443: TLS 1.3 — encrypted</p>
                <p className="text-[#7BF1A8]">[✓] Firewall: rules active (64 blocked)</p>
                <p className="text-[#7BF1A8]">[✓] Auth: MFA enabled — 2 factors</p>
                <p className="text-[#FB64B6]">[!] CVE-2024-3094: patched ✓</p>
                <p className="text-[#00BCFF]">[✓] CVE scan: 0 critical found</p>
                <div className="flex items-center gap-3 mt-3 pt-3 border-t border-white/10">
                   <span className="text-gray-500">$ STATUS: SECURE</span>
                   <div className="h-2.5 w-24 bg-white/20 rounded-full overflow-hidden"><div className="h-full w-full bg-[#27c93f]"></div></div>
                   <span className="text-gray-500">100%</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 6. Cyberbezpieczeństwo (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5 group relative bg-navy-950 rounded-2xl overflow-hidden p-8 flex flex-col justify-between min-h-[480px]"
          >
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.15),transparent_60%)] pointer-events-none" />
            <div className="relative z-10 max-w-[80%]">
              <h3 className="text-white font-bold text-lg md:text-xl mb-4">Cyberbezpieczeństwo</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Zajmujemy się cyberbezpieczeństwem firm. Chronimy dane, systemy i dostęp do informacji przed zagrożeniami. Wykonujemy audyty bezpieczeństwa IT, testy penetracyjne oraz analizę podatności, dzięki którym wykrywamy słabe punkty. Wdrażamy zabezpieczenia, monitorujemy infrastrukturę i pomagamy uporządkować dostęp do danych w firmie.
              </p>
            </div>
            <div className="relative z-10 mt-12">
              <ArrowButton variant="white" size="sm" />
            </div>
            {/* Vertical pill decoration */}
            <div className="absolute -right-8 -bottom-12 w-48 h-72 border-[16px] border-[#024a7a]/40 rounded-[4rem] group-hover:-translate-y-2 transition-transform duration-500 z-0">
              <div className="absolute inset-4 border-[12px] border-[#024a7a]/30 rounded-[3rem]"></div>
            </div>
          </motion.div>


          {/* ================= ROW 4 ================= */}
          {/* 7. Outsourcing IT (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5 group relative bg-navy-950 rounded-2xl overflow-hidden p-8 flex flex-col justify-between min-h-[500px]"
          >
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.15),transparent_60%)] pointer-events-none" />
            <div className="relative z-10 max-w-[70%]">
              <h3 className="text-white font-bold text-lg md:text-xl mb-4">Outsourcing IT</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Zapewniamy outsourcing IT dla firm, które chcą mieć stabilne i bezpieczne zaplecze technologiczne bez budowania własnego działu IT. Przejmujemy odpowiedzialność za utrzymanie systemów, reagowanie na problemy i bieżące wsparcie techniczne. Dbamy o to, żeby wszystko działało sprawnie: komputery i systemy, bezpieczeństwo danych jak i wszystkie dostępy
              </p>
            </div>
            <div className="relative z-10 mt-12">
              <ArrowButton variant="white" size="sm" />
            </div>
            {/* Server racks decoration */}
            <div className="absolute -right-8 bottom-12 w-64 flex flex-col gap-4 opacity-80 group-hover:-translate-x-2 transition-transform duration-500">
              {[1, 2, 3].map(i => (
                <div key={i} className="h-12 bg-[#0e1522] rounded-xl border border-white/5 flex items-center px-5 gap-4 shadow-xl">
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-500 shadow-[0_0_10px_rgba(14,165,233,0.8)]"></div>
                  <div className="h-2 w-16 bg-white/10 rounded-full"></div>
                  <div className="h-2 w-12 bg-white/10 rounded-full"></div>
                  <div className="ml-auto w-5 h-5 rounded-full bg-black/50 border border-white/10"></div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 8. Dedykowane oprogramowanie (7 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7 group relative bg-navy-950 rounded-2xl overflow-hidden p-8 flex flex-col justify-between min-h-[500px]"
          >
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.15),transparent_60%)] pointer-events-none" />
            <div className="relative z-10 max-w-[65%]">
              <h3 className="text-white font-bold text-lg md:text-xl mb-4">Dedykowane oprogramowanie</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Tworzymy dedykowane oprogramowania dla firm, łączące procesy biznesowe, sprzedaż i marketing w spójny system. Projektujemy systemy dopasowane do Twojego sposobu działania: CRM, automatyzacja sprzedaży, integracja danych z kampanii marketingowych czy tworzenie dashboardów biznesowych. Każde rozwiązanie powstaje indywidualnie na podstawie Twoich procesów, celów i potrzeb
              </p>
            </div>
            <div className="relative z-10 mt-12">
              <ArrowButton variant="white" size="sm" />
            </div>
            
            {/* Round Spinner Decoration (Top Right) */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-[5px] border-brand-500/30 flex items-center justify-center opacity-80 group-hover:rotate-180 transition-transform duration-1000">
               <div className="w-full h-full rounded-full border-[5px] border-brand-500 border-t-transparent"></div>
            </div>
            
            {/* Dashboard mockup (Bottom) */}
            <div className="absolute -right-4 -bottom-6 w-[360px] flex flex-col gap-4 group-hover:-translate-y-2 transition-transform duration-500">
               <div className="bg-[#0e1522] rounded-2xl border border-white/5 p-5 shadow-2xl flex flex-col gap-4">
                  <div className="h-3 w-20 bg-white/10 rounded-full"></div>
                  <div className="flex items-end gap-2.5 h-16">
                     <div className="w-full bg-brand-500/80 rounded-t-sm h-[40%]"></div>
                     <div className="w-full bg-brand-500/80 rounded-t-sm h-[60%]"></div>
                     <div className="w-full bg-brand-500/80 rounded-t-sm h-[30%]"></div>
                     <div className="w-full bg-brand-500/80 rounded-t-sm h-[80%]"></div>
                     <div className="w-full bg-brand-500/80 rounded-t-sm h-[50%]"></div>
                     <div className="w-full bg-brand-500/80 rounded-t-sm h-[90%]"></div>
                  </div>
               </div>
               <div className="bg-[#0e1522] rounded-2xl border border-white/5 p-5 shadow-2xl flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                     <div className="w-8 h-8 rounded-lg bg-brand-500/20 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-brand-400"></div>
                     </div>
                     <div className="h-2.5 w-24 bg-white/10 rounded-full"></div>
                     <div className="ml-auto w-10 h-5 bg-white/5 rounded-full"></div>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full mt-1"></div>
                  <div className="h-1.5 w-3/4 bg-white/5 rounded-full"></div>
               </div>
            </div>
          </motion.div>

          {/* ================= ROW 5 ================= */}
          {/* 9. Strony internetowe (7 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7 group relative bg-navy-950 rounded-2xl overflow-hidden p-8 flex flex-col justify-between min-h-[400px]"
          >
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.15),transparent_60%)] pointer-events-none" />
            <div className="relative z-10 max-w-[65%]">
              <h3 className="text-white font-bold text-lg md:text-xl mb-4">Strony internetowe</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Projektujemy strony internetowe dla firm, które nie tylko wyglądają profesjonalnie, ale przede wszystkim przemyślanie prowadzą użytkownika do kontaktu lub zakupu. Każdy element strony jest dopasowany do potrzeb Twoich klientów i specyfiki branży. Nie działamy na gotowych szablonach — każda strona jest indywidualnie dopasowana do Twojego biznesu
              </p>
            </div>
            <div className="relative z-10 mt-12">
              <ArrowButton variant="white" size="sm" />
            </div>
            
            {/* Keyboard Keys Decoration */}
            <div className="absolute right-8 bottom-8 flex gap-3 group-hover:-translate-y-2 transition-transform duration-500">
               <div className="w-14 h-14 bg-[#0e1522] rounded-xl border-b-4 border-r-2 border-white/10 flex items-center justify-center text-white/50 font-mono text-xs shadow-xl">
                 Alt
               </div>
               <div className="w-14 h-14 bg-[#0e1522] rounded-xl border-b-4 border-r-2 border-white/10 flex items-center justify-center text-white/50 font-mono text-xs shadow-xl">
                 F4
               </div>
            </div>
          </motion.div>

          {/* 10. Aplikacje mobilne (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5 group relative bg-navy-950 rounded-2xl overflow-hidden p-8 flex flex-col justify-between min-h-[400px]"
          >
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.15),transparent_60%)] pointer-events-none" />
            <div className="relative z-10 max-w-[80%]">
              <h3 className="text-white font-bold text-lg md:text-xl mb-4">Aplikacje mobilne</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Produkty cyfrowe przybierają najróżniejsze formy. Od aplikacji na smartfony, po złożone systemy SaaS. Zaprojektujmy je razem.
              </p>
            </div>
            <div className="relative z-10 mt-12">
              <ArrowButton variant="white" size="sm" />
            </div>
          </motion.div>

          {/* ================= ROW 6 ================= */}
          {/* 11. Marketing online i pozycjonowanie (12 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-12 group relative bg-navy-950 rounded-2xl overflow-hidden p-8 lg:p-12 flex flex-col md:flex-row gap-8 items-center justify-between"
          >
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.1),transparent_70%)] pointer-events-none" />
            <div className="relative z-10 max-w-3xl">
              <h3 className="text-white font-bold text-lg md:text-2xl mb-4">Marketing online i pozycjonowanie</h3>
              <p className="text-white/60 text-sm md:text-base leading-relaxed">
                Prowadzimy działania marketingowe, które pomagają firmom systematycznie zwiększać widoczność w internecie poprzez pozycjonowanie stron (SEO / GEO), kampanie ads oraz optymalizację procesu pozyskiwania klientów. Na bieżąco analizujemy dane i zachowania użytkowników, żeby znaleźć miejsca, w których marketing może zwiększyć liczbę klientów
              </p>
            </div>
            <div className="relative z-10 shrink-0">
              <ArrowButton variant="white" size="md" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
