"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import ArrowButton from "@/components/ui/ArrowButton";

const caseStudies = [
  {
    id: 1,
    client: "VanStev",
    title: "Stabilny wzrost sprzedaży",
    desc1: <><strong className="text-ink-900 font-black">Branża:</strong> Outsourcing Specjalistów i Rekrutacja Międzynarodowa<br/><strong className="text-ink-900 font-black">Zakres:</strong> Strona firmowa, UX/UI Design, Oferty pracy, Galeria projektów</>,
    desc2: "VanStev potrzebował platformy, która ułatwi kandydatom aplikowanie na oferty pracy i pozwoli firmom szybko nawiązać współpracę. Zaprojektowaliśmy intuicyjny UX, nowoczesny UI i zoptymalizowane formularze, dzięki czemu użytkownicy szybciej znajdują oferty, a firma wzmacnia swój wizerunek rzetelnego partnera HR",
    hex: "#E56813",
    tags: ["Wzrost konwersji o x%", "Wzrost liczby zgłoszeń o x%", "Poprawa doświadczenia użytkowników"],
    mockup: "VanStev Laptop Mockup"
  },
  {
    id: 2,
    client: "EcoCar Detailing",
    title: "Stabilny wzrost sprzedaży",
    desc1: <><strong className="text-ink-900 font-black">Branża:</strong> Auto Detailing / Pielęgnacja pojazdów<br/><strong className="text-ink-900 font-black">Zakres:</strong> Website Design, Service Listings, Realizacje / Galeria, Formularz rezerwacji, Blog / Treści HR</>,
    desc2: "Dla EcoCar Detailing stworzyliśmy nowoczesną stronę wizytówkową, która podkreśla profesjonalizm usług i ułatwia klientom szybkie znalezienie informacji o detailingu, rezerwację usług oraz przegląd realizacji. Strona zawiera przejrzysty katalog usług, galerię efektów pracy, intuicyjne formularze kontaktowe oraz blog edukacyjny, który buduje zaufanie i wspiera pozycjonowanie lokalne",
    hex: "#93C01F",
    tags: ["Wzrost konwersji o x%", "Wzrost liczby zgłoszeń o x%", "Poprawa doświadczenia użytkowników"],
    mockup: "EcoCar Detailing Laptop Mockup"
  },
  {
    id: 3,
    client: "OWS Europe",
    title: "Stabilny wzrost sprzedaży",
    desc1: <><strong className="text-ink-900 font-black">Branża:</strong> HVAC / Instalacje klimatyzacyjne i grzewcze<br/><strong className="text-ink-900 font-black">Zakres:</strong> Website Creation, Conversion Optimization, Ogłoszenia Promocyjne, Kontakt / Formularz / Lokalizacja, SEO lokalne</>,
    desc2: "Dla OWS Europe z Wrocławia zaprojektowaliśmy nowoczesną stronę, która w czytelny sposób prezentuje ofertę sprzedaży, montażu i serwisu klimatyzacji, pomp ciepła i wentylacji. Strona zawiera katalog usług, widoczne promocje, przejrzysty formularz kontaktowy i CTA, co zwiększa konwersje. Dzięki lokalnemu SEO firma zyskała lepszą widoczność w wynikach wyszukiwania dla klientów z Wrocławia i okolic.",
    hex: "#5B95CA",
    tags: ["Wzrost konwersji o x%", "Wzrost liczby zgłoszeń o x%", "Poprawa doświadczenia użytkowników"],
    mockup: "OWS Europe Laptop Mockup 1"
  },
  {
    id: 4,
    client: "Klimat24",
    title: "Stabilny wzrost sprzedaży",
    desc1: <><strong className="text-ink-900 font-black">Branża:</strong> Klimatyzacja / Systemy HVAC<br/><strong className="text-ink-900 font-black">Zakres:</strong> Poprawa SEO i contentu, kampanie Google Ads & Meta Ads, dedykowane landing page'e promocyjne, tworzenie strategii, projekt nowej strony w trakcie realizacji</>,
    desc2: "Dla Klimat24 wspieramy działania marketingowe: zoptymalizowaliśmy SEO i content na stronie pod frazy lokalne i usługowe, prowadzimy kampanie Google Ads oraz Meta Ads, tworzymy dedykowane landing page'e promocyjne skoncentrowane na konwersji, przygotowujemy spójną strategię marketingową i sprzedażową. Nowa strona internetowa jest obecnie w produkcji i będzie kolejnym krokiem w digitalizacji marki.",
    hex: "#1030D0",
    tags: ["Wzrost konwersji o x%", "Wzrost liczby zgłoszeń o x%", "Poprawa doświadczenia użytkowników"],
    mockup: "Klimat24 Laptop Mockup"
  },
  {
    id: 5,
    client: "OWS Europe",
    title: "Stabilny wzrost sprzedaży",
    desc1: <><strong className="text-ink-900 font-black">Branża:</strong> HVAC / Instalacje klimatyzacyjne i grzewcze<br/><strong className="text-ink-900 font-black">Zakres:</strong> Website Creation, Conversion Optimization, Ogłoszenia Promocyjne, Kontakt / Formularz / Lokalizacja, SEO lokalne</>,
    desc2: "Dla OWS Europe z Wrocławia zaprojektowaliśmy nowoczesną stronę, która w czytelny sposób prezentuje ofertę sprzedaży, montażu i serwisu klimatyzacji, pomp ciepła i wentylacji. Strona zawiera katalog usług, widoczne promocje, przejrzysty formularz kontaktowy i CTA, co zwiększa konwersje. Dzięki lokalnemu SEO firma zyskała lepszą widoczność w wynikach wyszukiwania dla klientów z Wrocławia i okolic.",
    hex: "#1C2738",
    tags: ["Wzrost konwersji o x%", "Wzrost liczby zgłoszeń o x%", "Poprawa doświadczenia użytkowników"],
    mockup: "OWS Europe Laptop Mockup 2"
  }
];

