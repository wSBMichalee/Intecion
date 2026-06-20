"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  showIcon?: boolean;
  size?: "sm" | "md" | "lg";
}

export function Button({
  children,
  href,
  onClick,
  className,
  showIcon = true,
  size = "md",
}: ButtonProps) {
  const sizeStyles = {
    left: {
      sm: "px-4 py-2 text-xs",
      md: "px-6 py-3 text-sm",
      lg: "px-8 py-4 text-base",
    },
    right: {
      sm: "w-10",
      md: "w-12",
      lg: "w-14",
    },
  };

  const innerContent = (
    <motion.div
      className={cn("rounded-lg overflow-hidden flex w-fit group cursor-pointer", className)}
      whileHover="hover"
      initial="initial"
    >
      {/* Left segment */}
      <div
        className={cn(
          "bg-brand-600 text-white group-hover:bg-white group-hover:text-brand-600 font-mono uppercase tracking-wide flex items-center justify-center transition-colors duration-200 ease-in-out",
          sizeStyles.left[size]
        )}
      >
        {children}
      </div>

      {/* Right segment */}
      {showIcon && (
        <div
          className={cn(
            "bg-white group-hover:bg-brand-600 flex items-center justify-center transition-colors duration-200 ease-in-out",
            sizeStyles.right[size]
          )}
        >
          <motion.div
            variants={{
              initial: { x: 0 },
              hover: { x: 3 }
            }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="text-brand-600 group-hover:text-white transition-colors duration-200 ease-in-out"
          >
            <ChevronRight className="w-5 h-5" strokeWidth={2.5} />
          </motion.div>
        </div>
      )}
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="w-fit block" onClick={onClick}>
        {innerContent}
      </Link>
    );
  }

  return (
    <button className="p-0 border-none bg-transparent outline-none w-fit block" onClick={onClick}>
      {innerContent}
    </button>
  );
}
