"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Faq, FaqItem } from "@/components/sections/Faq";
import { CheckCircle2 } from "lucide-react";

const faqData: FaqItem[] = [
  {
    id: 1,
    question: "Co to jest outsourcing IT?",
    answer: (
      <>
        <p>Outsourcing IT to przekazanie zarządzania systemami, siecią i bezpieczeństwem ekspertom zewnętrznym.</p>
        <p className="mt-2">Dzięki temu Twoja firma ma profesjonalne wsparcie IT na co dzień, bez konieczności zatrudniania własnego zespołu.</p>
      </>
    )
  },
  {
    id: 2,
    question: "Na czym polega codzienne wsparcie IT?",
    answer: (
      <>
        <p className="mb-2">Codzienne wsparcie obejmuje m.in.:</p>
        <ul className="list-disc pl-5 mb-2 space-y-1">
          <li>monitoring systemów 24/7</li>
          <li>reagowanie na problemy zanim wpłyną na pracę</li>
          <li>wsparcie dla pracowników</li>
          <li>aktualizacje i rozwój infrastruktury</li>
        </ul>
        <p>Celem jest stabilne działanie firmy i brak przestojów</p>
      </>
    )
  },
  {
    id: 3,
    question: "Jak zapewniacie bezpieczeństwo danych?",
    answer: (
      <>
        <p className="mb-2">Zabezpieczamy:</p>
        <ul className="list-disc pl-5 mb-2 space-y-1">
          <li>sieć firmową (firewalle, VPN)</li>
          <li>dostęp do danych (kontrola uprawnień, logowanie)</li>
          <li>backupy i Disaster Recovery</li>
          <li>monitoring zagrożeń i reagowanie na ataki</li>
        </ul>
        <p>Dzięki temu minimalizujemy ryzyko utraty danych i awarii</p>
      </>
    )
  },
  {
    id: 4,
    question: "Czy outsourcing IT sprawdzi się w małej firmie?",
    answer: "Tak. Dostosowujemy wsparcie do potrzeb Twojej firmy, od kilku komputerów po rozbudowaną sieć i serwery"
  },
  {
    id: 5,
    question: "Czy korzystanie z outsourcingu IT jest drogie?",
    answer: "Nie. Koszt outsourcingu jest zwykle niższy niż utrzymanie własnego zespołu IT, a dodatkowo zapewnia dostęp do ekspertów i bezpieczeństwo bez przestojów"
  },
  {
    id: 6,
    question: "Jak szybko reagujecie w razie problemu?",
    answer: "Nasze zespoły monitorują systemy na co dzień, a w przypadku awarii reagujemy natychmiast, aby nie przerywać pracy firmy"
  },
  {
    id: 7,
    question: "Czy tracę kontrolę nad swoimi systemami?",
    answer: (
      <>
        <p className="mb-2">Nie. Wciąż masz pełny wgląd w działanie systemów, dostęp do danych i raportów.</p>
        <p className="mb-2">My działamy w tle, pilnując bezpieczeństwa i stabilności, a Ty widzisz, co jest robione i jakie są efekty.</p>
        <p>Outsourcing IT nie oznacza oddania kontroli, oznacza mniej problemów i więcej czasu dla Ciebie</p>
      </>
    )
  }
];