export default function PortfolioPage() {
  return (
    <>
      <main className="flex-1">
        {/* HERO SECTION */}
        <div className="bg-[#fcfcfc]">
<section className="relative bg-navy-950 flex flex-col justify-center overflow-hidden border-b border-white/5 w-[calc(100%-20px)] mx-auto h-[735px] rounded-[20px] pt-20">
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          </div>
          
          <div className="max-w-[1200px] mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-6 max-w-3xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
                Nasze portfolio
              </h1>
              <p className="text-gray-400 font-body text-lg leading-relaxed">
                Poznaj wyniki i historię naszego doświadczenia. Te projekty i ich realizacje pokazują jakość, detale i standardy budowy, o które stale dbamy i poszerzamy.
              </p>
            </motion.div>
          </div>
        </section>
        </div>

        {/* CASE STUDIES SECTION */}
        <section className="bg-[#fcfcfc] py-16 lg:py-24">
          <div className="max-w-[1200px] mx-auto px-6 relative z-10">
            <div className="text-center mb-16 lg:mb-20">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-black text-ink-900"
              >
                Case studies
              </motion.h2>
            </div>

            <div className="flex flex-col gap-24 lg:gap-32">
              {caseStudies.map((project, i) => {
                const isEven = i % 2 === 1; // 0-indexed: 1, 3 are right-aligned text
                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                      <div className={`flex flex-col gap-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                        <div className="font-black text-2xl lg:text-3xl tracking-tight" style={{ color: project.hex }}>
                          {project.client}
                        </div>
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight" style={{ color: project.hex }}>
                          {project.title}
                        </h3>
                        <p className="text-gray-600 font-body text-sm leading-relaxed mt-2">
                          {project.desc1}
                        </p>
                        <p className="text-ink-900 font-body leading-relaxed text-[15px] mt-2">
                          {project.desc2}
                        </p>
                        
                        <div className="flex flex-col gap-2 mt-4">
                          {project.tags.map((tag, idx) => (
                            <div key={idx} className="px-4 py-2 text-white font-bold text-[10px] lg:text-xs uppercase tracking-widest rounded-sm w-fit" style={{ backgroundColor: project.hex }}>
                              {tag}
                            </div>
                          ))}
                        </div>

                        <div className="flex gap-2 mt-6">
                          <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: project.hex }}></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-gray-200"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-gray-200"></div>
                        </div>
                      </div>

                      <div className={`relative w-full ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                        <div 
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] lg:w-[140%] lg:h-[140%] opacity-20 blur-[80px] lg:blur-[120px] rounded-full z-0"
                          style={{ backgroundColor: project.hex }}
                        ></div>
                        <div className="relative aspect-[16/10] w-full bg-[#1e2330] rounded-2xl flex items-center justify-center text-gray-500 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10 z-10">
                          [{project.mockup}]
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* DARK SECTION: TESTIMONIALS */}
        <section className="bg-navy-950 py-20 lg:py-32 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1/2 h-full bg-brand-500/10 blur-[120px] rounded-full pointer-events-none -translate-x-1/2"></div>
          
          <div className="max-w-[1000px] mx-auto px-6 relative z-10 flex flex-col items-center text-center">
            <span className="text-white text-xs font-bold tracking-[0.2em] font-heading uppercase mb-6 opacity-60">
              MALI I ŚREDNI PRZEDSIĘBIORCY
            </span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight max-w-3xl"
            >
              Co firmy mówią o naszej współpracy?
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-1 mb-8"
            >
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 text-brand-500 fill-brand-500" />
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="w-full relative"
            >
              <div className="px-12 md:px-24">
                <p className="text-xl md:text-2xl lg:text-3xl font-body text-white leading-relaxed italic font-medium mb-10">
                  "Agencja cechuje się ogromnym profesjonalizmem, a cały proces od wdrożenia po utrzymanie kampanii reklamowych stoi na najwyższym poziomie. Zespół z dużą skutecznością dopasowuje strategię do naszej branży, co realnie przełożyło się na wzrost liczby zapytań i większą stabilność sprzedaży w firmie."
                </p>
                <div className="inline-flex items-center gap-3 bg-white/10 border border-white/10 px-6 py-2 rounded-full">
                  <div className="w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center text-white font-bold text-xs">
                    MC
                  </div>
                  <span className="text-white font-bold text-sm">~ Michał C.</span>
                </div>
              </div>

              {/* Slider Arrows */}
              <ArrowButton 
                direction="left" 
                className="absolute top-1/2 -translate-y-1/2 left-0 z-20" 
              />
              <ArrowButton 
                direction="right" 
                className="absolute top-1/2 -translate-y-1/2 right-0 z-20" 
              />
            </motion.div>
          </div>
        </section>

        {/* SECTION: ONI JUŻ SPRZEDAJĄ */}
        <div className="bg-white py-20 text-center">
           <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-black text-ink-900 leading-tight px-6 max-w-4xl mx-auto"
            >
              Oni już sprzedają. Pora na Twój ruch!
            </motion.h2>
        </div>
      </main>
    </>
  );
}
