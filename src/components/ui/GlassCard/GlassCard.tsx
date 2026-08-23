import React from "react";

interface GlassCardProps {
  children: React.ReactNode;
  /** dark: sobre foto u superficie oscura. light: sobre el fondo canvas. */
  tone?: "dark" | "light";
  className?: string;
}

const TONOS = {
  dark: "border border-white/25 bg-white/10 text-white shadow-lift backdrop-blur-xl",
  light: "border border-white bg-white/70 text-graphite shadow-soft ring-1 ring-ink/5 backdrop-blur-xl",
};

export const GlassCard: React.FC<GlassCardProps> = ({ children, tone = "dark", className = "" }) => (
  <div className={`rounded-panel ${TONOS[tone]} ${className}`}>{children}</div>
);
