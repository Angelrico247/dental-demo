"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PageShell } from "../../../components/layout/PageShell/PageShell";
import { PageHeader } from "../../../components/layout/PageHeader/PageHeader";
import { Button } from "../../../components/ui/Button/Button";
import { Accordion } from "../../../components/ui/Accordion/Accordion";
import { SectionHeading } from "../../../components/ui/SectionHeading/SectionHeading";
import { IconCheck } from "../../../components/icons";
import { MOCK_PLANES, getPreciosPorCategoria } from "../../clinic/data/preciosData";
import { CATEGORIAS_LABEL } from "../../clinic/data/clinicaData";
import { formatPrecio } from "../../clinic/data/formatters";
import { getFaqPorCategoria } from "../../clinic/data/faqData";
import { useCita } from "../../appointments/components/CitaProvider";

export default function PreciosPageClient() {
  const [anual, setAnual] = useState(false);
  const { abrirCita } = useCita();
  const grupos = getPreciosPorCategoria();
  const faqPrecios = getFaqPorCategoria("precios");

  return (
    <PageShell>
      <PageHeader
        eyebrow="Precios"
        titulo="Cuánto cuesta, sin tener que preguntar"
        descripcion="Publicamos precios de referencia de los doce tratamientos y tres planes de prevención con cuota mensual. El presupuesto definitivo sale de tu valoración y queda cerrado por escrito."
        breadcrumb={[{ href: "/precios", label: "Precios" }]}
      />

      {/* Planes */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-1 rounded-full border border-line bg-surface p-1">
            {[
              { valor: false, label: "Mensual" },
              { valor: true, label: "Anual · ahorra 20%" },
            ].map((op) => (
              <button
                key={op.label}
                type="button"
                onClick={() => setAnual(op.valor)}
                aria-pressed={anual === op.valor}
                className={`cursor-pointer rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                  anual === op.valor ? "bg-ink text-white" : "text-mist hover:text-ink"
                }`}
              >
                {op.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid items-start gap-6 lg:grid-cols-3">
          {MOCK_PLANES.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.1 }}
              className={`flex h-full flex-col rounded-card p-8 ${
                p.destacado
                  ? "bg-brand text-white shadow-brand lg:-mt-4 lg:py-12"
                  : "border border-line bg-surface"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <h2 className={`text-lg font-medium ${p.destacado ? "text-white" : "text-ink"}`}>
                  {p.nombre}
                </h2>
                {p.badge && (
                  <span className="rounded-full bg-white/20 px-3 py-1 text-eyebrow font-medium uppercase text-white">
                    {p.badge}
                  </span>
                )}
              </div>
              <p className={`mt-2 text-sm ${p.destacado ? "text-white/70" : "text-mist"}`}>
                {p.descripcion}
              </p>
              <div className="mt-8 flex items-baseline gap-1.5">
                <span
                  className={`text-5xl font-light leading-none ${
                    p.destacado ? "text-white" : "text-ink"
                  }`}
                >
                  {formatPrecio(anual ? p.precioAnual : p.precioMensual)}
                </span>
                <span className={`text-sm ${p.destacado ? "text-white/70" : "text-mist"}`}>/mes</span>
              </div>

              <ul className="mt-8 flex-1 space-y-3">
                {p.incluye.map((i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <IconCheck
                      className={`mt-0.5 h-4 w-4 shrink-0 ${p.destacado ? "text-white" : "text-brand"}`}
                    />
                    <span className={p.destacado ? "text-white/85" : "text-graphite"}>{i}</span>
                  </li>
                ))}
              </ul>

              {p.noIncluye && (
                <ul className="mt-5 space-y-2 border-t border-line pt-5">
                  {p.noIncluye.map((i) => (
                    <li key={i} className="text-xs text-haze">
                      No incluye: {i}
                    </li>
                  ))}
                </ul>
              )}

              <Button
                variant={p.destacado ? "outline" : "primary"}
                size="md"
                onClick={() => abrirCita()}
                className="mt-8 w-full"
              >
                Empezar con {p.nombre}
              </Button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tabla de precios por tratamiento */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Tratamiento por tratamiento"
          titulo="Lista de precios de referencia"
          descripcion="Si prefieres no contratar un plan, estos son los precios sueltos."
        />

        <div className="mt-12 space-y-12">
          {grupos.map((g) => (
            <div key={g.categoria}>
              <h3 className="text-eyebrow font-medium uppercase text-mist">
                {CATEGORIAS_LABEL[g.categoria]}
              </h3>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full min-w-[36rem] border-collapse text-left">
                  <thead>
                    <tr className="border-b border-line text-xs text-haze">
                      <th scope="col" className="py-3 font-medium">Tratamiento</th>
                      <th scope="col" className="py-3 font-medium">Unidad</th>
                      <th scope="col" className="py-3 text-right font-medium">Desde</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-line">
                    {g.items.map((p) => (
                      <tr key={p.id}>
                        <td className="py-4">
                          <Link
                            href={`/servicios/${p.slug}`}
                            className="text-sm text-ink transition-colors hover:text-brand"
                          >
                            {p.nombre}
                          </Link>
                        </td>
                        <td className="py-4 text-sm text-mist">{p.unidad}</td>
                        <td className="py-4 text-right text-sm font-semibold text-ink">
                          {formatPrecio(p.precioDesde)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-panel border border-line bg-surface p-8">
          <h3 className="text-lg font-medium text-ink">Formas de pago y financiamiento</h3>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              "Meses sin intereses desde $3,000 con tarjetas participantes",
              "Planes de pago directos con la clínica en ortodoncia e implantes",
              "Facturación electrónica el mismo día",
              "Documentación completa para reembolso de aseguradoras",
            ].map((t) => (
              <li key={t} className="flex gap-3 text-sm text-graphite">
                <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ de precios */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Dudas de precios" titulo="Lo que preguntan sobre costos" />
        <Accordion items={faqPrecios} className="mt-10" />
      </section>
    </PageShell>
  );
}
