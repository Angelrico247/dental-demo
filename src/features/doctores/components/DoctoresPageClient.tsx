"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PageShell } from "../../../components/layout/PageShell/PageShell";
import { PageHeader } from "../../../components/layout/PageHeader/PageHeader";
import { IconArrowUpRight } from "../../../components/icons";
import { MOCK_DOCTORES } from "../../clinic/data/doctoresData";
import { MOCK_ESTADISTICAS } from "../../clinic/data/clinicaData";

export default function DoctoresPageClient() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="El equipo"
        titulo="Seis especialistas, cada uno en lo suyo"
        descripcion="Nadie aquí hace de todo. Tu caso lo lleva quien se dedica a eso todos los días, y cuando hace falta más de una mano, trabajan juntos."
        breadcrumb={[{ href: "/doctores", label: "Doctores" }]}
      />

      <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {MOCK_DOCTORES.map((d, idx) => (
            <motion.div
              key={d.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: (idx % 3) * 0.1 }}
            >
              <Link href={`/doctores/${d.slug}`} className="group block">
                <div className="relative overflow-hidden rounded-panel bg-canvas">
                  <img
                    src={d.foto}
                    alt={`${d.titulo} ${d.nombre}`}
                    className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-3 bottom-3 flex translate-y-3 items-center justify-between rounded-tile border border-white/25 bg-white/15 px-4 py-3 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="text-xs font-medium">Ver perfil</span>
                    <IconArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
                <h2 className="mt-5 text-lg font-semibold text-ink">
                  {d.titulo} {d.nombre}
                </h2>
                <p className="mt-1 text-sm text-mist">{d.especialidadLabel}</p>
                <p className="mt-3 text-sm leading-relaxed text-mist line-clamp-3">{d.bio}</p>
                <p className="mt-4 text-xs text-haze">
                  {d.aniosExperiencia} años de experiencia · Céd. {d.cedula}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Franja de credenciales */}
      <section className="px-3 pb-10 sm:px-5 lg:px-7">
        <div className="rounded-card bg-ink px-6 py-14 sm:px-10 lg:px-14">
          <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {MOCK_ESTADISTICAS.map((e, idx) => (
              <motion.div
                key={e.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.1 }}
              >
                <p className="text-5xl font-light leading-none text-white">
                  {e.sufijo}
                  {e.valor}
                </p>
                <p className="mt-3 text-sm text-white/55">{e.etiqueta}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
