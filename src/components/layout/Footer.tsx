export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/10 mt-auto">
      <div className="max-w-container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-sm">
        <div>&copy; {new Date().getFullYear()} Intecion. Wszelkie prawa zastrzeżone.</div>
        {/* Footer placeholder */}
      </div>
    </footer>
  );
}
