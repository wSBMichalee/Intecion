"use client";

import { motion } from "framer-motion";
import { Check, Star, ShoppingCart, ShoppingBag, LayoutTemplate, Terminal } from "lucide-react";
import { Button } from "@/components/ui/Button";

import { Faq, FaqItem } from "@/components/sections/Faq";
import Image from "next/image";

const websitesFaq: FaqItem[] = [
  {
    id: 1,
    question: "Ile trwa stworzenie strony lub sklepu internetowego?",
    answer: "Czas realizacji zależy od zakresu projektu, liczby podstron lub produktów oraz stopnia skomplikowania. Prostsze strony powstają zazwyczaj w kilka tygodni, bardziej rozbudowane projekty (np. sklepy z integracjami) wymagają więcej czasu. Na początku współpracy jasno określamy etapy i harmonogram, żebyś wiedział, czego się spodziewać.",
  },
  {
    id: 2,
    question: "Czy będę mógł samodzielnie edytować stronę lub sklep?",
    answer: "Tak. Tworzymy projekty w oparciu o narzędzia umożliwiające samodzielne zarządzanie treścią, ofertą, produktami czy aktualnościami.",
  },
  {
    id: 3,
    question: "Czy strona lub sklep będą działać na telefonach?",
    answer: "Tak. Strona działa płynnie na telefonach, tabletach i komputerach, a użytkownik może wygodnie przejść cały proces od zapoznania się z ofertą po kontakt lub zakup,",
  },
  {
    id: 4,
    question: "Czy mogę zintegrować stronę lub sklep z innymi narzędziami?",
    answer: "Tak. Integrujemy strony i sklepy m.in. z systemami płatności, kurierskimi, CRM, narzędziami marketingowymi i analitycznymi. Dzięki temu wszystko działa jako jeden spójny system.",
  },
  {
    id: 5,
    question: "Czy pomagacie po wdrożeniu strony?",
    answer: "Tak. Strona to nie jednorazowy projekt, możemy wspierać Cię w jej rozwoju, optymalizacji i dalszych działaniach marketingowych. Decyzja o dalszej współpracy zawsze należy do Ciebie.",
  },
  {
    id: 6,
    question: "Czy muszę mieć przygotowane własne treści przed startem?",
    answer: "Nie. Możemy pomóc w uporządkowaniu treści, struktury strony oraz przygotowaniu materiałów. Prowadzimy Cię przez cały proces, żeby projekt nie zatrzymał się na etapie braku materiałów.",
  },
  {
    id: 7,
    question: "Czy możecie przejąć istniejącą stronę lub sklep i je poprawić?",
    answer: "Tak. Często pracujemy na istniejących projektach. Analizujemy je, wskazujemy problemy i proponujemy konkretne zmiany, które mogą poprawić ich działanie.",
  },
];

