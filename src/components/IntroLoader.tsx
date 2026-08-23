"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { IconTooth } from "./icons";
import { CLINICA } from "../features/clinic/data/clinicaData";

const IntroContext = createContext(false);

/** Permite que el hero espere a que la intro termine antes de escalonar su entrada. */
export function useIntroReady(): boolean {
  return useContext(IntroContext);
}

export function IntroProvider({ children }: { children: React.ReactNode }) {
  // La intro es la entrada a la marca: solo tiene sentido en la portada.
  // Quien llega por un enlace profundo va directo al contenido.
  const esPortada = usePathname() === "/";
  const [mostrando, setMostrando] = useState(esPortada);

  useEffect(() => {
    if (!esPortada) return;
    const t = setTimeout(() => setMostrando(false), 1500);
    return () => clearTimeout(t);
  }, [esPortada]);

  useEffect(() => {
    document.body.style.overflow = mostrando ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mostrando]);

  return (
    <IntroContext.Provider value={!mostrando}>
      <AnimatePresence>
        {mostrando && (
          <motion.div
            key="intro"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink"
          >
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex items-center gap-3 text-white"
            >
              <span className="grid h-11 w-11 place-items-center rounded-full bg-brand">
                <IconTooth className="h-6 w-6" />
              </span>
              <span className="text-2xl font-light tracking-tight">{CLINICA.nombre}</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </IntroContext.Provider>
  );
}
