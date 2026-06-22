"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { Server, Activity, ShieldAlert, Cpu, Network, Database, Lock, ArrowRight, ShieldCheck, CheckCircle2, ChevronRight, Terminal, Cloud, CloudLightning, Shield, Timer, AlertTriangle, Ban, Monitor, Key, Zap, Globe, Users, Mail, FileText, HardDrive, RefreshCw, BarChart } from "lucide-react";
import { Button } from "@/components/ui/Button";
import ArrowButton from "@/components/ui/ArrowButton";
import { Faq, FaqItem } from "@/components/sections/Faq";

const infraFaq: FaqItem[] = [
  {
    id: 1,
    question: "Co to jest infrastruktura IT?",
    answer: "Infrastruktura IT to wszystkie systemy, urządzenia i środowiska, które umożliwiają działanie firmy. \n Obejmuje m.in.: \n serwery i chmurę \n sieć firmową \n systemy (np. ERP, poczta) \n dostęp do danych i ich zabezpieczenie \n w dzisiejszych czasach to fundament, na którym działa cała firma"
  },
  {
    id: 2,
    question: "Na czym polega projektowanie infrastruktury IT?",
    answer: "To proces dopasowania systemów i technologii do realnych potrzeb firmy. \n Obejmuje: \n analizę obecnych rozwiązań \n identyfikację problemów i ryzyk \n zaprojektowanie spójnego środowiska \n wdrożenie i konfigurację \n celem jest stabilny, bezpieczny i skalowalny system"
  },
  {
    id: 3,
    question: "Czy infrastruktura IT może działać w chmurze?",
    answer: "Tak. Możesz korzystać z: \n serwerów lokalnych (on-premise) \n chmury (np. wirtualne serwery) \n lub modelu mieszanego. \n Dobór zależy od potrzeb, bezpieczeństwa i budżetu"
  },
  {
    id: 4,
    question: "Jak wygląda bezpieczeństwo infrastruktury IT?",
    answer: "Bezpieczeństwo obejmuje m.in.: \n zabezpieczenie sieci (firewalle, VPN) \n kontrolę dostępu do danych \n backupy i odzyskiwanie danych \n monitoring zagrożeń \n Celem jest ochrona firmy przed utratą danych i atakami"
  },
  {
    id: 5,
    question: "Czy backup danych jest naprawdę potrzebny?",
    answer: "Tak,to jeden z najważniejszych elementów infrastruktury. \n Bez backupu: \n utrata danych może być nieodwracalna \n awaria może zatrzymać funkcjonowanie firmy \n Backup daje możliwość szybkiego odzyskania danych i ciągłości działania"
  },
  {
    id: 6,
    question: "Ile trwa wdrożenie infrastruktury IT?",
    answer: "Czas zależy od skali projektu: \n mniejsze wdrożenia = kilka tygodni \n większe systemy = kilka miesięcy \n Projekt dzielimy na etapy, żeby firma mogła działać bez przestojów"
  },
  {
    id: 7,
    question: "Czy zajmujecie się też utrzymaniem infrastruktury?",
    answer: "Tak. Po wdrożeniu możemy: \n monitorować systemy \n reagować na problemy \n dbać o bezpieczeństwo \n rozwijać infrastrukturę \n Jeśli nie chcesz się tym zajmować, oferujemy też outsourcing IT"
  }
];

