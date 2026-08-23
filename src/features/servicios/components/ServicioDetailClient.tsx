"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PageShell } from "../../../components/layout/PageShell/PageShell";
import { Button } from "../../../components/ui/Button/Button";
import { Accordion } from "../../../components/ui/Accordion/Accordion";
import { SectionHeading } from "../../../components/ui/SectionHeading/SectionHeading";
import { IconArrowUpRight, IconCheck, IconChevronRight, IconClock } from "../../../components/icons";
import { ServicioIcon } from "../../home/components/ServicioIcon";
import { Servicio } from "../../clinic/types/clinic.types";
import { getDoctoresByIds } from "../../clinic/data/doctoresData";
import { getServiciosRelacionados } from "../../clinic/data/serviciosData";
import { CATEGORIAS_LABEL } from "../../clinic/data/clinicaData";
import { formatDuracion, formatPrecio, formatSesiones } from "../../clinic/data/formatters";
import { useCita } from "../../appointments/components/CitaProvider";

const GRADIENTE =
  "linear-gradient(90deg, rgb(30 29 30 / 0.88) 0%, rgb(30 29 30 / 0.70) 45%, rgb(30 29 30 / 0.25) 100%)";

interface Props {
  servicio: Servicio;
}

export default function ServicioDetailClient({ servicio }: Props) {
  const { abrirCita } = useCita();
  const doctores = getDoctoresByIds(servicio.doctoresIds);
  const relacionados = getServiciosRelacionados(servicio, 3);

  const datos = [
    { label: "Duración", valor: formatDuracion(servicio.duracionMinutos) },
    { label: "Sesiones", valor: formatSesiones(servicio.sesiones) },
    { label: "Desde", valor: formatPrecio(servicio.precioDesde) },
  ];

  return (
    <PageShell>
      {/* Hero del tratamiento */}
      <section className="px-3 pt-3 sm:px-5 sm:pt-5 lg:px-7 lg:pt-7">
        <div className="relative overflow-hidden rounded-card bg-ink">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${servicio.imagenes[0]}')` }}
          />
          <div className="absolute inset-0" style={{ backgroundImage: GRADIENTE }} />
          <div className="relative px-6 py-16 sm:px-10 lg:px-14 lg:py-20">
            <nav aria-label="Ruta de navegación" className="mb-8 flex flex-wrap items-center gap-1.5 text-xs text-white/55">
              <Link href="/" className="transition-colors hover:text-white">Inicio</Link>
              <IconChevronRight className="h-3 w-3" />
              <Link href="/servicios" className="transition-colors hover:text-white">Servicios</Link>
              <IconChevronRight className="h-3 w-3" />
              <span className="text-white/85">{servicio.nombre}</span>
            </nav>

            <span className="grid h-12 w-12 place-items-center rounded-tile border border-white/25 bg-white/10 text-white backdrop-blur-md">
              <ServicioIcon nombre={servicio.icono} className="h-6 w-6" />
            </span>
            <p className="mt-6 text-eyebrow font-medium uppercase text-white/55">
              {CATEGORIAS_LABEL[servicio.categoria]}
            </p>
            <h1 className="mt-3 max-w-3xl text-display font-light text-white">{servicio.nombre}</h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70">{servicio.resumen}</p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button
                variant="primary"
                size="lg"
                withArrow
                onClick={() => abrirCita({ servicioId: servicio.id })}
              >
                Agendar este tratamiento
              </Button>
            </div>

            {/* Datos clave */}
            <dl className="mt-10 flex flex-wrap gap-3">
              {datos.map((d) => (
                <div
                  key={d.label}
                  className="rounded-tile border border-white/25 bg-white/10 px-5 py-3 backdrop-blur-md"
                >
                  <dt className="text-eyebrow font-medium uppercase text-white/50">{d.label}</dt>
                  <dd className="mt-1 text-sm font-medium text-white">{d.valor}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-20">
          <div>
            <h2 className="text-2xl font-light text-ink">En qué consiste</h2>
            {servicio.descripcion.split("\n\n").map((p) => (
              <p key={p.slice(0, 24)} className="mt-5 text-base leading-relaxed text-graphite">
                {p}
              </p>
            ))}

            <h2 className="mt-14 text-2xl font-light text-ink">Cómo es el procedimiento</h2>
            <ol className="mt-8 divide-y divide-line border-t border-line">
              {servicio.pasos.map((p, idx) => (
                <motion.li
                  key={p.titulo}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.08 }}
                  className="flex gap-6 py-6"
                >
                  <span className="shrink-0 text-sm font-medium text-haze">0{idx + 1}</span>
                  <div>
                    <h3 className="text-base font-medium text-ink">{p.titulo}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-mist">{p.detalle}</p>
                  </div>
                </motion.li>
              ))}
            </ol>

            <h2 className="mt-14 text-2xl font-light text-ink">Preguntas sobre este tratamiento</h2>
            <Accordion items={servicio.faq} className="mt-8" />
          </div>

          {/* Columna lateral */}
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-panel border border-line bg-surface p-7">
              <h3 className="text-base font-medium text-ink">Beneficios</h3>
              <ul className="mt-5 space-y-3">
                {servicio.beneficios.map((b) => (
                  <li key={b} className="flex gap-3 text-sm text-graphite">
                    <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-panel border border-line bg-surface p-7">
              <h3 className="text-base font-medium text-ink">Qué incluye</h3>
              <ul className="mt-5 space-y-3">
                {servicio.incluye.map((i) => (
                  <li key={i} className="flex gap-3 text-sm text-graphite">
                    <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    {i}
                  </li>
                ))}
              </ul>
              <p className="mt-6 flex items-center gap-2 border-t border-line pt-5 text-xs text-mist">
                <IconClock className="h-3.5 w-3.5 text-haze" />
                {formatDuracion(servicio.duracionMinutos)} por sesión
              </p>
            </div>

            {doctores.length > 0 && (
              <div className="rounded-panel border border-line bg-surface p-7">
                <h3 className="text-base font-medium text-ink">Quién lo realiza</h3>
                <div className="mt-5 space-y-4">
                  {doctores.map((d) => (
                    <Link
                      key={d.id}
                      href={`/doctores/${d.slug}`}
                      className="group flex items-center gap-4"
                    >
                      <img
                        src={d.foto}
                        alt={`${d.titulo} ${d.nombre}`}
                        className="h-12 w-12 rounded-full object-cover"
                      />
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-ink">
                          {d.titulo} {d.nombre}
                        </p>
                        <p className="truncate text-xs text-mist">{d.especialidadLabel}</p>
                      </div>
                      <IconArrowUpRight className="h-4 w-4 shrink-0 text-haze transition-colors group-hover:text-brand" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className="rounded-panel bg-ink p-7 text-white">
              <p className="text-2xl font-light">Desde {formatPrecio(servicio.precioDesde)}</p>
              <p className="mt-2 text-sm text-white/60">
                Precio de referencia. El definitivo sale de tu valoración y queda por escrito.
              </p>
              <Button
                variant="primary"
                size="md"
                withArrow
                onClick={() => abrirCita({ servicioId: servicio.id })}
                className="mt-6 w-full"
              >
                Agendar cita
              </Button>
            </div>
          </aside>
        </div>
      </div>

      {/* Relacionados */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="También te puede servir"
          titulo="Otros tratamientos"
          accion={
            <Button variant="outline" size="md" href="/servicios" withArrow>
              Ver todos
            </Button>
          }
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {relacionados.map((s) => (
            <Link
              key={s.id}
              href={`/servicios/${s.slug}`}
              className="group flex flex-col rounded-panel border border-line bg-surface p-7 transition-shadow hover:shadow-soft"
            >
              <span className="grid h-11 w-11 place-items-center rounded-tile bg-brand-soft text-brand">
                <ServicioIcon nombre={s.icono} className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-medium text-ink">{s.nombre}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-mist">{s.resumen}</p>
              <span className="mt-5 flex items-center gap-2 text-sm font-medium text-brand">
                Ver tratamiento
                <IconArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
