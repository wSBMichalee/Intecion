"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Smartphone, Zap, Shield, RefreshCw, BarChart3, Users, ChevronRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

import { Faq, FaqItem } from "@/components/sections/Faq";

const mobileFaq: FaqItem[] = [
  {
    id: 1,
    question: "Jak długo trwa stworzenie aplikacji mobilnej?",
    answer: "Czas zależy od zakresu funkcji i typu aplikacji. Standardowo prostą aplikację można wdrożyć w 6–12 tygodni, bardziej rozbudowane projekty mogą trwać do kilku miesięcy. Zawsze ustalamy realistyczny harmonogram przed rozpoczęciem pracy."
  },
  {
    id: 2,
    question: "Na jaki system tworzycie aplikacje?",
    answer: "Tworzymy aplikacje na Android i iOS, zarówno natywnie (np. Android), jak i w technologii Flutter (cross-platform). Dzięki temu jedna wersja może działać na obu systemach jednocześnie."
  },
  {
    id: 3,
    question: "Czy aplikacja będzie działać na starszych urządzeniach?",
    answer: "Dobieramy technologie i konfiguracje tak, żeby aplikacja była responsywna i działała płynnie na większości obecnych modeli smartfonów i tabletów, zachowując bezpieczeństwo i wydajność."
  },
  {
    id: 4,
    question: "Czy mogę samodzielnie aktualizować treści w aplikacji?",
    answer: "Tak. W zależności od typu aplikacji dajemy dostęp do panelu CMS, w którym możesz edytować treści, zdjęcia, produkty czy dane użytkowników"
  },
  {
    id: 5,
    question: "Czy aplikacja może współpracować z moim sklepem i CRM?",
    answer: "Tak. Integrujemy aplikacje z systemami płatności, sklepami, magazynami i narzędziami analitycznymi, tak żeby wszystkie procesy działały płynnie i wszystkie dane były w jednym miejscu."
  },
  {
    id: 6,
    question: "Czy tworzycie aplikacje dla różnych branż?",
    answer: "Tak. Nasze doświadczenie obejmuje sklepy, usługi lokalne, platformy subskrypcyjne, edukacyjne i wiele innych. Każdą aplikację projektujemy indywidualnie, dopasowując ją do specyfiki branży i potrzeb użytkownika."
  },
  {
    id: 7,
    question: "Czy aplikacja będzie bezpieczna dla danych użytkowników?",
    answer: "Tak. Stosujemy najlepsze praktyki bezpieczeństwa i szyfrowania danych, zgodnie z wymogami prawnymi i branżowymi standardami. Masz pełen wgląd w to, jakie dane są przetwarzane."
  }
];

const appExamples = [
  {
    id: "zakupowe",
    tabLabel: "Aplikacje zakupowe",
    tabDesc: "pełna oferta produktów, konto użytkownika, szybkie zakupy i ponawianie zamówień",
    title: "Aplikacje zakupowe",
    desc: "Lojalnościowe, sprzedażowe, oferty, szybkie zakupy, płatności, promocje i obsługa klienta. Skracamy drogę od zainteresowania do zakupu do absolutnego minimum.",
    accent: "#017BD0",
    featuresTitle: "Kluczowe funkcje",
    featuresLabel: "Zacznijmy od prostej aplikacji",
    features: [
      "Koszyk i checkout",
      "Płatności BLIK / PayPal",
      "Historia zamówień",
      "Powiadomienia push o promocjach"
    ]
  },
  {
    id: "rezerwacje",
    tabLabel: "Aplikacje do rezerwacji",
    tabDesc: "umawianie wizyt, wybór terminów, zarządzanie rezerwacjami np. dla branży beauty, medycznej, fitness czy usług lokalnych",
    title: "Aplikacje do rezerwacji",
    desc: "Umawianie wizyt, usług lub terminów, zarządzanie dostępnością i komunikacją z klientem. Koniec z telefonami i arkuszami kalkulacyjnymi.",
    accent: "#7B54E0",
    featuresTitle: "Kluczowe funkcje",
    featuresLabel: "Zacznijmy od prostej aplikacji",
    features: [
      "Kalendarz dostępności",
      "Automatyczne przypomnienia",
      "Zarządzanie wizytami",
      "Oceny i opinie"
    ]
  },
  {
    id: "lojalnosciowe",
    tabLabel: "Aplikacje lojalnościowe",
    tabDesc: "programy punktowe, rabaty, historia zakupów, indywidualne oferty",
    title: "Aplikacje lojalnościowe",
    desc: "Punkty, statusy, kupony, rabaty, historia zakupów i regularny kontakt z klientem. Buduj lojalność i zwiększaj wartość każdego klienta.",
    accent: "#E5634B",
    featuresTitle: "Kluczowe funkcje",
    featuresLabel: "Zacznijmy od prostej aplikacji",
    features: [
      "System punktów i nagród",
      "Kupony i rabaty personalizowane",
      "Historia i statystyki",
      "Gamifikacja i statusy"
    ]
  },
  {
    id: "edukacyjne",
    tabLabel: "Aplikacje edukacyjne",
    tabDesc: "dostęp do materiałów, lekcji, postępów użytkownika np. szkolenia, kursy online, platformy wiedzy",
    title: "Aplikacje edukacyjne",
    desc: "Moduły kursowe, bazy wiedzy, powiadomienia, dostęp do materiałów, postępy i praca własna. Nauka dostępna zawsze i wszędzie.",
    accent: "#1DA462",
    featuresTitle: "Kluczowe funkcje",
    featuresLabel: "Zacznijmy od prostej aplikacji",
    features: [
      "Moduły i lekcje wideo",
      "Quizy i sprawdziany",
      "Śledzenie postępów",
      "Offline access do materiałów"
    ]
  }
];

