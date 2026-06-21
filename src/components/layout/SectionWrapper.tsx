import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;      // Klasy dla tła (np. w-full, bg-navy-950)
  innerClassName?: string; // Klasy dla zawartości (np. szerokość maksymalna)
  id?: string;
  background?: ReactNode;  // Komponent tła (video, gradient)
}

export function SectionWrapper({ children, className, innerClassName, id, background }: SectionWrapperProps) {
  return (
    <section id={id} className={cn("w-full", className)}>
      {background}
      <div className={cn("px-[10px] w-full mx-auto", innerClassName)}>
        {children}
      </div>
    </section>
  );
}
