"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

const NAV_LINKS = [
  { name: "STRONA GŁÓWNA", href: "/" },
  { name: "O NAS", href: "/o-nas" },
  { name: "USŁUGI", href: "/uslugi" },
  { name: "PORTFOLIO", href: "/portfolio" },
  { name: "KONTAKT", href: "/kontakt" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.div
        className={cn(
          "fixed left-0 right-0 z-50 w-full px-4 md:px-6 pointer-events-none transition-all duration-300",
          isScrolled ? "top-2 md:top-4" : "top-4 md:top-6"
        )}
      >
        <div className="max-w-[1200px] mx-auto w-full flex items-center justify-between">
          {/* Left Card: Logo */}
          <div className="pointer-events-auto bg-navy-900/30 backdrop-blur-md border border-white/10 bg-gradient-to-br from-white/10 to-transparent shadow-lg rounded-2xl px-6 py-3 flex items-center transition-colors duration-300">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/logo-intecion.png"
                alt="Intecion Logo"
                width={167}
                height={32}
                className="w-[120px] md:w-[140px] h-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* Right Card: Desktop Menu + Button */}
          <div className="hidden lg:flex items-center gap-8 pointer-events-auto bg-[#d4d4d6] rounded-[20px] p-2 pl-8 shadow-lg">
            <div className="flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="font-mono text-[11px] uppercase tracking-[0.05em] text-[#0b0c0e] hover:text-brand-600 transition-colors font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <Button
              variant="navbar"
              size="sm"
              href="/konsultacja"
              showIcon={false}
            >
              DARMOWA KONSULTACJA
            </Button>
          </div>

          {/* Right Card: Mobile Menu Toggle */}
          <div className="lg:hidden pointer-events-auto bg-navy-900/30 backdrop-blur-md border border-white/10 bg-gradient-to-br from-white/10 to-transparent shadow-lg rounded-2xl p-3 flex items-center">
            <button
              className="text-white focus:outline-none"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-navy-900/95 backdrop-blur-xl flex flex-col"
          >
            <div className="flex items-center justify-between px-6 h-[100px]">
              <Image
                src="/images/logo-intecion.png"
                alt="Intecion Logo"
                width={167}
                height={32}
                className="w-[140px] md:w-[167px] h-auto object-contain"
              />
              <button
                className="text-white"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={28} />
              </button>
            </div>
            
            <div className="flex-1 flex flex-col items-center justify-center gap-6 px-6 pb-20">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-mono text-xl uppercase text-white hover:text-brand-400 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              
              <Button
                variant="primary"
                href="/konsultacja"
                className="w-full mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                DARMOWA KONSULTACJA
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
