"use client";

import React from "react";
import Link from "next/link";
import { IconArrowUpRight } from "../../icons";

type Variant = "primary" | "outline" | "ghost" | "glass";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  withArrow?: boolean;
  className?: string;
  "aria-label"?: string;
}

const VARIANTES: Record<Variant, string> = {
  primary: "bg-brand text-white shadow-brand hover:bg-brand-hover",
  outline: "border border-line bg-surface text-ink hover:border-ink",
  ghost: "text-ink hover:bg-brand-soft",
  glass: "border border-white/25 bg-white/10 text-white backdrop-blur-md hover:bg-white/20",
};

/* El pill lleva el circulo de la flecha pegado al borde derecho: por eso el padding asimetrico */
const TAMANOS: Record<Size, { conFlecha: string; simple: string; circulo: string }> = {
  sm: { conFlecha: "pl-4 pr-1 py-1 text-xs", simple: "px-4 py-2 text-xs", circulo: "h-6 w-6" },
  md: { conFlecha: "pl-5 pr-1.5 py-1.5 text-sm", simple: "px-5 py-3 text-sm", circulo: "h-8 w-8" },
  lg: { conFlecha: "pl-7 pr-2 py-2 text-base", simple: "px-7 py-4 text-base", circulo: "h-10 w-10" },
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  type = "button",
  disabled = false,
  withArrow = false,
  className = "",
  ...rest
}) => {
  const t = TAMANOS[size];
  const clases = `inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 ${
    VARIANTES[variant]
  } ${withArrow ? t.conFlecha : t.simple} ${className}`;

  const contenido = (
    <>
      {children}
      {withArrow && (
        <span
          className={`grid shrink-0 place-items-center rounded-full ${t.circulo} ${
            variant === "primary" ? "bg-white/20" : "bg-ink/5"
          }`}
        >
          <IconArrowUpRight className="h-3.5 w-3.5" />
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={clases} {...rest}>
        {contenido}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={clases} {...rest}>
      {contenido}
    </button>
  );
};
