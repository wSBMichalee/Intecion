"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  return (
    <>
      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative bg-navy-950 pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          </div>
          <div className="absolute inset-0 z-0 bg-gradient-to-t from-navy-950 via-transparent to-brand-500/10 mix-blend-screen" />
          
          <div className="max-w-[1200px] mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-6 max-w-3xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
                Skontaktuj się z nami
              </h1>
              <p className="text-gray-400 font-body text-lg leading-relaxed">
                Potrzebujesz usprawnić sprzedaż, marketing albo procesy w firmie? Skontaktuj się z nami! Doradzimy, przygotujemy rozwiązanie dopasowane do Twoich potrzeb i pokażemy, jak Twoja firma może działać szybciej i skuteczniej.
              </p>
            </motion.div>
          </div>
        </section>

        {/* DARK SECTION: MASZ WIZJĘ? */}
        <section className="bg-navy-950 py-20 lg:py-32 relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_20%_50%,rgba(14,165,233,0.15),transparent_60%)]"></div>
          
          <div className="max-w-[1200px] mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
              
              {/* Left Column: Contact info */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col gap-12"
              >
                <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                  Masz wizję?<br />
                  My mamy narzędzia.<br />
                  Połączmy siły!
                </h2>

                <div className="flex flex-col gap-8">


                  <div className="flex flex-col gap-2">
                    <span className="text-gray-500 text-xs font-bold tracking-[0.2em] uppercase font-heading">
                      ZOSTAW NAM WIADOMOŚĆ
                    </span>
                    <a href="mailto:hello@intecion.com" className="text-white font-bold text-2xl hover:text-brand-400 transition-colors w-fit pb-1 border-b-2 border-brand-500">
                      hello@intecion.com
                    </a>
                  </div>

                  <div className="flex flex-col gap-3">
                    <span className="text-gray-500 text-xs font-bold tracking-[0.2em] uppercase font-heading">
                      ZNAJDZIESZ NAS TEŻ TUTAJ!
                    </span>
                    <div className="flex items-center gap-4 mt-2">
                      <a href="#" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-brand-500 hover:border-brand-500 transition-all group">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 group-hover:scale-110 transition-transform"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                      </a>
                      <a href="#" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-brand-500 hover:border-brand-500 transition-all group">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 group-hover:scale-110 transition-transform"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Column: Custom Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full"
              >
                <form className="flex flex-col gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="IMIĘ"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-6 py-4 text-white placeholder:text-gray-500 placeholder:font-bold placeholder:tracking-widest placeholder:text-xs focus:outline-none focus:border-brand-500 transition-colors backdrop-blur-sm"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="E-MAIL"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-6 py-4 text-white placeholder:text-gray-500 placeholder:font-bold placeholder:tracking-widest placeholder:text-xs focus:outline-none focus:border-brand-500 transition-colors backdrop-blur-sm"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="TELEFON"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-6 py-4 text-white placeholder:text-gray-500 placeholder:font-bold placeholder:tracking-widest placeholder:text-xs focus:outline-none focus:border-brand-500 transition-colors backdrop-blur-sm"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="WIADOMOŚĆ"
                      rows={5}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-6 py-4 text-white placeholder:text-gray-500 placeholder:font-bold placeholder:tracking-widest placeholder:text-xs focus:outline-none focus:border-brand-500 transition-colors backdrop-blur-sm resize-none"
                    ></textarea>
                  </div>
                  <Button className="w-full justify-center mt-2">
                    WYŚLIJ
                  </Button>
                </form>
              </motion.div>

            </div>
          </div>
        </section>

        {/* CALENDLY SECTION */}
        <section className="bg-white py-20 lg:py-32">
          <div className="max-w-[1000px] mx-auto px-6">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-black text-ink-900 mb-12 text-center"
            >
              Umów się z nami na spotkanie online
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="w-full bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
            >
              {/* iFrame for Calendly matching user's spec */}
              <iframe 
                src="https://calendly.com/hello-intecion/30min" 
                width="100%" 
                height="700" 
                frameBorder="0"
                title="Umów spotkanie z Intecion"
              ></iframe>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
