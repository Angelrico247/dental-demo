"use client";

import React from "react";
import { motion } from "framer-motion";
import { PageShell } from "../../../components/layout/PageShell/PageShell";
import { PageHeader } from "../../../components/layout/PageHeader/PageHeader";
import { Button } from "../../../components/ui/Button/Button";
import { SectionHeading } from "../../../components/ui/SectionHeading/SectionHeading";
import {
  CLINICA,
  MOCK_ESTADISTICAS,
  TECNOLOGIA,
  BENEFICIOS_CLINICA,
} from "../../clinic/data/clinicaData";
import { useCita } from "../../appointments/components/CitaProvider";

const GALERIA = [
  { src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1400", alt: "Consultorio principal", clase: "sm:col-span-2 sm:row-span-2 h-64 sm:h-full" },
  { src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1000", alt: "Área de tratamiento", clase: "h-48 sm:h-full" },
  { src: "https://images.unsplash.com/photo-1588776813677-77aaf5595b83?q=80&w=1000", alt: "Sala de espera", clase: "h-48 sm:h-full" },
  { src: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1000", alt: "Equipo de diagnóstico", clase: "h-48 sm:h-full" },
  { src: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=1000", alt: "Instrumental", clase: "h-48 sm:h-full" },
];

const VALORES = [
  {
    titulo: "Decir la verdad, aunque no venda",
    texto:
      "Si un diente se puede salvar, no lo extraemos. Si un tratamiento puede esperar, te lo decimos. Preferimos que vuelvas diez años a facturarte una vez.",
  },
  {
    titulo: "El tiempo del paciente vale",
    texto:
      "Citas con holgura real, no agendadas cada quince minutos. Si llegas puntual, pasas puntual. Y si algo se atrasa, te avisamos antes de que salgas de casa.",
  },
  {
    titulo: "Nadie debería tener miedo",
    texto:
      "El miedo al dentista es la razón número uno por la que la gente llega tarde a tratarse. Trabajamos con anestesia computarizada y sedación consciente para quitarlo de la ecuación.",
  },
];

export default function NosotrosPageClient() {
  const { abrirCita } = useCita();

  return (
    <PageShell>
      <PageHeader
        eyebrow="Nosotros"
        titulo="Abrimos en 2014 con una idea simple: que ir al dentista no fuera un mal rato"
        descripcion={`${CLINICA.eslogan} Doce años después seguimos en la misma esquina de ${CLINICA.direccion.colonia}, con seis especialistas y más de ocho mil pacientes atendidos.`}
        breadcrumb={[{ href: "/nosotros", label: "Nosotros" }]}
      />

      {/* Historia */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-5 text-base leading-relaxed text-graphite">
            <p>
              Dental Clinic empezó como un consultorio de dos sillones y un solo dentista general.
              La idea era corregir lo que nos molestaba de la odontología que conocíamos: consultas
              apuradas, presupuestos que crecían a mitad del tratamiento y explicaciones que nadie
              entendía.
            </p>
            <p>
              Lo primero que compramos no fue un sillón más: fue un escáner intraoral. Poder
              mostrarle a alguien su propia boca en una pantalla cambia por completo la
              conversación. Se acabaron las decisiones a ciegas.
            </p>
            <p>
              Hoy somos un equipo de seis especialistas y un piso completo en Puerta de Hierro. Lo
              que no cambió es la regla de la casa: te explicamos qué tienes, qué opciones hay y
              cuánto cuesta cada una, y tú decides sin que nadie te presione.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {MOCK_ESTADISTICAS.map((e, idx) => (
              <motion.div
                key={e.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.1 }}
                className="rounded-panel border border-line bg-surface p-7"
              >
                <p className="text-4xl font-light leading-none text-ink">
                  {e.sufijo}
                  {e.valor}
                </p>
                <p className="mt-3 text-sm text-mist">{e.etiqueta}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Cómo pensamos" titulo="Tres reglas que no negociamos" />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {VALORES.map((v, idx) => (
            <motion.div
              key={v.titulo}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.1 }}
              className="rounded-panel border border-line bg-surface p-8"
            >
              <span className="text-2xl font-light text-haze">0{idx + 1}</span>
              <h3 className="mt-5 text-lg font-medium text-ink">{v.titulo}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mist">{v.texto}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Galeria de instalaciones */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Las instalaciones" titulo="Un piso completo en Puerta de Hierro" />
        <div className="mt-12 grid gap-4 sm:auto-rows-[220px] sm:grid-cols-4">
          {GALERIA.map((g) => (
            <div key={g.alt} className={`overflow-hidden rounded-panel ${g.clase}`}>
              <img src={g.src} alt={g.alt} className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* Tecnologia */}
      <section className="px-3 pb-10 sm:px-5 lg:px-7">
        <div className="rounded-card bg-ink px-6 py-16 sm:px-10 lg:px-14">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Tecnología"
              titulo="Lo que compramos primero y por qué"
              tone="light"
            />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {TECNOLOGIA.map((t, idx) => (
                <motion.div
                  key={t.nombre}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.1 }}
                >
                  <div className="overflow-hidden rounded-panel">
                    <img src={t.imagen} alt={t.nombre} className="h-52 w-full object-cover" />
                  </div>
                  <h3 className="mt-5 text-lg font-medium text-white">{t.nombre}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{t.texto}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios + CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading eyebrow="En la práctica" titulo="Qué notas cuando vienes" />
            <div className="mt-10 divide-y divide-line border-t border-line">
              {BENEFICIOS_CLINICA.map((b, idx) => (
                <div key={b.titulo} className="flex gap-6 py-6">
                  <span className="shrink-0 text-sm font-medium text-haze">0{idx + 1}</span>
                  <div>
                    <h3 className="text-base font-medium text-ink">{b.titulo}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-mist">{b.texto}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-card bg-brand p-10 text-white lg:self-start">
            <h2 className="text-display font-light">¿Nos conocemos?</h2>
            <p className="mt-5 text-sm leading-relaxed text-white/75">
              La primera valoración no tiene costo e incluye escáner 3D y plan por escrito. Sin
              compromiso de agendar nada después.
            </p>
            <Button
              variant="outline"
              size="lg"
              withArrow
              onClick={() => abrirCita()}
              className="mt-8"
            >
              Agendar valoración
            </Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