const infrastructureTabs = [
  // Kategoria 1: Narzędzia pracy i współpracy
  {
    id: "m365",
    categoryId: "tools",
    tabLabel: "Microsoft 365",
    icon: Monitor,
    title: "Microsoft 365",
    desc: "Pakiet narzędzi do codziennej pracy w firmie. Obejmuje pocztę, dokumenty, kalendarze, komunikację i współpracę zespołową.To cyfrowe środowisko pracy, które porządkuje codzienne zadania i ułatwia pracę z dowolnego miejsca.",
    accent: "#0078D4",
    featuresLabel: "Wdrażamy między innymi",
    features: [
      { name: "Exchange", role: "Poczta i kalendarze", icon: Mail },
      { name: "Teams", role: "Komunikacja i spotkania", icon: Users },
      { name: "SharePoint", role: "Dokumenty i współpraca", icon: FileText },
      { name: "OneDrive", role: "Pliki i synchronizacja", icon: Cloud },
      { name: "Admin", role: "Konta i uprawnienia", icon: Key },
      { name: "Defender", role: "Bezpieczeństwo danych", icon: Shield }
    ],
    ctaTitle: "Chcesz wdrożyć",
    ctaHighlight: "Microsoft 365",
    points: [
      "konfiguracja kompletnego środowiska pracy dla firmy",
      "uruchomienie poczty, dokumentów i komunikacji w jednym systemie",
      "migracja danych, plików i wiadomości ze starych rozwiązań",
      "konfiguracja dostępów, uprawnień i bezpieczeństwa dla zespołu"
    ]
  },
  {
    id: "google-workspace",
    categoryId: "tools",
    tabLabel: "Google Workspace",
    icon: Globe,
    title: "Google Workspace",
    desc: "Nowoczesne środowisko pracy, które łączy pocztę, dokumenty, pliki, kalendarze i komunikację w jednym miejscu. To rozwiązanie dla firm, które chcą pracować elastycznie, w pełni online i bez potrzeby utrzymywania wielu osobnych narzędzi.",
    accent: "#4285F4",
    featuresLabel: "Wdrażamy między innymi",
    features: [
      { name: "Gmail", role: "Poczta firmowa", icon: Mail },
      { name: "Drive", role: "Przechowywanie plików", icon: Cloud },
      { name: "Meet", role: "Wideokonferencje", icon: Users },
      { name: "Docs/Sheets", role: "Praca na dokumentach", icon: FileText },
      { name: "Admin Console", role: "Zarządzanie kontami", icon: Key },
      { name: "Vault", role: "Archiwum i zgodność", icon: Shield }
    ],
    ctaTitle: "Chcesz wdrożyć",
    ctaHighlight: "Google Workspace",
    points: [
      "konfiguracja środowiska pracy w ekosystemie Google",
      "uruchomienie poczty, plików, dokumentów i komunikacji online",
      "migracja danych, plików i skrzynek z dotychczasowych systemów",
      "konfiguracja współdzielenia, dostępu i bezpieczeństwa użytkowników"
    ]
  },
  {
    id: "iwork",
    categoryId: "tools",
    tabLabel: "iWork",
    icon: Monitor,
    title: "Apple iWork",
    desc: "Pakiet domyślnych narzędzi biurowych Apple, wykorzystywany przez firmy pracujące na komputerach Mac, iPadach i iPhone’ach. Wspiera codzienną pracę na dokumentach, arkuszach i prezentacjach w ekosystemie Apple.",
    accent: "#009EF6",
    featuresLabel: "Wdrażamy między innymi",
    features: [
      { name: "Pages", role: "Edytor dokumentów", icon: FileText },
      { name: "Numbers", role: "Arkusze kalkulacyjne", icon: BarChart },
      { name: "Keynote", role: "Prezentacje", icon: Monitor },
      { name: "iCloud", role: "Synchronizacja danych", icon: Cloud },
      { name: "MDM", role: "Zarządzanie urządzeniami", icon: Server },
      { name: "Apple ID", role: "Konta i dostępy", icon: Key }
    ],
    ctaTitle: "Chcesz wdrożyć",
    ctaHighlight: "Apple iWork",
    points: [
      "konfiguracja środowiska pracy dla zespołów korzystających z urządzeń Apple",
      "organizacja współdzielenia dokumentów i plików",
      "integracja z iCould i obiegiem danych w firmie",
      "konfiguracja dostępu, synchronizacji i bezpieczeństwa"
    ]
  },
  
  // Kategoria 2: Systemy i środowiska lokalne
  {
    id: "windows-server",
    categoryId: "local",
    tabLabel: "Windows Server",
    icon: Server,
    title: "Windows Server",
    desc: "Środowisko serwerowe wykorzystywane do zarządzania użytkownikami, zasobami firmowymi oraz usługami wewnętrznymi. To zaplecze infrastrukturalne dla firm, które potrzebują centralnego zarządzania dostępem, spójnej organizacji zasobów i uporządkowanego środowiska pracy.",
    accent: "#0078D4",
    featuresLabel: "Wdrażamy między innymi",
    features: [
      { name: "Active Directory", role: "Tożsamość i dostępy", icon: Key },
      { name: "File Services", role: "Udostępnione zasoby", icon: HardDrive },
      { name: "WSUS", role: "Aktualizacje systemów", icon: RefreshCw },
      { name: "DNS / DHCP", role: "Infrastruktura sieci", icon: Network },
      { name: "Hyper-V", role: "Wirtualizacja", icon: Server },
      { name: "Remote Desktop", role: "Zdalny dostęp", icon: Monitor }
    ],
    ctaTitle: "Chcesz wdrożyć",
    ctaHighlight: "Windows Server",
    points: [
      "konfiguracja środowiska",
      "uruchomienie zarządzania użytkownikami, zasobami i dostępem",
      "konfiguracja struktury uprawnień i organizacja środowiska",
      "porządkowanie dostęp do plików, usług i zasobów firmowych"
    ]
  },
  {
    id: "linux",
    categoryId: "local",
    tabLabel: "Linux",
    icon: Terminal,
    title: "Linux Server",
    desc: "Środowisko serwerowe oparte o Linux, wykorzystywane do obsługi usług firmowych, aplikacji, sieci oraz lokalnych zasobów IT. To stabilne i elastyczne rozwiązanie dla firm, które potrzebują niezawodnego zaplecza pod systemy wewnętrzne, usługi techniczne i infrastrukturę lokalną.",
    accent: "#F5F5F5",
    featuresLabel: "Wdrażamy między innymi",
    features: [
      { name: "Firewall", role: "UFW / iptables", icon: Shield },
      { name: "SSH", role: "Bezpieczny dostęp", icon: Lock },
      { name: "Nginx/Apache", role: "Serwer WWW", icon: Globe },
      { name: "RAID / LVM", role: "Zarządzanie dyskami", icon: HardDrive },
      { name: "Cron / Bash", role: "Automatyzacja zadań", icon: Terminal },
      { name: "Monitoring", role: "Prometheus / Grafana", icon: Activity }
    ],
    ctaTitle: "Chcesz wdrożyć",
    ctaHighlight: "Linux Server",
    points: [
      "konfiguracja serwerów Linux dopasowanych do potrzeb firmy",
      "uruchomienie usług sieciowych i środowisk aplikacyjnych",
      "konfiguracja użytkowników, dostępów i struktury uprawnień",
      "przygotowanie środowiska do pracy systemów firmowych",
      "konfiguracja monitoringu działania systemów i usług"
    ]
  },

  // Kategoria 3: Infrastruktura chmurowa
  {
    id: "azure",
    categoryId: "cloud",
    tabLabel: "Azure",
    icon: Cloud,
    title: "Microsoft Azure",
    desc: "Platforma chmurowa Microsoft, która stanowi zaplecze techniczne dla systemów, aplikacji i danych w firmie. To właśnie tutaj działają usługi, z których firma korzysta na co dzień, takie jak: serwery i bazy danych, kopie zapasowe, dostępy do systemów i zabezpieczenia.",
    accent: "#0078D4",
    featuresLabel: "Wdrażamy między innymi",
    features: [
      { name: "Virtual Machines", role: "Serwery w chmurze", icon: Server },
      { name: "Entra ID", role: "Zarządzanie tożsamością", icon: Key },
      { name: "Azure Backup", role: "Backup danych", icon: Database },
      { name: "Azure Storage", role: "Przechowywanie plików", icon: HardDrive },
      { name: "Defender", role: "Bezpieczeństwo chmury", icon: Shield },
      { name: "Monitor", role: "Alerty i logi", icon: Activity }
    ],
    ctaTitle: "Chcesz wdrożyć",
    ctaHighlight: "Microsoft Azure",
    points: [
      "konfiguracja środowiska chmurowego dopasowanego do potrzeb firmy",
      "uruchomienie serwerów, baz danych i zasobów potrzebnych do działania systemów",
      "konfiguracja sieci, dostępów i zabezpieczeń",
      "backup danych, monitoring i ciągłość działania infrastruktury"
    ]
  },
  {
    id: "aws",
    categoryId: "cloud",
    tabLabel: "AWS",
    icon: Cloud,
    title: "Amazon AWS",
    desc: "Zaawansowana platforma chmurowa Amazon, wykorzystywana do budowy i utrzymania infrastruktury IT w firmie. Umożliwia uruchamianie systemów, aplikacji i usług w elastycznym środowisku, które można rozwijać wraz z potrzebami organizacji.",
    accent: "#FF9900",
    featuresLabel: "Wdrażamy między innymi",
    features: [
      { name: "EC2", role: "Wirtualne serwery", icon: Server },
      { name: "S3", role: "Przechowywanie plików", icon: HardDrive },
      { name: "RDS", role: "Bazy danych", icon: Database },
      { name: "VPC", role: "Sieć wirtualna", icon: Network },
      { name: "IAM", role: "Zarządzanie tożsamością", icon: Key },
      { name: "CloudWatch", role: "Monitoring", icon: Activity }
    ],
    ctaTitle: "Chcesz wdrożyć",
    ctaHighlight: "Amazon AWS",
    points: [
      "konfiguracja infrastruktury chmurowej dla systemów i aplikacji",
      "uruchomienie zasobów serwerowych, sieciowych i magazynowania danych",
      "konfiguracja backupów, monitoringu i zabezpieczeń",
      "skalowalne środowiska dopasowane do rozwoju firmy"
    ]
  },
  {
    id: "ovh",
    categoryId: "cloud",
    tabLabel: "OVHcloud",
    icon: Cloud,
    title: "OVHcloud",
    desc: "Środowisko chmurowe i serwerowe wykorzystywane do hostowania systemów, aplikacji i usług firmowych w stabilnej infrastrukturze. To rozwiązanie często wybierane przez firmy, które potrzebują przewidywalnego środowiska technicznego, kontroli nad kosztami i stabilnego zaplecza dla usług IT.",
    accent: "#017BD0",
    featuresLabel: "Wdrażamy między innymi",
    features: [
      { name: "Bare Metal", role: "Dedykowane serwery", icon: Server },
      { name: "VPS", role: "Wirtualne serwery", icon: Server },
      { name: "Public Cloud", role: "Chmura obliczeniowa", icon: Cloud },
      { name: "Object Storage", role: "Przechowywanie danych", icon: HardDrive },
      { name: "vRack", role: "Prywatna sieć", icon: Network },
      { name: "RODO / EU", role: "Dane w Europie", icon: ShieldCheck }
    ],
    ctaTitle: "Chcesz wdrożyć",
    ctaHighlight: "OVHcloud",
    points: [
      "konfiguracja środowisk serwerowych i chmurowych OVHcloud",
      "uruchomienie systemów, aplikacji i zasobów firmowych",
      "konfiguracja infrastruktury sieciowej i dostępu do usług",
      "dopasowanie infrastruktury do skali i potrzeb firmy"
    ]
  }
];

