"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Target, Search, BarChart3, TrendingUp, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ConsultationForm } from "@/components/sections/ConsultationForm";
import { Faq, FaqItem } from "@/components/sections/Faq";

const marketingFaq: FaqItem[] = [
  {
    id: 1,
    question: "Kiedy mogę spodziewać się pierwszych efektów z marketingu internetowego?",
    answer: "To zależy od wybranego kanału. W przypadku kampanii Google Ads i Social Media, pierwsze efekty w postaci leadów i zapytań pojawiają się zazwyczaj już w pierwszym tygodniu od uruchomienia kampanii. SEO i pozycjonowanie to z kolei proces długoterminowy, a pierwsze wymierne wzrosty widoczne są zwykle po 3-6 miesiącach.",
  },
  {
    id: 2,
    question: "Jaki budżet muszę przeznaczyć na start działań reklamowych w Google/FB?",
    answer: "Nie ma jednej uniwersalnej kwoty. Minimalny sensowny budżet reklamowy (nie licząc kosztów obsługi) to z reguły 2000-3000 zł miesięcznie. Dokładną kalkulację przygotowujemy zawsze po zapoznaniu się z Twoją branżą, marżowością i konkurencyjnością rynku.",
  },
  {
    id: 3,
    question: "Działam na bardzo niszowym rynku B2B. Czy znajdziecie dla mnie klientów?",
    answer: "Tak, specjalizujemy się w kampaniach B2B, w tym na LinkedIn oraz w bardzo precyzyjnym kierowaniu w Google Ads. W niszowych branżach rzadziej szukamy szerokiego zasięgu, a skupiamy się na dotarciu do konkretnych decydentów poprzez dobrze dobrane słowa kluczowe z tzw. 'długiego ogona'.",
  },
  {
    id: 4,
    question: "Czy zajmujecie się też tworzeniem kreacji graficznych?",
    answer: "Oczywiście. Posiadamy zespół graficzny, który w ramach obsługi przygotowuje profesjonalne banery, wideo, animacje oraz grafiki do kampanii reklamowych, dbając o ich maksymalną skuteczność i spójność wizerunkową.",
  },
  {
    id: 5,
    question: "Co obejmują działania SEO w ramach miesięcznej umowy?",
    answer: "Każdy projekt obejmuje bieżącą optymalizację techniczną strony (on-site), rozbudowę treści i bloga (content marketing w oparciu o AI i copywriting), a także bezpieczne pozyskiwanie wartościowych linków (link building). Dodatkowo stale monitorujemy wyniki i reagujemy na zmiany w algorytmach.",
  },
  {
    id: 6,
    question: "Czy muszę wiązać się z wami długoterminową umową np. na 12 miesięcy?",
    answer: "Nie, stawiamy na elastyczność i partnerskie relacje. Zazwyczaj podpisujemy umowy z 1- lub 2-miesięcznym okresem wypowiedzenia, co pozwala na pełną swobodę decyzyjną. Jesteśmy pewni naszych wyników.",
  },
  {
    id: 7,
    question: "W jaki sposób raportujecie mi zyski z prowadzonych kampanii?",
    answer: "Tworzymy dla Ciebie dedykowany, przejrzysty dashboard (np. w Looker Studio), dostępny online 24/7. Pokazujemy tam twarde dane z podpiętej analityki: koszt leada (CPL), zwrot z wydatków na reklamę (ROAS), liczbę konwersji, dzięki czemu doskonale wiesz, co przynosi efekty.",
  },
];

