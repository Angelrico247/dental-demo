"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../../../components/ui/SectionHeading/SectionHeading";
import { Button } from "../../../components/ui/Button/Button";
import { Accordion } from "../../../components/ui/Accordion/Accordion";
import { getFaqDestacadas } from "../../clinic/data/faqData";
import { CLINICA } from "../../clinic/data/clinicaData";

export function FaqSection() {
  const faq = getFaqDestacadas(6);

  return (
    <section id="faq" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <SectionHeading eyebrow="Dudas frecuentes" titulo="Lo que casi todos preguntan" />
          <p className="mt-6 text-sm leading-relaxed text-mist">
            ¿Tienes otra duda? Escríbenos por WhatsApp y te contesta alguien del equipo, no un bot.
          </p>
          <Button
            variant="outline"
            size="md"
            withArrow
            href={`https://wa.me/${CLINICA.whatsapp}`}
            className="mt-6"
          >
            Escribir por WhatsApp
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.12 }}
        >
          <Accordion items={faq} />
        </motion.div>
      </div>
    </section>
  );
}
