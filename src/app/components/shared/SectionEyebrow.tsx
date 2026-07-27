import type React from "react";

interface SectionEyebrowProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionEyebrow({ children, className = "" }: SectionEyebrowProps) {
  return (
    <p className={`text-[10px] uppercase tracking-[0.25em] text-primary font-semibold ${className}`}>
      {children}
    </p>
  );
}
