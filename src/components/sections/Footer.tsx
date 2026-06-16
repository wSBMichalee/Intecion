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
    <footer className="relative bg-navy-950 pt-20 pb-8 overflow-hidden border-t border-white/5">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg-poster.jpg"
          alt="Background overlay"
          fill
          className="object-cover opacity-[0.15] mix-blend-lighten"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/90 to-navy-950/50" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1.5fr] gap-12 lg:gap-24 mb-16">
          
          {/* Column 1 - Brand & Contact */}
          <div className="flex flex-col gap-6 text-gray-400 text-sm font-body">
            <Link href="/" className="mb-2">
              <div className="text-3xl font-black text-white tracking-wider flex items-center">
                inte<span className="text-brand-500">c</span>ion
              </div>
            </Link>
            <p className="text-white font-bold text-base hover:text-brand-400 transition-colors">
              <a href="mailto:hello@intecion.pl">hello@intecion.pl</a>
            </p>
            <div className="flex flex-col gap-1 leading-relaxed text-gray-400">
              <p>Intecion Sp. z o.o.</p>
              <p>ul. Wejherowska 12/24</p>
              <p>54-239 Wrocław</p>
            </div>
            <div className="flex flex-col gap-1 text-xs text-gray-500">
              <p>NIP: 8943247729</p>
              <p>REGON: 540126622</p>
              <p>KRS: 0001136777</p>
            </div>
            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-2">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand-600 hover:border-brand-500 transition-all">
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand-600 hover:border-brand-500 transition-all">
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2 - Links (Na skróty) */}
          <div className="flex flex-col gap-6">
            <h4 className="font-heading text-xs font-bold text-gray-500 uppercase tracking-widest">
              NA SKRÓTY
            </h4>
            <ul className="flex flex-col gap-4 text-sm font-body text-gray-300">
              <li>
                <Link href="/o-nas" className="hover:text-brand-400 transition-colors uppercase text-[11px] tracking-wider">
                  O NAS
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-brand-400 transition-colors uppercase text-[11px] tracking-wider">
                  NASZE PORTFOLIO
                </Link>
              </li>
              <li>
                <Link href="/polityka-prywatnosci" className="hover:text-brand-400 transition-colors uppercase text-[11px] tracking-wider">
                  POLITYKA PRYWATNOŚCI
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Links (Usługi) */}
          <div className="flex flex-col gap-6">
            <h4 className="font-heading text-xs font-bold text-gray-500 uppercase tracking-widest">
              USŁUGI
            </h4>
            <ul className="flex flex-col gap-4 text-sm font-body text-gray-300">
              <li><Link href="/uslugi/strony-internetowe" className="hover:text-brand-400 transition-colors uppercase text-[11px] tracking-wider">TWORZENIE STRON INTERNETOWYCH</Link></li>
              <li><Link href="/uslugi/aplikacje-mobilne" className="hover:text-brand-400 transition-colors uppercase text-[11px] tracking-wider">TWORZENIE APLIKACJI MOBILNYCH</Link></li>
              <li><Link href="/uslugi/marketing" className="hover:text-brand-400 transition-colors uppercase text-[11px] tracking-wider">MARKETING I POZYCJONOWANIE</Link></li>
              <li><Link href="/uslugi/dedykowane-oprogramowanie" className="hover:text-brand-400 transition-colors uppercase text-[11px] tracking-wider">DEDYKOWANE OPROGRAMOWANIE</Link></li>
              <li><Link href="/uslugi/infrastruktura-it" className="hover:text-brand-400 transition-colors uppercase text-[11px] tracking-wider">INFRASTRUKTURA IT</Link></li>
              <li><Link href="/uslugi/outsourcing-it" className="hover:text-brand-400 transition-colors uppercase text-[11px] tracking-wider">OUTSOURCING IT</Link></li>
              <li><Link href="/uslugi/szkolenia" className="hover:text-brand-400 transition-colors uppercase text-[11px] tracking-wider">SZKOLENIA Z CYBERBEZPIECZEŃSTWA</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-center items-center text-xs text-gray-500 font-body">
          <p>&copy; {new Date().getFullYear()} Intecion. Wszystkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
}
