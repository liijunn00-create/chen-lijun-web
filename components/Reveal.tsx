"use client";

import type { CSSProperties, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export function Reveal({ children, className, delay = 0, y = 40 }: RevealProps) {
  return (
    <div
      className={`reveal-safe ${className ?? ""}`}
      style={{ animationDelay: `${delay}s`, "--reveal-y": `${y}px` } as CSSProperties}
    >
      {children}
    </div>
  );
}
