"use client";

import React from "react";
import Link from "next/link";
import { PageShell } from "../../../components/layout/PageShell/PageShell";
import { Button } from "../../../components/ui/Button/Button";
import { IconArrowUpRight, IconCheck, IconChevronRight } from "../../../components/icons";
import { ServicioIcon } from "../../home/components/ServicioIcon";
import { Doctor } from "../../clinic/types/clinic.types";
import { getServiciosByIds } from "../../clinic/data/serviciosData";
import { ESPECIALIDADES_LABEL } from "../../clinic/data/clinicaData";
import { formatPrecioDesde } from "../../clinic/data/formatters";
import { useCita } from "../../appointments/components/CitaProvider";

interface Props {
  doctor: Doctor;
}

export default function DoctorDetailClient({ doctor }: Props) {
  const { abrirCita } = useCita();
  const servicios = getServiciosByIds(doctor.serviciosIds);

  return (
    <PageShell>
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <nav aria-label="Ruta de navegación" className="mb-10 flex flex-wrap items-center gap-1.5 text-xs text-mist">
          <Link href="/" className="transition-colors hover:text-ink">Inicio</Link>
          <IconChevronRight className="h-3 w-3 text-haze" />
          <Link href="/doctores" className="transition-colors hover:text-ink">Doctores</Link>
          <IconChevronRight className="h-3 w-3 text-haze" />
          <span className="text-graphite">{doctor.titulo} {doctor.nombre}</span>
        </nav>

        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] lg:gap-16">
          {/* Foto + datos */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="overflow-hidden rounded-card">
              <img
                src={doctor.foto}
                alt={`${doctor.titulo} ${doctor.nombre}`}
                className="aspect-[3/4] w-full object-cover"
              />
            </div>

            <div className="mt-6 rounded-panel border border-line bg-surface p-6">
              <h2 className="text-base font-medium text-ink">Horario de consulta</h2>
              <dl className="mt-4 space-y-2.5 text-sm">
                {doctor.horario.map((h) => (
                  <div key={h.dia} className="flex justify-between gap-4">
                    <dt className="text-mist">{h.dia}</dt>
                    <dd className="text-graphite">{h.rango}</dd>
                  </div>
                ))}
              </dl>
              <Button
                variant="primary"
                size="md"
                withArrow
                onClick={() => abrirCita({ doctorId: doctor.id })}
                className="mt-6 w-full"
              >
                Agendar con {doctor.titulo} {doctor.nombre.split(" ")[0]}
              </Button>
            </div>
          </div>

          {/* Contenido */}
          <div>
            <p className="text-eyebrow font-medium uppercase text-mist">
              {ESPECIALIDADES_LABEL[doctor.especialidad]}
            </p>
            <h1 className="mt-3 text-display font-light text-ink">
              {doctor.titulo} {doctor.nombre}
            </h1>
            <p className="mt-3 text-base text-mist">{doctor.especialidadLabel}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                { l: "Experiencia", v: `${doctor.aniosExperiencia} años` },
                { l: "Cédula profesional", v: doctor.cedula },
                { l: "Idiomas", v: doctor.idiomas.join(", ") },
              ].map((d) => (
                <div key={d.l} className="rounded-tile border border-line bg-surface px-5 py-3">
                  <p className="text-eyebrow font-medium uppercase text-haze">{d.l}</p>
                  <p className="mt-1 text-sm font-medium text-ink">{d.v}</p>
                </div>
              ))}
            </div>

            <p className="mt-10 text-base leading-relaxed text-graphite">{doctor.bio}</p>

            <h2 className="mt-12 text-2xl font-light text-ink">Formación</h2>
            <ul className="mt-6 divide-y divide-line border-t border-line">
              {doctor.formacion.map((f) => (
                <li key={f.institucion} className="flex justify-between gap-6 py-5">
                  <div>
                    <p className="text-base text-ink">{f.grado}</p>
                    <p className="mt-1 text-sm text-mist">{f.institucion}</p>
                  </div>
                  <span className="shrink-0 text-sm text-haze">{f.anio}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-12 text-2xl font-light text-ink">Certificaciones</h2>
            <ul className="mt-6 space-y-3">
              {doctor.certificaciones.map((c) => (
                <li key={c} className="flex gap-3 text-sm text-graphite">
                  <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  {c}
                </li>
              ))}
            </ul>

            <h2 className="mt-12 text-2xl font-light text-ink">Tratamientos que realiza</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {servicios.map((s) => (
                <Link
                  key={s.id}
                  href={`/servicios/${s.slug}`}
                  className="group flex flex-col rounded-panel border border-line bg-surface p-6 transition-shadow hover:shadow-soft"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-tile bg-brand-soft text-brand">
                    <ServicioIcon nombre={s.icono} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-base font-medium text-ink">{s.nombre}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-mist">{s.resumen}</p>
                  <span className="mt-4 flex items-center justify-between border-t border-line pt-4 text-sm">
                    <span className="font-semibold text-ink">{formatPrecioDesde(s.precioDesde)}</span>
                    <IconArrowUpRight className="h-4 w-4 text-haze transition-colors group-hover:text-brand" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
