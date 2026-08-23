"use client";

import React from "react";
import { motion } from "framer-motion";

const SELLOS = [
  "+12 años de experiencia",
  "+8,000 pacientes",
  "Escáner 3D y tomografía",
  "Certificación ADM",
  "Protocolo sin dolor",
];

export function TrustStripSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <motion.ul
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-mist"
      >
        {SELLOS.map((s, idx) => (
          <li key={s} className="flex items-center gap-3">
            {idx > 0 && <span className="h-1 w-1 rounded-full bg-haze" aria-hidden />}
            {s}
          </li>
        ))}
      </motion.ul>
    </section>
  );
}
