"use client";

import React from "react";
import { motion } from "framer-motion";
import { IconStar } from "../../../components/icons";
import { getTestimoniosDestacados } from "../../clinic/data/testimoniosData";
import { formatFecha } from "../../clinic/data/formatters";

export function TestimoniosSection() {
  const testimonios = getTestimoniosDestacados(3);

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center"
      >
        <p className="mb-4 text-eyebrow font-medium uppercase text-mist">Lo que dicen</p>
        <h2 className="text-5xl font-light leading-none text-ink">Lorem ipsum</h2>
        <p className="mt-4 text-sm text-mist">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </motion.div>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {testimonios.map((t, idx) => (
          <motion.figure
            key={t.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.12 }}
            className="flex flex-col rounded-panel border border-white bg-white/70 p-7 shadow-soft ring-1 ring-ink/5 backdrop-blur-xl"
          >
            <div className="flex gap-0.5 text-brand">
              {Array.from({ length: t.calificacion }).map((_, i) => (
                <IconStar key={i} className="h-3.5 w-3.5" />
              ))}
            </div>
            <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-graphite">
              {t.texto}
            </blockquote>
            <figcaption className="mt-7 flex items-center gap-3 border-t border-line pt-5">
              <img src={t.foto} alt="" className="h-10 w-10 rounded-full object-cover" />
              <div>
                <p className="text-sm font-medium text-ink">{t.nombre}</p>
                <p className="text-xs text-mist">
                  {t.tratamiento} · {formatFecha(t.fecha)}
                </p>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
