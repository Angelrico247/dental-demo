"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionHeading } from "../../../components/ui/SectionHeading/SectionHeading";
import { Button } from "../../../components/ui/Button/Button";
import { IconArrowUpRight } from "../../../components/icons";
import { ServicioIcon } from "./ServicioIcon";
import { getServiciosDestacados } from "../../clinic/data/serviciosData";
import { formatPrecioDesde } from "../../clinic/data/formatters";
import { CATEGORIAS_LABEL } from "../../clinic/data/clinicaData";

export function ServiciosSection() {
  const servicios = getServiciosDestacados(6);

  return (
    <section id="servicios" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Lo que hacemos"
        titulo="Tratamientos para cada etapa de tu boca"
        descripcion="De la limpieza semestral a la rehabilitación completa. Cada tratamiento lo lleva el especialista que corresponde."
        accion={
          <Button variant="outline" size="md" href="/servicios" withArrow>
            Ver todos
          </Button>
        }
      />

      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {servicios.map((s, idx) => (
          <motion.div
            key={s.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.12 }}
          >
            <Link
              href={`/servicios/${s.slug}`}
              className="group flex h-full flex-col rounded-panel border border-line bg-surface p-7 transition-shadow hover:shadow-soft"
            >
              <span className="grid h-12 w-12 place-items-center rounded-tile bg-brand-soft text-brand">
                <ServicioIcon nombre={s.icono} className="h-6 w-6" />
              </span>

              <p className="mt-6 text-eyebrow font-medium uppercase text-haze">
                {CATEGORIAS_LABEL[s.categoria]}
              </p>
              <h3 className="mt-2 text-xl font-medium text-ink">{s.nombre}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-mist">{s.resumen}</p>

              <div className="mt-6 flex items-center justify-between border-t border-line pt-5">
                <span className="text-sm font-semibold text-ink">
                  {formatPrecioDesde(s.precioDesde)}
                </span>
                <span className="grid h-9 w-9 place-items-center rounded-full bg-canvas text-graphite transition-colors group-hover:bg-brand group-hover:text-white">
                  <IconArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
