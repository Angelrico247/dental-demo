"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PageShell } from "../../../components/layout/PageShell/PageShell";
import { PageHeader } from "../../../components/layout/PageHeader/PageHeader";
import { IconArrowUpRight, IconClock } from "../../../components/icons";
import { ServicioIcon } from "../../home/components/ServicioIcon";
import { MOCK_SERVICIOS, getServiciosPorCategoria } from "../../clinic/data/serviciosData";
import { CATEGORIAS_LABEL } from "../../clinic/data/clinicaData";
import { formatDuracion, formatPrecioDesde, formatSesiones } from "../../clinic/data/formatters";
import { CategoriaServicio } from "../../clinic/types/clinic.types";

const CATEGORIAS = Object.keys(CATEGORIAS_LABEL) as CategoriaServicio[];

export default function ServiciosPageClient() {
  const [categoria, setCategoria] = useState<CategoriaServicio | "">("");
  const servicios = getServiciosPorCategoria(categoria);

  return (
    <PageShell>
      <PageHeader
        eyebrow="Tratamientos"
        titulo="Todo lo que hacemos, con precios a la vista"
        descripcion="Doce tratamientos repartidos en seis especialidades. Los precios son de referencia: el definitivo sale de tu valoración y queda por escrito."
        breadcrumb={[{ href: "/servicios", label: "Servicios" }]}
      />

      <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        {/* Filtro por categoria */}
        <div className="flex flex-wrap gap-2 border-b border-line pb-8">
          <button
            type="button"
            onClick={() => setCategoria("")}
            aria-pressed={categoria === ""}
            className={`cursor-pointer rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
              categoria === ""
                ? "border-ink bg-ink text-white"
                : "border-line bg-surface text-graphite hover:border-haze"
            }`}
          >
            Todos ({MOCK_SERVICIOS.length})
          </button>
          {CATEGORIAS.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategoria(c)}
              aria-pressed={categoria === c}
              className={`cursor-pointer rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
                categoria === c
                  ? "border-ink bg-ink text-white"
                  : "border-line bg-surface text-graphite hover:border-haze"
              }`}
            >
              {CATEGORIAS_LABEL[c]}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {servicios.map((s, idx) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: (idx % 6) * 0.08 }}
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
                <h2 className="mt-2 text-xl font-medium text-ink">{s.nombre}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-mist">{s.resumen}</p>

                <p className="mt-5 flex items-center gap-2 text-xs text-mist">
                  <IconClock className="h-3.5 w-3.5 text-haze" />
                  {formatDuracion(s.duracionMinutos)} · {formatSesiones(s.sesiones)}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-line pt-5">
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
      </div>
    </PageShell>
  );
}
