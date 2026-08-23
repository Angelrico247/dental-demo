"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { CLINICA, NAV_LINKS, NAV_MAS } from "../../../features/clinic/data/clinicaData";
import { IconChevronDown, IconClose, IconMenu, IconTooth } from "../../icons";
import { Button } from "../../ui/Button/Button";

interface NavbarProps {
  /** glass: flotando dentro de la tarjeta del hero. solid: barra fija de paginas internas. */
  variant?: "glass" | "solid";
  className?: string;
  onAgendar?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  variant = "solid",
  className = "",
  onAgendar,
}) => {
  const [abierto, setAbierto] = useState(false);
  const [masAbierto, setMasAbierto] = useState(false);
  const esGlass = variant === "glass";

  // La variante solida no se posiciona a si misma: PageShell la hace sticky y el hero
  // la monta dentro de un contenedor fixed. Asi no se anida sticky dentro de fixed.
  const contenedor = esGlass
    ? "absolute inset-x-4 top-4 z-30 sm:inset-x-6 sm:top-6"
    : "border-b border-line bg-surface/85 backdrop-blur-lg";

  const barra = esGlass
    ? "rounded-full border border-white/20 bg-white/10 px-3 py-2 backdrop-blur-lg"
    : "px-4 sm:px-6 lg:px-8";

  const textoLink = esGlass
    ? "text-white/80 hover:text-white"
    : "text-graphite hover:text-ink";

  const marca = esGlass ? "text-white" : "text-ink";

  return (
    <header className={`${contenedor} ${className}`}>
      <nav className={`mx-auto flex max-w-7xl items-center justify-between gap-4 ${barra}`}>
        {/* Marca */}
        <Link
          href="/"
          className={`flex shrink-0 items-center gap-2.5 ${marca}`}
          aria-label={`${CLINICA.nombre} — inicio`}
        >
          <span
            className={`grid h-9 w-9 place-items-center rounded-full ${
              esGlass ? "bg-white/15 text-white backdrop-blur" : "bg-brand text-white"
            }`}
          >
            <IconTooth className="h-5 w-5" />
          </span>
          <span className="hidden text-base font-medium tracking-tight sm:block">
            {CLINICA.nombre}
          </span>
        </Link>

        {/* Links de escritorio */}
        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${textoLink}`}
            >
              {l.label}
            </Link>
          ))}

          <div
            className="relative"
            onMouseEnter={() => setMasAbierto(true)}
            onMouseLeave={() => setMasAbierto(false)}
          >
            <button
              type="button"
              onClick={() => setMasAbierto((v) => !v)}
              aria-expanded={masAbierto}
              className={`flex cursor-pointer items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${textoLink}`}
            >
              Más
              <IconChevronDown
                className={`h-3.5 w-3.5 transition-transform ${masAbierto ? "rotate-180" : ""}`}
              />
            </button>
            <AnimatePresence>
              {masAbierto && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.18 }}
                  className="absolute right-0 top-full w-56 pt-2"
                >
                  <div className="rounded-panel border border-line bg-surface p-2 shadow-lift">
                    {NAV_MAS.map((l) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        onClick={() => setMasAbierto(false)}
                        className="block rounded-tile px-3 py-2.5 text-sm text-graphite transition-colors hover:bg-brand-soft hover:text-brand"
                      >
                        {l.label}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* CTA + hamburguesa */}
        <div className="flex shrink-0 items-center gap-2">
          {/* El display se controla desde el contenedor: el Button ya trae inline-flex propio */}
          <span className="hidden sm:block">
            <Button
              variant="primary"
              size="md"
              withArrow
              onClick={onAgendar}
              href={onAgendar ? undefined : "/contacto"}
            >
              Agendar cita
            </Button>
          </span>
          <button
            type="button"
            onClick={() => setAbierto((v) => !v)}
            aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={abierto}
            className={`grid h-10 w-10 cursor-pointer place-items-center rounded-full transition-colors lg:hidden ${
              esGlass
                ? "border border-white/25 bg-white/10 text-white backdrop-blur"
                : "border border-line text-ink"
            }`}
          >
            {abierto ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </nav>

      {/* Panel movil */}
      <AnimatePresence>
        {abierto && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden lg:hidden"
          >
            <div
              className={`mt-2 rounded-panel p-3 ${
                esGlass
                  ? "border border-white/20 bg-ink/70 backdrop-blur-xl"
                  : "border-t border-line bg-surface"
              }`}
            >
              {[...NAV_LINKS, ...NAV_MAS].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setAbierto(false)}
                  className={`block rounded-tile px-4 py-3 text-sm font-medium transition-colors ${
                    esGlass ? "text-white/85 hover:bg-white/10" : "text-graphite hover:bg-brand-soft"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <span className="mt-2 block sm:hidden">
                <Button
                  variant="primary"
                  size="md"
                  withArrow
                  onClick={onAgendar}
                  href={onAgendar ? undefined : "/contacto"}
                  className="w-full"
                >
                  Agendar cita
                </Button>
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
