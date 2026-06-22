"use client";

import { motion } from "framer-motion";
import { Shield, ShieldAlert, CheckCircle2, Lock, Eye, CloudLightning, Activity, Cpu, Server, ServerCrash, Users, Key, Monitor, FileText, UploadCloud, FileWarning, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Faq, FaqItem } from "@/components/sections/Faq";

const cyberFaq: FaqItem[] = [
  {
    id: 1,
    question: "Co to jest cyberbezpieczeństwo i dlaczego jest ważne?",
    answer: "Cyberbezpieczeństwo chroni firmę przed atakami, wyciekiem danych i awariami systemów. Brak ochrony może oznaczać straty finansowe i utratę reputacji"
  },
  {
    id: 2,
    question: "Czy mała firma też potrzebuje cyberbezpieczeństwa?",
    answer: "Tak. Ataki nie wybierają firm według wielkości, każda luka może zostać wykorzystana"
  },
  {
    id: 3,
    question: "Jak działają testy penetracyjne?",
    answer: "Symulujemy prawdziwe ataki, aby wykryć luki w systemach i aplikacjach. Raportujemy wszystkie problemy i doradzamy poprawki"
  },
  {
    id: 4,
    question: "Co obejmuje audyt bezpieczeństwa IT?",
    answer: "Analizujemy systemy, wykrywamy słabe punkty i dajemy rekomendacje zgodne z RODO, ISO 27001 i NIS2"
  },
  {
    id: 5,
    question: "Czy szkolenia pracowników naprawdę zmniejszają ryzyko?",
    answer: "Tak. Edukacja zmniejsza błędy ludzkie, które są najczęstszą przyczyną wycieków i ataków socjotechnicznych"
  },
  {
    id: 6,
    question: "Czy cyberbezpieczeństwo jest drogie?",
    answer: "Nie. Koszt ochrony jest zwykle niższy niż potencjalne straty spowodowane awariami lub atakami"
  },
  {
    id: 7,
    question: "Czy tracę kontrolę nad systemami?",
    answer: "Nie. Masz pełny wgląd w działania, raporty i bezpieczeństwo, my działamy w tle, odciążając Twój zespół."
  }
];

