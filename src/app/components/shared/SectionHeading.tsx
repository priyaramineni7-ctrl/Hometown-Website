import type React from "react";
import { serif } from "@/lib/fonts";

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionHeading({ children, className = "" }: SectionHeadingProps) {
  return (
    <h2
      className={`text-3xl lg:text-4xl text-foreground ${className}`}
      style={serif}
    >
      {children}
    </h2>
  );
}
