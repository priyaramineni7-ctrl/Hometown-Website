import type React from "react";
import { sans } from "@/lib/fonts";

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionContainer({ children, className = "" }: SectionContainerProps) {
  return (
    <div style={sans} className={`max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28 ${className}`}>
      {children}
    </div>
  );
}