export default function InfrastrukturaItPage() {
  const [activeTab, setActiveTab] = useState(0);

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <main className="flex-1 bg-white">

      {/* ═══════════════════════════════════════════════════
          SECTION 1: HERO
      ═══════════════════════════════════════════════════ */}
      <section className="relative bg-navy-950 overflow-hidden w-[calc(100%-20px)] mx-auto mt-[10px] mb-[50px] rounded-[20px]">
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-brand-500/10 blur-[120px] rounded-full -translate-x-1/3 -translate-y-1/3 pointer-events-none z-0" />

        <div className="relative z-20 pt-[140px] pb-[100px] lg:pt-[180px] lg:pb-[130px] max-w-container mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-center">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-6"
            >
              <h1 className="text-[44px] md:text-[56px] lg:text-[60px] xl:text-[64px] font-bold text-white leading-[1.1] tracking-tight">
                Infrastruktura IT, która porządkuje i zabezpiecza Twoją firmę
              </h1>
              <p className="text-[17px] text-gray-400 leading-[1.7] max-w-[550px]">
                Projektujemy i wdrażamy systemy, sieci i środowiska IT, które działają stabilnie, są bezpieczne i wspierają rozwój Twojego biznesu
              </p>

              <div className="flex flex-col gap-2 mt-4">
                <Button href="/kontakt" size="lg">Darmowa konsultacja</Button>
              </div>
            </motion.div>

            {/* Infrastructure Monitor Mockup */}
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
                    <Terminal className="w-3.5 h-3.5 text-gray-400" />
                    <span className="text-gray-300 font-mono text-[11px] tracking-wider">Infrastructure Monitor</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-white font-inter text-[10px]">live</span>
                  </div>
                </div>
                {/* Body */}
                <div className="p-5 flex flex-col gap-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/5 border border-white/5 rounded-lg p-3 flex justify-between items-center">
                      <span className="text-white font-mono text-[11px] font-semibold">Serwer główny</span>
                      <span className="text-green-400 font-mono text-[10px] font-semibold">online</span>
                    </div>
                    <div className="bg-white/5 border border-white/5 rounded-lg p-3 flex justify-between items-center">
                      <span className="text-white font-mono text-[11px] font-semibold">Backup NAS</span>
                      <span className="text-green-400 font-mono text-[10px] font-semibold">online</span>
                    </div>
                    <div className="bg-white/5 border border-white/5 rounded-lg p-3 flex justify-between items-center">
                      <span className="text-white font-mono text-[11px] font-semibold">Sieć LAN</span>
                      <span className="text-green-400 font-mono text-[10px] font-semibold">online</span>
                    </div>
                    <div className="bg-white/5 border border-white/5 rounded-lg p-3 flex justify-between items-center">
                      <span className="text-white font-mono text-[11px] font-semibold">Firewall</span>
                      <span className="text-green-400 font-mono text-[10px] font-semibold">online</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-[#111118] border border-white/5 rounded-lg p-3 flex flex-col gap-1">
                      <span className="text-white font-mono text-[10px]">Firewall</span>
                      <span className="text-brand-500 font-outfit text-[13px] font-medium">Aktywny</span>
                    </div>
                    <div className="bg-[#111118] border border-white/5 rounded-lg p-3 flex flex-col gap-1">
                      <span className="text-white font-mono text-[10px]">Backup</span>
                      <span className="text-brand-500 font-outfit text-[13px] font-medium">Dziś 03:00</span>
                    </div>
                    <div className="bg-[#111118] border border-white/5 rounded-lg p-3 flex flex-col gap-1">
                      <span className="text-white font-mono text-[10px]">SSL/TLS</span>
                      <span className="text-brand-500 font-outfit text-[13px] font-medium">Ważny</span>
                    </div>
                    <div className="bg-[#111118] border border-white/5 rounded-lg p-3 flex flex-col gap-1">
                      <span className="text-white font-mono text-[10px]">VPN</span>
                      <span className="text-brand-500 font-outfit text-[13px] font-medium">4 sesje</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
      {/* ═══════════════════════════════════════════════════
          SECTION 2: IT TO FUNDAMENT
      ═══════════════════════════════════════════════════ */}
      <section className="relative bg-[#0B0A0F] overflow-hidden w-[calc(100%-20px)] mx-auto my-[50px] rounded-[20px]">
        {/* Subtelny czerwony glow w lewym górnym rogu całej sekcji */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-red-600/10 blur-[130px] rounded-full pointer-events-none -translate-x-1/3 -translate-y-1/3 z-0" />

        <div className="relative z-20 py-[100px] lg:py-[130px] max-w-container mx-auto px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 flex flex-col items-center"
          >
            <h2 className="text-[36px] lg:text-[46px] font-bold text-white leading-[1.2] mb-5 max-w-[700px]">
              IT to fundament, na którym<br className="hidden md:block" /> działa Twoja firma
            </h2>
            <p className="text-[16px] lg:text-[17px] text-gray-400">
              Jeśli infrastruktura w firmie nie działa:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Zespół traci czas", desc: "Przestoje i wolne systemy blokują pracowników i generują realne straty.", icon: Timer },
              { title: "Dane są zagrożone", desc: "Brak zabezpieczeń otwiera firmę na wycieki, włamania i utratę danych.", icon: Shield },
              { title: "Systemy nie funkcjonują", desc: "Niespójne narzędzia wymuszają pracę ręczną i powodują błędy na każdym kroku.", icon: Ban },
              { title: "Rozwój firmy zaczyna się blokować", desc: "Infrastruktura nieadaptowalna do wzrostu staje się hamulcem ekspansji.", icon: AlertTriangle }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#131115] border border-white/5 rounded-[16px] p-8 flex flex-col gap-5 relative overflow-hidden"
              >
                <div className="w-10 h-10 bg-red-500/10 text-[#FF3B30] rounded-[10px] flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-[20px] font-semibold text-[#FF3B30] leading-[1.3]">{item.title}</h3>
                  <p className="text-gray-400 text-[14px] lg:text-[15px] leading-[1.6]">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 3: FIRMA BEZ INFRASTRUKTURY
      ═══════════════════════════════════════════════════ */}
      <section className="relative bg-[#0B0A0F] overflow-hidden w-[calc(100%-20px)] mx-auto my-[50px] rounded-[20px]">
        {/* Subtelny glow */}
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-brand-500/10 blur-[150px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0" />

        <div className="relative z-20 py-[100px] lg:py-[130px] max-w-container mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20">
            {/* Lewa kolumna: Tekst */}
            <div className="flex flex-col">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col gap-6 mb-12"
              >
                <h2 className="text-[36px] lg:text-[44px] font-bold text-white leading-[1.15]">
                  Jak wygląda firma bez poukładanej infrastruktury IT?
                </h2>
                <p className="text-[16px] lg:text-[17px] text-gray-300 leading-[1.6]">
                  Na pierwszy rzut oka wszystko działa. Pracownicy mają dostęp do narzędzi, systemy „jakoś chodzą”, a problemy rozwiązywane są na bieżąco. Dopiero z czasem zaczyna być widać, ile kosztuje brak poukładanego środowiska IT, w straconym czasie, błędach i ryzyku.
                </p>
              </motion.div>

              <div className="flex flex-col relative pl-6 lg:pl-8 border-l-2 border-brand-500/40">
                {[
                  { num: "01", title: "Systemy nie są ze sobą połączone", desc: "dane są w kilku miejscach, trzeba je ręcznie przenosić, łatwo o błędy" },
                  { num: "02", title: "Dostęp do danych ma „kto trzeba i kto nie trzeba”", desc: "brak kontroli nad tym, kto widzi wrażliwe informacje" },
                  { num: "03", title: "Backupy albo nie istnieją, albo nikt nie wie, czy działają", desc: "w razie problemu nie masz pewności, czy odzyskasz dane" },
                  { num: "04", title: "Problemy techniczne blokują pracę zespołu", desc: "ktoś nie ma dostępu, coś nie działa, praca stoi" },
                  { num: "05", title: "Każdy pracuje „po swojemu”", desc: "brak spójnych procesów i chaos w codziennych działaniach" },
                  { num: "06", title: "Wszystko działa… dopóki coś się nie wysypie", desc: "awaria serwera, utrata danych albo atak i nagle firma staje" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-col pb-5 mb-5 border-b border-white/5 last:border-0 last:mb-0 last:pb-0"
                  >
                    <div className="flex items-center gap-4 mb-1">
                      <span className="font-outfit text-[22px] text-brand-500">{item.num}</span>
                      <span className="font-medium text-[18px] text-white">{item.title}</span>
                    </div>
                    <span className="text-gray-400 text-[15px] pl-[42px] leading-[1.5]">{item.desc}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-12 flex items-start gap-6"
              >
                <ChevronRight className="w-14 h-14 text-white shrink-0 -ml-2" strokeWidth={3} />
                <div className="flex flex-col gap-1 mt-1">
                  <span className="font-outfit text-[20px] text-brand-500 font-medium">Efekt?</span>
                  <p className="text-[16px] text-gray-300 leading-[1.6]">
                    Tracisz czas, kontrolę i bezpieczeństwo, a IT zamiast wspierać rozwój firmy, zaczyna go blokować.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Prawa kolumna: Grafika */}
            <div className="relative flex items-center justify-center w-full mt-10 lg:mt-0">
              <div className="relative w-full max-w-[679px] aspect-[679/674] overflow-hidden rounded-[20px] flex items-center justify-center">
                {/* Network Graph SVG */}
                <div className="absolute inset-0 z-10 w-full h-full opacity-90 p-4 lg:p-6">
                  <svg viewBox="0 0 679 674" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Horizontal */}
                    <path d="M70 90 L240 60 L430 110 L580 80 M90 260 L270 230 L450 270 L610 230 M60 440 L250 480 L410 420 L590 470 M120 600 L280 590 L460 620 L620 580" stroke="#0EA5E9" strokeOpacity="0.25" strokeWidth="1" />
                    {/* Vertical */}
                    <path d="M70 90 L90 260 L60 440 L120 600 M240 60 L270 230 L250 480 L280 590 M430 110 L450 270 L410 420 L460 620 M580 80 L610 230 L590 470 L620 580" stroke="#0EA5E9" strokeOpacity="0.25" strokeWidth="1" />
                    {/* Diagonals */}
                    <path d="M70 90 L270 230 M240 60 L90 260 M240 60 L450 270 M430 110 L270 230 M430 110 L610 230 M580 80 L450 270 M90 260 L250 480 M270 230 L60 440 M270 230 L410 420 M450 270 L250 480 M450 270 L590 470 M610 230 L410 420 M60 440 L280 590 M250 480 L120 600 M250 480 L460 620 M410 420 L280 590 M410 420 L620 580 M590 470 L460 620" stroke="#0EA5E9" strokeOpacity="0.15" strokeWidth="0.5" />
                    
                    {/* Dots */}
                    {[
                      [70,90], [240,60], [430,110], [580,80],
                      [90,260], [270,230], [450,270], [610,230],
                      [60,440], [250,480], [410,420], [590,470],
                      [120,600], [280,590], [460,620], [620,580]
                    ].map((pt, idx) => (
                      <circle key={idx} cx={pt[0]} cy={pt[1]} r="4.5" fill="#0EA5E9" />
                    ))}
                  </svg>
                </div>

                {/* Watermark Logo */}
                <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-[0.06]">
                  <div className="w-[850px] aspect-[4/1] relative -rotate-45 origin-center">
                    <Image src="/images/logo-intecion.png" alt="Intecion watermark" fill className="object-contain grayscale brightness-200" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 4: PROJEKTUJEMY I WDRAŻAMY SPÓJNE ŚRODOWISKO (Biała)
      ═══════════════════════════════════════════════════ */}
      <section className="bg-white py-[100px] lg:py-[130px]">
        <div className="max-w-container mx-auto px-5 lg:px-8">
          
          <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-20 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6 max-w-2xl"
            >
              <h2 className="text-[36px] lg:text-[48px] font-bold text-white bg-navy-950 p-8 rounded-[24px] leading-[1.1]">
                Projektujemy i wdrażamy spójne środowisko IT
              </h2>
              <p className="text-[18px] lg:text-[22px] text-gray-600 pl-4 border-l-4 border-brand-500">
                Budujemy infrastrukturę IT dopasowaną do Twojej firmy
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row lg:flex-col justify-center gap-6 lg:gap-8 min-w-[200px]"
            >
              <div className="flex flex-col gap-1">
                <span className="font-outfit text-[40px] text-brand-600 font-bold leading-none">50+</span>
                <span className="text-gray-500 font-medium">wdrożeń</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-outfit text-[40px] text-brand-600 font-bold leading-none">&lt; 48h</span>
                <span className="text-gray-500 font-medium">czas odpowiedzi</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-outfit text-[40px] text-brand-600 font-bold leading-none">99.9%</span>
                <span className="text-gray-500 font-medium">uptime</span>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Monitor, title: "Stabilne środowisko do codziennej pracy", desc: "Systemy skonfigurowane tak, żeby nie zawodziły w najgorszym momencie." },
              { icon: Shield, title: "Bezpieczne przechowywanie danych", desc: "Backup, szyfrowanie i kontrola dostępu - dane firmy są zawsze pod ochroną." },
              { icon: Key, title: "Centralna kontrola nad sprzętem i dostępami", desc: "Jeden panel do zarządzania urządzeniami, kontami i uprawnieniami całego zespołu." },
              { icon: Zap, title: "Skalowanie razem z biznesem", desc: "Infrastruktura zaprojektowana tak, by rosła razem z firmą bez kosztownej przebudowy." },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-brand-500/20 rounded-[24px] p-8 shadow-lg shadow-brand-500/5 flex flex-col gap-4"
              >
                <div className="w-14 h-14 bg-brand-50 text-brand-500 rounded-xl flex items-center justify-center shrink-0 mb-2">
                  <card.icon className="w-7 h-7" />
                </div>
                <h3 className="font-outfit font-bold text-[20px] lg:text-[22px] text-ink-900 leading-[1.2]">{card.title}</h3>
                <p className="text-[15px] text-gray-500 leading-[1.6]">{card.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Rząd 3: CTA strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full bg-brand-600 rounded-[24px] px-8 py-10 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-brand-500/20"
          >
            <h3 className="text-[28px] lg:text-[32px] font-outfit font-bold text-white text-center md:text-left">
              Uporządkujmy Twoją infrastrukturę IT
            </h3>
            <Link 
              href="/kontakt" 
              className="bg-white text-brand-600 hover:bg-gray-50 flex items-center justify-center font-mono uppercase tracking-wide font-bold px-8 py-4 rounded-lg flex-shrink-0 transition-colors duration-200"
            >
              Darmowa konsultacja
            </Link>
          </motion.div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 5: JAKĄ INFRASTRUKTURĘ WDRAŻAMY? (Karuzela Embla)
      ═══════════════════════════════════════════════════ */}
      <section className="bg-white py-16 lg:py-24 overflow-hidden relative">
        <div className="max-w-[1200px] mx-auto px-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-h2 text-ink-900 font-bold">
              Jaką infrastrukturę wdrażamy?
            </h2>
          </motion.div>
        </div>

        <div className="relative w-full">
          {/* Embla Viewport */}
          <div className="overflow-hidden w-full" ref={emblaRef}>
            <div className="flex">
              {[
                { title: "Środowisko serwerowe i hosting", points: ["serwery (lokalne lub w chmurze)", "hosting stron i systemów", "zarządzanie domenami"], icon: Server },
                { title: "Sieć i dostęp", points: ["konfiguracja sieci firmowej", "zarządzanie dostępami i uprawnieniami", "bezpieczny dostęp do danych (VPN itp.)"], icon: Network },
                { title: "Chmura i środowiska wirtualne", points: ["wdrożenie rozwiązań chmurowych", "wirtualne serwery i zasoby", "optymalizacja kosztów i wydajności"], icon: Cloud },
                { title: "Systemy i oprogramowanie", points: ["wdrożenie systemów (np. ERP, oprogramowanie biurowe)", "konfiguracja poczty i środowiska pracy", "zarządzanie bazami danych"], icon: Cpu },
                { title: "Bezpieczeństwo IT", points: ["zabezpieczenie sieci i systemów", "kontrola dostępu do danych", "backup i odzyskiwanie danych", "monitoring i wykrywanie zagrożeń"], icon: ShieldCheck },
                { title: "Workflow i procesy", points: ["projektowanie przepływu pracy w firmie", "usprawnienie codziennych operacji", "eliminacja chaosu i ręcznej pracy"], icon: Activity }
              ].map((panel, index) => {
                let bgColor = "";
                let textColor = "";
                let bulletColor = "";

                if (index % 3 === 0) {
                  bgColor = "bg-brand-600";
                  textColor = "text-white";
                  bulletColor = "bg-white/50";
                } else if (index % 3 === 1) {
                  bgColor = "bg-panel-black";
                  textColor = "text-white";
                  bulletColor = "bg-white/30";
                } else {
                  bgColor = "bg-gray-100";
                  textColor = "text-ink-900";
                  bulletColor = "bg-brand-500";
                }

                return (
                  <div
                    key={index}
                    className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.3333%] xl:flex-[0_0_25%] min-w-0"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      className={`h-[456px] flex flex-col justify-between p-8 lg:p-10 transition-transform duration-300 hover:scale-[1.02] hover:z-10 cursor-default ${bgColor} ${textColor}`}
                    >
                      <div>
                        <div className="mb-6 opacity-80">
                          <panel.icon className="w-16 h-16 stroke-1" />
                        </div>
                        <h3 className="font-body text-[22px] lg:text-[24px] font-medium leading-tight mb-4">
                          {panel.title}
                        </h3>
                      </div>
                      <ul className="flex flex-col gap-3">
                        {panel.points.map((pt, j) => (
                          <li key={j} className="flex items-start gap-3">
                            <span className={`w-1.5 h-1.5 rounded-full shrink-0 mt-2 ${bulletColor}`} />
                            <span className="text-[15px] xl:text-[16px] leading-[1.4] opacity-90">{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Carousel Arrows */}
          <AnimatePresence>
            {canScrollPrev && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 top-1/2 -translate-y-1/2 ml-4 md:ml-8 z-20"
              >
                <ArrowButton direction="left" onClick={scrollPrev} variant="white" className="shadow-lg" />
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {canScrollNext && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 top-1/2 -translate-y-1/2 mr-4 md:mr-8 z-20"
              >
                <ArrowButton direction="right" onClick={scrollNext} variant="white" className="shadow-lg" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
          
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-[1200px] mx-auto px-6 mt-16 md:mt-20"
        >
          <div className="max-w-2xl mx-auto flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-[2px] bg-brand-600 hidden md:block flex-shrink-0" />
            <p className="text-[18px] lg:text-[20px] text-gray-600 leading-[1.6] italic font-body">
              Współpracujemy ze sprawdzonym partnerem hostingowym, dzięki czemu zapewniamy stabilne środowiska, szybki czas reakcji technicznej oraz serwery zlokalizowane w Polsce.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 6: SYSTEMY I NARZĘDZIA (INTERAKTYWNA, CIEMNA KARTA)
      ═══════════════════════════════════════════════════ */}
      <section className="relative bg-[#0D0D12] w-full max-w-[1920px] mx-auto xl:h-[1220px] pt-[100px] pb-[100px] xl:pl-[225px] xl:pr-[225px] px-5 flex flex-col gap-[50px] overflow-hidden my-[50px]">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-brand-500/10 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0" />
        
        <div className="relative z-20 flex flex-col gap-[50px]">
          <h2 className="text-[36px] lg:text-[48px] font-bold text-gray-100 leading-[1.1] max-w-4xl">
            Systemy i narzędzia na których opieramy infrastrukturę Twojej firmy
          </h2>

          <div className="w-full overflow-x-auto lg:overflow-x-visible pb-4">
            <div className="flex flex-col xl:flex-row gap-12 xl:gap-[224px] items-stretch w-full max-w-[1470px] mx-auto">
              
              {/* Left Column: Categories and Tabs */}
              <div className="flex flex-col gap-10 bg-white/[0.02] border border-white/[0.05] rounded-[24px] p-6 lg:p-8 backdrop-blur-md shadow-2xl shrink-0 w-full xl:w-[360px] min-h-[830px]">
              
              {/* Category 1 */}
              <div className="flex flex-col gap-3">
                <h3 className="text-[16px] text-gray-500 font-medium mb-2 pl-2">Narzędzia pracy i współpracy</h3>
                {infrastructureTabs.filter(t => t.categoryId === "tools").map((tab, idx) => {
                  const globalIdx = infrastructureTabs.findIndex(t => t.id === tab.id);
                  const isActive = activeTab === globalIdx;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(globalIdx)}
                      className={`text-left px-5 py-3 rounded-xl transition-all border flex items-center justify-between group ${
                        isActive
                          ? "bg-[#0C1A2F] border-white/5 shadow-lg"
                          : "bg-transparent border-transparent hover:bg-white/5"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <tab.icon className={`w-5 h-5 ${isActive ? "text-brand-500" : "text-gray-500 group-hover:text-gray-400"}`} />
                        <span className={`font-mono text-[14px] uppercase font-bold tracking-widest transition-colors ${isActive ? "text-white" : "text-gray-500 group-hover:text-gray-300"}`}>
                          {tab.tabLabel}
                        </span>
                      </div>
                      {isActive && <ChevronRight className="w-4 h-4 text-brand-500" />}
                    </button>
                  );
                })}
              </div>

              {/* Category 2 */}
              <div className="flex flex-col gap-3">
                <h3 className="text-[16px] text-gray-500 font-medium mb-2 pl-2">Systemy i środowiska lokalne</h3>
                {infrastructureTabs.filter(t => t.categoryId === "local").map((tab, idx) => {
                  const globalIdx = infrastructureTabs.findIndex(t => t.id === tab.id);
                  const isActive = activeTab === globalIdx;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(globalIdx)}
                      className={`text-left px-5 py-3 rounded-xl transition-all border flex items-center justify-between group ${
                        isActive
                          ? "bg-[#0C1A2F] border-white/5 shadow-lg"
                          : "bg-transparent border-transparent hover:bg-white/5"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <tab.icon className={`w-5 h-5 ${isActive ? "text-brand-500" : "text-gray-500 group-hover:text-gray-400"}`} />
                        <span className={`font-mono text-[14px] uppercase font-bold tracking-widest transition-colors ${isActive ? "text-white" : "text-gray-500 group-hover:text-gray-300"}`}>
                          {tab.tabLabel}
                        </span>
                      </div>
                      {isActive && <ChevronRight className="w-4 h-4 text-brand-500" />}
                    </button>
                  );
                })}
              </div>

              {/* Category 3 */}
              <div className="flex flex-col gap-3">
                <h3 className="text-[16px] text-gray-500 font-medium mb-2 pl-2">Infrastruktura chmurowa</h3>
                {infrastructureTabs.filter(t => t.categoryId === "cloud").map((tab, idx) => {
                  const globalIdx = infrastructureTabs.findIndex(t => t.id === tab.id);
                  const isActive = activeTab === globalIdx;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(globalIdx)}
                      className={`text-left px-5 py-3 rounded-xl transition-all border flex items-center justify-between group ${
                        isActive
                          ? "bg-[#0C1A2F] border-white/5 shadow-lg"
                          : "bg-transparent border-transparent hover:bg-white/5"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <tab.icon className={`w-5 h-5 ${isActive ? "text-brand-500" : "text-gray-500 group-hover:text-gray-400"}`} />
                        <span className={`font-mono text-[14px] uppercase font-bold tracking-widest transition-colors ${isActive ? "text-white" : "text-gray-500 group-hover:text-gray-300"}`}>
                          {tab.tabLabel}
                        </span>
                      </div>
                      {isActive && <ChevronRight className="w-4 h-4 text-brand-500" />}
                    </button>
                  );
                })}
              </div>

            </div>

            {/* Right Column (Dynamic content) */}
            <div className="relative min-h-[600px] flex-1 w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#0B0F19]/80 rounded-[24px] p-10 lg:p-14 border border-white/5 flex flex-col h-full relative overflow-hidden backdrop-blur-md"
                >
                  <div className="absolute top-0 left-0 w-[3px] h-full" style={{ backgroundColor: infrastructureTabs[activeTab].accent }} />
                  
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                      {(() => {
                        const TabIcon = infrastructureTabs[activeTab].icon;
                        return (
                          <div className="w-16 h-16 rounded-2xl bg-[#122238] border border-white/5 flex items-center justify-center shrink-0">
                            <TabIcon className="w-8 h-8 text-brand-500" />
                          </div>
                        );
                      })()}
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                          <span className="text-gray-500 text-[11px] font-bold uppercase tracking-widest font-mono">
                            {infrastructureTabs[activeTab].categoryId === "tools" ? "Narzędzia pracy" : infrastructureTabs[activeTab].categoryId === "local" ? "Środowiska lokalne" : "Chmura"}
                          </span>
                        </div>
                        <h3 className="text-[28px] lg:text-[32px] font-outfit font-bold text-white leading-tight">
                          {infrastructureTabs[activeTab].title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <p className="text-[15px] lg:text-[16px] text-gray-400 leading-[1.7] mb-12 max-w-3xl">
                    {infrastructureTabs[activeTab].desc}
                  </p>

                  <div className="mb-10">
                    <h4 className="text-[11px] font-mono font-bold text-gray-500 uppercase tracking-widest mb-6 border-b border-white/5 pb-3">
                      {infrastructureTabs[activeTab].featuresLabel}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {infrastructureTabs[activeTab].features.map((feature, i) => (
                        <div key={i} className="bg-white/[0.03] border border-white/5 rounded-2xl p-5 flex flex-col gap-1 hover:bg-white/[0.05] transition-colors">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 rounded-lg bg-brand-500/10 flex items-center justify-center shrink-0">
                              <feature.icon className="w-4 h-4 text-brand-500" />
                            </div>
                            <span className="text-[16px] font-bold text-white leading-tight">{feature.name}</span>
                          </div>
                          <span className="text-[12px] text-gray-500 font-medium pl-11">{feature.role}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto flex flex-col">
                    {/* Poziomy pasek CTA */}
                    <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
                      <h4 className="text-[13px] font-mono font-bold text-gray-500 uppercase tracking-widest leading-relaxed">
                        Chcesz wdrożyć <span className="text-white mx-1">{infrastructureTabs[activeTab].ctaHighlight}</span> w swojej firmie?
                      </h4>
                      <Button href="/kontakt" className="shrink-0" showIcon={false}>
                        UMÓW KONSULTACJĘ
                      </Button>
                    </div>

                    {/* Lista punktów pod spodem */}
                    <ul className="flex flex-col gap-4">
                      {infrastructureTabs[activeTab].points.map((pt, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-[18px] h-[18px] text-brand-500 shrink-0 mt-[3px]" />
                          <span className="text-[14.5px] text-gray-400 leading-relaxed">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 7: BANNER CTA 1 (Ciemnoniebieski z zaokrągleniami)
      ═══════════════════════════════════════════════════ */}
      <section className="bg-navy-900 py-20 w-[calc(100%-20px)] mx-auto rounded-[20px]">
        <div className="max-w-container mx-auto px-5 lg:px-8 text-center flex flex-col items-center gap-8">
          <h2 className="text-[36px] lg:text-[48px] font-bold text-white max-w-4xl leading-[1.2]">
            Potrzebujecie wdrożenia w oparciu o inne narzędzia lub systemy? Dobierzemy odpowiednią infrastrukturę do Waszych potrzeb!
          </h2>
          <Button href="/kontakt" className="bg-brand-600 hover:bg-brand-500 text-white font-mono">
            Darmowa konsultacja
          </Button>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 8: KORZYŚCI DLA TWOJEJ FIRMY (Ciemna Karta)
      ═══════════════════════════════════════════════════ */}
      <section className="bg-[#060606] py-[100px] lg:py-[130px] w-[calc(100%-20px)] mx-auto my-[50px] rounded-[20px] border border-white/5 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-brand-500/10 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0" />
        
        <div className="relative z-20 max-w-container mx-auto px-5 lg:px-8">
          <h2 className="text-[36px] lg:text-[48px] font-bold text-white mb-16 leading-[1.1]">
            Korzyści dla Twojej firmy
          </h2>

          <div className="flex flex-col gap-8 max-w-3xl mx-auto">
            {[
              { num: "01", title: "Systemy działają stabilnie" },
              { num: "02", title: "Dane są bezpieczne" },
              { num: "03", title: "Masz kontrolę nad dostępami" },
              { num: "04", title: "Zespół pracuje szybciej" },
              { num: "05", title: "Firma jest gotowa na rozwój" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center justify-between border-b border-white/10 pb-6 last:border-0"
              >
                <div className="flex items-center gap-8">
                  <span className="font-outfit text-[32px] font-medium text-brand-600 w-12">{item.num}</span>
                  <span className="font-outfit text-[22px] lg:text-[26px] text-white">{item.title}</span>
                </div>
                <ChevronRight className="w-6 h-6 text-white/20" />
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 flex flex-col items-center gap-6"
            >
              <p className="text-[20px] text-white text-center">Zadbajmy o bezpieczeństwo Twojej firmy</p>
              <Button href="/kontakt" className="bg-white text-ink-900 hover:bg-gray-100 font-mono">
                Darmowa konsultacja
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 9: BANNER OUTSOURCING IT (Niebieski banner)
      ═══════════════════════════════════════════════════ */}
      <section className="bg-brand-600 py-16 w-[calc(100%-20px)] mx-auto mb-[10px] rounded-[20px] flex items-center justify-center">
        <div className="max-w-container px-5 text-center flex flex-col items-center gap-4">
          <h2 className="text-[28px] lg:text-[32px] font-bold text-white font-outfit">
            Nie chcesz się tym zajmować na co dzień?
          </h2>
          <p className="text-[18px] lg:text-[22px] text-brand-100 mb-4">
            Możemy nie tylko wdrożyć infrastrukturę, ale też stale ją utrzymywać i rozwijać
          </p>
          <Button href="/uslugi/outsourcing-it" className="bg-white text-brand-600 hover:bg-gray-50 font-mono">
            Zobacz Outsourcing IT
          </Button>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 10: FAQ (Biała)
      ═══════════════════════════════════════════════════ */}
      <Faq questions={infraFaq} />

    </main>
  );
}