export default function OutsourcingITPage() {
  return (
    <main className="flex-1 bg-white">

      {/* ═══════════════════════════════════════════════════
          1. HERO
      ═══════════════════════════════════════════════════ */}
      <section className="relative bg-navy-950 pt-[140px] pb-24 lg:pt-[180px] lg:pb-[100px] overflow-hidden min-h-[600px] flex items-center">
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-500/10 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none z-0" />

        <div className="max-w-container mx-auto px-5 lg:px-8 relative z-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-6 lg:max-w-2xl"
            >
              <h1 className="text-[44px] md:text-[56px] lg:text-[72px] font-bold text-white leading-[1.1] tracking-tight">
                Outsourcing IT, który odciąża Twój biznes
              </h1>
              <p className="text-[17px] text-gray-400 leading-[1.7] max-w-[550px]">
                Dbamy o Twoje systemy, bezpieczeństwo i ciągłość działania, żebyś mógł skupić się na biznesie
              </p>

              <div className="flex flex-col gap-2 mt-4">
                <Button href="/kontakt" size="lg">Darmowa konsultacja</Button>
                <span className="text-gray-400 text-[14px] ml-2 mt-1">Sprawdź, jak możemy wspomóc Twój zespół</span>
              </div>
            </motion.div>

            {/* Right mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full max-w-[500px] mx-auto lg:mr-0 lg:ml-auto"
            >
              <div className="w-full bg-[#0D0D12] border border-white/10 rounded-[16px] overflow-hidden flex flex-col shadow-2xl">
                {/* Header */}
                <div className="flex justify-between items-center p-4 border-b border-white/10">
                  <span className="font-mono text-[11px] font-bold text-white uppercase">IT Support Monitor</span>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-[#4ADE80]"></div>
                    <span className="text-white text-[10px] uppercase font-bold tracking-widest">live</span>
                  </div>
                </div>
                {/* Stats */}
                <div className="p-4 grid grid-cols-2 gap-4">
                  <div className="bg-[#1C1C24] p-3 rounded-lg border border-white/5">
                    <div className="font-mono text-[11px] font-bold text-white uppercase mb-1">Sieć LAN</div>
                    <div className="font-mono text-[10px] font-bold text-[#4ADE80]">ONLINE</div>
                  </div>
                  <div className="bg-[#1C1C24] p-3 rounded-lg border border-white/5">
                    <div className="font-mono text-[11px] font-bold text-white uppercase mb-1">Serwery</div>
                    <div className="font-mono text-[10px] font-bold text-[#4ADE80]">ONLINE</div>
                  </div>
                  <div className="bg-[#1C1C24] p-3 rounded-lg border border-white/5">
                    <div className="font-mono text-[11px] font-bold text-white uppercase mb-1">Backup</div>
                    <div className="font-mono text-[10px] font-bold text-[#4ADE80]">Dziś 03:00</div>
                  </div>
                  <div className="bg-[#1C1C24] p-3 rounded-lg border border-white/5">
                    <div className="font-mono text-[11px] font-bold text-white uppercase mb-1">Email</div>
                    <div className="font-mono text-[10px] font-bold text-[#4ADE80]">AKTYWNY</div>
                  </div>
                </div>
                {/* Chart placeholder */}
                <div className="p-4 border-t border-white/10">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-mono text-[10px] font-bold text-white uppercase">Czas reakcji — ostatnie 7 dni</span>
                    <span className="text-white text-[10px]">Avg. czas reakcji <strong className="text-[#009EF6] text-[13px] ml-1">&lt; 15min</strong></span>
                  </div>
                  <div className="flex justify-between items-end h-[60px] px-2 gap-2">
                    {[10, 15, 12, 18, 14, 20, 15].map((h, i) => (
                      <div key={i} className="flex-1 bg-brand-600/60 rounded-t-sm relative" style={{ height: `${h}%` }}>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between items-center mt-2 px-2">
                    {["Pon", "Wt", "Śr", "Czw", "Pt", "Sob", "Nd"].map((day, i) => (
                      <span key={i} className="font-mono text-[9px] font-bold text-white uppercase">{day}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          2. DOBRZE DZIAŁAJĄCE IT
      ═══════════════════════════════════════════════════ */}
      <section className="bg-navy-950 py-[100px] lg:py-[130px] border-t border-white/5">
        <div className="max-w-container mx-auto px-5 lg:px-8">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-[36px] md:text-[48px] lg:text-[60px] font-bold text-white leading-[1.1]">
              Dobrze działające IT to takie, którego nie zauważasz
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              { title: "Systemy działają", desc: "Infrastruktura monitorowana nieprzerwanie - awarie wychwytywane, zanim cokolwiek zauważysz.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/><path d="m9 10 2 2 4-4"/></svg> },
              { title: "Dane są bezpieczne", desc: "Konta, dostępy i kopie zapasowe pod stałą kontrolą. Zero nieprzyjemnych niespodzianek.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg> },
              { title: "Problemy rozwiązane zawczasu", desc: "Reagujemy zanim problem zatrzyma Twój zespół - nie po fakcie, kiedy szkody są już widoczne.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg> }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#111116] border border-white/5 p-8 rounded-2xl flex flex-col gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center shrink-0 text-brand-500">
                  {item.icon}
                </div>
                <h3 className="text-[24px] lg:text-[28px] font-normal text-white">{item.title}</h3>
                <p className="text-[16px] text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          3. DLACZEGO BRAK WSPARCIA BLOKUJE ROZWÓJ
      ═══════════════════════════════════════════════════ */}
      <section className="bg-navy-950 py-[100px] lg:py-[130px] border-t border-white/5">
        <div className="max-w-container mx-auto px-5 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Col */}
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-6">
                <h2 className="text-[40px] md:text-[52px] lg:text-[64px] font-bold text-white leading-[1.1]">
                  Dlaczego brak wsparcia IT blokuje rozwój firmy
                </h2>
                <p className="text-[18px] lg:text-[22px] text-gray-300 leading-relaxed max-w-xl">
                  Większość firm nie zauważa, jak bardzo codzienna praca jest zależna od sprawnie działającego IT. Dopiero gdy systemy przestają działać, problem staje się widoczny - wtedy zaczyna się chaos.
                </p>
              </div>
              <div className="flex-1 min-h-[300px] relative w-full max-w-[450px]">
                {/* SVG Illustration - person at laptop wireframe */}
                <svg viewBox="0 0 500 400" className="w-full h-full text-[#017BD0] opacity-80" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {/* Glowing background dots */}
                  <circle cx="250" cy="200" r="150" fill="currentColor" fillOpacity="0.05" stroke="none" />
                  
                  {/* Desk & Environment */}
                  <path d="M50 320 L450 320" strokeWidth="3" />
                  <path d="M120 320 L120 380 M380 320 L380 380" opacity="0.5" />
                  
                  {/* Laptop */}
                  <path d="M280 320 L240 240 L340 240 L320 320 Z" strokeWidth="3" />
                  <path d="M255 260 L325 260 M265 280 L315 280 M275 300 L305 300" opacity="0.4" strokeWidth="3" />
                  
                  {/* Person Silhouette */}
                  <path d="M150 220 C150 160, 180 130, 210 130 C240 130, 250 160, 230 210 C210 260, 170 280, 170 320" strokeWidth="3" />
                  <circle cx="210" cy="90" r="30" strokeWidth="3" />
                  {/* Arms */}
                  <path d="M210 150 L250 210 L280 280" strokeWidth="3" />
                  
                  {/* Holographic / Tech elements flowing from laptop */}
                  <path d="M300 220 C320 150, 380 120, 420 80" strokeDasharray="6 6" opacity="0.6" />
                  <path d="M330 200 C360 160, 410 160, 450 130" strokeDasharray="6 6" opacity="0.6" />
                  <circle cx="420" cy="80" r="6" fill="currentColor" />
                  <circle cx="450" cy="130" r="4" fill="currentColor" />
                  <rect x="380" y="50" width="20" height="20" rx="4" strokeWidth="2" opacity="0.6" />
                  <polygon points="400,160 410,180 390,180" strokeWidth="2" opacity="0.6" />
                </svg>
              </div>
            </div>

            {/* Right Col */}
            <div className="flex flex-col gap-0 justify-center">
              {[
                { num: "01", title: "Brak osoby odpowiedzialnej za IT", desc: "nikt nie monitoruje systemów ani nie reaguje na problemy na bieżąco" },
                { num: "02", title: "Problemy są rozwiązywane na szybko", desc: "tymczasowe poprawki zamiast trwałych rozwiązań, co powoduje powtarzające się awarie" },
                { num: "03", title: "Brak monitoringu i kontroli", desc: "nie wiesz, co działa, co przestaje działać i gdzie kryją się ryzyka" },
                { num: "04", title: "Awarie blokują pracę zespołu", desc: "pracownicy tracą czas, projekty opóźniają się, a biznes staje w miejscu" },
                { num: "05", title: "Nikt nie pilnuje bezpieczeństwa danych", desc: "ryzyko utraty wrażliwych informacji i ataków z zewnątrz rośnie" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-5 border-b border-white/10 py-6 last:border-0"
                >
                  <div className="text-[20px] font-bold text-[#017BD0] mt-1 shrink-0">{item.num}</div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-[20px] lg:text-[24px] font-bold text-white leading-tight">{item.title}</h3>
                    <p className="text-[16px] lg:text-[18px] text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="max-w-4xl border-t border-white/10 pt-10 flex items-center gap-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><path d="m9 18 6-6-6-6"/></svg>
            <p className="text-[18px] lg:text-[20px] text-white leading-relaxed">
              Problemy IT to stracony czas, stres i ryzyko dla całej firmy. Właśnie dlatego oferujemy stałe wsparcie w ramach outsourcingu IT, które sprawia, że Twoje systemy działają stabilnie i bez zakłóceń, a Ty możesz skupić się na rozwoju biznesu, nie na gaszeniu pożarów.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          4. ZAJMIEMY SIĘ TWOIM IT NA CO DZIEŃ
      ═══════════════════════════════════════════════════ */}
      <section className="bg-[#F5F5F5] py-[100px] lg:py-[130px]">
        <div className="max-w-container mx-auto px-5 lg:px-8">
          
          <div className="bg-navy-950 rounded-[32px] p-8 lg:p-16 mb-12 shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/10 blur-[100px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none z-0" />
            
            <div className="relative z-10 mb-12 max-w-4xl">
              <h2 className="text-[40px] md:text-[52px] lg:text-[64px] font-bold text-white leading-[1.1] mb-6">
                Zajmiemy się Twoim IT na co dzień
              </h2>
              <p className="text-[18px] lg:text-[22px] text-gray-300 leading-relaxed max-w-3xl">
                Nie musisz martwić się awariami, bezpieczeństwem czy chaosem w systemach. My pilnujemy wszystkiego, tak aby Twoja firma działała sprawnie.
              </p>
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-8 lg:gap-16 items-end">
              <div className="flex flex-col gap-6">
                <div className="bg-[#009EF6]/10 border border-[#009EF6]/20 rounded-2xl p-6 flex flex-col gap-1">
                  <span className="text-[32px] font-bold text-[#009EF6] leading-none">24/7</span>
                  <span className="text-[16px] text-white">monitoring</span>
                </div>
                <div className="bg-[#009EF6]/10 border border-[#009EF6]/20 rounded-2xl p-6 flex flex-col gap-1">
                  <span className="text-[32px] font-bold text-[#009EF6] leading-none">&lt; 15min</span>
                  <span className="text-[16px] text-white">czas reakcji</span>
                </div>
                <div className="bg-[#009EF6]/10 border border-[#009EF6]/20 rounded-2xl p-6 flex flex-col gap-1">
                  <span className="text-[32px] font-bold text-[#009EF6] leading-none">247</span>
                  <span className="text-[16px] text-white">problemów rozwiązanych</span>
                </div>
              </div>
              
              <div className="h-full flex flex-col justify-end">
                <span className="font-mono text-[12px] font-bold text-gray-400 uppercase mb-6 block">Aktywność monitoringu — 24h</span>
                <div className="flex items-end gap-1.5 h-[200px] mb-3">
                  {[10, 20, 15, 30, 25, 40, 50, 45, 60, 55, 70, 65, 80, 75, 90, 85, 70, 60, 50, 40, 30, 25, 15, 10].map((h, i) => (
                    <div key={i} className="flex-1 bg-brand-600/80 rounded-t-sm hover:bg-brand-400 transition-colors" style={{ height: `${h}%` }}></div>
                  ))}
                </div>
                <div className="flex justify-between items-center px-1">
                  <span className="font-mono text-[10px] font-bold text-gray-400 uppercase">00:00</span>
                  <span className="font-mono text-[10px] font-bold text-gray-400 uppercase">12:00</span>
                  <span className="font-mono text-[10px] font-bold text-gray-400 uppercase">24:00</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              { num: "1", title: "Monitoring i szybka reakcja", desc: "sprawdzamy systemy 24/7, reagujemy zanim drobny problem stanie się dużą awarią" },
              { num: "2", title: "Bezpieczeństwo danych i sieci", desc: "zabezpieczamy dostęp do informacji, konfigurujemy firewalle, VPN i backupy, dzięki czemu ryzyko utraty danych lub ataku z zewnątrz jest minimalne" },
              { num: "3", title: "Wsparcie dla zespołu", desc: "pomagamy pracownikom w codziennym korzystaniu z narzędzi i systemów, szybka pomoc przy problemach i szkolenia, żeby każdy mógł pracować bez blokad" },
              { num: "4", title: "Rozwój i skalowanie infrastruktury", desc: "dodajemy nowe systemy, konta, funkcje i sprzęt tak, żeby infrastruktura rosła razem z Twoją firmą, bez chaosu i przestojów" },
              { num: "5", title: "Pełna kontrola i transparentność", desc: "masz dostęp do wszystkich danych, raportów i działań, wiesz dokładnie, co robimy i jakie efekty to przynosi" }
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-[#009EF6]/20 shadow-sm p-8 rounded-2xl flex flex-col gap-4 relative overflow-hidden"
              >
                <div className="w-10 h-10 rounded-lg bg-[#009EF6]/10 flex items-center justify-center text-[#009EF6] font-mono font-bold text-[16px] mb-2">
                  {card.num}
                </div>
                <h3 className="text-[20px] lg:text-[24px] font-bold text-ink-900">{card.title}</h3>
                <p className="text-[16px] lg:text-[18px] text-gray-600 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-[#009EF6] rounded-[24px] p-8 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <h3 className="text-[28px] lg:text-[36px] font-bold text-white">Zajmiemy się tym za Ciebie!</h3>
            <a href="/kontakt" className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#009EF6] font-mono font-bold uppercase tracking-widest text-[16px] rounded-full hover:bg-gray-50 transition-colors shrink-0">Darmowa konsultacja</a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          5. CO OBEJMUJE OUTSOURCING IT? (CZĘŚĆ 1)
      ═══════════════════════════════════════════════════ */}
      <section className="bg-white py-[100px] lg:py-[130px]">
        <div className="max-w-container mx-auto px-5 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[40px] md:text-[52px] lg:text-[64px] font-bold text-ink-900 leading-[1.1]">
              Co obejmuje outsourcing IT?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {[
              { num: "1", title: "Wsparcie i administracja", items: ["bieżąca pomoc dla zespołu", "rozwiązywanie problemów technicznych", "zarządzanie systemami"] },
              { num: "2", title: "Bezpieczeństwo", items: ["zabezpieczenie systemów i sieci", "monitoring zagrożeń", "zarządzanie dostępami"] },
              { num: "3", title: "Monitoring i utrzymanie", items: ["stała kontrola działania systemów", "szybka reakcja na awarie", "zapobieganie problemom"] },
              { num: "4", title: "Backup i ciągłość działania", items: ["regularne kopie zapasowe", "odzyskiwanie danych", "minimalizowanie przestojów"] },
              { num: "5", title: "Zarządzanie urządzeniami", items: ["konfiguracja komputerów i laptopów", "zabezpieczenie urządzeń", "kontrola dostępu"] }
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`border border-[#009EF6]/20 bg-white shadow-sm rounded-[20px] p-8 flex flex-col gap-6 ${i === 4 ? "md:col-span-2 md:max-w-md md:mx-auto w-full" : ""}`}
              >
                <div className="w-10 h-10 rounded-lg bg-[#009EF6]/10 flex items-center justify-center text-[#009EF6] font-mono font-bold text-[16px]">
                  {card.num}
                </div>
                <h3 className="text-[24px] lg:text-[28px] font-bold text-ink-900">{card.title}</h3>
                <ul className="flex flex-col gap-3">
                  {card.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2.5 shrink-0"></div>
                      <span className="text-[16px] lg:text-[18px] text-gray-600 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          6. CO OBEJMUJE OUTSOURCING IT? (NARZĘDZIA)
      ═══════════════════════════════════════════════════ */}
      <section className="bg-navy-950 py-[100px] lg:py-[130px]">
        <div className="max-w-container mx-auto px-5 lg:px-8">
          <div className="mb-16 max-w-4xl text-center mx-auto">
            <h2 className="text-[40px] md:text-[52px] lg:text-[64px] font-bold text-white leading-[1.1] mb-6">
              Co obejmuje outsourcing IT?
            </h2>
            <p className="text-[18px] lg:text-[22px] text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Obsługujemy najpopularniejsze rozwiązania do współpracy, bezpieczeństwa, komunikacji i przechowywania danych. Twoja firma działa płynnie, a zespół korzysta z narzędzi dobrze skonfigurowanych i bezpiecznych.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[
              { 
                category: "Narzędzia, na których pracuje Twój zespół", 
                tools: ["Microsoft 365", "Google Workspace"], 
                desc: "To podstawowe środowisko pracy w firmie - poczta, dokumenty, kalendarze i dostęp do plików",
                items: ["zakładamy i konfigurujemy konta pracowników", "zarządzamy dostępem do danych i dokumentów", "rozwiązujemy bieżące problemy (np. poczta, logowanie, dostęp do plików)", "dbamy o porządek i bezpieczeństwo danych"]
              },
              { 
                category: "Komunikacja i współpraca w firmie", 
                tools: ["Gmail", "Outlook", "Teams", "Google Meet", "Zoom", "Calendly", "Asana"], 
                desc: "To systemy, które odpowiadają za codzienną komunikację zespołu - wiadomości, spotkania itd.",
                items: ["dbamy o działanie poczty firmowej", "konfigurujemy i wspieramy komunikację w Teams", "rozwiązujemy problemy użytkowników", "pilnujemy, żeby komunikacja była bezpieczna i uporządkowana"]
              },
              { 
                category: "Dokumenty i dostęp do informacji", 
                tools: ["SharePoint", "Google Drive", "OneDrive", "Dropbox", "SEAFILE"], 
                desc: "To miejsce, w którym pliki firmowe są przechowywane i udostępniane wewnątrz zespołu",
                items: ["kontrolujemy kto ma dostęp do dokumentów", "porządkujemy strukturę plików", "zabezpieczamy udostępnianie danych", "pomagamy zespołowi w pracy na dokumentach"]
              },
              { 
                category: "Systemy i infrastruktura firmy", 
                tools: ["OVHcloud", "Azure", "AWS"], 
                desc: "To zaplecze techniczne, czyli miejsce, gdzie działają systemy, aplikacje i dane",
                items: ["monitorujemy działanie systemów 24/7", "reagujemy na błędy i awarie", "konfigurujemy backupy i ciągłość działania", "dbamy o bezpieczeństwo infrastruktury"]
              }
            ].map((block, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-navy-950 rounded-[20px] p-8 lg:p-10 flex flex-col gap-6"
              >
                <h3 className="text-[18px] lg:text-[22px] font-medium text-white">{block.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {block.tools.map((tool, index) => (
                    <span key={index} className="font-mono text-[14px] lg:text-[16px] font-bold text-[#009EF6] bg-[#009EF6]/10 px-3 py-1 rounded-md">{tool}</span>
                  ))}
                </div>
                <p className="text-[16px] text-gray-300 leading-relaxed">{block.desc}</p>
                <ul className="flex flex-col gap-3 mt-4 border-t border-white/10 pt-6">
                  {block.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                      <span className="text-[16px] text-white leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto text-center border-t border-white/10 pt-10">
            <p className="text-[18px] lg:text-[20px] text-gray-300 leading-relaxed">
              Korzystacie z innych narzędzi lub systemów? <br/>Dobierzemy specjalistów dopasowanych do Waszego środowiska i sposobu pracy.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          7. KORZYŚCI DLA TWOJEJ FIRMY
      ═══════════════════════════════════════════════════ */}
      <section className="bg-white py-[100px] lg:py-[130px]">
        <div className="max-w-container mx-auto px-5 lg:px-8">
          
          <div className="bg-[#030305] rounded-[32px] p-8 lg:p-16 max-w-5xl mx-auto shadow-2xl relative overflow-hidden">
            {/* Glows inside black card */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-500/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none z-0" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-500/5 blur-[80px] rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none z-0" />

            <div className="relative z-10 text-center mb-16">
              <h2 className="text-[40px] md:text-[52px] lg:text-[64px] font-bold text-white leading-[1.1]">
                Korzyści dla Twojej firmy
              </h2>
            </div>

            <div className="relative z-10 flex flex-col gap-6 max-w-3xl mx-auto text-left mb-16">
              {[
                { text: "Brak przestojów" },
                { text: "Szybkie rozwiązywanie problemów" },
                { text: "Bezpieczeństwo danych" },
                { text: "Mniej stresu i chaosu" },
                { text: "Więcej czasu na rozwój biznesu" }
              ].map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-6 pb-6 border-b border-white/10 last:border-0 last:pb-0"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#009EF6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <div className="text-[20px] lg:text-[24px] text-white">{benefit.text}</div>
                </motion.div>
              ))}
            </div>

            <div className="relative z-10 flex flex-col items-center gap-6 border-t border-white/10 pt-10">
              <p className="text-[18px] lg:text-[20px] text-gray-300">Zadbajmy o IT w Twojej firmie</p>
              <Button href="/kontakt" size="lg">Darmowa konsultacja</Button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          8. POTRZEBUJESZ POUKŁADAĆ SYSTEMY?
      ═══════════════════════════════════════════════════ */}
      <section className="relative bg-navy-950 py-20 lg:py-24 border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/images/approach-bg.png')] bg-cover bg-center mix-blend-lighten opacity-30" />
          <div className="absolute inset-0 bg-navy-950/60" />
        </div>
        <div className="relative z-10 max-w-container mx-auto px-5 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-bold text-white leading-tight max-w-2xl">
            Potrzebujesz najpierw poukładać systemy i infrastrukturę IT?
          </h2>
          <a href="/uslugi/infrastruktura-it" className="inline-flex items-center justify-center px-8 py-4 bg-white text-navy-950 font-mono font-bold uppercase tracking-widest text-[16px] rounded-full hover:bg-gray-100 transition-colors shrink-0">Zobacz Infrastrukturę IT</a>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          9. FAQ
      ═══════════════════════════════════════════════════ */}
      <Faq questions={faqData} />

    </main>
  );
}