export default function CyberbezpieczenstwoPage() {
  return (
    <main className="flex-1 bg-white">

      {/* ═══════════════════════════════════════════════════
          CARD 1: HERO + DLACZEGO BRAK OCHRONY (Ciemna Karta)
      ═══════════════════════════════════════════════════ */}
      <section className="relative bg-navy-950 overflow-hidden w-[calc(100%-20px)] mx-auto my-[10px] rounded-[20px]">
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px] opacity-40" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-500/10 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none z-0" />

        {/* HERO PART */}
        <div className="relative z-20 pt-[140px] pb-16 lg:pt-[180px] lg:pb-24 max-w-container mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.1fr] gap-12 lg:gap-20 items-center">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-6"
            >
              <h1 className="text-[44px] md:text-[56px] lg:text-[60px] xl:text-[64px] font-bold text-white leading-[1.1] tracking-tight">
                Cyberbezpieczeństwo dla firm. <br className="hidden md:block"/> Chronimy Twoje systemy i dane
              </h1>
              <p className="text-[17px] text-gray-400 leading-[1.7] max-w-[550px]">
                Zabezpieczamy firmę przed utratą danych, atakami i przestojami. Nasze kompleksowe podejście łączy audyty, testy, monitoring i szkolenia, żeby Twoja firma działała bez ryzyka
              </p>

              <div className="flex flex-col gap-2 mt-4">
                <Button href="/kontakt" size="lg">Darmowa konsultacja</Button>
                <span className="text-gray-500 text-[13px] font-mono ml-1 mt-2">Sprawdź czy Twoja firma jest bezpieczna</span>
              </div>
            </motion.div>

            {/* security-architecture.view Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full max-w-[550px] mx-auto lg:mr-0 lg:ml-auto"
            >
              <div className="w-full bg-[#08080F] border border-white/10 rounded-[16px] overflow-hidden flex flex-col shadow-2xl">
                {/* Header */}
                <div className="h-10 bg-[#111118] border-b border-white/10 flex items-center px-4 justify-between">
                  <div className="flex items-center gap-2">
                    <Shield className="w-3.5 h-3.5 text-gray-400" />
                    <span className="text-gray-300 font-mono text-[10px] tracking-wider">security-architecture.view</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-green-500/10 px-2 py-0.5 rounded border border-green-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-green-400 font-mono text-[9px] uppercase font-bold">LIVE</span>
                  </div>
                </div>
                {/* Body */}
                <div className="p-5 flex flex-col gap-4">
                  {/* Layer 1 */}
                  <div className="flex justify-between items-center bg-white/5 border border-white/5 rounded-lg p-3">
                    <div className="flex flex-col">
                      <span className="text-white text-[12px] font-semibold">Internet / External</span>
                      <span className="text-gray-500 text-[10px] font-mono">warstwa zewnętrzna</span>
                    </div>
                    <span className="text-red-500 font-mono text-[10px] font-bold bg-red-500/10 px-2 py-1 rounded">3 THREATS</span>
                  </div>
                  {/* Layer 2 */}
                  <div className="flex justify-between items-center bg-white/5 border border-white/5 rounded-lg p-3">
                    <div className="flex flex-col">
                      <span className="text-white text-[12px] font-semibold">Firewall & WAF</span>
                      <span className="text-gray-500 text-[10px] font-mono">ochrona wejścia</span>
                    </div>
                    <span className="text-yellow-400 font-mono text-[10px] font-bold bg-yellow-400/10 px-2 py-1 rounded">ACTIVE</span>
                  </div>
                  {/* Layer 3 */}
                  <div className="flex justify-between items-center bg-white/5 border border-white/5 rounded-lg p-3">
                    <div className="flex flex-col">
                      <span className="text-white text-[12px] font-semibold">Network Monitoring</span>
                      <span className="text-gray-500 text-[10px] font-mono">SIEM / IDS / IPS</span>
                    </div>
                    <span className="text-brand-500 font-mono text-[10px] font-bold bg-brand-500/10 px-2 py-1 rounded">SCANNING</span>
                  </div>
                  {/* Layer 4 */}
                  <div className="flex justify-between items-center bg-white/5 border border-white/5 rounded-lg p-3">
                    <div className="flex flex-col">
                      <span className="text-white text-[12px] font-semibold">Endpoints</span>
                      <span className="text-gray-500 text-[10px] font-mono">24 urządzenia</span>
                    </div>
                    <span className="text-purple-400 font-mono text-[10px] font-bold bg-purple-400/10 px-2 py-1 rounded">PROTECTED</span>
                  </div>
                  {/* Layer 5 */}
                  <div className="flex justify-between items-center bg-white/5 border border-white/5 rounded-lg p-3">
                    <div className="flex flex-col">
                      <span className="text-white text-[12px] font-semibold">Data & Backups</span>
                      <span className="text-gray-500 text-[10px] font-mono">szyfrowanie AES-256</span>
                    </div>
                    <span className="text-green-400 font-mono text-[10px] font-bold bg-green-400/10 px-2 py-1 rounded">ENCRYPTED</span>
                  </div>

                  {/* Summary */}
                  <div className="pt-3 border-t border-white/10 mt-1 flex justify-between items-center">
                    <div className="flex flex-col">
                      <span className="text-white text-[11px]">Wszystkie warstwy aktywne</span>
                      <span className="text-brand-500 font-mono text-[11px] font-bold">99.9% uptime</span>
                    </div>
                    <div className="flex items-center gap-6 text-right">
                      <div className="flex flex-col">
                        <span className="text-red-500 font-mono text-[14px] font-bold">1,847</span>
                        <span className="text-gray-400 text-[9px]">zagrożeń zablokowanych</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-green-400 font-mono text-[14px] font-bold">&lt; 15 min</span>
                        <span className="text-gray-400 text-[9px]">czas reakcji na incydent</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* DLACZEGO BRAK OCHRONY PART */}
        <div className="relative z-20 pb-24 lg:pb-[130px] pt-10">
          <div className="max-w-container mx-auto px-5 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6 max-w-3xl mb-12"
            >
              <h2 className="text-[36px] lg:text-[48px] font-bold text-white leading-[1.1]">
                Dlaczego brak ochrony IT może kosztować Twoją firmę
              </h2>
              <p className="text-[17px] text-gray-400 leading-[1.7]">
                Zagrożenia w sieci często są niewidoczne, dopóki nie dojdzie do awarii, wycieku danych lub ataku. Każda luka w systemach może oznaczać:
              </p>
            </motion.div>

            <div className="flex flex-col gap-3">
              {[
                { num: "01", title: "Utratę danych klientów i wewnętrznych", desc: "przestój i straty finansowe" },
                { num: "02", title: "Nieautoryzowany dostęp do systemów", desc: "kradzież lub manipulacja danymi" },
                { num: "03", title: "Ataki ransomware i malware", desc: "zatrzymanie pracy zespołu i chaos w procesach" },
                { num: "04", title: "Brak świadomości pracowników", desc: "większość ataków zaczyna się od błędu człowieka" },
                { num: "05", title: "Niedostateczny monitoring systemów", desc: "brak wiedzy o słabych punktach i zagrożeniach" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-6 bg-navy-900 border border-white/5 rounded-xl p-5 lg:p-6"
                >
                  <div className="bg-brand-500/10 border border-brand-500/20 text-brand-500 w-12 h-12 rounded-lg flex items-center justify-center font-mono text-[18px] font-bold shrink-0">
                    {item.num}
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-white text-[18px] lg:text-[20px] font-semibold">{item.title}</span>
                    <span className="text-gray-400 text-[15px]">{item.desc}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 3: KOMPLEKSOWE CYBERBEZPIECZEŃSTWO (Biała)
      ═══════════════════════════════════════════════════ */}
      <section className="bg-white py-[100px] lg:py-[130px]">
        <div className="max-w-container mx-auto px-5 lg:px-8">
          
          <div className="flex flex-col gap-6">
            
            {/* Top Row: Large Black Box (Left) + Small White Card (Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-6">
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#060606] rounded-[24px] p-10 lg:p-14 flex flex-col justify-center"
              >
                <h2 className="text-[36px] lg:text-[48px] font-bold text-white leading-[1.1] mb-6">
                  Kompleksowe cyberbezpieczeństwo dla firm
                </h2>
                <p className="text-[18px] lg:text-[20px] text-gray-400 leading-[1.6]">
                  Oferujemy pełny zakres działań ochronnych od audytów, testów i wdrożeń, po stały monitoring i szkolenia. Dzięki temu Twoje systemy działają bezpiecznie, a Ty masz pełną kontrolę
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white border border-gray-200 shadow-xl shadow-gray-200/50 rounded-[24px] p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden group hover:border-brand-500 transition-colors duration-300"
              >
                {/* Decorative dots in corner like in design (optional touch) */}
                <div className="absolute top-6 right-6 flex gap-1">
                  <div className="w-1.5 h-1.5 bg-brand-500 rounded-full" />
                  <div className="w-1.5 h-1.5 bg-gray-200 rounded-full" />
                </div>
                
                <div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center mb-8 shrink-0">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                
                <div className="flex flex-col">
                  <h3 className="text-[24px] lg:text-[26px] font-bold text-ink-900 leading-[1.2] mb-4">
                    Audyt bezpieczeństwa IT
                  </h3>
                  <p className="text-gray-600 text-[16px] leading-[1.6]">
                    sprawdzamy systemy 24/7, reagujemy zanim drobny problem stanie się dużą awarią
                  </p>
                </div>
              </motion.div>

            </div>

            {/* Middle Row: 4 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Analiza OSINT i testy socjotechniczne",
                  desc: "zabezpieczamy dostęp do informacji, konfigurujemy firewalle, VPN i backupy, dzięki czemu ryzyko utraty danych lub ataku z zewnątrz jest minimalne",
                  icon: Eye
                },
                {
                  title: "Testy penetracyjne systemów i aplikacji",
                  desc: "pomagamy pracownikom w codziennym korzystaniu z narzędzi i systemów, szybka pomoc przy problemach i szkolenia, żeby każdy mógł pracować bez blokad",
                  icon: Activity
                },
                {
                  title: "Wdrażanie infrastruktury w chmurze i monitoring IT",
                  desc: "dodajemy nowe systemy, konta, funkcje i sprzęt tak, żeby infrastruktura rosła razem z Twoją firmą, bez chaosu i przestojów",
                  icon: CloudLightning
                },
                {
                  title: "Stałe wsparcie i rozwój systemów",
                  desc: "masz dostęp do wszystkich danych, raportów i działań, wiesz dokładnie, co robimy i jakie efekty to przynosi",
                  icon: Cpu
                }
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * (i + 1) }}
                  className="bg-white border border-gray-200 rounded-[20px] p-8 flex flex-col hover:shadow-xl hover:shadow-gray-200/50 hover:border-brand-200 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-brand-50 text-brand-600 rounded-lg flex items-center justify-center mb-6 shrink-0">
                    <card.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-[20px] font-bold text-ink-900 leading-[1.3] mb-4">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-[15px] leading-[1.6]">
                    {card.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Bottom Row: Full width CTA strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full bg-brand-600 rounded-[20px] px-8 py-10 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl shadow-brand-500/20"
            >
              <h3 className="text-[28px] lg:text-[32px] font-bold text-white text-center md:text-left">
                Zabezpieczmy Twoją firmę
              </h3>
              <Button href="/kontakt" className="bg-white text-brand-600 border-white hover:bg-gray-50 flex-shrink-0">
                Darmowa konsultacja
              </Button>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 4: ZABEZPIECZENIE TWOICH SYSTEMÓW (Biała)
      ═══════════════════════════════════════════════════ */}
      <section className="bg-gray-50 py-[100px] lg:py-[130px] border-y border-gray-200">
        <div className="max-w-container mx-auto px-5 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 max-w-4xl mb-16"
          >
            <h2 className="text-[36px] lg:text-[48px] font-bold text-ink-900 leading-[1.1]">
              Zabezpieczenie Twoich systemów i danych
            </h2>
            <p className="text-[18px] lg:text-[20px] text-gray-600 leading-[1.6]">
              Wdrażamy i konfigurujemy mechanizmy bezpieczeństwa dostępne w systemach, z których korzysta Twoja firma, takich jak np. Microsoft 365, Google Workspace czy środowiska serwerowe i chmurowe.
            </p>
            <p className="text-[16px] lg:text-[18px] text-gray-500 leading-[1.6]">
              Odpowiednio ustawiamy dostęp do danych, zabezpieczenia kont, ochronę poczty, polityki uprawnień oraz monitoring aktywności użytkowników, tak aby systemy automatycznie chroniły firmowe informacje przed nieautoryzowanym dostępem i zagrożeniami.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Dostęp i konta użytkowników",
                tags: ["Microsoft", "Google"],
                icon: Key,
                desc: "Konfigurujemy mechanizmy zabezpieczające dostęp do kont i danych",
                points: [
                  "wdrażanie i konfiguracja MFA / 2FA",
                  "ustawianie zasad logowania i polityk dostępu",
                  "konfiguracja kont użytkowników i uprawnień"
                ]
              },
              {
                title: "Ochrona poczty i komunikacji",
                tags: ["Microsoft", "Google"],
                icon: Shield,
                desc: "Konfigurujemy zabezpieczenia dostępne w systemach pocztowych i komunikacyjnych",
                points: [
                  "włączamy i konfigurujemy filtry antyspamowe i antyphishingowe",
                  "ustawiamy zasady obsługi wiadomości i załączników",
                  "konfigurujemy dostęp i logowanie do narzędzi komunikacji",
                  "wdrażamy polityki bezpieczeństwa komunikacji"
                ]
              },
              {
                title: "Dane i dokumenty firmowe",
                tags: ["Google Drive", "SharePoint", "OneDrive", "Dropbox"],
                icon: FileWarning,
                desc: "Konfigurujemy zasady dostępu i udostępniania danych",
                points: [
                  "ustawiamy dostęp do dokumentów i folderów",
                  "konfigurujemy zasady udostępniania plików",
                  "włączamy rejestrowanie aktywności użytkowników",
                  "konfigurujemy ograniczenia dostępu do danych"
                ]
              },
              {
                title: "Infrastruktura i systemy",
                tags: ["AWS", "Azure"],
                icon: Server,
                desc: "Konfiguracja, monitoring oraz ochrona kluczowych systemów i środowisk.",
                points: [
                  "ustawianie dostępu do serwerów i usług",
                  "konfiguracja sieci, usług i zasad bezpieczeństwa",
                  "wdrażanie backupów, monitoringu i alertowania",
                  "kontrola dostępu, aktualizacje i zabezpieczenia usług"
                ]
              }
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[20px] p-8 lg:p-10 shadow-lg shadow-gray-200/50 border border-gray-100 flex flex-col"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-gray-50 text-brand-600 rounded-xl flex items-center justify-center shrink-0">
                    <card.icon className="w-6 h-6" />
                  </div>
                  <div className="flex flex-wrap gap-2 justify-end">
                    {card.tags.map((tag, j) => (
                      <span key={j} className="text-gray-400 font-mono text-[11px] font-bold uppercase bg-gray-50 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="text-[24px] lg:text-[26px] font-bold text-ink-900 leading-[1.2] mb-3">
                  {card.title}
                </h3>
                <p className="text-[16px] text-gray-600 mb-6 leading-[1.6]">
                  {card.desc}
                </p>

                <ul className="flex flex-col gap-3 mt-auto pt-4 border-t border-gray-100">
                  {card.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-3 text-gray-500 text-[15px] leading-[1.5]">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0 mt-2" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CARD 2: DLACZEGO WARTO + SZKOLENIA (Ciemna Karta)
      ═══════════════════════════════════════════════════ */}
      <section className="relative bg-navy-950 overflow-hidden w-[calc(100%-20px)] mx-auto my-[10px] rounded-[20px]">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-brand-500/10 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0" />
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

        {/* DLACZEGO WARTO INWESTOWAĆ PART */}
        <div className="relative z-20 pt-[100px] lg:pt-[130px] pb-16">
          <div className="max-w-container mx-auto px-5 lg:px-8">
            <h2 className="text-[36px] lg:text-[48px] font-bold text-white mb-12 text-center max-w-3xl mx-auto leading-[1.1]">
              Dlaczego warto inwestować w cyberbezpieczeństwo
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { text: "Jedna luka bezpieczeństwa może spowodować przestój w firmie i kosztować setki tysięcy złotych", icon: AlertTriangle },
                { text: "Chronione systemy działają stabilnie i pozwalają zespołowi pracować bez przestojów", icon: Shield },
                { text: "Ochrona danych wzmacnia zaufanie klientów i partnerów biznesowych", icon: Lock },
                { text: "Dzięki dokładnej analizie wiesz, gdzie są potencjalne zagrożenia i możesz działać zanim wpłyną na Twój biznes", icon: Activity }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-navy-900/50 border border-white/10 rounded-[16px] p-6 lg:p-8 flex flex-col gap-4 text-center items-center hover:bg-navy-900 transition-colors duration-300"
                >
                  <div className="w-12 h-12 bg-brand-500/10 text-brand-500 rounded-full flex items-center justify-center">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <p className="text-gray-300 text-[15px] leading-[1.6]">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* SZKOLENIA PART */}
        <div className="relative z-20 pb-[100px] lg:pb-[130px] pt-16 border-t border-white/5">
          <div className="max-w-container mx-auto px-5 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center">
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col gap-6"
              >
                <h2 className="text-[36px] lg:text-[48px] font-bold text-white leading-[1.1]">
                  Szkolenia z cyberbezpieczeństwa - zwiększ świadomość swojego zespołu
                </h2>
                <p className="text-[18px] text-gray-400 leading-[1.6]">
                  Najlepsze zabezpieczenia nie pomogą, jeśli pracownicy nie wiedzą, jak bezpiecznie korzystać z systemów.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-navy-900 border border-white/10 rounded-[20px] p-8 lg:p-10 flex flex-col gap-8"
              >
                <p className="text-[18px] text-white font-medium">
                  Prowadzimy szkolenia praktyczne, które:
                </p>
                <ul className="flex flex-col gap-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-brand-500 shrink-0" />
                    <span className="text-[16px] text-gray-300">uczą wykrywania zagrożeń i podejrzanych działań w sieci</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-brand-500 shrink-0" />
                    <span className="text-[16px] text-gray-300">pokazują, jak chronić dane i konta firmowe</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-brand-500 shrink-0" />
                    <span className="text-[16px] text-gray-300">zmniejszają ryzyko wycieków spowodowanych błędem człowieka</span>
                  </li>
                </ul>
                <div className="mt-2">
                  <Button href="/uslugi/szkolenia">
                    Zobacz Infrastrukturę IT
                  </Button>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 7: FAQ (Biała)
      ═══════════════════════════════════════════════════ */}
      <Faq questions={cyberFaq} />

    </main>
  );
}
