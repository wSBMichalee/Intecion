"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Shield, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Faq, FaqItem } from "@/components/sections/Faq";

const szkoleniaFaq: FaqItem[] = [
  {
    id: 1,
    question: "Co to są szkolenia z cyberbezpieczeństwa?",
    answer: "Szkolenia z cyberbezpieczeństwa to zajęcia, które uczą, jak rozpoznawać zagrożenia w internecie, chronić dane i bezpiecznie korzystać z systemów IT"
  },
  {
    id: 2,
    question: "Dla kogo są szkolenia z cyberbezpieczeństwa?",
    answer: "Szkolenia są przeznaczone dla firm, pracowników, szkół oraz wszystkich osób korzystających z systemów IT i internetu"
  },
  {
    id: 3,
    question: "Czy szkolenia z cyberbezpieczeństwa są obowiązkowe?",
    answer: "W niektórych organizacjach są wymagane ze względu na ochronę danych (np. RODO), ale przede wszystkim są kluczowe dla bezpieczeństwa firmy"
  },
  {
    id: 4,
    question: "Czy szkolenia są stacjonarne czy online?",
    answer: "Oferujemy szkolenia z cyberbezpieczeństwa zarówno w formie stacjonarnej, jak i online, dopasowane do potrzeb uczestników i zapewniające wysoki poziom zaangażowania oraz skuteczności przekazywanej wiedzy."
  },
  {
    id: 5,
    question: "Jak długo trwa szkolenie z cyberbezpieczeństwa?",
    answer: "Czas trwania szkolenia zależy od zakresu i potrzeb. Możemy zorganizować zarówno krótkie warsztaty jak i pełne szkolenia dla firm i szkół"
  },
  {
    id: 6,
    question: "Ile osób może wziąć udział w jednym szkoleniu?",
    answer: "Dostosowujemy wielkość grupy do formy szkolenia i celu. Możemy pracować zarówno z mniejszymi zespołami, jak i większymi, tak, żeby każdy uczestnik wyniósł niezbędną wiedzę"
  },
  {
    id: 7,
    question: "Co otrzymamy po szkoleniu z cyberbezpieczeństwa?",
    answer: "Po szkoleniu uczestnicy wiedzą, jak rozpoznawać zagrożenia i jak reagować w codziennej pracy.\nDodatkowo przekazujemy praktyczne wskazówki i materiały, które pomagają utrwalić wiedzę i stosować ją w firmie lub szkole na co dzień"
  }
];

