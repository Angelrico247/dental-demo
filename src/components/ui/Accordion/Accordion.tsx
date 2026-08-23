"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaqItem } from "../../../features/clinic/types/clinic.types";

interface AccordionProps {
  items: FaqItem[];
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({ items, className = "" }) => {
  const [abierto, setAbierto] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className={`divide-y divide-line border-y border-line ${className}`}>
      {items.map((item) => {
        const activo = abierto === item.id;
        return (
          <div key={item.id}>
            <button
              type="button"
              onClick={() => setAbierto(activo ? null : item.id)}
              aria-expanded={activo}
              aria-controls={`faq-${item.id}`}
              className="flex w-full cursor-pointer items-center justify-between gap-6 py-5 text-left"
            >
              <span
                className={`text-base transition-colors ${
                  activo ? "font-medium text-ink" : "text-graphite"
                }`}
              >
                {item.pregunta}
              </span>
              <span
                className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-colors ${
                  activo ? "border-brand bg-brand text-white" : "border-line text-haze"
                }`}
              >
                <motion.span
                  animate={{ rotate: activo ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-lg leading-none"
                >
                  +
                </motion.span>
              </span>
            </button>
            <AnimatePresence initial={false}>
              {activo && (
                <motion.div
                  id={`faq-${item.id}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl pb-6 pr-12 text-sm leading-relaxed text-mist">
                    {item.respuesta}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
