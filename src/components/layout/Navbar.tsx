"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Globe, Smartphone, TrendingUp, Code2, Server, Headphones, ShieldCheck, BookOpen } from "lucide-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

const NAV_LINKS = [
  { name: "STRONA GŁÓWNA", href: "/" },
  { name: "O NAS", href: "/o-nas" },
  { name: "USŁUGI", href: "/uslugi", hasDropdown: true },
  { name: "PORTFOLIO", href: "/portfolio" },
  { name: "KONTAKT", href: "/kontakt" },
];

const SERVICES_LINKS = [
  { 
    name: "Tworzenie stron internetowych", 
    href: "/uslugi/strony-internetowe",
    description: "Projektujemy strony internetowe dla firm, które nie tylko wyglądają profesjonalnie, ale przede wszystkim przemyślanie prowadzą użytkownika do kontaktu lub zakupu. Nie działamy na gotowych szablonach - każda strona jest indywidualnie dopasowana do Twojego biznesu",
    icon: Globe
  },
  { 
    name: "Tworzenie aplikacji mobilnych", 
    href: "/uslugi/aplikacje-mobilne",
    description: "Produkty cyfrowe przybierają najróżniejsze formy. Od aplikacji na smartfony, po złożone systemy SaaS. Zaprojektujmy je razem.",
    icon: Smartphone
  },
  { 
    name: "Marketing i pozycjonowanie", 
    href: "/uslugi/marketing",
    description: "Prowadzimy działania marketingowe, które pomagają firmom systematycznie zwiększać widoczność w internecie poprzez pozycjonowanie stron (SEO/GEO), kampanie ads oraz optymalizację procesu pozyskiwania klientów",
    icon: TrendingUp
  },
  { 
    name: "Dedykowane oprogramowanie", 
    href: "/uslugi/dedykowane-systemy",
    description: "Tworzymy dedykowane oprogramowania dla firm, łączące procesy biznesowe, sprzedaż i marketing w spójny system. CRM, automatyzacja sprzedaży, dashboardy biznesowe - każde rozwiązanie powstaje indywidualnie",
    icon: Code2
  },
  { 
    name: "Infrastruktura IT", 
    href: "/uslugi/infrastruktura-it",
    description: "Projektujemy i wdrażamy infrastrukturę IT dla firm, która wspiera codzienne działanie i rozwój biznesu - systemy, pocztę, sieć, dostępy do danych i rozwiązania chmurowe",
    icon: Server
  },
  { 
    name: "Outsourcing IT", 
    href: "/uslugi/outsourcing-it",
    description: "Zapewniamy outsourcing IT dla firm, które chcą mieć stabilne i bezpieczne zaplecze technologiczne bez budowania własnego działu IT",
    icon: Headphones
  },
  { 
    name: "Cyberbezpieczeństwo", 
    href: "/uslugi/cyberbezpieczenstwo",
    description: "Zajmujemy się cyberbezpieczeństwem firm. Chronimy dane, systemy i dostęp do informacji przed zagrożeniami - audyty, testy penetracyjne, wdrożenia zabezpieczeń",
    icon: ShieldCheck
  },
  { 
    name: "Szkolenia z cyberbezpieczeństwa", 
    href: "/uslugi/szkolenia",
    description: "Prowadzimy szkolenia stacjonarne i online z cyberbezpieczeństwa dla firm oraz szkół, które uczą jak rozpoznawać zagrożenia, chronić dane i bezpiecznie korzystać z systemów IT",
    icon: BookOpen
  },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [activeServiceHover, setActiveServiceHover] = useState<string | null>(null);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const hoverTimeoutRef = useRef<NodeJS.Timeout>();

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setIsServicesHovered(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsServicesHovered(false);
      setActiveServiceHover(null);
    }, 300);
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === href;
    return pathname?.startsWith(href);
  };

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
          "fixed left-0 right-0 z-50 w-full px-[10px] pointer-events-none transition-all duration-300",
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
          <div className="hidden lg:flex relative items-center gap-8 pointer-events-auto bg-[#d4d4d6] rounded-[20px] p-2 pl-8 shadow-lg">
            <div className="flex items-center gap-8">
              {NAV_LINKS.map((link) => {
                const active = isActive(link.href);
                if (link.hasDropdown) {
                  return (
                    <div
                      key={link.name}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      className="py-4 -my-4 flex items-center"
                    >
                      <button
                        className={cn(
                          "font-mono text-[11px] uppercase tracking-[0.05em] transition-colors focus:outline-none flex items-center",
                          active
                            ? "text-[#017BD0] font-[700]"
                            : "text-[#060606] font-[600] hover:text-brand-600"
                        )}
                      >
                        {link.name}
                      </button>
                      <AnimatePresence>
                        {isServicesHovered && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 right-0 pt-3"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                          >
                            <div className="bg-[#d4d4d6] rounded-[20px] p-4 shadow-xl flex gap-4 pointer-events-auto border border-white/20 min-h-[420px]">
                              {/* LEWA KOLUMNA: Lista usług */}
                              <div className="w-[55%] flex flex-col gap-1 pr-2 border-r border-black/5">
                                {SERVICES_LINKS.map((sublink) => (
                                  <Link
                                    key={sublink.name}
                                    href={sublink.href}
                                    onMouseEnter={() => setActiveServiceHover(sublink.name)}
                                    className={cn(
                                      "px-4 py-3 rounded-[12px] transition-colors flex items-center gap-3",
                                      pathname === sublink.href ? "text-[#017BD0] font-bold bg-white/40" : "text-[#060606] font-medium hover:bg-white/20",
                                      activeServiceHover === sublink.name && pathname !== sublink.href && "bg-white/40"
                                    )}
                                  >
                                    <sublink.icon className={cn("w-[18px] h-[18px] shrink-0", pathname === sublink.href ? "text-[#017BD0]" : "text-[#060606]/60")} />
                                    <span className="text-[13px]">{sublink.name}</span>
                                  </Link>
                                ))}
                              </div>
                              {/* PRAWA KOLUMNA: Opis */}
                              <div className="w-[45%] rounded-xl p-6 flex flex-col">
                                <AnimatePresence mode="wait">
                                  {activeServiceHover ? (
                                    SERVICES_LINKS.filter(s => s.name === activeServiceHover).map(sublink => (
                                      <motion.div
                                        key={sublink.name}
                                        initial={{ opacity: 0, x: 10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -10 }}
                                        transition={{ duration: 0.2 }}
                                        className="flex flex-col gap-4 h-full pt-4"
                                      >
                                        <div className="flex items-center gap-3">
                                          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                                            <sublink.icon className="w-5 h-5 text-[#017BD0]" />
                                          </div>
                                          <h3 className="font-bold text-[#060606] text-[16px] leading-tight">{sublink.name}</h3>
                                        </div>
                                        <p className="text-[#060606]/70 text-[14px] leading-[1.6]">
                                          {sublink.description}
                                        </p>
                                      </motion.div>
                                    ))
                                  ) : (
                                    <div className="flex flex-col items-center justify-center h-full text-center gap-3 opacity-50 pt-4">
                                      <Globe className="w-8 h-8 text-[#060606]/30" />
                                      <p className="text-[13px] text-[#060606]/50 max-w-[200px]">Najedź na usługę, aby zobaczyć więcej szczegółów</p>
                                    </div>
                                  )}
                                </AnimatePresence>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "font-mono text-[11px] uppercase tracking-[0.05em] transition-colors",
                      active
                        ? "text-[#017BD0] font-[700]"
                        : "text-[#060606] font-[600] hover:text-brand-600"
                    )}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
            
            <Button
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
              {NAV_LINKS.map((link) => {
                const active = isActive(link.href);
                if (link.hasDropdown) {
                  return (
                    <div key={link.name} className="flex flex-col items-center w-full">
                      <button
                        onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                        className={cn(
                          "font-mono text-xl uppercase transition-colors focus:outline-none",
                          active
                            ? "text-[#017BD0] font-[700]"
                            : "text-white font-[600] hover:text-brand-400"
                        )}
                      >
                        {link.name}
                      </button>
                      <AnimatePresence>
                        {isMobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden flex flex-col items-center gap-5 pt-5 w-full"
                          >
                            {SERVICES_LINKS.map((sublink) => (
                              <Link
                                key={sublink.name}
                                href={sublink.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={cn(
                                  "text-[16px] transition-colors",
                                  pathname === sublink.href ? "text-[#017BD0] font-bold" : "text-gray-300 font-medium hover:text-white"
                                )}
                              >
                                {sublink.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "font-mono text-xl uppercase transition-colors",
                      active
                        ? "text-[#017BD0] font-[700]"
                        : "text-white font-[600] hover:text-brand-400"
                    )}
                  >
                    {link.name}
                  </Link>
                );
              })}
              
              <Button
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
