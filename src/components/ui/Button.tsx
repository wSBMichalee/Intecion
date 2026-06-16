import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "navbar";
  size?: "default" | "sm" | "lg";
  href?: string;
  showIcon?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", href, showIcon = true, children, ...props }, ref) => {
    const isPrimary = variant === "primary";
    const isNavbar = variant === "navbar";

    const baseStyles = cn(
      "group inline-flex items-stretch justify-center font-mono font-medium transition-all focus:outline-none focus:ring-2 focus:ring-brand-500 overflow-hidden uppercase",
      isNavbar 
        ? "bg-gradient-to-r from-[#0983d8] to-[#3a9fd9] text-white rounded-xl shadow-sm hover:opacity-90" 
        : isPrimary 
          ? "bg-brand-600 text-white rounded-lg" 
          : "border border-white/10 bg-transparent text-white rounded-lg",
      className
    );

    const content = (
      <>
        <span className={cn(
          "flex items-center justify-center flex-1 transition-colors",
          size === "lg" ? "px-8 py-4 text-base" : size === "sm" ? "px-6 py-2.5 text-xs tracking-wide" : "px-6 py-3 text-sm tracking-wide",
          !isNavbar && (isPrimary ? "group-hover:bg-brand-500" : "group-hover:bg-white/5")
        )}>
          {children}
        </span>
        
        {showIcon && !isNavbar && (
          <span className={cn(
            "flex items-center justify-center transition-colors shrink-0",
            size === "lg" ? "w-14" : "w-12",
            isPrimary ? "bg-[#2596d1] group-hover:bg-[#34a4df]" : "border-l border-white/10 bg-white/5 group-hover:bg-white/10"
          )}>
            <ChevronRight className="h-5 w-5 text-white transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        )}
      </>
    );

    if (href) {
      return (
        <Link href={href} className={baseStyles}>
          {content}
        </Link>
      );
    }

    return (
      <button ref={ref} className={baseStyles} {...props}>
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
