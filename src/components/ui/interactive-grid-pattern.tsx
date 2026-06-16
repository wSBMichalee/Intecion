"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface InteractiveGridPatternProps {
  className?: string;
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  strokeDasharray?: string | number;
  numSquaresX?: number;
  numSquaresY?: number;
  maxOpacity?: number;
  duration?: number;
  repeatDelay?: number;
  squaresClassName?: string;
}

export function InteractiveGridPattern({
  className,
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = 0,
  numSquaresX,
  numSquaresY,
  maxOpacity = 0.5,
  duration = 4,
  repeatDelay = 0.5,
  squaresClassName,
}: InteractiveGridPatternProps) {
  const containerRef = useRef<SVGSVGElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [squares, setSquares] = useState<{ id: string; x: number; y: number }[]>([]);

  const getPos = (e: MouseEvent | TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

    const svgX = clientX - rect.left;
    const svgY = clientY - rect.top;

    const col = Math.floor(svgX / width);
    const row = Math.floor(svgY / height);

    const squareId = `${col}-${row}`;

    setSquares((prev) => {
      if (prev.some((s) => s.id === squareId)) return prev;
      return [...prev, { id: squareId, x: col * width, y: row * height }];
    });
  };

  // Remove squares after duration + repeatDelay
  useEffect(() => {
    if (squares.length === 0) return;
    const timers = squares.map((sq) =>
      setTimeout(() => {
        setSquares((prev) => prev.filter((s) => s.id !== sq.id));
      }, (duration + repeatDelay) * 1000)
    );
    return () => timers.forEach(clearTimeout);
  }, [squares, duration, repeatDelay]);

  useEffect(() => {
    const update = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setDimensions({ width: rect.width, height: rect.height });
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const cols = numSquaresX ?? Math.ceil(dimensions.width / width) + 1;
  const rows = numSquaresY ?? Math.ceil(dimensions.height / height) + 1;

  const patternId = "interactive-grid-pattern";

  return (
    <svg
      ref={containerRef}
      className={cn("pointer-events-auto", className)}
      onMouseMove={(e) => getPos(e.nativeEvent)}
      onTouchMove={(e) => getPos(e.nativeEvent)}
    >
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            stroke="currentColor"
            strokeDasharray={strokeDasharray}
            strokeOpacity={0.2}
          />
        </pattern>
      </defs>

      {/* Grid background */}
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />

      {/* Lit squares on hover */}
      {squares.map((sq) => (
        <rect
          key={sq.id}
          x={sq.x}
          y={sq.y}
          width={width}
          height={height}
          className={cn(squaresClassName)}
          style={{
            animation: `grid-square-fade ${duration}s ease forwards`,
            opacity: 0,
          }}
        />
      ))}

      <style>{`
        @keyframes grid-square-fade {
          0%   { opacity: 0; }
          10%  { opacity: ${maxOpacity}; }
          80%  { opacity: ${maxOpacity * 0.6}; }
          100% { opacity: 0; }
        }
      `}</style>
    </svg>
  );
}
