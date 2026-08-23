"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Navbar } from "../../../components/layout/Navbar/Navbar";
import { useIntroReady } from "../../../components/IntroLoader";
import { IconSparkle } from "../../../components/icons";
import { getCalificacionPromedio, RESENAS } from "../../clinic/data/clinicaData";
import { MOCK_TESTIMONIOS } from "../../clinic/data/testimoniosData";

const FOTO_HERO = "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=2000";

/* Pesado a la izquierda y desvaneciendo a la derecha, para que el rostro siga visible */
const GRADIENTE_DESKTOP =
  "linear-gradient(90deg, rgb(30 29 30 / 0.88) 0%, rgb(30 29 30 / 0.72) 28%, rgb(30 29 30 / 0.35) 58%, rgb(30 29 30 / 0.08) 100%), linear-gradient(0deg, rgb(30 29 30 / 0.45) 0%, transparent 45%)";

/* En movil el texto cae encima del rostro, asi que el gradiente va de arriba a abajo */
const GRADIENTE_MOVIL =
  "linear-gradient(180deg, rgb(30 29 30 / 0.80) 0%, rgb(30 29 30 / 0.55) 45%, rgb(30 29 30 / 0.85) 100%)";

const ETIQUETAS = ["Servicios", "Tecnología", "Equipo", "Sin dolor", "Doctores"];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

interface HeroSectionProps {
  onAgendar?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onAgendar }) => {
  const introReady = useIntroReady();
  const calificacion = getCalificacionPromedio();
  const avatares = MOCK_TESTIMONIOS.slice(0, 4);

  // El navbar del hero es glass y vive dentro de la tarjeta, asi que al pasarla no queda
  // ninguna navegacion a la vista: entra uno solido fijo.
  const [pasoElHero, setPasoElHero] = useState(false);
  useEffect(() => {
    const alScrollear = () => setPasoElHero(window.scrollY > 700);
    alScrollear();
    window.addEventListener("scroll", alScrollear, { passive: true });
    return () => window.removeEventListener("scroll", alScrollear);
  }, []);

  return (
    <section className="p-3 sm:p-5 lg:p-7">
      <AnimatePresence>
        {pasoElHero && (
          <motion.div
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-x-0 top-0 z-50"
          >
            <Navbar variant="solid" onAgendar={onAgendar} />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative min-h-[680px] overflow-hidden rounded-card bg-ink lg:min-h-[820px]">
        {/* Foto de fondo */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('${FOTO_HERO}')`,
            // Ampliamos y desplazamos para dejar el rostro a la derecha, libre del titular
            backgroundSize: "auto 135%",
            backgroundPosition: "22% 22%",
            backgroundRepeat: "no-repeat",
          }}
        />
        {/* Gradientes: uno por breakpoint */}
        <div
          className="absolute inset-0 hidden sm:block"
          style={{ backgroundImage: GRADIENTE_DESKTOP }}
        />
        <div
          className="absolute inset-0 sm:hidden"
          style={{ backgroundImage: GRADIENTE_MOVIL }}
        />

        <Navbar variant="glass" onAgendar={onAgendar} />

        <motion.div
          variants={container}
          initial="hidden"
          animate={introReady ? "visible" : "hidden"}
          className="relative flex min-h-[680px] flex-col justify-end px-6 pb-10 pt-32 sm:px-10 lg:min-h-[820px] lg:px-14 lg:pb-14"
        >
          {/* Kicker */}
          <motion.div variants={item} className="mb-6 flex items-start gap-3 text-white/70">
            <IconSparkle className="mt-0.5 h-4 w-4 shrink-0" />
            <p className="max-w-[22rem] text-sm leading-relaxed">
              Te invitamos a sentir orgullo por la estética de tu rostro.
            </p>
          </motion.div>

          {/* Titular */}
          <motion.h1
            variants={item}
            className="max-w-4xl text-hero font-light text-white"
          >
            Sonríe con brillo
            <br />
            Sonríe con confianza,
          </motion.h1>

          {/* Fila inferior: pills + parrafo a la izquierda, tarjeta glass a la derecha */}
          <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            <div className="max-w-xl">
              <motion.div variants={item} className="mb-6 flex flex-wrap gap-2">
                {ETIQUETAS.map((e) => (
                  <span
                    key={e}
                    className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-medium text-white/90 backdrop-blur-md transition-colors hover:bg-white/20"
                  >
                    {e}
                  </span>
                ))}
              </motion.div>

              <motion.p variants={item} className="text-sm leading-relaxed text-white/75">
                Odontología de especialistas en Zapopan, con diagnóstico digital desde la primera
                cita. <IconSparkle className="inline h-3.5 w-3.5 align-[-2px] text-white/50" />{" "}
                Presupuesto cerrado por escrito, protocolo sin dolor y un equipo distinto para cada
                tratamiento, porque tu sonrisa merece precisión y calma.
              </motion.p>
            </div>

            {/* Tarjeta glass de calificacion */}
            <motion.div
              variants={item}
              className="w-full shrink-0 rounded-panel border border-white/25 bg-white/10 p-6 shadow-lift backdrop-blur-xl lg:w-72"
            >
              <div className="flex items-start gap-1">
                <span className="text-5xl font-light leading-none text-white">{calificacion}</span>
                <IconSparkle className="mt-1 h-4 w-4 text-white/70" />
              </div>
              <div className="mt-5 flex items-center gap-3">
                <div className="flex -space-x-2.5">
                  {avatares.map((t) => (
                    <img
                      key={t.id}
                      src={t.foto}
                      alt=""
                      className="h-9 w-9 rounded-full border-2 border-white/40 object-cover"
                    />
                  ))}
                  <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-white/40 bg-white/20 text-xs font-medium text-white backdrop-blur">
                    +
                  </span>
                </div>
                <p className="text-xs leading-tight text-white/80">
                  Pacientes
                  <br />
                  felices
                </p>
              </div>
              <p className="mt-4 border-t border-white/15 pt-3 text-xs text-white/55">
                {RESENAS.total} reseñas verificadas
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