export default function MarketingServices() {
  return (
    <>
      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative bg-navy-950 pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(14,165,233,0.1),transparent_60%)]"></div>
          </div>
          
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
                  <span className="text-white text-xs font-bold tracking-widest font-heading uppercase">Marketing i pozycjonowanie</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
                  Marketing<br />i pozycjonowanie dla firm
                </h1>
                <p className="text-gray-400 font-body text-lg max-w-lg leading-relaxed">
                  Rozwijaj swój biznes dzięki systemowym działaniom reklamowym i SEO. Skutecznie zbudujesz świadomość marki i dotrzesz do klientów z grupy B2B i B2C.
                </p>
                <div className="flex gap-4 mt-4">
                  <div className="flex flex-col gap-2">
                    <Button variant="primary">ZAPYTAJ O WYCENĘ</Button>
                    <span className="text-gray-400 text-xs font-body ml-2">Darmowa wycena w 24h</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative aspect-video w-full"
              >
                <div className="bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 w-full h-full shadow-2xl border border-white/10">
                  [Marketing Dashboard Image]
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* WHITE SECTION: MARKETING SYSTEM */}
        <section className="bg-white py-20 lg:py-32 relative overflow-hidden">
          <div className="max-w-[1200px] mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="flex flex-col gap-6 lg:sticky lg:top-32"
              >
                <h2 className="text-3xl md:text-4xl font-black text-ink-900 leading-tight">
                  Marketing, który działa jako przemyślany system
                </h2>
                <p className="text-gray-600 font-body text-lg leading-relaxed">
                  Samo uruchomienie kampanii reklamowej czy artykuły sponsorowane to dziś zbyt mało. Reklama musi działać jako element przemyślanego lejka, połączonego ściśle ze specyfiką Twoich produktów.
                </p>
                <p className="text-brand-600 font-bold font-body leading-relaxed">
                  Dzięki nam nie kupujesz kliknięć, a proces pozyskiwania kontaktów biznesowych.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="flex flex-col gap-4"
              >
                {[
                  { icon: Target, title: "B2B i B2C e-commerce", desc: "Docieramy do decydentów, a nie tylko do konsumentów." },
                  { icon: Search, title: "Spójny lejek", desc: "Łączymy SEO, content i płatne kampanie w jeden system." },
                  { icon: BarChart3, title: "Analityka i ROI", desc: "Monitorujemy konwersje i optymalizujemy zwrot z inwestycji." },
                  { icon: TrendingUp, title: "Optyka biznesowa", desc: "Dopasowujemy skalę i komunikację do Twojego modelu biznesowego." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-5 hover:bg-gray-50/50 p-2 rounded-xl transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center flex-shrink-0 text-brand-600">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-ink-900 text-lg mb-2">{item.title}</h3>
                      <p className="text-gray-600 font-body text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* BLUE SECTION: REALNE WYNIKI */}
        <section className="bg-brand-500 py-20 lg:py-24">
          <div className="max-w-[1200px] mx-auto px-6">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-black text-white mb-12 text-center"
            >
              Realne wyniki, nie obietnice
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 divide-y sm:divide-y-0 sm:divide-x divide-white/20">
              {[
                { number: "+184%", label: "wzrost pozyskanych leadów B2B (case study)" },
                { number: "-41%", label: "niższy koszt pozyskania klienta (CPA) B2C" },
                { number: "+63%", label: "wzrost sprzedaży z e-commerce r/r" },
                { number: "+2.3", label: "raza wyższy zwrot z wydatków na reklamy (ROAS)" }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col text-left px-4 pt-6 sm:pt-0"
                >
                  <div className="text-4xl md:text-5xl font-black text-white mb-3">{stat.number}</div>
                  <div className="text-brand-100 text-sm font-medium font-body leading-relaxed">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-brand-200 text-xs text-center border-t border-brand-400/50 pt-8"
            >
              * Wyniki na podstawie średnich wzrostów u naszych stałych klientów z ostatnich 12 miesięcy.
            </motion.div>
          </div>
        </section>

        {/* DARK SECTION: NIE MUSISZ ZGADYWAĆ */}
        <section className="bg-navy-950 py-20 lg:py-32">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="flex flex-col gap-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col gap-6"
              >
                <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                  Nie musisz zgadywać, czy Twój marketing działa.<br/>Powinieneś to wiedzieć.
                </h2>
                <div className="text-gray-400 font-body text-sm lg:text-base leading-relaxed max-w-3xl flex flex-col gap-3">
                  <p>
                    Firmy coraz częściej inwestują w kampanie reklamowe i działania SEO, ale efekty tych działań bywają trudne do ocenienia. Ruch na stronie rośnie, kliknięcia są, a mimo to liczba kontaktów i zapytań nie przekłada się na wyniki biznesowe.
                  </p>
                  <p>
                    Dzieje się tak, gdy marketing działa bez spójności z procesami sprzedażowymi, potrzebami klientów i celami firmy.
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
                  { num: "04", title: "Brak spójności w działaniach", desc: "brak spójnej strategii łączącej różne kanały i działania z procesami sprzedaży" },
                  { num: "05", title: "Poczucie marnowania czasu i budżetu", desc: "wydajesz pieniądze i poświęcasz czas na kontrolę działań, a efekty biznesowe nie rosną proporcjonalnie" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-5 border-t border-white/10 py-5 last:border-b last:border-white/10">
                    <div className="w-9 h-9 bg-brand-500 rounded-lg flex items-center justify-center text-white font-bold font-heading flex-shrink-0 text-sm">
                      {item.num}
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="font-bold text-white text-base lg:text-lg leading-snug">{item.title}</h3>
                      <p className="text-gray-400 font-body text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* WHITE SECTION: SYSTEM DIAGRAM */}
        <section className="bg-white py-20 lg:py-32">
          <div className="max-w-[1200px] mx-auto px-6 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-black text-ink-900 mb-6 max-w-3xl mx-auto"
            >
              Łączymy kampanie ads, SEO i dane w jeden spójny system
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 font-body text-lg leading-relaxed max-w-3xl mx-auto mb-16"
            >
              Dzięki holistycznemu podejściu nasze działania wzajemnie się wspierają. SEO dba o darmowy ruch organiczny, kampanie łapią „gorących” klientów z intencją, a analityka wskazuje co działa.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 w-full h-[400px] lg:h-[500px] shadow-xl border border-gray-100">
                [Diagram Systemu Marketingowego]
              </div>
            </motion.div>
          </div>
        </section>

        {/* DARK SECTION: SEO I AI */}
        <section className="bg-navy-950 py-20 lg:py-32 border-b border-white/5">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col gap-6"
              >
                <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                  SEO i pozycjonowanie w AI
                </h2>
                <p className="text-gray-400 font-body text-lg leading-relaxed">
                  Pozycjonujemy serwisy dla biznesu, tworzymy i optymalizujemy portale, e-commerce oraz zaawansowane sklepy. Skupiamy się na frazach długiego ogona, semantyce i Topical Authority, dopasowując strony pod kątem generatywnego AI.
                </p>
                
                <div className="flex flex-wrap gap-2 my-4">
                  {["AUDYTY SEO", "LINK BUILDING", "TREŚCI I BLOG", "AI OVERVIEWS", "SEO LOKALNE"].map((tag, i) => (
                    <span key={i} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-gray-300 tracking-wider font-heading">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-brand-500/10 border border-brand-500/20 text-brand-300 rounded-full font-medium text-sm font-body w-fit">
                  <span className="w-2 h-2 rounded-full bg-brand-500"></span>
                  <span>Zapytaj o darmowy mini-audyt SEO dla Twojej firmy</span>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative aspect-video w-full"
              >
                <div className="bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 w-full h-full shadow-2xl border border-white/10">
                  [SEO AI Mockup]
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* WHITE SECTION: KAMPANIE REKLAMOWE */}
        <section className="bg-white py-20 lg:py-32 relative overflow-hidden">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/2 h-[80%] bg-brand-100/40 blur-[100px] rounded-full z-0 pointer-events-none"></div>
          
          <div className="max-w-[1200px] mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative aspect-[4/3] lg:aspect-square w-full"
              >
                <div className="bg-white rounded-lg flex items-center justify-center text-gray-400 w-full h-full shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-gray-100">
                  [Ads Mockup]
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col gap-6 order-1 lg:order-2"
              >
                <h2 className="text-3xl md:text-5xl font-black text-ink-900 leading-tight">
                  Kampanie reklamowe Google i Social Media
                </h2>
                <p className="text-gray-600 font-body text-lg leading-relaxed">
                  Tworzymy kampanie nastawione na konkretny cel – sprzedaż w sklepie, zebranie kontaktów B2B, umówienie wizyt. Optymalizujemy reklamy w sposób ciągły, dbając o jak najwyższy współczynnik konwersji i najniższy koszt pozyskania leada.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mt-6">
                  {["Google Ads", "Meta Ads", "LinkedIn Ads", "TikTok Ads"].map((tag, i) => (
                    <div key={i} className="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-xl p-4">
                      <div className="w-8 h-8 rounded-md bg-white border border-gray-200 flex items-center justify-center font-bold text-gray-400">
                        {tag.charAt(0)}
                      </div>
                      <span className="font-bold text-ink-900 text-sm">{tag}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* BLUE CTA BANNER */}
        <section className="bg-navy-950 relative overflow-hidden py-24 border-y border-white/5">
          {/* Abstract wavy background inside banner */}
          <div className="absolute inset-0 z-0 bg-[url('/images/hero-bg-poster.jpg')] bg-cover bg-center opacity-60 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-transparent to-navy-950 z-10"></div>
          
          <div className="max-w-[1200px] mx-auto px-6 relative z-20 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-black text-white mb-8"
            >
              Porozmawiajmy o strategii dla Twojej firmy
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Button variant="primary">
                POROZMAWIAJMY
              </Button>
            </motion.div>
          </div>
        </section>

        {/* WHITE SECTION: DLACZEGO WARTO NAM ZAUFAC */}
        <section className="bg-white py-20 lg:py-32">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-16">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-black text-ink-900 mb-8"
              >
                Dlaczego warto nam zaufać?
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Nie lejemy wody, działamy", desc: "Skupiamy się na dowozie wyników, a nie na tworzeniu 100-stronicowych strategii pełnych teorii." },
                { title: "Maksymalizacja Twojego ROI", desc: "Traktujemy Twój budżet marketingowy jak własną inwestycję. Szukamy zawsze najlepszego ROAS." },
                { title: "Partnerstwo na lata, nie na projekt", desc: "Zależy nam na sukcesie Twojej firmy w długiej perspektywie, dlatego budujemy solidne fundamenty." },
                { title: "Mówimy prosto o rzeczach trudnych", desc: "Unikamy niezrozumiałego żargonu, wyjaśniamy i omawiamy krok po kroku to, co wspólnie robimy." },
                { title: "Pełna kontrola nad kampaniami", desc: "Własność wszystkich kont reklamowych należy w 100% do Ciebie od pierwszego dnia." },
                { title: "Wybieramy drogę pod górę", desc: "Jeśli w danej kampanii widzimy, że standardowa droga nie przynosi efektów, szukamy innowacyjnych rozwiązań." }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white border-x border-t border-b-4 border-gray-100 border-b-brand-500 rounded-lg p-8 hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                  <div className="w-10 h-10 bg-brand-50 rounded flex items-center justify-center text-brand-600 font-bold mb-6">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-ink-900 text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-600 font-body text-sm leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <Faq questions={marketingFaq} />

        {/* FINAL CTA SECTION */}
        <ConsultationForm 
          label="ZACZNIJ ZDOBYWAĆ WIĘCEJ KLIENTÓW"
          heading="Sprawdźmy jak możemy poprawić Twój marketing!"
        />
      </main>
    </>
  );
}
