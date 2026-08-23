"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../../../components/ui/SectionHeading/SectionHeading";
import { TECNOLOGIA } from "../../clinic/data/clinicaData";

export function TecnologiaSection() {
  return (
    <section className="px-3 py-10 sm:px-5 lg:px-7">
      <div className="rounded-card bg-ink px-6 py-16 sm:px-10 lg:px-14 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Tecnología"
            titulo="Equipo que acorta los tratamientos y quita el mal rato"
            descripcion="No es tecnología por presumir: cada aparato existe para que tardes menos en el sillón y sepas exactamente qué va a pasar."
            tone="light"
          />

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {TECNOLOGIA.map((t, idx) => (
              <motion.div
                key={t.nombre}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.12 }}
              >
                <div className="overflow-hidden rounded-panel">
                  <img
                    src={t.imagen}
                    alt={t.nombre}
                    className="h-56 w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <h3 className="mt-5 text-lg font-medium text-white">{t.nombre}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{t.texto}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
