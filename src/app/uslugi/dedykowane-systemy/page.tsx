"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Faq, FaqItem } from "@/components/sections/Faq";
import { CheckCircle2, ArrowRight } from "lucide-react";

const faqData: FaqItem[] = [
  {
    id: 1,
    question: "Co to jest dedykowane oprogramowanie?",
    answer: (
      <>
        <p className="mb-2">Dedykowane oprogramowanie to system tworzony od podstaw pod konkretną firmę i jej procesy. W przeciwieństwie do gotowych narzędzi:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>jest dopasowane do Twojego sposobu pracy</li>
          <li>łączy różne obszary (sprzedaż, marketing, operacje)</li>
          <li>rozwiązuje konkretny problem biznesowy</li>
        </ul>
      </>
    )
  },
  {
    id: 2,
    question: "Czy muszę wiedzieć, jakie oprogramowanie chcę wdrożyć?",
    answer: "Nie. Wystarczy, że pokażesz problem lub obszar do poprawy. Na tej podstawie proponujemy rozwiązanie dopasowane do Twojej firmy."
  },
  {
    id: 3,
    question: "Czy tworzycie tylko CRM, ERP i dashboardy?",
    answer: (
      <>
        <p className="mb-2">Nie , to tylko przykłady. Tworzymy dedykowane rozwiązania w dowolnym obszarze firmy, np.:</p>
        <ul className="list-disc pl-5 mb-2 space-y-1">
          <li>sprzedaż</li>
          <li>marketing</li>
          <li>obsługa klienta</li>
          <li>procesy operacyjne</li>
        </ul>
        <p>Jeśli masz pomysł lub widzisz problem, możemy zaprojektować system, który go rozwiąże</p>
      </>
    )
  },
  {
    id: 4,
    question: "Kiedy firma potrzebuje dedykowanego oprogramowania?",
    answer: (
      <>
        <p className="mb-2">Najczęściej wtedy, gdy:</p>
        <ul className="list-disc pl-5 mb-2 space-y-1">
          <li>korzystasz z wielu narzędzi, które nie są ze sobą połączone</li>
          <li>tracisz leady lub nie masz kontroli nad sprzedażą</li>
          <li>marketing generuje zapytania, ale nie przekłada się to na klientów</li>
          <li>procesy w firmie są chaotyczne lub ręczne</li>
        </ul>
        <p>Jeśli czujesz, że Twoja firma działa, ale mogłaby działać lepiej, to jest moment na dedykowane rozwiązanie</p>
      </>
    )
  },
  {
    id: 5,
    question: "Ile kosztuje dedykowane oprogramowanie?",
    answer: (
      <>
        <p className="mb-2">Koszt zależy od zakresu projektu. Wpływ mają m.in.:</p>
        <ul className="list-disc pl-5 mb-2 space-y-1">
          <li>liczba funkcji</li>
          <li>poziom integracji</li>
          <li>stopień automatyzacji</li>
        </ul>
        <p>dlatego zawsze zaczynamy od analizy i dopiero potem określamy koszt</p>
      </>
    )
  },
  {
    id: 6,
    question: "Czy to się integruje z moimi obecnymi narzędziami?",
    answer: (
      <>
        <p className="mb-2">Tak, w większości przypadków tak właśnie pracujemy. Łączymy:</p>
        <ul className="list-disc pl-5 mb-2 space-y-1">
          <li>narzędzia reklamowe (Google Ads, Meta Ads)</li>
          <li>stronę internetową</li>
          <li>CRM</li>
          <li>systemy sprzedażowe</li>
        </ul>
        <p>tak, żeby wszystko działało jako jeden spójny system</p>
      </>
    )
  },
  {
    id: 7,
    question: "Ile trwa wdrożenie dedykowanego oprogramowania?",
    answer: (
      <>
        <p className="mb-2">Czas wdrożenia zależy od skali rozwiązania:</p>
        <ul className="list-disc pl-5 mb-2 space-y-1">
          <li>mniejsze systemy = kilka tygodni</li>
          <li>bardziej rozbudowane = kilka miesięcy</li>
        </ul>
        <p>projekt dzielimy na etapy, żebyś widział postęp i efekty</p>
      </>
    )
  }
];

