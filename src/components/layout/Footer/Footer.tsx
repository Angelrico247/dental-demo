"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CLINICA, NAV_LINKS, NAV_MAS } from "../../../features/clinic/data/clinicaData";
import { MOCK_SERVICIOS } from "../../../features/clinic/data/serviciosData";
import {
  IconArrowUpRight,
  IconClock,
  IconMail,
  IconPhone,
  IconPin,
  IconTooth,
} from "../../icons";

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [suscrito, setSuscrito] = useState(false);
  const servicios = MOCK_SERVICIOS.filter((s) => s.destacado).slice(0, 5);
  const { direccion } = CLINICA;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setSuscrito(true);
    setEmail("");
  };

  return (
    <footer className="px-3 pb-3 sm:px-5 sm:pb-5 lg:px-7 lg:pb-7">
      <div className="rounded-card bg-ink px-6 py-16 text-white sm:px-10 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
            {/* Marca + newsletter */}
            <div>
              <div className="flex items-center gap-2.5">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-brand">
                  <IconTooth className="h-5 w-5" />
                </span>
                <span className="text-base font-medium tracking-tight">{CLINICA.nombre}</span>
              </div>
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/55">
                {CLINICA.eslogan} Especialistas certificados en {direccion.colonia},{" "}
                {direccion.ciudad}.
              </p>

              <form onSubmit={handleSubmit} className="mt-7">
                <label htmlFor="footer-email" className="text-eyebrow font-medium uppercase text-white/40">
                  Consejos de salud dental
                </label>
                <div className="mt-3 flex items-center gap-2 rounded-full border border-white/15 bg-white/5 p-1.5">
                  <input
                    id="footer-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@correo.com"
                    className="min-w-0 flex-1 bg-transparent px-4 py-2 text-sm text-white placeholder:text-white/35 focus:outline-none"
                  />
                  <button
                    type="submit"
                    aria-label="Suscribirse al boletín"
                    className="grid h-9 w-9 shrink-0 cursor-pointer place-items-center rounded-full bg-brand text-white transition-colors hover:bg-brand-hover"
                  >
                    <IconArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
                {suscrito && (
                  <p className="mt-3 text-xs text-brand-soft">Listo, te escribimos pronto.</p>
                )}
              </form>
            </div>

            {/* Navegacion */}
            <nav>
              <h3 className="text-eyebrow font-medium uppercase text-white/40">Navegación</h3>
              <ul className="mt-5 space-y-3">
                {[...NAV_LINKS, ...NAV_MAS].map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-white/65 transition-colors hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Servicios */}
            <nav>
              <h3 className="text-eyebrow font-medium uppercase text-white/40">Tratamientos</h3>
              <ul className="mt-5 space-y-3">
                {servicios.map((s) => (
                  <li key={s.id}>
                    <Link
                      href={`/servicios/${s.slug}`}
                      className="text-sm text-white/65 transition-colors hover:text-white"
                    >
                      {s.nombre}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Contacto */}
            <div>
              <h3 className="text-eyebrow font-medium uppercase text-white/40">Contacto</h3>
              <ul className="mt-5 space-y-4 text-sm text-white/65">
                <li className="flex gap-3">
                  <IconPin className="mt-0.5 h-4 w-4 shrink-0 text-white/35" />
                  <span>
                    {direccion.calle}
                    <br />
                    {direccion.colonia}, {direccion.ciudad}, {direccion.estado} {direccion.cp}
                  </span>
                </li>
                <li className="flex gap-3">
                  <IconPhone className="mt-0.5 h-4 w-4 shrink-0 text-white/35" />
                  <a href={`tel:+${CLINICA.whatsapp}`} className="transition-colors hover:text-white">
                    {CLINICA.telefono}
                  </a>
                </li>
                <li className="flex gap-3">
                  <IconMail className="mt-0.5 h-4 w-4 shrink-0 text-white/35" />
                  <a href={`mailto:${CLINICA.email}`} className="transition-colors hover:text-white">
                    {CLINICA.email}
                  </a>
                </li>
                <li className="flex gap-3">
                  <IconClock className="mt-0.5 h-4 w-4 shrink-0 text-white/35" />
                  <span>
                    {CLINICA.horarios.map((h) => (
                      <span key={h.dia} className="block">
                        {h.dia}: {h.rango}
                      </span>
                    ))}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-white/35">
              © {new Date().getFullYear()} {CLINICA.nombre}. Sitio demostrativo: la clínica, los
              doctores, los precios y los testimonios son ficticios.
            </p>
            <div className="flex gap-4 text-xs text-white/45">
              <a href={CLINICA.redes.instagram} className="transition-colors hover:text-white">
                Instagram
              </a>
              <a href={CLINICA.redes.facebook} className="transition-colors hover:text-white">
                Facebook
              </a>
              {CLINICA.redes.tiktok && (
                <a href={CLINICA.redes.tiktok} className="transition-colors hover:text-white">
                  TikTok
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
