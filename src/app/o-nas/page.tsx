"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <>
      <main className="flex-1">
        {/* HERO SECTION */}
        <div className="bg-white">
<section className="relative bg-navy-950 flex flex-col justify-center overflow-hidden border-b border-white/5 w-full max-w-[1900px] mx-auto h-[735px] rounded-[20px] pt-20">
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          </div>
          
          <div className="max-w-[1200px] mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-6 max-w-3xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
                O nas
              </h1>
              <p className="text-gray-400 font-body text-lg leading-relaxed">
                Wierzymy, że marketing działa najlepiej wtedy, gdy jest wspierany przez dobrą technologię. 
                <br />
                Dlatego projektujemy strony, aplikacje i oprogramowania dla firm, a następnie rozwijamy je poprzez działania marketingowe oparte na danych.
              </p>
            </motion.div>
          </div>
        </section>
        </div>

        {/* SECTION: KIEDY MARKETING SPOTYKA TECHNOLOGIE */}
        <section className="bg-white py-20 lg:py-32">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="flex flex-col gap-8"
              >
                <h2 className="text-3xl md:text-5xl font-black text-ink-900 leading-tight">
                  Kiedy marketing spotyka technologię
                </h2>
                <p className="text-gray-600 font-body leading-relaxed text-lg">
                  Intecion powstał z potrzeby, którą zauważyliśmy w firmach, gdzie marketing i technologia działały osobno tracąc przy tym czas, pieniądze i klientów. Chcieliśmy stworzyć agencję, która łączy te obszary w jeden spójny system, dzięki któremu firmy faktycznie rosną i działają efektywnie.
                </p>

                <div className="flex flex-col gap-8 mt-4">
                  <div className="flex gap-6 items-start">
                    <div className="text-6xl font-black text-brand-100 leading-none">1</div>
                    <div className="pt-2">
                      <h3 className="font-bold text-ink-900 text-lg mb-2 flex items-center gap-2">
                        Nasza <span className="text-brand-500 underline decoration-2 underline-offset-4">wizja</span>
                      </h3>
                      <p className="text-gray-600 font-body text-sm leading-relaxed">
                        Chcemy, aby firmy mogły w pełni wykorzystywać potencjał swoich działań online. Wyobrażamy sobie świat, w którym strony internetowe, rozwiązania systemowe oraz marketing wspólnie tworzą przewagę i mierzalny wzrost.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start">
                    <div className="text-6xl font-black text-brand-100 leading-none">2</div>
                    <div className="pt-2">
                      <h3 className="font-bold text-ink-900 text-lg mb-2 flex items-center gap-2">
                        Nasza <span className="text-brand-500 underline decoration-2 underline-offset-4">misja</span>
                      </h3>
                      <p className="text-gray-600 font-body text-sm leading-relaxed">
                        Codziennie pomagamy firmom tworzyć spójne systemy sprzedaży i komunikacji online. Projektujemy strony, aplikacje i dedykowane oprogramowania, rozwijamy je marketingowo oraz dostarczamy dane, aby każdy ruch zwiększał skuteczność i rozwój biznesu.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative aspect-square lg:aspect-[4/5] w-full"
              >
                <div className="bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 w-full h-full shadow-xl text-center p-4">
                  Brak pliku:<br />ChatGPT_Image_1_maj_2026.png<br />(1014x1105px)
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION: NASZE PODEJŚCIE */}
        <section className="bg-white py-20 lg:py-32 border-t border-gray-100">
          <div className="max-w-[1200px] mx-auto px-6">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-black text-ink-900 mb-12 text-center"
            >
              Nasze podejście
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative rounded-2xl overflow-hidden bg-navy-950 mb-6 aspect-[4/1] flex items-center"
            >
              <div className="absolute inset-0 z-0 bg-[url('/images/hero-bg-poster.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
              <div className="relative z-10 px-8 lg:px-16 flex justify-between items-center w-full">
                <div className="max-w-xl">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">Marketing, technologia i dane powinny działać razem</h3>
                  <p className="text-brand-200 font-body text-sm">Strona internetowa, aplikacja, dane, kampanie reklamowe i SEO - wszystko tworzy jeden spójny system. Dzięki temu nie tracisz szansy na sprzedaż i masz pełen wgląd w skuteczność swoich działań.</p>
                </div>
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 transition-transform flex-shrink-0">
                  <ChevronRight className="w-6 h-6 text-brand-600" />
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { 
                  title: "Rozwój firmy to strategia, nie losowe działania",
                  desc: "Każda decyzja marketingowa, technologiczna czy procesowa jest powiązana z innymi działaniami. Nie działamy „na ślepo”. Analizujemy dane, rozpoznajemy potencjał i kierunki wzrostu, aby każdy ruch miał sens dla Twojej firmy.",
                  bgColor: "bg-[#000925]"
                },
                { 
                  title: "Tworzymy rozwiązania, które nie tylko wyglądają dobrze, ale też działają",
                  desc: "Strona internetowa, aplikacja, dane, kampanie reklamowe i SEO - wszystko tworzy jeden spójny system. Dzięki temu nie tracisz szansy na sprzedaż i masz pełen wgląd w skuteczność swoich działań.",
                  bgColor: "bg-[#190025]"
                },
                { 
                  title: "Bezpieczeństwo i ciągłość działania są dla nas priorytetem",
                  desc: "Dbamy o stabilną infrastrukturę IT i ochronę danych firmowych. Projektujemy rozwiązania odporne na awarie, zagrożenia i skalowalne wraz z rozwojem biznesu.",
                  bgColor: "bg-[#002500]"
                },
                { 
                  title: "Proaktywność w działaniach",
                  desc: "Nie czekamy, aż powiesz, co mamy zrobić. Analizujemy dane, identyfikujemy miejsca, w których firma może rosnąć szybciej, proponujemy usprawnienia w marketingu, procesach i technologii. Dzięki temu Twoje działania biznesowe są efektywne i przemyślane.",
                  bgColor: "bg-[#2F3680]"
                }
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`rounded-xl overflow-hidden relative flex flex-col p-8 lg:p-12 border border-white/5 ${card.bgColor}`}
                >
                  <h4 className="text-[#FBFBFB] font-bold text-xl relative z-20 leading-snug mb-4">{card.title}</h4>
                  <p className="text-[#FBFBFB]/80 font-body text-base relative z-20 leading-relaxed">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION: POZNAJ NASZ ZESPÓŁ */}
        <section className="bg-white py-20 lg:py-32">
          <div className="max-w-[1200px] mx-auto px-6">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-black text-ink-900 mb-16 lg:mb-20"
            >
              Poznaj nasz zespół
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Member 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0 }}
                className="group"
              >
                <div className="aspect-[3/4] bg-gray-800 rounded-xl overflow-hidden relative mb-6">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold text-2xl">
                    Placeholder 1
                  </div>
                  <div className="absolute top-4 left-4 w-8 h-8 bg-white rounded-md flex items-center justify-center text-navy-900 z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 z-10">
                    <h3 className="text-[#FBFBFB] font-bold text-xl mb-1">Michał “Kurwa” Cukrowski</h3>
                    <p className="text-[#017BD0] font-body text-sm font-bold">Co-founder & CEO</p>
                  </div>
                </div>
              </motion.div>

              {/* Member 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="group"
              >
                <div className="aspect-[3/4] bg-gray-800 rounded-xl overflow-hidden relative mb-6">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold text-2xl">
                    Placeholder 2
                  </div>
                  <div className="absolute top-4 left-4 w-8 h-8 bg-white rounded-md flex items-center justify-center text-navy-900 z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 z-10">
                    <h3 className="text-[#FBFBFB] font-bold text-xl mb-1">Michał “Kurwa” Cukrowski</h3>
                    <p className="text-[#017BD0] font-body text-sm font-bold">Co-founder & CEO</p>
                  </div>
                </div>
              </motion.div>

              {/* Member 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="group"
              >
                <div className="aspect-[3/4] bg-gray-800 rounded-xl overflow-hidden relative mb-6">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold text-2xl">
                    Placeholder 3
                  </div>
                  <div className="absolute top-4 left-4 w-8 h-8 bg-white rounded-md flex items-center justify-center text-navy-900 z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 z-10">
                    <h3 className="text-[#FBFBFB] font-bold text-xl mb-1">Michał “Kurwa” Cukrowski</h3>
                    <p className="text-[#017BD0] font-body text-sm font-bold">Co-founder & CEO</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <div className="bg-white pb-20">
          <div className="max-w-[1000px] mx-auto text-center px-6">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-black text-ink-900 mb-16 leading-tight"
            >
              Nie musisz podejmować decyzji od razu, zacznijmy od rozmowy!
            </motion.h2>
          </div>
        </div>
      </main>
    </>
  );
}

// Minimalny komponent ChevronRight dla sekcji (żeby nie psuć importów globalnych lucide)
function ChevronRight(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}
