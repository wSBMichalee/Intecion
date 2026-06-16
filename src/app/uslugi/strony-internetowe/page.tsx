"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Check, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ConsultationForm } from "@/components/sections/ConsultationForm";
import { Faq, FaqItem } from "@/components/sections/Faq";

const websitesFaq: FaqItem[] = [
  {
    id: 1,
    question: "Ile kosztuje stworzenie prostej strony internetowej?",
    answer: "Koszt stworzenia strony jest wyceniany indywidualnie i zależy od skomplikowania projektu, liczby podstron i funkcji. Zazwyczaj proste strony wizytówkowe zaczynają się od kilku tysięcy złotych.",
  },
  {
    id: 2,
    question: "Ile trwa stworzenie prostej strony internetowej?",
    answer: "Standardowy czas realizacji dla prostej strony wizytówkowej to zazwyczaj od 2 do 4 tygodni, w zależności od tego, jak szybko dostarczysz nam niezbędne materiały (teksty, zdjęcia) i na jakim poziomie akceptacji znajduje się projekt graficzny.",
  },
  {
    id: 3,
    question: "Jaki system zarządzania treścią (CMS) będzie najlepszy dla mojej strony?",
    answer: "Dobieramy CMS do konkretnych potrzeb. Dla większości stron wizytówkowych i firmowych świetnie sprawdza się zoptymalizowany WordPress. W przypadku bardziej skomplikowanych aplikacji dedykowanych lub e-commerce doradzamy dedykowane rozwiązania, Next.js lub platformy typu Shopify.",
  },
  {
    id: 4,
    question: "Czy moja strona będzie widoczna na urządzeniach mobilnych?",
    answer: "Tak! Każda tworzona przez nas strona jest w pełni responsywna (Mobile First). Oznacza to, że będzie idealnie dopasowywać się do rozdzielczości smartfonów, tabletów oraz komputerów stacjonarnych, zapewniając doskonałe doświadczenia użytkownikom.",
  },
  {
    id: 5,
    question: "Czy pomagacie przy wyborze hostingu i domeny?",
    answer: "Oczywiście. Doradzimy w wyborze najlepszego i najszybszego hostingu dla Twojej strony internetowej oraz przeprowadzimy przez proces rejestracji lub migracji domeny. Możemy również zająć się tym kompleksowo w ramach usługi wdrożenia.",
  },
  {
    id: 6,
    question: "Czy strona będzie widoczna w wynikach wyszukiwania Google (SEO)?",
    answer: "Tak. Architektura informacji oraz kod strony są przez nas tworzone zgodnie z najnowszymi wytycznymi Google. Dodatkowo zapewniamy podstawową optymalizację SEO (nagłówki, meta tagi, alt-y), by ułatwić stronie szybkie indeksowanie i zdobywanie wysokich pozycji.",
  },
  {
    id: 7,
    question: "Kto będzie odpowiadał za aktualizacje po wdrożeniu projektu?",
    answer: "Po oddaniu projektu oferujemy pakiety wsparcia technicznego, dzięki którym to my przejmujemy odpowiedzialność za regularne aktualizacje wtyczek, systemu CMS, kopie zapasowe i bezpieczeństwo Twojej witryny, byś Ty mógł skupić się na biznesie.",
  },
  {
    id: 8,
    question: "Czy możliwy jest rozwój strony o nowe funkcjonalności w przyszłości?",
    answer: "Jak najbardziej! Budujemy strony w sposób modułowy, co pozwala na łatwe ich skalowanie i dodawanie nowych funkcji (np. bloga, sklepu online, integracji z CRM) w dowolnym momencie, gdy Twoja firma będzie tego potrzebować.",
  },
];

