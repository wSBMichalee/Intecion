import Link from "next/link";
import Image from "next/image";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export function Footer() {
  return (
    <footer className="relative bg-navy-950 pt-16 md:pt-24 pb-8 overflow-hidden mt-auto border-t border-white/5">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/approach-bg.png"
          alt="Background overlay"
          fill
          className="object-cover object-center opacity-[0.45] mix-blend-lighten"
        />
        <div className="absolute inset-0 bg-navy-950/40" />
      </div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1.5fr] gap-8 lg:gap-16">
          
          {/* Column 1 - Brand & Contact */}
          <div className="flex flex-col text-[11px] lg:text-[12px] font-mono text-gray-300">
            <Link href="/" className="mb-6 block">
              <Image 
                src="/images/logo-intecion.png" 
                alt="Intecion" 
                width={200} 
                height={55} 
                className="h-auto w-40 lg:w-48" 
              />
            </Link>
            <div className="mb-3 text-white font-medium text-[12px] lg:text-[13px]">
              <a href="mailto:hello@intecion.pl" className="hover:text-brand-400 transition-colors">hello@intecion.pl</a>
            </div>
            <div className="w-full max-w-[280px] h-px bg-white/20 mb-5"></div>
            <div className="flex flex-col gap-1 mb-5 leading-relaxed">
              <p>ul. Wejherowska 11/2,</p>
              <p>54-239 Wrocław</p>
            </div>
            <div className="flex flex-col gap-1 leading-relaxed">
              <p>NIP: 8943247729</p>
              <p>REGON: 540126622</p>
              <p>KRS: 0001136777</p>
            </div>
          </div>

          {/* Column 2 - Links (O NAS, itp) */}
          <div className="flex flex-col justify-start">
            <ul className="flex flex-col text-[10px] lg:text-[11px] font-mono text-gray-300 font-medium w-full max-w-[220px]">
              <li className="border-b border-white/10 pb-2.5 mb-2.5">
                <Link href="/o-nas" className="hover:text-brand-400 transition-colors block w-full">
                  O NAS
                </Link>
              </li>
              <li className="border-b border-white/10 pb-2.5 mb-2.5">
                <Link href="/portfolio" className="hover:text-brand-400 transition-colors block w-full">
                  NASZE PORTFOLIO
                </Link>
              </li>
              <li className="border-b border-white/10 pb-2.5">
                <Link href="/polityka-prywatnosci" className="hover:text-brand-400 transition-colors block w-full">
                  POLITYKA PRYWATNOŚCI
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Links (Usługi) */}
          <div className="flex flex-col justify-start">
            <ul className="flex flex-col text-[10px] lg:text-[11px] font-mono text-gray-300 font-medium w-full max-w-[280px] md:ml-auto">
              <li className="border-b border-white/10 pb-2 mb-2">
                <Link href="/uslugi/strony-internetowe" className="hover:text-brand-400 transition-colors block w-full">
                  TWORZENIE STRON INTERNETOWYCH
                </Link>
              </li>
              <li className="border-b border-white/10 pb-2 mb-2">
                <Link href="/uslugi/aplikacje-mobilne" className="hover:text-brand-400 transition-colors block w-full">
                  TWORZENIE APLIKACJI MOBILNYCH
                </Link>
              </li>
              <li className="border-b border-white/10 pb-2 mb-2">
                <Link href="/uslugi/marketing" className="hover:text-brand-400 transition-colors block w-full">
                  MARKETING I POZYCJONOWANIE
                </Link>
              </li>
              <li className="border-b border-white/10 pb-2 mb-2">
                <Link href="/uslugi/dedykowane-oprogramowanie" className="hover:text-brand-400 transition-colors block w-full">
                  DEDYKOWANE OPROGRAMOWANIE
                </Link>
              </li>
              <li className="border-b border-white/10 pb-2 mb-2">
                <Link href="/uslugi/infrastruktura-it" className="hover:text-brand-400 transition-colors block w-full">
                  INFRASTRUKTURA IT
                </Link>
              </li>
              <li className="border-b border-white/10 pb-2 mb-2">
                <Link href="/uslugi/outsourcing-it" className="hover:text-brand-400 transition-colors block w-full">
                  OUTSOURCING IT
                </Link>
              </li>
              <li className="border-b border-white/10 pb-2">
                <Link href="/uslugi/szkolenia" className="hover:text-brand-400 transition-colors block w-full">
                  SZKOLENIA Z CYBERBEZPIECZEŃSTWA
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Social & Copyright */}
        <div className="flex flex-col items-center mt-12 text-[10px] lg:text-[11px] font-mono text-gray-400">
          <div className="flex items-center gap-2 mb-2.5">
            <a href="#" className="w-7 h-7 flex items-center justify-center border border-white/30 rounded-md text-white hover:bg-white/10 transition-all">
              <InstagramIcon className="w-3.5 h-3.5" />
            </a>
            <a href="#" className="w-7 h-7 flex items-center justify-center border border-white/30 rounded-md text-white hover:bg-white/10 transition-all">
              <LinkedinIcon className="w-3.5 h-3.5" />
            </a>
          </div>
          <p>&copy; 2026 INTECION Wszystkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
}
