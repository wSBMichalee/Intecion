"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ConsultationForm } from "@/components/sections/ConsultationForm";

export default function AboutPage() {
  return (
    <>
      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative bg-navy-950 pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden border-b border-white/5">
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
                Wierzymy, że marketing i technologie to ściśle połączony ekosystem, który napędza sprzedaż w każdej firmie. Dostarczamy oprogramowanie, które wspiera rozwój i kreuje przemyślane działania reklamowe oparte na twardych danych.
              </p>
            </motion.div>
          </div>
        </section>

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
                  Intecion powstało z potrzeby, którą zauważyliśmy u wielu naszych klientów. Marketing i technologia rzadko idą w parze – a to błąd. Połączyliśmy je, aby Twoja firma zyskała spójny system sprzedażowy.
                </p>

                <div className="flex flex-col gap-8 mt-4">
                  <div className="flex gap-6 items-start">
                    <div className="text-6xl font-black text-brand-100 leading-none">1</div>
                    <div className="pt-2">
                      <h3 className="font-bold text-ink-900 text-lg mb-2 flex items-center gap-2">
                        Nasza <span className="text-brand-500 underline decoration-2 underline-offset-4">wizja</span>
                      </h3>
                      <p className="text-gray-600 font-body text-sm leading-relaxed">
                        Chcemy, aby firmy przestały błądzić w świecie cyfrowym i tracić czas na domysły. Chcemy pokazać im rzetelne, mierzalne rozwiązania oparte o zaufanie, w których technologia jest wsparciem sprzedaży, a nie kosztem.
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
                        Codziennie pomagamy firmom tworzyć zyskujące serca klientów marki oraz wdrażamy skalowalne rozwiązania technologiczne, aby pomóc przedsiębiorcom osiągać skuteczny biznes i rynkową przewagę.
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
                <div className="bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 w-full h-full shadow-xl">
                  [3D Hand Graphic Image]
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
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">Marketing i technologie nie powinny działać osobno.</h3>
                  <p className="text-brand-200 font-body text-sm">W Intecion łączymy to, co najlepsze w obu światach. Prowadzimy analityczne i kreatywne podejście do procesów marketingowych, opierając je na solidnych podstawach IT.</p>
                </div>
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 transition-transform flex-shrink-0">
                  <ChevronRight className="w-6 h-6 text-brand-600" />
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Rozwój firmy to strategia na dzisiejsze wyzwania" },
                { title: "Tworzymy rozwiązania w których Ty wiesz z góry na co się decydujesz" },
                { title: "Odkrywamy prawdziwy potencjał dla Twojego biznesu" }
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-navy-900 rounded-xl overflow-hidden aspect-[16/9] relative flex items-end p-6 border border-navy-800"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 to-transparent z-10"></div>
                  <div className="absolute inset-0 z-0 opacity-30 mix-blend-screen bg-blue-900/40"></div>
                  <h4 className="text-white font-bold text-lg relative z-20 leading-snug">{card.title}</h4>
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
              {[1, 2, 3].map((member, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <div className="aspect-[3/4] bg-gray-800 rounded-xl overflow-hidden relative mb-6">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold text-2xl">
                      MC
                    </div>
                    <div className="absolute top-4 left-4 w-8 h-8 bg-white rounded-md flex items-center justify-center text-navy-900 z-10">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 z-10">
                      <h3 className="text-white font-bold text-xl mb-1">Michał Cukrowski</h3>
                      <p className="text-brand-400 font-body text-sm font-bold">Co-founder & CEO</p>
                    </div>
                  </div>
                </motion.div>
              ))}
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
          
          <ConsultationForm 
            label="ZACZNIJ ZDOBYWAĆ WIĘCEJ KLIENTÓW"
            heading="Darmowa konsultacja"
          />
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