export default function DedicatedSystemsPage() {
  return (
    <main className="flex-1 bg-white">

      {/* ═══════════════════════════════════════════════════
          1. HERO
      ═══════════════════════════════════════════════════ */}
      <section className="relative bg-navy-950 pt-[140px] pb-24 lg:pt-[180px] lg:pb-[100px] overflow-hidden min-h-[600px] flex items-center w-[calc(100%-20px)] mx-auto my-[10px] rounded-[20px]">
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-500/10 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none z-0" />

        <div className="max-w-container mx-auto px-5 lg:px-8 relative z-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-6 lg:max-w-[800px]"
            >
              <h1 className="text-[44px] md:text-[56px] lg:text-[60px] xl:text-[64px] font-bold text-white leading-[1.1] tracking-tight">
                Dedykowane systemy,<br className="hidden md:block"/> które usprawniają pracę i <br className="hidden lg:block"/> zwiększają sprzedaż
              </h1>
              <p className="text-[17px] text-gray-400 leading-[1.7] max-w-[550px]">
                Tworzymy oprogramowanie łączące procesy biznesowe, sprzedaż i marketing w spójny system sprzedaży. Dzięki temu widzisz, skąd przychodzą klienci, ile zarabiają i gdzie tracisz szanse na wzrost.
              </p>

              <div className="flex flex-col gap-2 mt-4">
                <Button href="/kontakt" size="lg">Darmowa konsultacja</Button>
                <span className="text-gray-400 text-[14px] ml-2 mt-1">Sprawdźmy, jak poukładać procesy w Twojej firmie</span>
              </div>
            </motion.div>

            {/* Right mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full max-w-[500px] mx-auto lg:mr-0 lg:ml-auto"
            >
              <div className="w-full bg-[#111116] border border-white/10 rounded-[16px] overflow-hidden flex flex-col shadow-2xl">
                {/* Header */}
                <div className="flex justify-between items-center p-4 border-b border-white/10">
                  <span className="font-mono text-[11px] font-bold text-white uppercase">CRM Dashboard</span>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-[#4ADE80]"></div>
                    <span className="text-white text-[10px] uppercase font-bold tracking-widest">live</span>
                  </div>
                </div>
                {/* Stats */}
                <div className="p-4 grid grid-cols-2 gap-4">
                  <div className="bg-[#1C1C24] p-3 rounded-lg border border-white/5">
                    <div className="font-mono text-[11px] font-bold text-white uppercase mb-1">Nowy kontakt</div>
                    <div className="font-mono text-[10px] font-bold text-[#4ADE80]">248 leadów</div>
                  </div>
                  <div className="bg-[#1C1C24] p-3 rounded-lg border border-white/5">
                    <div className="font-mono text-[11px] font-bold text-white uppercase mb-1">Kwalifikacja</div>
                    <div className="font-mono text-[10px] font-bold text-[#4ADE80]">AKTYWNA</div>
                  </div>
                  <div className="bg-[#1C1C24] p-3 rounded-lg border border-white/5">
                    <div className="font-mono text-[11px] font-bold text-white uppercase mb-1">Oferta wysłana</div>
                    <div className="font-mono text-[10px] font-bold text-[#4ADE80]">ONLINE</div>
                  </div>
                  <div className="bg-[#1C1C24] p-3 rounded-lg border border-white/5">
                    <div className="font-mono text-[11px] font-bold text-white uppercase mb-1">Decyzja</div>
                    <div className="font-mono text-[10px] font-bold text-[#4ADE80]">Dziś 03:00</div>
                  </div>
                </div>
                {/* Chart placeholder */}
                <div className="p-4 border-t border-white/10">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-mono text-[10px] font-bold text-white uppercase">Leady — ostatnie 7 dni</span>
                    <span className="text-white text-[10px]">Avg. konwersja <strong className="text-[#009EF6] text-[13px] ml-1">18.4%</strong></span>
                  </div>
                  <div className="flex justify-between items-end h-[60px] px-2 gap-2">
                    {[30, 45, 35, 60, 50, 80, 40].map((h, i) => (
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
          2. JAK WYGLĄDA PROCES BEZ SPÓJNEGO SYSTEMU?
      ═══════════════════════════════════════════════════ */}
      <section className="bg-[#0D0D18] py-[100px] lg:py-[130px]">
        <div className="max-w-container mx-auto px-5 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[36px] md:text-[48px] lg:text-[60px] font-bold text-white max-w-4xl mx-auto leading-tight">
              Jak wygląda proces bez spójnego systemu sprzedaży?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { title: "Klient klika w reklamę" },
              { title: "Wchodzi na stronę internetową" },
              { title: "Zostawia kontakt" }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#16161F] border border-white/10 rounded-[14px] p-8 flex flex-col gap-4 relative"
              >
                <div className="font-mono text-[12px] font-bold text-white">01</div>
                <h3 className="text-[24px] lg:text-[30px] font-normal text-white leading-tight">{step.title}</h3>
                {i < 2 && (
                  <div className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 z-10 text-white/20">
                    <ArrowRight className="w-8 h-8" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#16161F] border border-[#E2311A]/30 rounded-[14px] p-8 lg:p-12 relative overflow-hidden"
          >
            <div className="absolute top-8 right-8">
              <span className="bg-[#E2311A]/20 text-[#E2311A] font-mono text-[10px] font-bold uppercase px-3 py-1.5 rounded-full border border-[#E2311A]/30">Brak systemu</span>
            </div>
            
            <div className="font-mono text-[12px] font-bold text-white mb-4">04</div>
            <h3 className="text-[30px] font-normal text-[#E2311A] mb-8">I co dalej?</h3>
            
            <ul className="flex flex-col gap-4">
              {[
                "zapytanie trafia na maila i ginie w skrzynce",
                "handlowiec zapomina oddzwonić lub odpowiada z opóźnieniem",
                "brak historii kontaktu i przypomnień",
                "nie wiesz, która kampania faktycznie przyprowadziła klienta",
                "sprzedaż i marketing działają w izolacji"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#E2311A] mt-2 shrink-0"></div>
                  <span className="text-[18px] lg:text-[22px] text-white leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-[24px] lg:text-[30px] text-white font-normal">Efekt: Klient znika, a firma myśli, że marketing nie działa</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          3. PROBLEMEM NIE ZAWSZE JEST MARKETING
      ═══════════════════════════════════════════════════ */}
      <section className="bg-navy-950 py-[100px] lg:py-[130px] border-t border-white/5">
        <div className="max-w-container mx-auto px-5 lg:px-8">
          <div className="mb-16 max-w-4xl">
            <h2 className="text-[40px] md:text-[52px] lg:text-[64px] font-bold text-white leading-[1.1] mb-6">
              Problemem nie zawsze jest marketing
            </h2>
            <p className="text-[18px] lg:text-[22px] text-gray-300 leading-relaxed max-w-3xl">
              Ruch i kampanie mogą działać. Klienci klikają reklamy, wchodzą na stronę, zostawiają kontakt. Jeśli nie masz systemu, który pilnuje leadów i procesu sprzedaży, większość szans na sprzedaż po prostu przepada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16">
            {[
              { num: "01", text: "Większość firm traci leady na nieułożonych procesach, a nie na samych reklamach." },
              { num: "02", text: "Nie chodzi o to, że marketing nie działa. Chodzi o brak spójnego systemu sprzedaży." },
              { num: "03", text: "Potrzebujesz narzędzia, które pokaże dokładnie, gdzie uciekają klienci i pieniądze." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col gap-6"
              >
                <div className="text-[52px] lg:text-[64px] font-bold text-[#017BD0] leading-none">{item.num}</div>
                <p className="text-[18px] lg:text-[22px] text-gray-300 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center pt-10 border-t border-white/10">
            <p className="text-[18px] lg:text-[20px] text-white">
              Najwięcej pieniędzy tracisz nie na marketing, tylko na niedziałający proces sprzedaży
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          4. ŁĄCZYMY W JEDEN SYSTEM
      ═══════════════════════════════════════════════════ */}
      <section className="bg-[#F5F5F5] py-[100px] lg:py-[130px]">
        <div className="max-w-container mx-auto px-5 lg:px-8">
          <div className="mb-16 max-w-4xl">
            <h2 className="text-[40px] md:text-[52px] lg:text-[64px] font-bold text-ink-900 leading-[1.1] mb-6">
              Łączymy marketing, sprzedaż i procesy w jeden system
            </h2>
            <p className="text-[18px] lg:text-[22px] text-gray-600 leading-relaxed max-w-3xl">
              Tworzymy dedykowane systemy, które nie tylko zbierają dane, ale też pokazują, co naprawdę przynosi klientów i przychód, a gdzie firma traci szanse. Dzięki temu nie musisz zgadywać, które działania marketingowe działają, a które przepalają budżet
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16">
            {[
              { num: "01", title: "Zbieramy wszystkie zapytania w jednym miejscu", desc: "Każdy lead trafia do systemu, niezależnie czy przyszedł przez formularz na stronie, maila, czy kampanię reklamową" },
              { num: "02", title: "Pilnujemy procesu sprzedaży", desc: "Automatyczne przypomnienia dla handlowców, pełna historia kontaktu z klientem w jednym miejscu" },
              { num: "03", title: "Integrujemy dane z kampanii marketingowych, strony i CRM", desc: "Kampanie Google Ads, Meta Ads, newslettery są połączone z leadami i sprzedażą. Nie musisz analizować dziesiątek raportów osobno i wiesz, która kampania faktycznie działa" },
              { num: "04", title: "Pokazujemy wyniki w prostym dashboardzie", desc: "Wszystko w jednym panelu: liczba leadów, źródło kontaktu, sprzedaż i przychód. Możesz łatwo zobaczyć, które działania marketingowe konwertują najlepiej" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[20px] p-8 lg:p-10 shadow-sm border border-gray-100"
              >
                <div className="text-[26px] font-bold text-[#017BD0] mb-4">{item.num}</div>
                <h3 className="text-[24px] lg:text-[30px] font-normal text-ink-900 leading-tight mb-4">{item.title}</h3>
                <p className="text-[18px] lg:text-[22px] text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col items-center text-center">
            <p className="text-[18px] lg:text-[20px] text-ink-900 mb-6">Zbudujmy spójny system w Twojej firmie</p>
            <Button href="/kontakt" size="lg">Darmowa konsultacja</Button>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          5. JAKIE OPROGRAMOWANIA TWORZYMY
      ═══════════════════════════════════════════════════ */}
      <section className="bg-white py-[100px] lg:py-[130px]">
        <div className="max-w-container mx-auto px-5 lg:px-8">
          <div className="mb-16 max-w-4xl mx-auto text-center">
            <h2 className="text-[40px] md:text-[52px] lg:text-[64px] font-bold text-ink-900 leading-[1.1] mb-6">
              Jakie oprogramowania tworzymy?
            </h2>
            <p className="text-[18px] lg:text-[22px] text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Tworzymy dedykowane systemy, które usprawniają każdy obszar Twojej firmy: marketing, sprzedaż, codzienne procesy, czy też nietypowe wyzwania, które wymagają indywidualnego rozwiązania. <br/><br/> Wszystko działa razem, żebyś widział, gdzie tracisz klientów i pieniądze, a gdzie możesz zwiększyć przychód.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              { num: "01", title: "CRM", subtitle: "zarządzanie klientami", color: "#017BD0", features: ["obsługa leadów i zapytań", "historia kontaktu z klientem", "automatyczne przypomnienia", "pipeline sprzedaży"] },
              { num: "02", title: "Dashboard", subtitle: "analityka danych BI", color: "#818CF8", features: ["integracja danych z marketingu i CRM", "analiza skuteczności kampanii", "raporty dzienne i przychodowe"] },
              { num: "03", title: "Systemy ERP", subtitle: "operacyjne", color: "#34D399", features: ["sprzedaż i faktury", "kontrola magazynu i operacji", "raporty finansowe i zasoby"] },
              { num: "04", title: "Automatyzacja", subtitle: "procesów", color: "#FBBF24", features: ["eliminacja ręcznej pracy", "uporządkowanie działań zespołu", "powtarzalny proces sprzedaży"] },
              { num: "05", title: "Integracje", subtitle: "systemów", color: "#F472B6", features: ["połączenie wszystkich elementów w jeden spójny system", "synchronizacja danych między działami"] }
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-navy-950 rounded-[20px] p-8 flex flex-col gap-6"
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-[26px] font-normal text-white">{card.title}</h3>
                    <span className="text-[20px] font-normal" style={{ color: card.color }}>{card.subtitle}</span>
                  </div>
                  <span className="font-mono text-[18px] font-bold" style={{ color: card.color }}>{card.num}</span>
                </div>
                <ul className="flex flex-col gap-3 mt-auto">
                  {card.features.map((feat, fi) => (
                    <li key={fi} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: card.color }} />
                      <span className="text-gray-300 text-[16px]">{feat}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto text-center border-t border-gray-200 pt-16">
            <p className="text-[16px] text-gray-600 leading-relaxed">
              Pokazaliśmy kilka obszarów, w których najczęściej usprawniamy firmy. To jednak tylko przykłady. Jeśli w Twojej firmie coś działa nieoptymalnie, masz pomysł na usprawnienie lub widzisz problem, którego nie ma na tej stronie, nie wahaj się z nami skontaktować. Razem znajdziemy rozwiązanie lub przygotujemy dedykowane oprogramowanie, które poprawi procesy, zwiększy sprzedaż i sprawi, że firma będzie działać szybciej i sprawniej
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          6. OD PROBLEMU DO SPÓJNEGO SYSTEMU
      ═══════════════════════════════════════════════════ */}
      <section className="bg-[#F5F5F5] py-[100px] lg:py-[130px]">
        <div className="max-w-container mx-auto px-5 lg:px-8 text-center">
          <h2 className="text-[40px] md:text-[52px] lg:text-[64px] font-bold text-ink-900 leading-[1.1] mb-16">
            Od problemu do spójnego systemu
          </h2>

          <div className="flex flex-col gap-4 max-w-4xl mx-auto">
            {[
              { num: "01", text: "Analiza Twojego marketingu i sprzedaży" },
              { num: "02", text: "Identyfikacja miejsc, gdzie tracisz klientów" },
              { num: "03", text: "Projekt dedykowanego oprogramowania" },
              { num: "04", text: "Wdrożenie i integracja" },
              { num: "05", text: "Optymalizacja w oparciu o realne dane" }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex items-center gap-6 text-left"
              >
                <div className="text-[26px] font-bold text-brand-500">{step.num}</div>
                <div className="text-[18px] lg:text-[22px] text-ink-900">{step.text}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          7. CO ZYSKUJESZ?
      ═══════════════════════════════════════════════════ */}
      <section className="bg-navy-950 py-[100px] lg:py-[130px]">
        <div className="max-w-container mx-auto px-5 lg:px-8 text-center">
          <h2 className="text-[40px] md:text-[52px] lg:text-[64px] font-bold text-white leading-[1.1] mb-16">
            Co zyskujesz?
          </h2>

          <div className="flex flex-col gap-6 max-w-3xl mx-auto text-left mb-16">
            {[
              { num: "01", text: "Żaden klient nie ginie" },
              { num: "02", text: "Marketing przestaje być kosztem, zaczyna zarabiać" },
              { num: "03", text: "Wiesz skąd przychodzą leady i ile zarabiają" },
              { num: "04", text: "Masz kontrolę nad sprzedażą i procesami" },
              { num: "05", text: "Firma działa szybciej i bez chaosu" }
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-6 pb-6 border-b border-white/10 last:border-0"
              >
                <div className="text-[32px] font-bold text-[#017BD0]">{benefit.num}</div>
                <div className="text-[20px] lg:text-[26px] text-white">{benefit.text}</div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-6">
            <p className="text-[18px] lg:text-[20px] text-white">Zróbmy porządek w Twoich procesach</p>
            <Button href="/kontakt" size="lg">Darmowa konsultacja</Button>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          8. FAQ
      ═══════════════════════════════════════════════════ */}
      <Faq questions={faqData} />

    </main>
  );
}