export default function MobileAppsServices() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <main className="flex-1 bg-white">

      {/* ═══════════════════════════════════════════════════
          1. HERO
      ═══════════════════════════════════════════════════ */}
      <section className="relative bg-navy-950 pt-[140px] pb-24 lg:pt-[180px] lg:pb-[100px] overflow-hidden min-h-[600px] flex items-center w-[calc(100%-20px)] mx-auto my-[10px] rounded-[20px]">
        {/* Grid pattern */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px]" />
        {/* Glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-500/10 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none z-0" />

        <div className="max-w-container mx-auto px-5 lg:px-8 relative z-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 items-center">

            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="flex flex-col gap-7"
            >
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full w-fit">
                <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
                <span className="text-white text-[11px] font-bold tracking-widest font-mono uppercase">Aplikacje mobilne</span>
              </div>

              <h1 className="text-[42px] lg:text-[58px] font-bold text-white leading-[1.05] tracking-[-0.03em] max-w-[800px]">
                Tworzenie aplikacji mobilnych
              </h1>

              <p className="text-[17px] text-gray-400 leading-[1.7] max-w-[500px]">
                Projektujemy aplikacje mobilne na IOS i Android dla firm, które chcą uporządkować procesy, poprawić doświadczenie klientów lub stworzyć własne, niezależne narzędzie do sprzedaży i obsługi.
              </p>

              <div className="flex flex-col gap-2 mt-2">
                <Button href="/kontakt" size="md">Darmowa konsultacja</Button>
                <span className="text-gray-500 text-[13px] font-mono ml-1">Dowiedz się czy aplikacja ma sens dla Twojego biznesu</span>
              </div>
            </motion.div>

            {/* Right — phone mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative flex justify-center lg:justify-end"
            >
              {/* Phone frame */}
              <div className="relative w-[220px] lg:w-[260px]">
                <div className="w-full aspect-[9/19] bg-navy-900 border-2 border-white/15 rounded-[36px] overflow-hidden shadow-glow flex flex-col relative">
                  {/* Notch */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-navy-950 rounded-full z-10" />
                  {/* Screen content */}
                  <div className="flex-1 bg-navy-900 flex flex-col pt-10">
                    {/* App header bar */}
                    <div className="h-12 bg-navy-950/80 border-b border-white/5 flex items-center px-5">
                      <div className="w-6 h-6 rounded-full bg-brand-600/40 mr-3" />
                      <div className="w-20 h-2.5 bg-white/20 rounded" />
                    </div>
                    {/* Content */}
                    <div className="flex-1 p-4 flex flex-col gap-3">
                      <div className="w-full h-28 bg-brand-600/20 border border-brand-500/20 rounded-xl flex items-center justify-center">
                        <Smartphone className="w-10 h-10 text-brand-400/60" />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="h-16 bg-white/5 rounded-lg border border-white/5" />
                        <div className="h-16 bg-white/5 rounded-lg border border-white/5" />
                      </div>
                      <div className="w-3/4 h-2.5 bg-white/10 rounded" />
                      <div className="w-1/2 h-2.5 bg-white/5 rounded" />
                    </div>
                    {/* Bottom nav */}
                    <div className="h-14 border-t border-white/5 flex items-center justify-around px-4">
                      {[0, 1, 2, 3].map((i) => (
                        <div key={i} className={`w-6 h-6 rounded-md ${i === 0 ? "bg-brand-600" : "bg-white/10"}`} />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -right-12 top-1/3 bg-navy-800 border border-white/10 rounded-xl p-3 shadow-card z-20 flex items-center gap-3">
                  <div className="w-8 h-8 bg-brand-500/20 rounded-lg flex items-center justify-center text-brand-400 shrink-0">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-[13px] leading-none">iOS & Android</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          2. KIEDY APLIKACJA MOBILNA MA SENS (biała)
      ═══════════════════════════════════════════════════ */}
      <section className="bg-white py-[100px] lg:py-[130px]">
        <div className="max-w-container mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-start">

            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <h2 className="text-[36px] lg:text-[48px] font-bold text-ink-900 leading-[1.1]">
                Kiedy aplikacja mobilna ma sens?
              </h2>
              <p className="text-[17px] text-gray-600 leading-[1.7]">
                Nie każda firma potrzebuje aplikacji - i to mówimy wprost. Stworzenie aplikacji mobilnej ma sens, w przypadku gdy:
              </p>
            </motion.div>

            {/* Right — numbered list */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              {[
                { num: "1", text: "twoi klienci regularnie wracają i potrzebują szybkiego, wygodnego dostępu do usług lub produktów" },
                { num: "2", text: "chcesz skrócić drogę użytkownika do wykonania konkretnej akcji (np. zakup, rezerwacja, zamówienie, kontakt)" },
                { num: "3", text: "zależy Ci na stałym kontakcie z użytkownikiem (np. powiadomienia, konto użytkownika, historia działań)" },
                { num: "4", text: "Twoja oferta wymaga częstych interakcji lub personalizacji doświadczenia" },
                { num: "5", text: "chcesz stworzyć własne środowisko, do którego użytkownik będzie wracał, zamiast korzystać wyłącznie ze strony lub zewnętrznych platform" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-6 border-t border-gray-100 py-6 last:border-b last:border-gray-100">
                  <span className="font-mono font-bold text-[32px] text-brand-600 leading-none shrink-0 w-8 text-right">{item.num}</span>
                  <p className="text-[16px] text-gray-700 leading-[1.7] pt-1">{item.text}</p>
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          3. KIEDY FIRMY DECYDUJĄ SIĘ NA APLIKACJĘ (niebieski banner)
      ═══════════════════════════════════════════════════ */}
      <section className="bg-brand-600 py-16 lg:py-20">
        <div className="max-w-container mx-auto px-5 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex flex-col gap-4 max-w-2xl">
              <h2 className="text-[30px] lg:text-[40px] font-bold text-white leading-[1.1]">
                Kiedy firmy decydują się na aplikację
              </h2>
              <p className="text-[17px] text-white/80 leading-[1.7]">
                Wiele firm inwestuje w marketing, reklamy i strony internetowe, a mimo to użytkownicy przychodzą, ale nie wykonują kluczowej akcji: nie kupują. Problem rzadko leży w samych reklamach, często w tym, że klient nie ma wygodnej drogi do celu. Strona może być dobrze zaprojektowana , ale korzystanie z niej często wymaga przechodzenia przez kilka ekranów, logowania czy wypełniania formularzy.
              </p>
            </div>
            <div className="shrink-0 flex flex-col gap-2">
              <span className="text-white/60 text-[13px] font-mono text-center">Zobacz, czy Twój case pasuje - porozmawiajmy</span>
              <Button href="/kontakt" size="md">Darmowa konsultacja</Button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          4. JAKIE KORZYŚCI DAJE APLIKACJA (ciemna)
      ═══════════════════════════════════════════════════ */}
      <section className="bg-navy-950 py-[100px] lg:py-[130px]">
        <div className="max-w-container mx-auto px-5 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[36px] lg:text-[48px] font-bold text-white mb-6">
              Jakie korzyści daje aplikacja 
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Zap, title: "Wygoda i intuicyjność obsługi", desc: "aplikacja oferuje personalizowany interfejs dopasowany do użytkownika, dzięki czemu korzystanie z niej jest szybkie, proste i przyjemne" },
              { icon: Users, title: "Większe zaangażowanie użytkownika", desc: "powiadomienia, konta użytkowników i spersonalizowane treści sprawiają, że wraca częściej" },
              { icon: Smartphone, title: "Szybka ścieżka do działania", desc: "klient ma wszystko pod ręką: konto, zamówienia, rezerwacje, historię działań" },
              { icon: Shield, title: "Pełna kontrola nad doświadczeniem", desc: "nie jesteś zależny od zewnętrznych stron ani marketplace’ów, sam decydujesz, co widzi klient" },
              { icon: RefreshCw, title: "Efektywna komunikacja z klientem", desc: "szybkie powiadomienia, promocje i aktualizacje zwiększają konwersję i lojalność" },
              { icon: BarChart3, title: "Integracja z innymi systemami", desc: "aplikacja może łączyć się ze sklepem, CRM czy narzędziami analitycznymi, aby wszystkie dane były w jednym miejscu" },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bg-navy-900 border border-white/5 rounded-[16px] p-7 flex flex-col gap-4 hover:border-brand-500/20 transition-colors"
              >
                <div className="w-11 h-11 bg-brand-500/15 rounded-xl flex items-center justify-center text-brand-400 shrink-0">
                  <card.icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white text-[18px] leading-tight">{card.title}</h3>
                <p className="text-gray-400 text-[15px] leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          5. PRZYKŁADY APLIKACJI (carousel/tabs)
      ═══════════════════════════════════════════════════ */}
      <section className="bg-[#0D0D12] py-[100px] lg:py-[130px] border-t border-white/5">
        <div className="max-w-container mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-12 lg:gap-24 items-start">
            
            {/* Left Column (Static) */}
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-6">
                <h2 className="text-[36px] lg:text-[48px] font-bold text-white leading-[1.1]">
                  Przykłady aplikacji, które możemy stworzyć
                </h2>
                <p className="text-[17px] text-gray-400 leading-[1.7]">
                  Projektujemy aplikacje na IOS i Andorid, dopasowane do tego, jak użytkownik korzysta z Twojej usługi lub produktu. Każdy projekt zaczynamy od zrozumienia, jak aplikacja ma działać w praktyce, dopiero później dobieramy jej formę i funkcjonalności. Dla przykładu, są to:
                </p>
              </div>

              <div className="flex flex-col gap-1">
                {appExamples.map((app, idx) => {
                  const isActive = activeTab === idx;
                  return (
                    <button
                      key={app.id}
                      onClick={() => setActiveTab(idx)}
                      className={`text-left p-5 rounded-xl transition-all border ${
                        isActive
                          ? "bg-white/10 border-white/10 shadow-lg"
                          : "bg-transparent border-transparent hover:bg-white/5"
                      }`}
                    >
                      <h3 className="font-bold text-white text-[18px] mb-2">{app.tabLabel}</h3>
                      <p className={`text-[15px] leading-relaxed transition-colors ${
                        isActive ? "text-gray-300" : "text-gray-500"
                      }`}>
                        {app.tabDesc}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Column (Dynamic content) */}
            <div className="relative min-h-[500px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-navy-950 rounded-2xl p-10 lg:p-16 border border-white/5 flex flex-col h-full"
                >
                  <h3 className="text-[30px] font-bold text-white mb-4">
                    {appExamples[activeTab].title}
                  </h3>
                  <p className="text-[17px] text-gray-400 leading-[1.7] mb-12">
                    {appExamples[activeTab].desc}
                  </p>

                  <div className="mt-auto flex flex-col gap-6">
                    <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full w-fit">
                      <span 
                        className="w-2 h-2 rounded-full shrink-0" 
                        style={{ backgroundColor: appExamples[activeTab].accent }}
                      />
                      <span className="text-white text-[12px] font-bold tracking-widest font-mono uppercase">
                        {appExamples[activeTab].featuresLabel}
                      </span>
                    </div>

                    <h4 className="text-[18px] font-bold text-white mb-2">
                      {appExamples[activeTab].featuresTitle}
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                      {appExamples[activeTab].features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <CheckCircle2 
                            className="w-5 h-5 shrink-0" 
                            style={{ color: appExamples[activeTab].accent }}
                          />
                          <span className="text-[16px] text-gray-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          6. TECHNOLOGIE (biała)
      ═══════════════════════════════════════════════════ */}
      <section className="bg-white py-[100px] lg:py-[130px]">
        <div className="max-w-container mx-auto px-5 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-[36px] lg:text-[48px] font-bold text-ink-900 mb-6">
              Technologie, z których korzystamy przy tworzeniu aplikacji
            </h2>
            <p className="text-[17px] text-gray-600 leading-[1.7]">
              Dobieramy technologię do funkcjonalności, skali projektu i planów rozwoju, tak, żeby aplikacja mobilna działała stabilnie i mogła być rozwijana bez ograniczeń.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              {
                title: "Flutter",
                badge: "Cross-platform",
                desc: "pozwala tworzyć aplikacje na Androida i iOS jednocześnie, co przyspiesza wdrożenie i obniża koszt rozwoju",
                tags: ["Dart", "iOS", "Android", "Web"],
              },
              {
                title: "Django",
                badge: "Backend",
                desc: "odpowiada za logikę aplikacji, dane użytkowników i integracje, zapewnia stabilne działanie całego systemu „od środka”",
                tags: ["Python", "REST API", "PostgreSQL", "Redis"],
              },
            ].map((tech, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-[16px] p-8 shadow-sm hover:shadow-card transition-shadow flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-[22px] font-bold text-ink-900">{tech.title}</h3>
                      <span className="px-2.5 py-1 bg-brand-50 text-brand-600 text-[11px] font-bold font-mono rounded-full border border-brand-100">
                        {tech.badge}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-[16px] text-gray-600 leading-relaxed flex-1">{tech.desc}</p>
                <div className="flex gap-2 flex-wrap">
                  {tech.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-gray-50 border border-gray-100 text-gray-600 text-[12px] font-bold font-mono rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-[17px] font-semibold text-ink-900">Aplikacje są publikowane w odpowiednich sklepach App Store i Google Play - zajmujemy się całym procesem wdrożenia.</p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          7. DLACZEGO KLIENCI DECYDUJĄ SIĘ NA WSPÓŁPRACĘ (biała)
      ═══════════════════════════════════════════════════ */}
      <section className="bg-gray-50 py-[100px] lg:py-[130px] border-t border-gray-100">
        <div className="max-w-container mx-auto px-5 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[36px] lg:text-[48px] font-bold text-ink-900">
              Dlaczego klienci decydują się na współpracę z nami?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { num: "01", title: "Dostosowanie do potrzeb Twojej branży", desc: "Nie tworzymy szablonów. Każda aplikacja jest projektowana od podstaw pod konkretny biznes, branżę i grupę docelową - z pełnym zrozumieniem celu, który ma osiągnąć." },
              { num: "02", title: "Kontrola i bezpieczeństwo", desc: "Pełna własność kodu, danych i infrastruktury. Zabezpieczenia klasy korporacyjnej: szyfrowanie, autoryzacja, audyty. Twoje dane zostają Twoje." },
              { num: "03", title: "Szybkie wdrożenie i skalowalność", desc: "MVP w tygodniach, nie miesiącach. Architektura, która rośnie razem z firmą - od pierwszych 100 do 100 000 użytkowników bez przebudowy od zera." },
              { num: "04", title: "Wsparcie po wdrożeniu", desc: "Nie znikamy po publikacji. Zapewniamy opiekę techniczną, monitoring, aktualizacje i rozwój funkcjonalności - jesteśmy partnerem na dłużej, nie jednorazowym wykonawcą." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white border border-gray-100 rounded-[14px] p-7 flex flex-col gap-3 hover:shadow-card hover:-translate-y-1 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-brand-50 rounded-lg flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-brand-600" />
                  </div>
                  <span className="font-mono text-[12px] text-brand-500 font-bold">{item.num}</span>
                </div>
                <h3 className="font-bold text-ink-900 text-[18px] leading-tight">{item.title}</h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          8. FAQ
      ═══════════════════════════════════════════════════ */}
      <Faq questions={mobileFaq} />



    </main>
  );
}
