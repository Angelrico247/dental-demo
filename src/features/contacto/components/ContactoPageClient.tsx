"use client";

import React, { useState } from "react";
import { PageShell } from "../../../components/layout/PageShell/PageShell";
import { PageHeader } from "../../../components/layout/PageHeader/PageHeader";
import { Button } from "../../../components/ui/Button/Button";
import {
  IconCheck,
  IconClock,
  IconMail,
  IconPhone,
  IconPin,
  IconWhatsapp,
} from "../../../components/icons";
import { CLINICA } from "../../clinic/data/clinicaData";
import { MOCK_SERVICIOS } from "../../clinic/data/serviciosData";
import { useCita } from "../../appointments/components/CitaProvider";

interface FormState {
  nombre: string;
  email: string;
  telefono: string;
  servicioId: string;
  mensaje: string;
}

const VACIO: FormState = { nombre: "", email: "", telefono: "", servicioId: "", mensaje: "" };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const inputClases =
  "w-full rounded-tile border border-line bg-canvas px-4 py-3 text-sm text-ink placeholder:text-haze focus:border-brand focus:outline-none";

export default function ContactoPageClient() {
  const { abrirCita } = useCita();
  const [form, setForm] = useState<FormState>(VACIO);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const cambiar = <K extends keyof FormState>(campo: K, valor: FormState[K]) => {
    setForm((f) => ({ ...f, [campo]: valor }));
    setErrors((e) => (e[campo] ? { ...e, [campo]: undefined } : e));
  };

  const enviar = (e: React.FormEvent) => {
    e.preventDefault();
    const err: Partial<Record<keyof FormState, string>> = {};
    if (!form.nombre.trim()) err.nombre = "Escribe tu nombre.";
    if (!EMAIL_RE.test(form.email)) err.email = "Escribe un correo válido.";
    if (form.telefono.replace(/\D/g, "").length !== 10) err.telefono = "El teléfono debe tener 10 dígitos.";
    if (!form.mensaje.trim()) err.mensaje = "Cuéntanos en qué te ayudamos.";
    if (Object.keys(err).length > 0) {
      setErrors(err);
      return;
    }
    setEnviando(true);
    // Demo: no hay backend
    setTimeout(() => {
      setEnviando(false);
      setEnviado(true);
      setForm(VACIO);
    }, 1200);
  };

  const { direccion } = CLINICA;

  const contacto = [
    {
      icono: <IconPin className="h-4 w-4" />,
      titulo: "Dirección",
      lineas: [direccion.calle, `${direccion.colonia}, ${direccion.ciudad}, ${direccion.estado} ${direccion.cp}`],
    },
    {
      icono: <IconPhone className="h-4 w-4" />,
      titulo: "Teléfono",
      lineas: [CLINICA.telefono],
      href: `tel:+${CLINICA.whatsapp}`,
    },
    {
      icono: <IconMail className="h-4 w-4" />,
      titulo: "Correo",
      lineas: [CLINICA.email],
      href: `mailto:${CLINICA.email}`,
    },
  ];

  return (
    <PageShell>
      <PageHeader
        eyebrow="Contacto"
        titulo="Escríbenos y te contesta alguien del equipo"
        descripcion="Sin bots ni menús telefónicos. Si es urgente, WhatsApp es lo más rápido: reservamos espacios todos los días para dolor agudo y golpes."
        breadcrumb={[{ href: "/contacto", label: "Contacto" }]}
      />

      <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-16">
          {/* Formulario */}
          <div>
            {enviado ? (
              <div className="rounded-card border border-line bg-surface p-10 text-center">
                <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-brand-soft text-brand">
                  <IconCheck className="h-8 w-8" />
                </span>
                <h2 className="mt-6 text-2xl font-light text-ink">Mensaje recibido</h2>
                <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-mist">
                  Te contestamos en menos de dos horas hábiles. Si necesitas algo antes, escríbenos
                  por WhatsApp.
                </p>
                <Button variant="outline" size="md" onClick={() => setEnviado(false)} className="mt-8">
                  Enviar otro mensaje
                </Button>
                <p className="mt-5 text-xs text-haze">
                  Sitio demostrativo: no se envió ningún mensaje real.
                </p>
              </div>
            ) : (
              <form onSubmit={enviar} className="rounded-card border border-line bg-surface p-8 sm:p-10">
                <h2 className="text-xl font-medium text-ink">Cuéntanos qué necesitas</h2>

                <div className="mt-8 space-y-5">
                  <div>
                    <label htmlFor="c-nombre" className="mb-2 block text-xs font-medium text-graphite">
                      Nombre completo
                    </label>
                    <input
                      id="c-nombre"
                      type="text"
                      value={form.nombre}
                      onChange={(e) => cambiar("nombre", e.target.value)}
                      placeholder="María Fernanda López"
                      className={inputClases}
                    />
                    {errors.nombre && <p className="mt-1.5 text-xs text-brand">{errors.nombre}</p>}
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="c-email" className="mb-2 block text-xs font-medium text-graphite">
                        Correo
                      </label>
                      <input
                        id="c-email"
                        type="email"
                        value={form.email}
                        onChange={(e) => cambiar("email", e.target.value)}
                        placeholder="tu@correo.com"
                        className={inputClases}
                      />
                      {errors.email && <p className="mt-1.5 text-xs text-brand">{errors.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="c-tel" className="mb-2 block text-xs font-medium text-graphite">
                        WhatsApp
                      </label>
                      <input
                        id="c-tel"
                        type="tel"
                        value={form.telefono}
                        onChange={(e) => cambiar("telefono", e.target.value)}
                        placeholder="33 1234 5678"
                        className={inputClases}
                      />
                      {errors.telefono && <p className="mt-1.5 text-xs text-brand">{errors.telefono}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="c-servicio" className="mb-2 block text-xs font-medium text-graphite">
                      Tratamiento de interés (opcional)
                    </label>
                    <select
                      id="c-servicio"
                      value={form.servicioId}
                      onChange={(e) => cambiar("servicioId", e.target.value)}
                      className={`${inputClases} cursor-pointer`}
                    >
                      <option value="">Aún no lo sé</option>
                      {MOCK_SERVICIOS.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.nombre}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="c-mensaje" className="mb-2 block text-xs font-medium text-graphite">
                      Mensaje
                    </label>
                    <textarea
                      id="c-mensaje"
                      rows={5}
                      value={form.mensaje}
                      onChange={(e) => cambiar("mensaje", e.target.value)}
                      placeholder="Cuéntanos qué te pasa o qué te gustaría resolver…"
                      className={`${inputClases} resize-none`}
                    />
                    {errors.mensaje && <p className="mt-1.5 text-xs text-brand">{errors.mensaje}</p>}
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Button variant="primary" size="md" withArrow type="submit" disabled={enviando}>
                    {enviando ? "Enviando…" : "Enviar mensaje"}
                  </Button>
                  <Button variant="ghost" size="md" onClick={() => abrirCita()}>
                    O agenda directo
                  </Button>
                </div>
              </form>
            )}
          </div>

          {/* Datos + mapa */}
          <aside className="space-y-6">
            <div className="rounded-panel border border-line bg-surface p-7">
              <h2 className="text-base font-medium text-ink">Dónde estamos</h2>
              <ul className="mt-6 space-y-5">
                {contacto.map((c) => (
                  <li key={c.titulo} className="flex gap-4">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-soft text-brand">
                      {c.icono}
                    </span>
                    <div className="min-w-0">
                      <p className="text-eyebrow font-medium uppercase text-haze">{c.titulo}</p>
                      {c.lineas.map((l) =>
                        c.href ? (
                          <a
                            key={l}
                            href={c.href}
                            className="mt-1 block break-words text-sm text-graphite transition-colors hover:text-brand"
                          >
                            {l}
                          </a>
                        ) : (
                          <p key={l} className="mt-1 text-sm text-graphite">
                            {l}
                          </p>
                        )
                      )}
                    </div>
                  </li>
                ))}
                <li className="flex gap-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-soft text-brand">
                    <IconClock className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-eyebrow font-medium uppercase text-haze">Horarios</p>
                    {CLINICA.horarios.map((h) => (
                      <p key={h.dia} className="mt-1 text-sm text-graphite">
                        {h.dia}: {h.rango}
                      </p>
                    ))}
                  </div>
                </li>
              </ul>

              <Button
                variant="primary"
                size="md"
                withArrow
                href={`https://wa.me/${CLINICA.whatsapp}`}
                className="mt-7 w-full"
              >
                <IconWhatsapp className="h-4 w-4" />
                Escribir por WhatsApp
              </Button>
            </div>

            <div className="overflow-hidden rounded-panel border border-line">
              <iframe
                src={CLINICA.mapsEmbedUrl}
                title={`Ubicación de ${CLINICA.nombre}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-72 w-full border-0"
              />
            </div>

            <p className="rounded-panel bg-brand-soft p-5 text-sm leading-relaxed text-graphite">
              El edificio tiene estacionamiento con validación para pacientes. Entra por Av. Patria
              y sube al piso 3.
            </p>
          </aside>
        </div>
      </div>
    </PageShell>
  );
}
