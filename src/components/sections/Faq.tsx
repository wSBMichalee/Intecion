"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const defaultFaqs: FaqItem[] = [
  {
    id: 1,
    question: "Czy marketing naprawdę przekłada się na sprzedaż?",
    answer: "Tak. Dobrze zaplanowane działania marketingowe, opierające się na analizie danych i zachowaniach użytkowników, bezpośrednio zwiększają liczbę generowanych leadów, co wprost proporcjonalnie przekłada się na wzrost sprzedaży w Twojej firmie.",
  },
  {
    id: 2,
    question: "Czy mała firma powinna inwestować w marketing?",
    answer: "Zdecydowanie tak. Dla małych firm kluczowe jest jednak precyzyjne dobranie kanałów, aby optymalnie wykorzystać dostępny budżet i dotrzeć do właściwej grupy docelowej, bez przepalania środków.",
  },
  {
    id: 3,
    question: "Co jest ważniejsze: SEO czy reklamy?",
    answer: "Zarówno SEO jak i reklamy (PPC) są ważne i pełnią różne funkcje w lejku sprzedażowym. Reklamy dają szybki efekt i natychmiastowy ruch, natomiast SEO to inwestycja długoterminowa, która z czasem zapewnia darmowy, organiczny ruch najwyższej jakości.",
  },
  {
    id: 4,
    question: "Czy projektujecie rozwiązania dedykowane?",
    answer: "Tak. Tworzymy oprogramowanie szyte na miarę, dostosowane w 100% do specyficznych potrzeb i procesów biznesowych naszych klientów.",
  },
  {
    id: 5,
    question: "Czy mogę mieć kontrolę nad stroną lub aplikacją?",
    answer: "Oczywiście. Każdy projekt opieramy na systemach CMS lub dedykowanych panelach administracyjnych, które pozwalają Ci na pełną kontrolę i samodzielne edytowanie najważniejszych treści.",
  },
  {
    id: 6,
    question: "Czy tworzycie dedykowane oprogramowania dla firm?",
    answer: "Tak, specjalizujemy się w tworzeniu aplikacji webowych, systemów CRM/ERP oraz automatyzacji procesów operacyjnych dla średnich i dużych przedsiębiorstw.",
  },
  {
    id: 7,
    question: "Czy pomagacie firmom w działaniach IT?",
    answer: "Zapewniamy wsparcie technologiczne i outsourcing IT. Zajmujemy się infrastrukturą, serwerami, bezpieczeństwem oraz bieżącym wsparciem technicznym Twojego zespołu.",
  },
];

interface FaqProps {
  questions?: FaqItem[];
}

export function Faq({ questions = defaultFaqs }: FaqProps) {
  const [openId, setOpenId] = useState<number | null>(1); // First open by default

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-[#f8f9fb] py-20 lg:py-28 overflow-hidden">
      <div className="max-w-[800px] mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.5 }}
          className="font-heading text-3xl md:text-5xl text-ink-900 font-bold mb-12 text-center"
        >
          FAQ
        </motion.h2>

        <div className="flex flex-col gap-4">
          {questions.map((faq, index) => {
            const isOpen = openId === faq.id;

            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors focus:outline-none"
                >
                  <span className="font-heading text-lg font-bold text-ink-900 pr-8">
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-brand-50' : 'bg-gray-50'}`}>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-brand-600" : "text-gray-400"
                      }`}
                    />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2">
                        <div className="w-full h-px bg-gray-100 mb-4"></div>
                        <p className="font-body text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
