"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../../../components/ui/SectionHeading/SectionHeading";
import { BENEFICIOS_CLINICA, MOCK_ESTADISTICAS } from "../../clinic/data/clinicaData";

const FOTO_CLINICA = "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1400";

export function PorQueElegirnosSection() {
  const experiencia = MOCK_ESTADISTICAS[0];
  const pacientes = MOCK_ESTADISTICAS[1];

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Foto con tarjeta glass encima */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative"
        >
          <div className="overflow-hidden rounded-card">
            <img
              src={FOTO_CLINICA}
              alt="Consultorio de Dental Clinic en Zapopan"
              className="h-[420px] w-full object-cover lg:h-[540px]"
            />
          </div>
          <div className="absolute -bottom-6 left-6 right-6 rounded-panel border border-white bg-white/80 p-6 shadow-lift ring-1 ring-ink/5 backdrop-blur-xl sm:right-auto sm:w-[21rem]">
            <div className="flex items-end gap-7">
              <div>
                <p className="text-4xl font-light leading-none text-ink">
                  {experiencia.sufijo}
                  {experiencia.valor}
                </p>
                <p className="mt-2 text-xs leading-tight text-mist">{experiencia.etiqueta}</p>
              </div>
              <div className="h-10 w-px bg-line" />
              <div>
                <p className="text-4xl font-light leading-none text-ink">
                  {pacientes.sufijo}
                  {pacientes.valor}
                </p>
                <p className="mt-2 text-xs leading-tight text-mist">{pacientes.etiqueta}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Beneficios numerados */}
        <div className="pt-8 lg:pt-0">
          <SectionHeading
            eyebrow="Por qué elegirnos"
            titulo="Lo que cambia cuando el equipo se toma su tiempo"
          />
          <div className="mt-10 divide-y divide-line border-t border-line">
            {BENEFICIOS_CLINICA.map((b, idx) => (
              <motion.div
                key={b.titulo}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.12 }}
                className="flex gap-6 py-6"
              >
                <span className="shrink-0 text-sm font-medium text-haze">
                  0{idx + 1}
                </span>
                <div>
                  <h3 className="text-base font-medium text-ink">{b.titulo}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist">{b.texto}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
