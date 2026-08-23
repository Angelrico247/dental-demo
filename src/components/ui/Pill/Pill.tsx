import React from "react";

type Tone = "glass" | "soft" | "outline";

interface PillProps {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
}

const TONOS: Record<Tone, string> = {
  glass: "border border-white/25 bg-white/10 text-white/90 backdrop-blur-md",
  soft: "bg-brand-soft text-brand",
  outline: "border border-line bg-surface text-graphite",
};

export const Pill: React.FC<PillProps> = ({ children, tone = "outline", className = "" }) => (
  <span
    className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium ${TONOS[tone]} ${className}`}
  >
    {children}
  </span>
);
