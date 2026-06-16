export function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <circle cx="24" cy="24" r="2" />
      <path d="M24 6v6M24 36v6M6 24h6M36 24h6M11.272 11.272l4.243 4.243M32.485 32.485l4.243 4.243M11.272 36.728l4.243-4.243M32.485 15.515l4.243-4.243" />
    </svg>
  );
}

export function HexagonIcon({ className }: { className?: string }) {
  // Odwzorowanie potrójnego heksagonu
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="M24 2L4 13v22l20 11 20-11V13L24 2z" />
      <path d="M24 8.5l-14 8v15l14 8 14-8v-15l-14-8z" />
      <path d="M24 15l-8 4.5v9l8 4.5 8-4.5v-9L24 15z" />
    </svg>
  );
}

export function DiamondIcon({ className }: { className?: string }) {
  // Odwzorowanie podwójnego rombu z krzyżem
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="M24 2L2 24l22 22 22-22L24 2z" />
      <path d="M24 9L9 24l15 15 15-15L24 9z" />
      <path d="M24 2v44M2 24h44" />
    </svg>
  );
}

export function WaveIcon({ className }: { className?: string }) {
  // Odwzorowanie pojedynczej fali
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="M4 24c8-10 16-10 20 0s12 10 20 0" />
    </svg>
  );
}

export function NetworkIcon({ className }: { className?: string }) {
  // Odwzorowanie krzyża z okręgami (sieć)
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <circle cx="24" cy="24" r="3" />
      <circle cx="24" cy="8" r="3" />
      <circle cx="24" cy="40" r="3" />
      <circle cx="8" cy="24" r="3" />
      <circle cx="40" cy="24" r="3" />
      <path d="M24 11v10M24 27v10M11 24h10M27 24h10" />
    </svg>
  );
}

export function OrbitIcon({ className }: { className?: string }) {
  // Odwzorowanie atomu/orbity (przeniesione ze Sparkle)
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <ellipse cx="24" cy="24" rx="18" ry="8" />
      <ellipse cx="24" cy="24" rx="8" ry="18" />
      <circle cx="42" cy="24" r="2.5" fill="currentColor" stroke="none" />
    </svg>
  );
}