export default function SzkoleniaPage() {
  return (
    <main className="flex-1 bg-white">

      {/* ═══════════════════════════════════════════════════
          CARD 1: HERO + DLACZEGO NIEZBĘDNE (Ciemna Karta)
      ═══════════════════════════════════════════════════ */}
      <section className="relative bg-navy-950 overflow-hidden w-[calc(100%-20px)] mx-auto my-[10px] rounded-[20px]">
        {/* Background elements */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px] opacity-50" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-500/10 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none z-0" />

        {/* HERO PART */}
        <div className="relative z-20 pt-[140px] pb-16 lg:pt-[180px] lg:pb-24 max-w-container mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-6 lg:max-w-[800px]"
            >
              <h1 className="text-[44px] md:text-[56px] lg:text-[60px] xl:text-[64px] font-bold text-white leading-[1.1] tracking-tight">
                Szkolenia z cyberbezpieczeństwa <br className="hidden lg:block"/> dla firm i szkół
              </h1>
              <p className="text-[17px] text-gray-400 leading-[1.7] max-w-[550px]">
                Prowadzimy szkolenia stacjonarne i online z cyberbezpieczeństwa dla firm oraz szkół, które uczą, jak rozpoznawać zagrożenia, chronić dane i bezpiecznie korzystać z systemów IT
              </p>

              <div className="flex flex-col gap-2 mt-4">
                <Button href="/kontakt" size="lg">Darmowa konsultacja</Button>
                <span className="text-gray-500 text-[13px] font-mono ml-1 mt-2">Sprawdź czy Twoja firma jest bezpieczna</span>
              </div>
            </motion.div>

            {/* Threat Monitor Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full max-w-[450px] mx-auto lg:mr-0 lg:ml-auto"
            >
              <div className="w-full bg-[#0D0D18] border border-white/10 rounded-[16px] overflow-hidden flex flex-col shadow-2xl">
                {/* Header */}
                <div className="h-12 bg-[#16161F] border-b border-white/10 flex items-center px-5 justify-between">
                  <div className="flex items-center gap-3">
                    <Shield className="w-4 h-4 text-brand-500" />
                    <span className="text-white font-mono text-[11px] font-bold tracking-wider uppercase">Threat Monitor</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-gray-400 font-mono text-[10px] uppercase">live</span>
                  </div>
                </div>
                {/* Body */}
                <div className="p-6 flex flex-col gap-6">
                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-gray-400 text-[13px]">Phishing wykryty</span>
                    <span className="text-green-400 font-mono text-[16px] font-bold">98%</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-gray-400 text-[13px]">Użytkownicy chronieni</span>
                    <span className="text-brand-500 font-mono text-[16px] font-bold">1,240</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-gray-400 text-[13px]">Incydenty zablokowane</span>
                    <span className="text-yellow-400 font-mono text-[16px] font-bold">47</span>
                  </div>
                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 flex justify-between items-center mt-2">
                    <div className="flex items-center gap-3">
                      <AlertTriangle className="w-5 h-5 text-red-500" />
                      <span className="text-red-500 font-mono text-[12px] font-bold">PHISHING</span>
                    </div>
                    <span className="text-gray-400 text-[11px]">wykryto próbę</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* DLACZEGO NIEZBĘDNE PART */}
        <div className="relative z-20 pb-24 lg:pb-[130px] pt-10">
          <div className="max-w-container mx-auto px-5 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6 max-w-3xl mb-12"
            >
              <h2 className="text-[36px] lg:text-[48px] font-bold text-white leading-[1.1]">
                Dlaczego szkolenia z cyberbezpieczeństwa są dziś niezbędne
              </h2>
              <p className="text-[17px] text-gray-400 leading-[1.7]">
                Wiele firm inwestuje w zabezpieczenia IT, ale pomija jeden kluczowy element - ludzi. Brak świadomości zagrożeń to jedna z najczęstszych przyczyn incydentów bezpieczeństwa
              </p>
            </motion.div>

            <div className="flex flex-col gap-3">
              {[
                { num: "01", text: "Pracownicy nie rozpoznają zagrożeń cyberbezpieczeństwa (phishing, malware)" },
                { num: "02", text: "Brak wiedzy o ochronie danych osobowych i firmowych" },
                { num: "03", text: "Niewłaściwe korzystanie z systemów IT i internetu" },
                { num: "04", text: "Rosnące ryzyko ataków socjotechnicznych" },
                { num: "05", text: "Poczucie marnowania czasu i budżetu" },
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
                  <div className="text-white text-[16px] lg:text-[18px] font-medium">
                    {item.text}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 3: DOPASOWANE DO ZAGROŻEŃ (Biała)
      ═══════════════════════════════════════════════════ */}
      <section className="bg-white py-[100px] lg:py-[130px]">
        <div className="max-w-container mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-8"
            >
              <div className="flex flex-col gap-6">
                <h2 className="text-[36px] lg:text-[48px] font-bold text-ink-900 leading-[1.1]">
                  Szkolenia z cyberbezpieczeństwa dopasowane do zagrożeń
                </h2>
                <p className="text-[17px] text-gray-600 leading-[1.7]">
                  Nasze szkolenia pomagają użytkownikom rozumieć realne ryzyka, których nie widać na pierwszy rzut oka. Uczymy, jak poprawnie korzystać z systemów i reagować w sytuacjach, które mogą zagrozić firmowym danym.
                </p>
                <p className="text-[20px] lg:text-[24px] font-bold text-ink-900">
                  Nie uczymy teorii bez praktyki.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {[
                  "Jak rozpoznać zagrożenia",
                  "Jak reagować",
                  "Czego unikać w przyszłości"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-brand-600 shrink-0" />
                    <span className="text-[18px] lg:text-[20px] text-ink-900 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-brand-600 rounded-[20px] p-8 lg:p-12 text-white flex items-center justify-center text-center shadow-2xl shadow-brand-500/20"
            >
              <p className="text-[20px] lg:text-[22px] leading-[1.6] font-medium">
                Szkolenie pokazuje, jak wygląda ryzyko w codziennej pracy — online, w poczcie, na urządzeniach oraz podczas korzystania z firmowych systemów i danych.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CARD 2: OUTSOURCING + NARZĘDZIA + FIRMY I SZKOŁY (Ciemna Karta)
      ═══════════════════════════════════════════════════ */}
      <section className="relative bg-navy-950 overflow-hidden w-[calc(100%-20px)] mx-auto my-[10px] rounded-[20px]">
        {/* Glow */}
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-brand-600/10 blur-[120px] rounded-full -translate-x-1/2 pointer-events-none z-0" />
        
        {/* OUTSOURCING IT PART */}
        <div className="relative z-20 pt-[100px] lg:pt-[130px] pb-16">
          <div className="max-w-container mx-auto px-5 lg:px-8">
            <h2 className="text-[36px] lg:text-[52px] font-bold text-white mb-12 text-center">
              Co obejmuje outsourcing IT?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Rozpoznawanie zagrożeń i ataków socjotechnicznych",
                  points: [
                    "phishing, spear phishing, pretexting i ataki BEC",
                    "analiza rzeczywistych przypadków naruszeń danych"
                  ]
                },
                {
                  title: "Bezpieczne korzystanie z danych i systemów IT",
                  points: [
                    "kontrola dostępu, polityka haseł i zasada minimalnych uprawnień",
                    "klasyyfikacja danych i ochrona ich w codziennej pracy"
                  ]
                },
                {
                  title: "Bezpieczna praca w sieci i środowiskach chmurowych",
                  points: [
                    "bezpieczne połączenia, VPN i ochrona urządzeń końcowych",
                    "cyberhigiena w pracy zdalnej i hybrydowej"
                  ]
                },
                {
                  title: "Reakcja na incydenty bezpieczeństwa IT",
                  points: [
                    "procedury działania w przypadku naruszenia bezpieczeństwa",
                    "izolacja zagrożenia, raportowanie i odtwarzanie ciągłości działania"
                  ]
                }
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-[16px] p-8 lg:p-10 flex flex-col gap-6"
                >
                  <div className="w-10 h-10 bg-brand-50 text-brand-600 rounded-lg flex items-center justify-center shrink-0">
                    <Shield className="w-5 h-5" />
                  </div>
                  <h3 className="text-[20px] lg:text-[24px] font-bold text-ink-900 leading-[1.2]">
                    {card.title}
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {card.points.map((point, j) => (
                      <li key={j} className="flex items-start gap-3 text-gray-600 text-[15px] leading-[1.6]">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0 mt-2" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* NARZĘDZIA PART */}
        <div className="relative z-20 py-16 border-t border-white/5">
          <div className="max-w-container mx-auto px-5 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6 max-w-3xl mb-12"
            >
              <h2 className="text-[36px] lg:text-[48px] font-bold text-white leading-[1.1]">
                Na jakich narzędziach prowadzimy szkolenia?
              </h2>
              <p className="text-[17px] text-gray-400 leading-[1.7]">
                Szkolenia omawiamy na narzędziach, z których korzystają Twoi pracownicy na co dzień. Pokazujemy ryzyka, phishing, ataki, konfigurację kont, hasła, udostępnianie danych i bezpieczne zachowania w konkretnych systemach.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Microsoft 365",
                  subtitle: "Outlook, Teams, SharePoint",
                  desc: "poczta, komunikacja, dokumenty i dane firmowe",
                  points: [
                    "jak rozpoznawać phishing i fałszywe wiadomości",
                    "jak bezpiecznie korzystać z poczty i załączników",
                    "jak bezpiecznie komunikować się i wymieniać informacje",
                    "jak udostępniać dokumenty i zarządzać dostępami (korzysci)"
                  ],
                  footer: "pracownicy uczą się chronić dane firmowe"
                },
                {
                  title: "iWork",
                  subtitle: "Pages, Numbers, Keynote, iCloud",
                  desc: "dokumenty i synchronizacja danych",
                  points: [
                    "jak bezpiecznie udostępniać pliki w iCloud (linki i uprawnienia)",
                    "jak unikać przypadkowego publicznego dostępu do dokumentów",
                    "jak chronić Apple ID i korzystać z MFA",
                    "jak bezpiecznie pracować na prywatnych i firmowych urządzeniach"
                  ],
                  footer: "uczniowie i nauczyciele uczą się chronić swoją prywatność i konta"
                },
                {
                  title: "Google Workspace",
                  subtitle: "Gmail, Drive, Docs",
                  desc: "poczta, dokumenty i współpraca w chmurze",
                  points: [
                    "jak rozpoznawać phishing i fałszywe wiadomości",
                    "jak bezpiecznie korzystać z poczty i załączników (Gmail)",
                    "jak udostępniać pliki i kontrolować dostęp (Drive)",
                    "jak bezpiecznie współpracować nad dokumentami online (korzysci)"
                  ],
                  footer: "ochrona danych firmowych i szkolnych"
                }
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-navy-900 border border-white/5 rounded-[16px] p-6 lg:p-8 flex flex-col"
                >
                  <div className="w-10 h-10 bg-brand-500/10 border border-brand-500/20 text-brand-500 rounded-lg flex items-center justify-center shrink-0 mb-6">
                    <span className="font-mono text-[14px] font-bold">{i + 1}</span>
                  </div>
                  <h3 className="text-[20px] lg:text-[22px] font-bold text-white leading-[1.2] mb-1">
                    {card.title}
                  </h3>
                  <div className="text-[14px] font-semibold text-gray-300 mb-1">{card.subtitle}</div>
                  <div className="text-[13px] text-gray-500 mb-6">{card.desc}</div>
                  
                  <ul className="flex flex-col gap-3 flex-1 mb-8">
                    {card.points.map((point, j) => (
                      <li key={j} className="flex items-start gap-2 text-gray-400 text-[14px] leading-[1.5]">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0 mt-1.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-white/10 mt-auto">
                    <p className="text-brand-400 text-[13px] font-medium leading-[1.5]">
                      {card.footer}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* FIRMY I SZKOŁY PART */}
        <div className="relative z-20 pb-[100px] lg:pb-[130px] pt-16 border-t border-white/5">
          <div className="max-w-container mx-auto px-5 lg:px-8">
            <h2 className="text-[36px] lg:text-[48px] font-bold text-white mb-12 text-center">
              Szkolenia z cyberbezpieczeństwa dla firm i szkół
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Firmy */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-navy-900 border border-white/5 rounded-[16px] p-8 lg:p-10 flex flex-col"
              >
                <div className="inline-flex items-center gap-2 bg-brand-500/10 border border-brand-500/20 px-3 py-1.5 rounded-full w-fit mb-6">
                  <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
                  <span className="text-brand-500 text-[11px] font-bold tracking-widest font-mono uppercase">dla firm</span>
                </div>
                <h3 className="text-[28px] font-bold text-white mb-4">Firmy</h3>
                <p className="text-gray-400 text-[16px] leading-[1.7] mb-10 flex-1">
                  Szkolenia dla zespołów, które korzystają z poczty, systemów firmowych, plików online i narzędzi do codziennej pracy.
                </p>
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                  <div className="flex flex-col gap-1">
                    <span className="text-brand-500 font-mono text-[24px] font-bold">−73%</span>
                    <span className="text-gray-500 text-[12px] leading-snug">Mniej incydentów</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-brand-500 font-mono text-[24px] font-bold">100%</span>
                    <span className="text-gray-500 text-[12px] leading-snug">Gotowy zespół</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-brand-500 font-mono text-[24px] font-bold">+85%</span>
                    <span className="text-gray-500 text-[12px] leading-snug">Świadomość zagrożeń</span>
                  </div>
                </div>
              </motion.div>

              {/* Szkoły */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-[16px] p-8 lg:p-10 flex flex-col"
              >
                <div className="inline-flex items-center gap-2 bg-brand-50 border border-brand-100 px-3 py-1.5 rounded-full w-fit mb-6">
                  <span className="w-2 h-2 rounded-full bg-brand-600 shrink-0" />
                  <span className="text-brand-600 text-[11px] font-bold tracking-widest font-mono uppercase">dla szkół</span>
                </div>
                <h3 className="text-[28px] font-bold text-ink-900 mb-4">Szkoły i placówki edukacyjne</h3>
                <p className="text-gray-600 text-[16px] leading-[1.7] mb-10 flex-1">
                  Szkolenia dla nauczycieli, uczniów i pracowników administracji, którzy korzystają z dzienników, poczty, kont i systemów edukacyjnych.
                </p>
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
                  <div className="flex flex-col gap-1">
                    <span className="text-brand-600 font-mono text-[24px] font-bold">99%</span>
                    <span className="text-gray-600 text-[12px] leading-snug">Ochrona danych</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-brand-600 font-mono text-[24px] font-bold">100%</span>
                    <span className="text-gray-600 text-[12px] leading-snug">Przeszkoleni</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-brand-600 font-mono text-[24px] font-bold">−60%</span>
                    <span className="text-gray-600 text-[12px] leading-snug">Mniej ryzyka</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 7: DLACZEGO WARTO INWESTOWAĆ (Biała)
      ═══════════════════════════════════════════════════ */}
      <section className="bg-white py-[100px] lg:py-[130px]">
        <div className="max-w-container mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[36px] lg:text-[48px] font-bold text-ink-900 leading-[1.1] lg:sticky lg:top-32">
                Dlaczego warto inwestować w szkolenia z cyberbezpieczeństwa
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
              {[
                { num: "01", text: "Zmniejszenie ryzyka ataków i incydentów bezpieczeństwa" },
                { num: "02", text: "Zwiększenie świadomości pracowników" },
                { num: "03", text: "Lepsza ochrona danych firmowych i osobowych" },
                { num: "04", text: "Uzupełnienie systemów zabezpieczeń IT" },
                { num: "05", text: "Szkolenia w formie stacjonarnej oraz online" },
                { num: "06", text: "Program dopasowany do poziomu uczestników" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col gap-4"
                >
                  <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center font-bold text-gray-300 text-[20px] font-mono">
                    {item.num}
                  </div>
                  <h3 className="text-[18px] lg:text-[20px] font-bold text-ink-900 leading-[1.4]">
                    {item.text}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CARD 3: CTA BANNER (Ciemna Karta)
      ═══════════════════════════════════════════════════ */}
      <section className="relative bg-navy-950 overflow-hidden w-[calc(100%-20px)] mx-auto my-[10px] rounded-[20px]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.12),transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px] opacity-50" />

        <div className="max-w-container mx-auto px-5 lg:px-8 relative z-10 text-center py-24 lg:py-32">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[36px] lg:text-[52px] font-bold text-white mb-10 leading-[1.1] max-w-4xl mx-auto"
          >
            Nie wiesz, od czego zacząć? <br className="hidden md:block" />
            Umów darmową konsultację, dobierzemy szkolenie do potrzeb Twojej firmy
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex justify-center"
          >
            <Button href="/uslugi/infrastruktura-it" size="md">Zobacz Infrastrukturę IT</Button>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 9: FAQ (Biała)
      ═══════════════════════════════════════════════════ */}
      <Faq questions={szkoleniaFaq} />

    </main>
  );
}