export default function WebsitesServices() {
  return (
    <>
      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative bg-navy-950 pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden border-b border-white/5">
          {/* Background grid pattern */}
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          </div>
          <div className="absolute inset-0 z-0 bg-gradient-to-t from-navy-950 via-transparent to-brand-500/10 mix-blend-screen" />

          <div className="max-w-[1200px] mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-6"
              >
                <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full w-fit">
                  <span className="w-2 h-2 rounded-full bg-brand-500"></span>
                  <span className="text-white text-xs font-bold tracking-widest font-heading">STRONY INTERNETOWE</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
                  Tworzenie stron<br />i sklepów internetowych
                </h1>
                <p className="text-gray-400 font-body text-lg max-w-lg leading-relaxed">
                  Wykorzystujemy najnowsze technologie, by tworzyć strony, które nie tylko pięknie wyglądają, ale przede wszystkim - generują sprzedaż. Tworzymy stabilne, bezpieczne i szybkie strony internetowe oraz aplikacje webowe.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  <Button variant="primary">POROZMAWIAJMY</Button>
                  <Button variant="outline" className="text-white border-white/20 hover:bg-white/5 hover:border-white/40">
                    WYCEŃ PROJEKT
                  </Button>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative aspect-video w-full"
              >
                <div className="bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 w-full h-full">
                  [Hero Laptop Image]
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION: FUNDAMENT SPRZEDAŻY */}
        <section className="bg-white py-20 lg:py-32">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="flex flex-col gap-6"
              >
                <h2 className="text-3xl md:text-4xl font-black text-ink-900 leading-tight">
                  Strona internetowa to fundament sprzedaży
                </h2>
                <p className="text-brand-600 font-bold text-lg leading-relaxed">
                  W erze cyfrowej to właśnie od strony internetowej zależy, czy potencjalny klient zdecyduje się na zakup, czy ucieknie do konkurencji.
                </p>
                <p className="text-gray-600 leading-relaxed font-body">
                  Strony internetowe, które tworzymy to głównie narzędzia, które mają sprzedawać i pozyskiwać nowe kontakty do bazy. Przemyślana ścieżka użytkownika (UX/UI), nowoczesny design oraz optymalizacja pod kątem wyszukiwarek (SEO) to nasze priorytety.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="flex flex-col gap-6"
              >
                {/* Dark Card */}
                <div className="bg-navy-950 rounded-3xl p-8 lg:p-10 shadow-xl relative overflow-hidden border border-white/5 flex gap-6 items-start">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                  <div className="text-5xl lg:text-6xl font-black text-brand-400 flex-shrink-0">
                    62%
                  </div>
                  <p className="text-white text-base lg:text-lg font-body leading-relaxed pt-2 relative z-10">
                    użytkowników ocenia wiarygodność firmy na podstawie samej strony internetowej.
                  </p>
                </div>
                
                {/* White Card */}
                <div className="bg-gray-50 rounded-3xl p-8 lg:p-10 shadow-sm border border-gray-100 relative">
                  <div className="w-10 h-10 rounded-lg bg-brand-100 flex items-center justify-center text-brand-600 mb-6">
                    <Check className="w-5 h-5" />
                  </div>
                  <h3 className="text-ink-900 font-bold text-xl mb-4">Projektujemy i wdrażamy:</h3>
                  <ul className="flex flex-col gap-3">
                    {["Strony wizytówkowe", "Strony typu one-page", "Sklepy e-commerce", "Portale dedykowane"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-600 font-body">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* STATS BAND */}
        <section className="bg-brand-500 py-12">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-white/20">
              {[
                { number: "50+", label: "zrealizowanych projektów" },
                { number: "+340%", label: "średni wzrost zapytań" },
                { number: <div className="flex items-center gap-1">4.9 <Star className="w-7 h-7 fill-current text-current" /></div>, label: "średnia ocen klientów" },
                { number: "< 48h", label: "czas na wdrożenie zmian" }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center justify-center text-center px-4"
                >
                  <div className="text-3xl md:text-4xl font-black text-white mb-2">{stat.number}</div>
                  <div className="text-brand-100 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* DARK SECTION: STRONY INTERNETOWE I ECOMMERCE */}
        <section className="bg-navy-950 py-20 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(14,165,233,0.08),transparent_50%)]"></div>
          </div>
          
          <div className="max-w-[1200px] mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-black text-white mb-6"
              >
                Strony internetowe<br />i e-commerce dla firm
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-gray-400 font-body text-lg"
              >
                Skupiamy się na celach biznesowych, tworząc produkty cyfrowe dopasowane do Twoich potrzeb. Każdy projekt to dla nas osobne wyzwanie, w którym łączymy analitykę, technologię i design w jedną skuteczną całość.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-24">
              {/* Left: Tabs */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col gap-4"
              >
                <div className="flex flex-col border-l-2 border-white/10">
                  <div className="px-6 py-4 border-l-2 border-brand-500 -ml-[2px] bg-white/5 cursor-pointer">
                    <span className="text-white font-bold">Strony wizytówkowe</span>
                  </div>
                  <div className="px-6 py-4 text-gray-500 hover:text-gray-300 transition-colors cursor-pointer">
                    Landing page i lejki
                  </div>
                  <div className="px-6 py-4 text-gray-500 hover:text-gray-300 transition-colors cursor-pointer">
                    Sklepy e-commerce
                  </div>
                  <div className="px-6 py-4 text-gray-500 hover:text-gray-300 transition-colors cursor-pointer">
                    Dedykowane rozwiązania
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button variant="outline" className="text-brand-400 border-white/10 hover:bg-brand-500/10">
                    DARMOWA KONSULTACJA
                  </Button>
                </div>
              </motion.div>

              {/* Right: Feature Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="bg-navy-900 border border-white/5 rounded-2xl p-8 lg:p-12 shadow-2xl relative overflow-hidden h-full flex flex-col">
                  <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-500 to-transparent opacity-50"></div>
                  
                  <div className="w-12 h-12 bg-brand-500/10 rounded-xl flex items-center justify-center border border-brand-500/20 mb-6">
                    <div className="w-5 h-5 border-2 border-brand-500 rounded-sm"></div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Strony wizytówkowe
                  </h3>
                  
                  <p className="text-gray-400 font-body mb-8">
                    Zaprojektowane, by budować wizerunek profesjonalisty, budzić zaufanie wśród odbiorców i być fundamentem Twoich działań marketingowych.
                  </p>
                  
                  <ul className="flex flex-col gap-4 mb-10 flex-1">
                    {[
                      "RWD (dopasowanie do mobile i tablet)",
                      "Szybkość wczytywania poniżej 2 sek.",
                      "Optymalizacja SEO (wyższe pozycje w Google)",
                      "Integracja z narzędziami analitycznymi",
                      "Łatwy w obsłudze system CMS (WordPress)"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-300 font-body text-sm">
                        <div className="w-5 h-5 rounded-full bg-brand-500/20 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-brand-400" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-auto pt-6">
                    <Button variant="primary">DARMOWA KONSULTACJA</Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* WHITE SECTION: TECHNOLOGIE */}
        <section className="bg-white py-20 lg:py-32">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-black text-ink-900 mb-6"
              >
                Technologia, na których tworzymy strony internetowe
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-gray-600 font-body text-lg"
              >
                Nie idziemy na skróty. Dobieramy technologię odpowiednią do Twojego biznesu. Od zoptymalizowanych stron na systemie CMS po zaawansowane aplikacje.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {[
                { title: "React / Next.js", desc: "Budujemy błyskawiczne aplikacje PWA oraz zaawansowane sklepy i portale, które wymagają najwyższej wydajności, bezpieczeństwa i niestandardowych funkcji." },
                { title: "WordPress", desc: "Zoptymalizowany i lekki system CMS. Tworzymy na nim najszybsze strony wizytówkowe, dając Ci w 100% samodzielność w łatwej edycji treści." },
                { title: "Shopify", desc: "Dedykowane rozwiązania e-commerce B2B oraz B2C z możliwością pełnego skalowania i integracji z dowolnym systemem magazynowym lub ERP." },
                { title: "Niestandardowe i dedykowane", desc: "Strony internetowe i aplikacje skrojone na miarę. Używamy m.in. Node.js, PHP, Laravel, aby dostarczyć oprogramowanie spełniające konkretne wymogi biznesowe." }
              ].map((tech, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-gray-50 border border-gray-100 rounded-2xl p-8 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center border border-gray-100 mb-6 font-bold text-brand-600">
                    {tech.title.charAt(0)}
                  </div>
                  <h3 className="text-xl font-bold text-ink-900 mb-3">{tech.title}</h3>
                  <p className="text-gray-600 font-body text-sm leading-relaxed">{tech.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="text-center flex justify-center mt-6">
              <div className="inline-flex items-center gap-4 text-left max-w-xl">
                <div className="w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <ChevronRight className="w-6 h-6 text-brand-500" />
                </div>
                <div>
                  <p className="text-ink-900 font-bold text-lg leading-tight mb-1">
                    Nie wiesz, jaka technologia będzie najlepsza dla Twojej firmy?
                  </p>
                  <p className="text-gray-500 font-body text-sm cursor-pointer hover:text-brand-600 transition-colors">
                    Skontaktuj się z nami! Doradzimy najlepsze rozwiązania i omówimy możliwości.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DARK SECTION: NASZE REALIZACJE */}
        <section className="bg-navy-950 py-20 lg:py-32 border-t border-white/5">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-black text-white"
              >
                Nasze realizacje
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Tatoń - Strona Firmowa", category: "UX/UI • Development", id: 1 },
                { title: "Take2eu - E-commerce", category: "UX/UI • Sklep e-commerce", id: 2 },
                { title: "Klima-t - Sklep e-commerce", category: "UX/UI • Sklep e-commerce", id: 3 }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="aspect-[4/3] w-full mb-4">
                    <div className="bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 w-full h-full">
                      [Realizacja {item.id} Image]
                    </div>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-1 group-hover:text-brand-400 transition-colors">{item.title}</h3>
                  <p className="text-gray-500 font-body text-sm">{item.category}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 flex justify-center md:justify-end">
              <Button variant="outline" className="text-white border-white/20 hover:bg-white/5 hover:border-white/40">
                ZOBACZ PORTFOLIO
              </Button>
            </div>
          </div>
        </section>

        {/* WHITE SECTION: DLACZEGO WARTO */}
        <section className="bg-white py-20 lg:py-32">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-16">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-black text-ink-900 mb-8"
              >
                Dlaczego warto zbudować z nami stronę?
              </motion.h2>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-navy-950 rounded-3xl p-8 lg:p-12 mb-16 text-left grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center"
              >
                <div className="flex flex-col gap-4">
                  <h3 className="text-white font-bold text-2xl lg:text-3xl leading-tight">Wsparcie powdrożeniowe</h3>
                  <p className="text-gray-400 font-body">Zapewniamy szkolenie z obsługi CMS, wsparcie techniczne, regularne aktualizacje i kopie bezpieczeństwa.</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 lg:gap-8">
                  {[
                    { value: "48H", label: "max czas reakcji" },
                    { value: "30 DNI", label: "gwarancja" },
                    { value: "12 MSC", label: "opieki po wdrożeniu" }
                  ].map((stat, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 min-w-[140px] text-center flex flex-col gap-1">
                      <div className="text-brand-400 font-black text-2xl">{stat.value}</div>
                      <div className="text-gray-400 text-sm font-medium uppercase tracking-widest mt-2">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                { title: "Własny dedykowany kod", desc: "Nie używamy gotowców, które obciążają serwer. Tworzymy czysty i optymalny kod." },
                { title: "Szybkość i optymalizacja", desc: "Gwarantujemy błyskawiczne ładowanie strony i najwyższe wyniki w testach szybkości." },
                { title: "Skuteczność UX/UI", desc: "Strona będzie intuicyjna dla użytkowników i zoptymalizowana pod maksymalizację konwersji." },
                { title: "Możliwość pozycjonowania", desc: "Kod i struktura od razu gotowe na wysokie pozycje w wyszukiwarce Google." },
                { title: "Integracje dla e-commerce", desc: "Płynne łączenie sklepu z systemami ERP, kurierami i platformami płatności." },
                { title: "Gotowa na konwersje", desc: "Zoptymalizowane formularze i przyciski akcji, które realnie zwiększają liczbę zapytań." }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-brand-200 transition-colors"
                >
                  <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center text-brand-600 font-bold mb-6">
                    {i + 1}
                  </div>
                  <h3 className="font-bold text-ink-900 text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-600 font-body text-sm leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-brand-500 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6"
            >
              <div>
                <h3 className="text-white font-bold text-2xl mb-2">Masz pytania, pisz do nas</h3>
                <p className="text-brand-100 font-body">Odpowiadamy zazwyczaj w kilkanaście minut.</p>
              </div>
              <Button variant="secondary" className="bg-white text-brand-600 hover:bg-gray-50 flex-shrink-0">
                POROZMAWIAJMY
              </Button>
            </motion.div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <Faq questions={websitesFaq} />

        {/* FINAL CTA SECTION */}
        <ConsultationForm 
          label="ZAPYTAJ O WYCENĘ SWOJEJ STRONY"
          heading="Nie znalazłeś odpowiedzi? Umów darmową konsultację"
        />

      </main>
    </>
  );
}
