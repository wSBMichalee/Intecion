// TODO: zamienić na realne logotypy partnerów Intecion (pliki w
// public/images/partners/, zachować te same nazwy plików
// partner-1.svg ... partner-5.svg lub zaktualizować ścieżki w tej
// tablicy)
export const partnerLogos = [
  { id: 1, name: "Partner 1", logo: "/images/partners/partner-1.svg" },
  { id: 2, name: "Partner 2", logo: "/images/partners/partner-2.svg" },
  { id: 3, name: "Partner 3", logo: "/images/partners/partner-3.svg" },
  { id: 4, name: "Partner 4", logo: "/images/partners/partner-4.svg" },
  { id: 5, name: "Partner 5", logo: "/images/partners/partner-5.svg" },
];

export const partnerChallenges = [
  {
    id: 1,
    icon: "sparkle",
    text: "chcą oprzeć rozwój sprzedaży o działania online",
    bgColor: "bg-brand-600",
    textColor: "text-white",
  },
  {
    id: 2,
    icon: "hexagon",
    text: "rozwijają nowe produkty lub wchodzą na nowe rynki",
    bgColor: "bg-panel-black",
    textColor: "text-white",
  },
  {
    id: 3,
    icon: "diamond",
    text: "chcą uporządkować sposób pozyskiwania klientów",
    bgColor: "bg-gray-100",
    textColor: "text-ink-900",
  },
  {
    id: 4,
    icon: "wave",
    text: "chcą aby ich działania marketingowe były spójne z procesem sprzedaży",
    bgColor: "bg-brand-600",
    textColor: "text-white",
  },
  {
    id: 5,
    icon: "network",
    text: "chcą zbudować silniejszą obecność swojej marki w internecie",
    bgColor: "bg-panel-black",
    textColor: "text-white",
  },
  {
    id: 6,
    icon: "orbit",
    text: "chcą uporządkować zaplecze techniczne firmy i mieć system, który wspiera ich rozwój",
    bgColor: "bg-gray-100",
    textColor: "text-ink-900",
  },
];

export const challenges = [
  { number: "1", text: "firma inwestuje w marketing internetowy, ale liczba klientów nie wzrasta" },
  { number: "2", text: "firma korzysta z wielu narzędzi, ale nie ma jednego systemu, który łączy marketing i sprzedaż" },
  { number: "3", text: "marketing wygląda dobrze w prezentacjach, ale nie przekłada się na rozwój firmy" },
  { number: "4", text: "firma współpracuje z wieloma specjalistami, ale brakuje jednej spójnej strategii" },
  { number: "5", text: "strona internetowa nie wspiera sprzedaży i nie generuje zapytań" },
  { number: "6", text: "sprzedaż pojawia się nieregularnie i zależy od pojedynczych działań" },
];

export const testimonials = [
  {
    id: 1,
    quote: "\u201eWspółpraca przebiegła bardzo sprawnie. Wszystko było jasno wytłumaczone, a działania miały sens i były dobrze zaplanowane. Pierwsze efekty pojawiły się szybciej, niż się spodziewaliśmy.\u201d",
    author: "Adrian",
    avatar: null, // TODO: /images/testimonials/adrian.jpg
    stars: 5,
  },
  // TODO: dodaj więcej opinii
];

export const portfolioProjects = [
  {
    id: "ecocar",
    logoType: "image",
    logoSrc: "/images/partners/ecocar-logo.png",
    logoText: null,
    accentColor: "#6cc24a",
    bgColor: "bg-[#f0f7e8]",
    headline: "Stabilny wzrost sprzedaży",
    description: "Systematyczne działania SEO i content marketingowe zapewniły ciągły strumień nowych użytkowników i wyższą sprzedaż.",
    tags: ["STRONA INTERNETOWA & UX", "BLOG", "SEO LOKALNE"],
    imageSrc: "/images/case-studies/ecocar-laptop.png",
  },
  {
    id: "vanstev",
    logoType: "text",
    logoSrc: null,
    logoText: "VANSTEV",
    accentColor: "#f97316",
    bgColor: "bg-[#fff7ed]",
    headline: "Stabilny wzrost sprzedaży",
    description: "Systematyczne działania SEO i content marketingowe zapewniły ciągły strumień nowych użytkowników i wyższą sprzedaż.",
    tags: ["STRONA INTERNETOWA & UX", "BLOG", "SEO LOKALNE"],
    imageSrc: "/images/case-studies/vanstev-laptop.png",
  },
  {
    id: "ows",
    logoType: "text-icon",
    logoSrc: null,
    logoText: "ONE WORLD SOLUTION",
    accentColor: "#0ea5e9",
    bgColor: "bg-[#f0f8ff]",
    headline: "Stabilny wzrost sprzedaży",
    description: "Systematyczne działania SEO i content marketingowe zapewniły ciągły strumień nowych użytkowników i wyższą sprzedaż.",
    tags: ["STRONA INTERNETOWA & UX", "BLOG", "SEO LOKALNE"],
    imageSrc: "/images/case-studies/ows-laptop.png",
  }
];
