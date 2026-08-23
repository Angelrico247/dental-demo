"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionHeading } from "../../../components/ui/SectionHeading/SectionHeading";
import { Button } from "../../../components/ui/Button/Button";
import { IconArrowUpRight } from "../../../components/icons";
import { getDoctoresDestacados } from "../../clinic/data/doctoresData";

export function DoctoresSection() {
  const doctores = getDoctoresDestacados(4);

  return (
    <section id="doctores" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="El equipo"
        titulo="Un especialista para cada tratamiento"
        descripcion="Seis especialistas certificados. Nadie hace de todo, y por eso cada caso lo lleva quien realmente sabe."
        accion={
          <Button variant="outline" size="md" href="/doctores" withArrow>
            Conocer al equipo
          </Button>
        }
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {doctores.map((d, idx) => (
          <motion.div
            key={d.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.12 }}
          >
            <Link href={`/doctores/${d.slug}`} className="group block">
              <div className="relative overflow-hidden rounded-panel bg-canvas">
                <img
                  src={d.foto}
                  alt={`${d.titulo} ${d.nombre}`}
                  className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Barra glass que aparece al hover */}
                <div className="absolute inset-x-3 bottom-3 flex translate-y-3 items-center justify-between rounded-tile border border-white/25 bg-white/15 px-4 py-3 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="text-xs font-medium">Ver perfil</span>
                  <IconArrowUpRight className="h-4 w-4" />
                </div>
              </div>
              <h3 className="mt-5 text-base font-semibold text-ink">
                {d.titulo} {d.nombre}
              </h3>
              <p className="mt-1 text-sm text-mist">{d.especialidadLabel}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
