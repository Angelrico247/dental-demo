"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "../../../components/ui/Button/Button";
import { IconSparkle } from "../../../components/icons";

const FOTO = "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1800";

const GRADIENTE =
  "linear-gradient(90deg, rgb(59 130 246 / 0.92) 0%, rgb(59 130 246 / 0.78) 40%, rgb(59 130 246 / 0.32) 100%)";

interface CtaBannerSectionProps {
  onAgendar?: () => void;
}

export const CtaBannerSection: React.FC<CtaBannerSectionProps> = ({ onAgendar }) => (
  <section className="px-3 py-10 sm:px-5 lg:px-7">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative overflow-hidden rounded-card bg-ink"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${FOTO}')` }}
      />
      <div className="absolute inset-0" style={{ backgroundImage: GRADIENTE }} />

      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-14 lg:py-24">
        <p className="mb-5 flex items-center gap-2 text-eyebrow font-medium uppercase text-white/60">
          <IconSparkle className="h-3 w-3" />
          Primera valoración sin costo
        </p>
        <h2 className="max-w-2xl text-display font-light text-white">
          Ven, revisamos tu boca y te decimos la verdad
        </h2>
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/70">
          Cuarenta y cinco minutos, escáner 3D y un plan por escrito con costos cerrados. Sin
          compromiso de agendar nada después.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Button
            variant="primary"
            size="lg"
            withArrow
            onClick={onAgendar}
            href={onAgendar ? undefined : "/contacto"}
          >
            Agendar valoración
          </Button>
          <Button variant="glass" size="lg" href="/servicios">
            Ver tratamientos
          </Button>
        </div>
      </div>
    </motion.div>
  </section>
);
