"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../../../components/ui/SectionHeading/SectionHeading";
import { PASOS_PROCESO } from "../../clinic/data/clinicaData";

export function ProcesoSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Cómo trabajamos"
        titulo="Cuatro pasos, sin sorpresas en el camino"
        align="center"
      />

      <div className="relative mt-16">
        {/* Linea conectora, solo en escritorio */}
        <div
          className="absolute left-0 right-0 top-7 hidden border-t border-dashed border-line lg:block"
          aria-hidden
        />
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {PASOS_PROCESO.map((p, idx) => (
            <motion.div
              key={p.titulo}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.12 }}
              className="relative"
            >
              <span className="relative z-10 grid h-14 w-14 place-items-center rounded-full border border-line bg-surface text-2xl font-light text-haze">
                {idx + 1}
              </span>
              <h3 className="mt-6 text-lg font-medium text-ink">{p.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist">{p.texto}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
