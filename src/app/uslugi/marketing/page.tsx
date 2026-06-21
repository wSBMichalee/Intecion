"use client";

import { motion } from "framer-motion";
import { Target, Search, BarChart3, TrendingUp, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

import { Faq, FaqItem } from "@/components/sections/Faq";

const marketingFaq: FaqItem[] = [
  {
    id: 1,
    question: "Czy moje kampanie reklamowe naprawdę przyciągną klientów, a nie tylko wygenerują ruch?",
    answer: "Tak. Tworzymy kampanie Google Ads i reklamy w social media dopasowane do Twojej grupy docelowej. Analizujemy cały lejek sprzedażowy, żeby każdy klik prowadził do zapytania lub zakupu"
  },
  {
    id: 2,
    question: "Ile czasu zajmuje zauważenie efektów kampanii i SEO?",
    answer: "W przypadku kampanii reklamowych efekty widoczne są zwykle w pierwszych tygodniach, przy SEO i pozycjonowaniu proces może trwać od kilku tygodni do kilku miesięcy, w zależności od konkurencji i zakresu działań. My raportujemy wyniki regularnie, abyś miał pełną kontrolę nad efektywnością działań"
  },
  {
    id: 3,
    question: "Czy tworzycie strategię marketingową?",
    answer: "Tworzymy strategię. Nie działamy wyłącznie wykonawczo, analizujemy Twój biznes, rynek i klientów, planujemy działania reklamowe i SEO tak, aby wspierały sprzedaż i dawały mierzalne efekty"
  },
  {
    id: 4,
    question: "Czy marketing może współpracować z moim CRM?",
    answer: "Tak. Integrujemy dane z systemów sprzedaży, aby ruch online, kampanie i SEO wspierały proces sprzedaży"
  },
  {
    id: 5,
    question: "Czy raporty marketingowe będą dla mnie zrozumiałe?",
    answer: "Tak. Przygotowujemy przejrzyste raporty pokazujące dane w prosty sposób, tak aby było widać wpływ marketingu na biznes."
  },
  {
    id: 6,
    question: "Czy mogę kontrolować wszystkie kanały w jednym miejscu?",
    answer: "Tak. Możemy zintegrować różne źródła danych, abyś widział wszystkie działania marketingowe w jednym systemie i wiedział, co działa najlepiej"
  },
  {
    id: 7,
    question: "Czy mogę połączyć marketing z systemem sprzedaży?",
    answer: "Tak. Integrujemy kampanie, strony internetowe i CRM, aby ruch online wspierał sprzedaż i nie ginął w procesie obsługi klienta"
  }
];

export default function MarketingServices() {
  return (
    <main className="flex-1 bg-white">

      {/* ═══════════════════════════════════════════════════
          1. HERO
      ═══════════════════════════════════════════════════ */}
      <section className="relative bg-navy-950 pt-[140px] pb-24 lg:pt-[180px] lg:pb-[100px] overflow-hidden min-h-[600px] flex items-center w-[calc(100%-20px)] mx-auto rounded-[20px]">
        {/* Grid pattern */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px]" />
        {/* Glow right */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-500/10 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none z-0" />

        <div className="max-w-container mx-auto px-5 lg:px-8 relative z-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 items-center">

            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="flex flex-col gap-7"
            >
              {/* Label pill */}
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full w-fit">
                <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
                <span className="text-white text-[11px] font-bold tracking-widest font-mono uppercase">Marketing i pozycjonowanie</span>
              </div>

              <h1 className="text-[42px] lg:text-[58px] font-bold text-white leading-[1.05] tracking-[-0.03em] max-w-[540px]">
                Marketing<br />i pozycjonowanie dla firm
              </h1>

              <p className="text-[17px] text-gray-400 leading-[1.7] max-w-[500px]">
                Rozwijaj swój biznes dzięki systemowym działaniom reklamowym i SEO. Skutecznie zbudujesz świadomość marki i dotrzesz do klientów z grupy B2B i B2C.
              </p>

              <div className="flex flex-col gap-2 mt-2">
                <Button href="/kontakt" size="md">Zapytaj o wycenę</Button>
                <span className="text-gray-500 text-[13px] font-mono ml-1">Darmowa wycena w 24h</span>
              </div>
            </motion.div>

            {/* Right — dashboard mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full max-w-[500px] mx-auto lg:mr-0 lg:ml-auto"
            >
              <div className="w-full aspect-[16/10] bg-navy-900 border border-white/10 rounded-[16px] overflow-hidden flex flex-col">
                {/* Browser bar */}
                <div className="h-8 bg-navy-950 border-b border-white/10 flex items-center px-4 gap-2 shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-600" />
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-600" />
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-600" />
                  <div className="mx-auto w-1/3 h-4 bg-white/5 rounded-md" />
                </div>
                {/* Dashboard body */}
                <div className="flex-1 p-5 flex flex-col gap-3">
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: "Widoczność organiczna", diff: "+184%" },
                      { label: "Koszt pozyskania", diff: "-41%" },
                      { label: "Konwersja z reklam", diff: "+63%" }
                    ].map((item, i) => (
                      <div key={i} className="bg-navy-800 border border-white/5 rounded-lg p-3 flex flex-col gap-1 justify-center text-center">
                        <span className="text-gray-500 text-[9px] font-mono uppercase tracking-wider line-clamp-1">{item.label}</span>
                        <span className="text-white font-bold text-[16px]">{item.diff}</span>
                      </div>
                    ))}
                  </div>
                  {/* Chart placeholder */}
                  <div className="flex-1 bg-navy-800 border border-white/5 rounded-lg relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 right-0 flex items-end gap-1 px-3 pb-3">
                      {[40, 55, 35, 70, 50, 80, 60, 90, 65, 85, 70, 95].map((h, i) => (
                        <div key={i} className="flex-1 bg-brand-600/60 rounded-t-sm" style={{ height: `${h}%` }} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          2. MARKETING JAKO SYSTEM (biała)
      ═══════════════════════════════════════════════════ */}
      <section className="bg-white py-[100px] lg:py-[130px]">
        <div className="max-w-container mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">

            {/* Left — sticky text */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6 lg:sticky lg:top-32"
            >
              <h2 className="text-[36px] lg:text-[48px] font-bold text-ink-900 leading-[1.1]">
                Marketing, który działa jako przemyślany system
              </h2>
              <p className="text-[17px] text-gray-600 leading-[1.7]">
                Działania marketingowe przynoszą efekty tylko wtedy, gdy są powiązane z tym, jak działa Twój biznes. Kampanie Ads, pozycjonowanie w Google (SEO)i widoczność w wyszukiwarkach AI (GEO) nie funkcjonują osobno, są częścią spójnego systemu, który prowadzi potencjalnych klientów od pierwszego kontaktu aż do zapytania lub zakupu.
              </p>
            </motion.div>

            {/* Right — 5 feature rows */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-2"
            >
              {[
                { icon: Search, title: "SEO & Widoczność", desc: "Organiczna obecność w Google - treści, techniczne SEO i linkowanie." },
                { icon: Target, title: "Kampanie Ads", desc: "Reklamy Google i Social Media zoptymalizowane pod konwersję." },
                { icon: BarChart3, title: "Analityka & Dane", desc: "Pełna widoczność wyników - co działa, co nie, gdzie skupić budżet." },
                { icon: TrendingUp, title: "Konwersja", desc: "Ścieżka od kliknięcia do zapytania - UX, landing pages, CTA." },
                { icon: CheckCircle2, title: "Optymalizacja", desc: "Ciągłe ulepszanie kampanii, treści i kanałów na podstawie danych." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-5 p-5 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center shrink-0 text-brand-600">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-ink-900 text-[18px] mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-[15px] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          3. REALNE WYNIKI (niebieski pasek)
      ═══════════════════════════════════════════════════ */}
      <section className="bg-brand-600 py-16 lg:py-20">
        <div className="max-w-container mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-white/20">
            {[
              { num: "+184%", title: "Wzrost ruchu organicznego", label: "Śr. wynik po 6 miesiącach SEO" },
              { num: "−41%", title: "Niższy koszt pozyskania", label: "Optymalizacja kampanii Ads" },
              { num: "+63%", title: "Wyższa konwersja", label: "Optymalizacja ścieżki klienta" },
              { num: "×2.8", title: "Zwrot z inwestycji", label: "Kampanie reklamowe B2B" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex flex-col px-8 py-6 lg:py-0 gap-2"
              >
                <div className="text-[42px] lg:text-[52px] font-bold text-white leading-none">{stat.num}</div>
                <div className="font-bold text-white text-[16px] leading-snug">{stat.title}</div>
                <div className="text-white/70 text-[13px] leading-relaxed max-w-[180px]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
          <p className="text-white/40 text-[11px] font-mono mt-10 text-center border-t border-white/20 pt-6">
            * Wyniki są reprezentatywne dla prowadzonych kampanii. Efekty mogą się różnić w zależności od branży, budżetu i stanu wyjściowego.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          4. NIE MUSISZ ZGADYWAĆ (ciemna)
      ═══════════════════════════════════════════════════ */}
      <section className="bg-navy-950 py-[100px] lg:py-[130px]">
        <div className="max-w-container mx-auto px-5 lg:px-8">
          <div className="flex flex-col gap-10 max-w-4xl">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <h2 className="text-[36px] lg:text-[52px] font-bold text-white leading-[1.1]">
                Nie musisz zgadywać, czy Twój marketing działa.<br />Powinieneś to widzieć
              </h2>
              <div className="flex flex-col gap-4 text-[17px] text-gray-400 leading-[1.7] max-w-3xl">
                <p>
                  Firmy coraz częściej inwestują w kampanie reklamowe i działania SEO, ale efekty tych działań bywają trudne do ocenienia. Ruch na stronie rośnie, kliknięcia są, a mimo to liczba kontaktów i zapytań nie przekłada się na wyniki biznesowe. Dzieje się tak, gdy marketing działa bez spójności z procesami sprzedażowymi, potrzebami klientów i celami firmy.
                </p>
                <p className="text-gray-300">
                  Sygnały, które pokazują, że marketing nie przynosi oczekiwanych efektów:
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col"
            >
              {[
                { num: "01", title: "Ruch nie zmienia się w kontakty", desc: "prowadzisz kampanie, ale klienci przychodzą i odchodzą, zanim nawiążą relację z Twoją firmą" },
                { num: "02", title: "Trudno powiązać działania z wynikami", desc: "przeglądasz raporty, wykresy i liczby, ale nie wiesz, co one oznaczają dla sprzedaży" },
                { num: "03", title: "Brak optymalizacji", desc: "działania marketingowe są wykonywane, ale nie są usprawniane w oparciu o dane" },
                { num: "04", title: "Brak spójności w działaniach", desc: "brak spójnej strategii łączącej różne kanały i działania z procesem sprzedaży" },
                { num: "05", title: "Poczucie marnowania czasu i budżetu", desc: "wydajesz pieniądze i poświęcasz czas na kontrolę działań, a efekty biznesowe nie rosną proporcjonalnie" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-6 border-t border-white/10 py-6 last:border-b last:border-white/10">
                  <div className="w-9 h-9 bg-brand-600 rounded-lg flex items-center justify-center text-white font-bold font-mono text-[13px] shrink-0">
                    {item.num}
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-bold text-white text-[17px] leading-snug">{item.title}</h3>
                    <p className="text-gray-400 text-[15px] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          5. DIAGRAM — ŁĄCZYMY KAMPANIE ADS, SEO I DANE (biała)
      ═══════════════════════════════════════════════════ */}
      <section className="bg-white py-[100px] lg:py-[130px]">
        <div className="max-w-container mx-auto px-5 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[36px] lg:text-[52px] font-bold text-ink-900 mb-6 max-w-3xl mx-auto leading-[1.1]"
          >
            Łączymy kampanie ads, SEO i dane w jeden spójny system
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[17px] text-gray-600 leading-[1.7] max-w-3xl mx-auto mb-16"
          >
            Wiele firm inwestuje w reklamy i SEO, a mimo to liczba zapytań i sprzedaży nie rośnie. Pokazujemy, gdzie marketing nie działa, łączymy działania z procesami sprzedażowymi i optymalizujemy je tak, aby ruch w sieci przekładał się na klientów
          </motion.p>

          {/* System diagram mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-navy-950 rounded-[20px] border border-white/5 p-10 lg:p-14 max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: "SEO / Content", color: "bg-brand-600", items: ["Słowa kluczowe", "Blogi i artykuły", "Link building", "AI Overviews"], statNum: "+184%", statTitle: "Wzrost ruchu organicznego", statDesc: "Śr. wynik po 6 miesiącach SEO" },
                { label: "Analityka & Data", color: "bg-purple-600", items: ["GA4 / Looker Studio", "Konwersje", "ROAS / CPL", "A/B testy"], statNum: "−41%", statTitle: "Niższy koszt pozyskania", statDesc: "Optymalizacja kampanii Ads" },
                { label: "Kampanie Ads", color: "bg-green-600", items: ["Google Ads", "Meta Ads", "LinkedIn Ads", "TikTok Ads"], statNum: "+63%", statTitle: "Wyższa konwersja", statDesc: "Optymalizacja ścieżki klienta" },
              ].map((col, i) => (
                <div key={i} className="bg-navy-900 border border-white/5 rounded-[14px] p-6 text-left flex flex-col">
                  <div className={`inline-flex items-center justify-center px-3 py-1.5 rounded-full ${col.color} mb-5 w-fit`}>
                    <span className="text-white font-bold font-mono text-[11px] tracking-wider">{col.label}</span>
                  </div>
                  <ul className="flex flex-col gap-2 mb-6 flex-1">
                    {col.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-gray-400 text-[14px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-white/10 mt-auto">
                    <div className="text-[28px] font-bold text-white mb-1 leading-none">{col.statNum}</div>
                    <div className="font-bold text-white text-[13px] mb-0.5">{col.statTitle}</div>
                    <div className="text-gray-500 text-[11px]">{col.statDesc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              <Button href="/kontakt" size="md">Zbuduj swój system marketingowy</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          6. SEO I POZYCJONOWANIE W AI (ciemna)
      ═══════════════════════════════════════════════════ */}
      <section className="bg-navy-950 py-[100px] lg:py-[130px] border-t border-white/5">
        <div className="max-w-container mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left text */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <h2 className="text-[36px] lg:text-[52px] font-bold text-white leading-[1.1]">
                SEO i pozycjonowanie w AI
              </h2>
              <p className="text-[17px] text-gray-400 leading-[1.7]">
                Pozycjonujemy serwisy dla biznesu, tworzymy i optymalizujemy portale, e-commerce oraz zaawansowane sklepy. Skupiamy się na frazach długiego ogona, semantyce i Topical Authority, dopasowując strony pod kątem generatywnego AI.
              </p>

              <div className="flex flex-wrap gap-2 my-2">
                {["Core Web Vitals", "Dane strukturalne", "E-E-A-T", "Treści pod AI", "Linkowanie wewnętrzne", "Indeksowanie"].map((tag, i) => (
                  <span key={i} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-[11px] font-bold text-gray-300 tracking-wider font-mono uppercase">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="inline-flex items-center gap-3 px-6 py-3 bg-brand-500/10 border border-brand-500/20 text-brand-300 rounded-full text-[14px] font-medium w-fit">
                <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
                Zapytaj o darmowy mini-audyt SEO dla Twojej firmy
              </div>
            </motion.div>

            {/* Right — SEO mockup */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <div className="bg-navy-900 border border-white/10 rounded-[16px] overflow-hidden">
                {/* Browser bar */}
                <div className="h-8 bg-navy-950 border-b border-white/10 flex items-center px-4 gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-600" />
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-600" />
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-600" />
                  <div className="mx-auto flex items-center gap-2 bg-white/5 rounded-md px-3 h-5 w-1/2">
                    <span className="text-gray-600 text-[9px] font-mono">google.com/search?q=twoja+fraza</span>
                  </div>
                </div>
                {/* SERP results mockup */}
                <div className="p-6 flex flex-col gap-4">
                  {[
                    { pos: "01", domain: "twojafirma.pl", active: true },
                    { pos: "02", domain: "konkurencja.pl", active: false },
                    { pos: "03", domain: "innyportal.com", active: false },
                  ].map((r, i) => (
                    <div key={i} className={`flex items-center gap-4 p-4 rounded-lg border ${r.active ? "border-brand-500/40 bg-brand-500/10" : "border-white/5 bg-white/[0.02]"}`}>
                      <span className={`font-mono font-bold text-[18px] shrink-0 ${r.active ? "text-brand-400" : "text-gray-600"}`}>{r.pos}</span>
                      <div className="flex flex-col gap-1 flex-1">
                        <div className={`h-2.5 rounded w-3/4 ${r.active ? "bg-brand-500/60" : "bg-white/10"}`} />
                        <div className="h-2 rounded w-full bg-white/5" />
                        <span className="text-[10px] font-mono text-gray-600">{r.domain}</span>
                      </div>
                      {r.active && (
                        <span className="px-2 py-1 bg-brand-600 text-white text-[9px] font-mono rounded-full uppercase tracking-wider shrink-0">TOP 1</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          7. KAMPANIE REKLAMOWE GOOGLE I SOCIAL MEDIA (biała)
      ═══════════════════════════════════════════════════ */}
      <section className="bg-white py-[100px] lg:py-[130px] relative overflow-hidden">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/2 h-[80%] bg-brand-100/40 blur-[120px] rounded-full z-0 pointer-events-none" />

        <div className="max-w-container mx-auto px-5 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left — ads mockup */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <div className="bg-white border border-gray-100 rounded-[16px] shadow-card overflow-hidden">
                {/* Header */}
                <div className="h-10 bg-gray-50 border-b border-gray-100 flex items-center px-5 gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                </div>
                {/* Ads panel */}
                <div className="p-6 flex flex-col gap-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[12px] font-mono text-gray-400 uppercase tracking-wider">Kampanie aktywne</span>
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-[10px] font-bold rounded-full">Live</span>
                  </div>
                  {[
                    { name: "Google Search — Brand", spend: "2 340 zł", roas: "4.1x", color: "bg-blue-500" },
                    { name: "Meta Ads — Retargeting", spend: "1 200 zł", roas: "3.8x", color: "bg-indigo-500" },
                    { name: "LinkedIn — B2B Leads", spend: "890 zł", roas: "2.9x", color: "bg-sky-500" },
                  ].map((c, i) => (
                    <div key={i} className="flex items-center gap-4 bg-gray-50 border border-gray-100 rounded-lg p-4">
                      <div className={`w-3 h-10 rounded-full ${c.color} shrink-0`} />
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-ink-900 text-[14px] truncate">{c.name}</p>
                        <p className="text-gray-500 text-[12px]">Wydatki: {c.spend}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="font-bold text-brand-600 text-[16px]">{c.roas}</p>
                        <p className="text-gray-400 text-[10px] font-mono">ROAS</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right text */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <h2 className="text-[36px] lg:text-[48px] font-bold text-ink-900 leading-[1.1]">
                Kampanie reklamowe Google i Social Media
              </h2>
              <p className="text-[17px] text-gray-600 leading-[1.7]">
                Tworzymy kampanie nastawione na konkretny cel – sprzedaż w sklepie, zebranie kontaktów B2B, umówienie wizyt. Optymalizujemy reklamy w sposób ciągły, dbając o jak najwyższy współczynnik konwersji i najniższy koszt pozyskania leada.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                {[
                  { 
                    name: "Google Ads", 
                    tags: ["Search", "Display", "Shopping", "YouTube"],
                    points: ["Tworzenie i optymalizacja kampanii", "Segmentacja grup odbiorców", "A/B testy komunikatów i kreacji", "Regularna analiza i raportowanie"]
                  },
                  { 
                    name: "Meta Ads", 
                    tags: ["Facebook", "Instagram", "Reels", "Retargeting"],
                    points: ["Tworzenie i optymalizacja kampanii", "Segmentacja grup odbiorców", "A/B testy komunikatów i kreacji", "Regularna analiza i raportowanie"]
                  },
                ].map((card, i) => (
                  <div key={i} className="flex flex-col bg-gray-50 border border-gray-100 rounded-xl p-6">
                    <h3 className="font-bold text-ink-900 text-[18px] mb-3">{card.name}</h3>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {card.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 bg-white border border-gray-200 text-gray-600 text-[10px] font-bold rounded uppercase tracking-wider font-mono">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <ul className="flex flex-col gap-3 mt-auto">
                      {card.points.map((point, j) => (
                        <li key={j} className="flex items-start gap-2 text-[13px] text-gray-600 leading-snug">
                          <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          8. CTA BANNER — Porozmawiajmy o strategii (ciemna)
      ═══════════════════════════════════════════════════ */}
      <section className="bg-navy-950 py-24 lg:py-32 border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.12),transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px] opacity-50" />

        <div className="max-w-container mx-auto px-5 lg:px-8 relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[36px] lg:text-[52px] font-bold text-white mb-10 leading-[1.1]"
          >
            Porozmawiajmy o strategii dla Twojej firmy
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex justify-center"
          >
            <Button href="/kontakt" size="md">Porozmawiajmy</Button>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          9. DLACZEGO WARTO NAM ZAUFAĆ (biała)
      ═══════════════════════════════════════════════════ */}
      <section className="bg-white py-[100px] lg:py-[130px]">
        <div className="max-w-container mx-auto px-5 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[36px] lg:text-[52px] font-bold text-ink-900">
              Dlaczego warto nam zaufać?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { num: "01", title: "Transparentność i kontrola", desc: "Wszystkie konta reklamowe są Twoje. Widzisz dokładnie, co robimy i jaki wpływ mają nasze działania na Twój biznes" },
              { num: "02", title: "Działania oparte o strategię", desc: "Zaczynamy od pełnego zrozumienia Twojego biznesu, klientów i konkurencji. Każda kampania marketingowa i działania SEO wynikają ze spójnej strategii" },
              { num: "03", title: "Partnerstwo w działaniu", desc: "Twój sukces jest naszym sukcesem. Wspólnie optymalizujemy kampanie, proces sprzedaży i SEO, aby osiągać zamierzone wyniki" },
              { num: "04", title: "Nie obiecujemy cudów", desc: "Otwarcie mówimy, kiedy działania mają sens, a kiedy lepiej skupić się na innych obszarach. Dzięki temu minimalizujesz ryzyko i inwestujesz tylko tam, gdzie Twój biznes rośnie." },
              { num: "05", title: "Technologia napędzająca sprzedaż", desc: "Łączymy narzędzia analityczne, automatyzację i kreatywny marketing. Twój proces sprzedaży działa płynnie, a inwestycja w marketing szybko się zwraca." },
              { num: "06", title: "Wychodzimy z inicjatywą", desc: "Nie czekamy, aż zgłosisz problem, sami identyfikujemy luki w marketingu, proponujemy nowe rozwiązania i działania, które zwiększają sprzedaż." },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white border border-gray-100 rounded-[14px] p-8 hover:shadow-card hover:-translate-y-1 transition-all flex flex-col gap-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-brand-600" />
                  </div>
                  <span className="font-mono text-[12px] text-brand-500 font-bold">{feature.num}</span>
                </div>
                <h3 className="font-bold text-ink-900 text-[18px] leading-tight">{feature.title}</h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          10. FAQ
      ═══════════════════════════════════════════════════ */}
      <Faq questions={marketingFaq} />



    </main>
  );
}
