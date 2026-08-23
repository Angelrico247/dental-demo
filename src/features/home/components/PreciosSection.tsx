"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../../../components/ui/SectionHeading/SectionHeading";
import { Button } from "../../../components/ui/Button/Button";
import { IconCheck } from "../../../components/icons";
import { MOCK_PLANES } from "../../clinic/data/preciosData";
import { formatPrecio } from "../../clinic/data/formatters";

interface PreciosSectionProps {
  onAgendar?: () => void;
}

export const PreciosSection: React.FC<PreciosSectionProps> = ({ onAgendar }) => {
  const [anual, setAnual] = useState(false);

  return (
    <section id="precios" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Planes"
        titulo="Prevención con cuota mensual, sin letra chica"
        descripcion="Los planes cubren lo preventivo y te dan descuento en todo lo demás. También puedes pagar tratamiento por tratamiento."
        align="center"
      />

      {/* Toggle mensual / anual */}
      <div className="mt-10 flex justify-center">
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
            transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.12 }}
            className={`flex h-full flex-col rounded-card p-8 ${
              p.destacado
                ? "bg-brand text-white shadow-brand lg:-mt-4 lg:pb-12 lg:pt-12"
                : "border border-line bg-surface"
            }`}
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className={`text-lg font-medium ${p.destacado ? "text-white" : "text-ink"}`}>
                {p.nombre}
              </h3>
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
            {anual && (
              <p className={`mt-2 text-xs ${p.destacado ? "text-white/60" : "text-haze"}`}>
                Facturado anualmente
              </p>
            )}

            <ul className="mt-8 flex-1 space-y-3">
              {p.incluye.map((i) => (
                <li key={i} className="flex gap-3 text-sm">
                  <IconCheck
                    className={`mt-0.5 h-4 w-4 shrink-0 ${
                      p.destacado ? "text-white" : "text-brand"
                    }`}
                  />
                  <span className={p.destacado ? "text-white/85" : "text-graphite"}>{i}</span>
                </li>
              ))}
            </ul>

            <Button
              variant={p.destacado ? "outline" : "primary"}
              size="md"
              onClick={onAgendar}
              href={onAgendar ? undefined : "/contacto"}
              className="mt-8 w-full"
            >
              Empezar con {p.nombre}
            </Button>
          </motion.div>
        ))}
      </div>

      <p className="mt-10 text-center text-sm text-mist">
        ¿Prefieres pagar por tratamiento?{" "}
        <a href="/precios" className="font-medium text-brand hover:underline">
          Consulta la lista completa de precios
        </a>
      </p>
    </section>
  );
};