export default function WebsitesServices() {
  return (
    <main className="flex-1 bg-white">

      {/* ═══════════════════════════════════════════════════
          1. HERO
      ═══════════════════════════════════════════════════ */}
      <section className="relative bg-navy-950 pt-[140px] pb-24 lg:pt-[180px] lg:pb-[100px] overflow-hidden min-h-[600px] flex items-center w-[calc(100%-20px)] mx-auto my-[10px] rounded-[20px]">
        {/* Grid pattern */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px]" />
        {/* Glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-500/10 blur-[100px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none z-0" />

        <div className="max-w-container mx-auto px-5 lg:px-8 relative z-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 items-center">

            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-8"
            >
              <h1 className="text-[42px] lg:text-[56px] font-bold text-white leading-[1.05] tracking-[-0.03em] max-w-[520px]">
                Tworzenie stron i sklepów internetowych
              </h1>
              <p className="text-[17px] text-white/80 leading-[1.7] max-w-[500px]">
                Projektujemy i wdrażamy nowoczesne serwisy internetowe zorientowane na konwersję. Skutecznie łączymy design, technologię i biznes, abyś sprzedawał więcej i szybciej.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <Button href="/kontakt" size="md">Darmowa wycena</Button>
                <Button href="#realizacje" size="md">Zobacz realizacje</Button>
              </div>
            </motion.div>

            {/* Right Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full max-w-[500px] mx-auto lg:mr-0 lg:ml-auto"
            >
              <div className="w-full aspect-[16/10] bg-navy-900 border border-white/10 rounded-[16px] overflow-hidden relative z-10 flex flex-col">
                <div className="h-8 bg-navy-950 border-b border-white/10 flex items-center px-4 gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-600" />
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-600" />
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-600" />
                  <div className="mx-auto w-1/3 h-4 bg-white/5 rounded-md" />
                </div>
                <div className="flex-1 p-6 flex flex-col gap-4">
                  <div className="w-3/4 h-5 bg-brand-600/60 rounded-md" />
                  <div className="w-1/2 h-3 bg-white/10 rounded-md" />
                  <div className="mt-4 grid grid-cols-3 gap-3">
                    <div className="h-20 bg-white/5 rounded-lg border border-white/5" />
                    <div className="h-20 bg-white/5 rounded-lg border border-white/5" />
                    <div className="h-20 bg-white/5 rounded-lg border border-white/5" />
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -left-8 -bottom-8 bg-navy-800 border border-white/10 rounded-2xl p-4 flex items-center gap-4 shadow-card z-20">
                <div className="w-12 h-12 bg-brand-500/20 rounded-full flex items-center justify-center text-brand-500 font-bold text-[22px]">%</div>
                <div>
                  <p className="text-white font-bold text-[18px] leading-tight">+120%</p>
                  <p className="text-gray-400 text-[12px] uppercase tracking-wider font-mono">Konwersji</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          2. FUNDAMENT SPRZEDAŻY
      ═══════════════════════════════════════════════════ */}
      <section className="bg-white py-[100px] lg:py-[120px]">
        <div className="max-w-container mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] gap-12 lg:gap-16 items-center">

            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <h2 className="text-[36px] lg:text-[48px] font-bold text-ink-900 leading-[1.1] max-w-[650px]">
                Strona internetowa to fundament sprzedaży
              </h2>
              <div className="text-[17px] text-gray-600 leading-[1.7] max-w-[650px] flex flex-col gap-6">
                <p>
                  Większość firm nie ma problemu z ruchem na stronie - problem zaczyna się dopiero po kliknięciu. Klienci wchodzą, patrzą, odchodzą. Budżet marketingowy jest wydawany, a sprzedaż nie rośnie, bo procesy na stronie nie działają.
                </p>
                <p>
                  Tworzymy strony i sklepy internetowe tak, aby były integralną częścią Twojego biznesu. Każdy element: od struktury strony, przez ścieżki użytkowników, aż po integracje z narzędziami jest projektowany w oparciu o dane, cele biznesowe i potrzeby klientów. Naszym celem jest sprawić, żeby marketing nie był kosztem, lecz inwestycją.
                </p>
              </div>
            </motion.div>

            {/* Right: Stat Cards Overlapping */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative w-full flex flex-col items-end"
            >
              <div className="bg-navy-950 rounded-[16px] p-8 w-full max-w-[320px] z-10 relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-brand-500/20 blur-[40px] rounded-full pointer-events-none" />
                <p className="text-gray-400 text-[12px] uppercase tracking-widest font-mono mb-2">Czy wiesz, że...</p>
                <div className="text-[64px] font-bold text-brand-500 leading-none mb-2">62%</div>
                <p className="text-white text-[15px] leading-relaxed">ruchu w internecie pochodzi z urządzeń mobilnych?</p>
              </div>

              <div className="bg-white border border-gray-100 rounded-[16px] p-6 w-[90%] max-w-[300px] shadow-card z-20 -mt-12 mr-6 lg:mr-12">
                <p className="text-gray-600 text-[14px] leading-relaxed">
                  W dzisiejszych czasach responsywna strona to podstawa. Responsywność nie ogranicza się do dopasowania ekranu - to spójne doświadczenie użytkownika na wszystkich urządzeniach.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          3. METRICS BAR
      ═══════════════════════════════════════════════════ */}
      <section className="bg-brand-600 py-12">
        <div className="max-w-container mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: "50+", label: "Zrealizowanych projektów" },
              { num: "+340%", label: "Wzrost konwersji" },
              { num: "4.9", label: "Ocena klientów", icon: <Star className="inline w-6 h-6 ml-1 -mt-1 fill-current text-white" /> },
              { num: "< 48h", label: "Czas odpowiedzi" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="text-[34px] font-bold text-white mb-1">
                  {stat.num}{stat.icon}
                </div>
                <div className="text-white/80 text-[13px] uppercase tracking-wider font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          4. STRONY I E-COMMERCE DLA FIRM (Zakładki)
      ═══════════════════════════════════════════════════ */}
      <section className="bg-navy-950 py-[100px] lg:py-[140px] relative overflow-hidden">
        <div className="max-w-container mx-auto px-5 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-[36px] lg:text-[48px] font-bold text-white mb-6">
              Strony internetowe i e-commerce dla firm
            </h2>
            <p className="text-[17px] text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Tworzymy profesjonalne strony firmowe, sklepy internetowe oraz landing pages, które porządkują ofertę i prowadzą użytkownika do konkretnego działania. W wielu przypadkach problem nie polega na braku ruchu - klienci trafiają na stronę, ale coś po drodze sprawia, że nie decydują się na kontakt lub zakup. Dlatego analizujemy cały proces i projektujemy strony tak, żeby usuwały te bariery.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16 items-start">

            {/* Left Nav */}
            <div className="flex flex-col gap-3">
              {[
                { num: "01", title: "Zrozumienie branży i klienta" },
                { num: "02", title: "Doświadczenie użytkownika UX/UI" },
                { num: "03", title: "Responsywność" },
                { num: "04", title: "Optymalizacja pod SEO / AI" },
                { num: "05", title: "Kontrola nad treścią" },
                { num: "06", title: "Bezpieczeństwo i niezawodność" },
                { num: "07", title: "Integracje z narzędziami", active: true },
                { num: "08", title: "Rozwój i optymalizacja" },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-6 p-5 rounded-[12px] cursor-pointer transition-all ${
                    item.active
                      ? "bg-white/5 border border-white/10"
                      : "hover:bg-white/[0.02] border border-transparent"
                  }`}
                >
                  <span className={`font-mono text-[16px] font-bold ${item.active ? "text-brand-500" : "text-gray-600"}`}>{item.num}</span>
                  <span className={`text-[16px] font-bold ${item.active ? "text-white" : "text-gray-400"}`}>{item.title}</span>
                </div>
              ))}
            </div>

            {/* Right Feature Card */}
            <div className="bg-navy-800 rounded-[20px] p-10 lg:p-14 border border-white/10 relative overflow-hidden min-h-[360px] flex flex-col justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(30,144,255,0.15),transparent_70%)] pointer-events-none" />

              <h3 className="text-[32px] font-bold text-white mb-6 relative z-10">Integracje z narzędziami</h3>
              <p className="text-[17px] text-gray-300 leading-relaxed mb-6 relative z-10">
                Strona internetowa lub sklep często są częścią większego ekosystemu narzędzi w firmie. Dlatego integrujemy ją z narzędziami, które wspierają sprzedaż i zarządzanie biznesem.
              </p>

              <ul className="flex flex-col gap-4 relative z-10 mb-6">
                {[
                  "Płatności online (BLIK, Przelewy24, PayPal)",
                  "Systemy kurierskie i logistyczne",
                  "Systemy magazynowe",
                  "CRM i narzędzia do zarządzania klientami",
                  "Analityka marketingowa i sprzedażowa",
                  "Narzędzia do automatyzacji procesów"
                ].map((li, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand-500/20 flex items-center justify-center border border-brand-500/30 text-brand-500 shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-white text-[15px]">{li}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[17px] text-gray-300 leading-relaxed mb-8 relative z-10">
                Dzięki temu strona lub sklep działają jako elementy spójnego systemu, a nie osobne narzędzia.
              </p>

              <div className="mt-auto relative z-10">
                <Button href="/kontakt" size="md">Darmowa Konsultacja</Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          5. TECHNOLOGIE
      ═══════════════════════════════════════════════════ */}
      <section className="bg-white py-[100px] lg:py-[140px]">
        <div className="max-w-container mx-auto px-5 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-[36px] lg:text-[48px] font-bold text-ink-900 mb-6">
              Technologie, na których tworzymy strony internetowe
            </h2>
            <p className="text-[17px] text-gray-600 leading-relaxed">
              W zależności od skali projektu, potrzeb biznesowych oraz planów rozwoju dobieramy technologię, która najlepiej sprawdzi się w danym przypadku. Tworzymy zarówno strony firmowe, jak i sklepy internetowe - od prostych i elastycznych rozwiązań po bardziej zaawansowane systemy dopasowane do specyficznych procesów biznesowych.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "WordPress",
                desc: "Najpopularniejszy system zarządzania treścią na świecie. Pozwala łatwo zarządzać stroną, aktualizować treści i rozwijać ją wraz z rozwojem firmy. Idealny dla firm, które potrzebują profesjonalnej strony internetowej z możliwością samodzielnej edycji treści.",
                icon: <LayoutTemplate />,
                tags: ["PHP", "MySQL", "REST API"],
                mainTag: "Strony internetowe",
                color: "#009EF6"
              },
              {
                title: "WooCommerce",
                desc: "Elastyczne rozwiązanie dla firm, które chcą połączyć stronę internetową z funkcjonalnością sklepu. Pozwala łatwo zarządzać produktami, zamówieniami oraz integracjami z płatnościami i systemami sprzedaży.",
                icon: <ShoppingCart />,
                tags: ["PHP", "WordPress", "Stripe"],
                mainTag: "Sklep",
                color: "#7B54E0"
              },
              {
                title: "Shopify",
                desc: "Platforma e-commerce w modelu SaaS, która umożliwia szybkie uruchomienie i rozwijanie sklepu internetowego bez konieczności zarządzania infrastrukturą techniczną.",
                icon: <ShoppingBag />,
                tags: ["Liquid", "Storefront API", "Payments"],
                mainTag: "Sklep",
                color: "#96BF48"
              },
              {
                title: "Dedykowane sklepy internetowe",
                desc: "Rozwiązanie dla bardziej wymagających projektów, w których sklep musi być w pełni dopasowany do procesów biznesowych, integracji lub specyficznych funkcjonalności.",
                icon: <Terminal />,
                tags: ["React", "Node.js", "PostgreSQL"],
                mainTag: "Dedykowane",
                color: "#E5634B"
              },
            ].map((card, i) => (
              <div key={i} className="bg-white border border-gray-100 p-8 rounded-[16px] shadow-sm hover:shadow-card transition-shadow flex flex-col min-h-[220px]">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ color: card.color, backgroundColor: `${card.color}15` }}>
                      {card.icon}
                    </div>
                    <h3 className="text-[24px] font-bold text-ink-900">{card.title}</h3>
                  </div>
                  <span className="text-[12px] font-bold tracking-wider uppercase px-3 py-1 rounded-md font-mono" style={{ color: card.color, backgroundColor: `${card.color}10`, border: `1px solid ${card.color}30` }}>
                    {card.mainTag}
                  </span>
                </div>
                <p className="text-[16px] text-gray-600 leading-relaxed mb-6 flex-1">{card.desc}</p>
                <div className="flex gap-2">
                  {card.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-gray-50 text-gray-600 text-[12px] font-bold tracking-wider uppercase rounded-md border border-gray-100 font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          6. NASZE REALIZACJE
      ═══════════════════════════════════════════════════ */}
      <section id="realizacje" className="bg-navy-950 py-[100px]">
        <div className="max-w-container mx-auto px-5 lg:px-8">
          <h2 className="text-[36px] lg:text-[48px] font-bold text-white mb-16 text-center">
            Nasze realizacje
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Sklep online — branża fashion",
                tech: "WooCommerce + WordPress",
                tags: ["E-commerce", "SEO", "Mobile"],
                tagColor: "#017BD0",
                metric: "+280%",
                metricLabel: "wzrost konwersji"
              },
              {
                title: "Strona firmowa — usługi B2B",
                tech: "WordPress + Custom theme",
                tags: ["B2B", "Lead gen", "CMS"],
                tagColor: "#7B54E0",
                metric: "×3.4",
                metricLabel: "więcej zapytań"
              },
              {
                title: "Landing page — kampania Ads",
                tech: "Next.js + React",
                tags: ["Landing", "Ads", "A/B test"],
                tagColor: "#1DA462",
                metric: "2.1%→6.8%",
                metricLabel: "konwersja"
              }
            ].map((card, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="rounded-[16px] overflow-hidden border border-white/5 bg-navy-900 flex flex-col group cursor-pointer"
              >
                {/* WINDOW MOCKUP */}
                <div className="bg-navy-950 aspect-[4/3] w-full p-4 flex flex-col relative border-b border-white/5 overflow-hidden">
                  {/* SIMPLE GRAY DOTS */}
                  <div className="flex gap-2 mb-6">
                    <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  </div>
                  
                  {/* PLACEHOLDER SKELETON */}
                  <div className="flex-1 flex flex-col gap-3 px-2">
                    <div className="w-full h-24 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors" />
                    <div className="w-3/4 h-3 bg-white/5 rounded-full group-hover:bg-white/10 transition-colors" />
                    <div className="w-1/2 h-3 bg-white/5 rounded-full group-hover:bg-white/10 transition-colors" />
                    
                    <div className="mt-auto grid grid-cols-2 gap-3 pb-4">
                       <div className="h-16 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors" />
                       <div className="h-16 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors" />
                    </div>
                  </div>

                  {/* METRIC BADGE */}
                  <div className="absolute bottom-4 right-4 bg-navy-800 border border-white/10 rounded-xl p-3 shadow-2xl z-10 backdrop-blur-md">
                    <div className="text-[18px] font-bold text-white leading-none mb-1">{card.metric}</div>
                    <div className="text-[9px] font-mono text-white/70 uppercase tracking-wider">{card.metricLabel}</div>
                  </div>
                </div>

                {/* INFO SECTION */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-[20px] font-bold text-white mb-2">{card.title}</h3>
                  <div className="text-[11px] font-mono text-gray-400 mb-6">{card.tech}</div>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {card.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md"
                        style={{ 
                          backgroundColor: `${card.tagColor}15`, 
                          color: card.tagColor, 
                          border: `1px solid ${card.tagColor}30` 
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-14">
            <p className="text-[16px] text-white font-normal font-inter">Porozmawiajmy o Twoim projekcie</p>
            <div className="shrink-0">
              <Button href="/kontakt" size="md">Darmowa konsultacja</Button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          7. DLACZEGO WARTO
      ═══════════════════════════════════════════════════ */}
      <section className="bg-white py-[100px] lg:py-[140px]">
        <div className="max-w-container mx-auto px-5 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[36px] lg:text-[48px] font-bold text-ink-900">
              Dlaczego warto zbudować z nami stronę?
            </h2>
          </div>

          {/* Top highlight card */}
          <div className="bg-navy-950 rounded-[20px] p-10 lg:p-14 mb-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(30,144,255,0.15),transparent_60%)] pointer-events-none" />
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] items-center gap-8 relative z-10">
              <div>
                <p className="font-mono text-brand-400 text-[12px] uppercase tracking-widest mb-4">Najczęstszy zysk naszych klientów</p>
                <h3 className="text-[32px] lg:text-[40px] font-bold text-white mb-4 leading-tight">
                  Lepsze wykorzystanie budżetu marketingowego
                </h3>
                <p className="text-[17px] text-gray-300 leading-relaxed max-w-[600px]">
                  Każda złotówka wydana na reklamy trafia na stronę, która jest zaprojektowana do konwersji. Zamiast przepalać budżet, zaczynacie sprzedawać.
                </p>
              </div>
              <div className="shrink-0">
                <Button href="/kontakt" size="md">Bezpłatna wycena</Button>
              </div>
            </div>
          </div>

          {/* 6 Benefits grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { num: "01", title: "Niezależność", desc: "Masz pełny dostęp do danych, kodów źródłowych i narzędzi. Nie wiążemy Cię na siłę." },
              { num: "02", title: "Skalowalność", desc: "Tworzymy platformy gotowe na wzrost ruchu i integracje z nowymi rozwiązaniami." },
              { num: "03", title: "Własny kanał sprzedaży", desc: "Budujesz niezależność od platform marketplace, gdzie płacisz wysokie prowizje." },
              { num: "04", title: "Bezpieczna technologia", desc: "Korzystamy z najnowszych i najbezpieczniejszych frameworków." },
              { num: "05", title: "Pełne wsparcie", desc: "Po wdrożeniu nadal jesteśmy do Twojej dyspozycji w sprawach administracyjnych." },
              { num: "06", title: "Partnerstwo biznesowe", desc: "Doradzamy i szukamy optymalizacji na każdym etapie projektu." },
            ].map((b, i) => (
              <div key={i} className="bg-gray-50 border border-gray-100 p-6 rounded-[12px] flex flex-col gap-3 hover:border-brand-200 transition-colors">
                <span className="font-mono text-[12px] text-brand-500 font-bold">{b.num}</span>
                <h4 className="font-bold text-ink-900 text-[18px]">{b.title}</h4>
                <p className="text-[14px] text-gray-600 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>

          {/* Blue band */}
          <div className="mt-8 bg-brand-600 rounded-[16px] px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-[30px] font-bold text-white mb-2">Partnerskie podejście</h3>
              <p className="font-inter text-white/80 text-[20px] leading-relaxed max-w-2xl">nie jesteśmy tylko wykonawcą, wspólnie pracujemy nad rozwojem Twojego biznesu</p>
            </div>
            <div className="shrink-0">
              <Button href="/kontakt" size="md">POROZMAWIAJMY</Button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          8. FAQ
      ═══════════════════════════════════════════════════ */}
      <Faq questions={websitesFaq} />



    </main>
  );
}
