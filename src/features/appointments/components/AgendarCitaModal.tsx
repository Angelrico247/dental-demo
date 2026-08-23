"use client";

import React from "react";
import { motion } from "framer-motion";
import { Modal } from "../../../components/ui/Modal/Modal";
import { Button } from "../../../components/ui/Button/Button";
import { IconCheck, IconClock, IconPin } from "../../../components/icons";
import { MOCK_SERVICIOS } from "../../clinic/data/serviciosData";
import { MOCK_DOCTORES } from "../../clinic/data/doctoresData";
import { CLINICA } from "../../clinic/data/clinicaData";
import { formatPrecioDesde } from "../../clinic/data/formatters";
import { useAppointmentBooking } from "../hooks/useAppointmentBooking";

const HORARIOS = ["09:00", "10:00", "11:00", "12:00", "16:00", "17:00", "18:00", "19:00"];

const TITULOS = ["Tratamiento", "Fecha y hora", "Tus datos"];

interface AgendarCitaModalProps {
  isOpen: boolean;
  onClose: () => void;
  booking: ReturnType<typeof useAppointmentBooking>;
}

const Campo: React.FC<{
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}> = ({ id, label, error, children }) => (
  <div>
    <label htmlFor={id} className="mb-2 block text-xs font-medium text-graphite">
      {label}
    </label>
    {children}
    {error && <p className="mt-1.5 text-xs text-brand">{error}</p>}
  </div>
);

const inputClases =
  "w-full rounded-tile border border-line bg-canvas px-4 py-3 text-sm text-ink placeholder:text-haze focus:border-brand focus:outline-none";

export const AgendarCitaModal: React.FC<AgendarCitaModalProps> = ({ isOpen, onClose, booking }) => {
  const {
    step,
    direction,
    totalPasos,
    draft,
    errors,
    minDate,
    enviando,
    confirmada,
    handleChange,
    handleNext,
    prevStep,
    handleConfirm,
  } = booking;

  const servicio = MOCK_SERVICIOS.find((s) => s.id === draft.servicioId);
  const doctor = MOCK_DOCTORES.find((d) => d.id === draft.doctorId);
  // Si ya eligio tratamiento, solo ofrecemos a quienes lo realizan
  const doctoresDisponibles = servicio
    ? MOCK_DOCTORES.filter((d) => servicio.doctoresIds.includes(d.id))
    : MOCK_DOCTORES;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      maxWidth="lg"
      titulo={confirmada ? "Cita solicitada" : `Agendar cita · ${TITULOS[step]}`}
    >
      {confirmada ? (
        <div className="px-6 py-12 text-center sm:px-8">
          <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-brand-soft text-brand">
            <IconCheck className="h-8 w-8" />
          </span>
          <h3 className="mt-6 text-2xl font-light text-ink">Listo, {draft.nombre.split(" ")[0]}</h3>
          <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-mist">
            Recibimos tu solicitud para el{" "}
            <strong className="font-medium text-ink">{draft.fecha}</strong> a las{" "}
            <strong className="font-medium text-ink">{draft.hora}</strong>. Te confirmamos por
            WhatsApp en menos de dos horas hábiles.
          </p>
          <div className="mx-auto mt-8 max-w-sm rounded-panel bg-canvas p-5 text-left text-sm">
            <p className="flex gap-3 text-graphite">
              <IconPin className="mt-0.5 h-4 w-4 shrink-0 text-haze" />
              {CLINICA.direccion.calle}, {CLINICA.direccion.colonia}, {CLINICA.direccion.ciudad}
            </p>
            <p className="mt-3 flex gap-3 text-graphite">
              <IconClock className="mt-0.5 h-4 w-4 shrink-0 text-haze" />
              Llega 10 minutos antes si es tu primera visita
            </p>
          </div>
          <Button variant="primary" size="md" onClick={onClose} className="mt-8">
            Cerrar
          </Button>
          <p className="mt-5 text-xs text-haze">
            Sitio demostrativo: no se envió ninguna solicitud real.
          </p>
        </div>
      ) : (
        <>
          {/* Indicador de progreso */}
          <div className="flex gap-1.5 px-6 pt-5 sm:px-8">
            {Array.from({ length: totalPasos }).map((_, i) => (
              <span
                key={i}
                className={`h-1 flex-1 rounded-full transition-colors ${
                  i <= step ? "bg-brand" : "bg-line"
                }`}
              />
            ))}
          </div>

          <div className="px-6 py-7 sm:px-8">
            {/* key={step} remonta el paso: el slide se reproduce sin depender de una salida
                pendiente, que es donde AnimatePresence mode="wait" se puede atascar */}
            <motion.div
              key={step}
              initial={{ opacity: 0, x: direction > 0 ? 40 : -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
                {step === 0 && (
                  <div className="space-y-6">
                    <Campo id="servicio" label="¿Qué te gustaría tratar?" error={errors.servicioId}>
                      <div id="servicio" className="flex flex-wrap gap-2">
                        {MOCK_SERVICIOS.map((s) => (
                          <button
                            key={s.id}
                            type="button"
                            onClick={() => {
                              handleChange("servicioId", s.id);
                              // Si el doctor elegido no realiza el nuevo tratamiento, lo limpiamos
                              if (draft.doctorId && !s.doctoresIds.includes(draft.doctorId)) {
                                handleChange("doctorId", "");
                              }
                            }}
                            aria-pressed={draft.servicioId === s.id}
                            className={`cursor-pointer rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
                              draft.servicioId === s.id
                                ? "border-brand bg-brand text-white"
                                : "border-line bg-surface text-graphite hover:border-haze"
                            }`}
                          >
                            {s.nombre}
                          </button>
                        ))}
                      </div>
                    </Campo>

                    {servicio && (
                      <p className="rounded-tile bg-canvas px-4 py-3 text-xs text-mist">
                        {servicio.resumen} · {formatPrecioDesde(servicio.precioDesde)}
                      </p>
                    )}

                    <Campo id="doctor" label="¿Con quién? (opcional)">
                      <div id="doctor" className="flex flex-wrap gap-2">
                        <button
                          type="button"
                          onClick={() => handleChange("doctorId", "")}
                          aria-pressed={!draft.doctorId}
                          className={`cursor-pointer rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
                            !draft.doctorId
                              ? "border-ink bg-ink text-white"
                              : "border-line bg-surface text-graphite hover:border-haze"
                          }`}
                        >
                          Sin preferencia
                        </button>
                        {doctoresDisponibles.map((d) => (
                          <button
                            key={d.id}
                            type="button"
                            onClick={() => handleChange("doctorId", d.id)}
                            aria-pressed={draft.doctorId === d.id}
                            className={`cursor-pointer rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
                              draft.doctorId === d.id
                                ? "border-ink bg-ink text-white"
                                : "border-line bg-surface text-graphite hover:border-haze"
                            }`}
                          >
                            {d.titulo} {d.nombre}
                          </button>
                        ))}
                      </div>
                    </Campo>
                  </div>
                )}

                {step === 1 && (
                  <div className="space-y-6">
                    <Campo id="fecha" label="Fecha" error={errors.fecha}>
                      <input
                        id="fecha"
                        type="date"
                        min={minDate}
                        value={draft.fecha}
                        onChange={(e) => handleChange("fecha", e.target.value)}
                        className={inputClases}
                      />
                    </Campo>

                    <Campo id="hora" label="Horario" error={errors.hora}>
                      <div id="hora" className="grid grid-cols-4 gap-2">
                        {HORARIOS.map((h) => (
                          <button
                            key={h}
                            type="button"
                            onClick={() => handleChange("hora", h)}
                            aria-pressed={draft.hora === h}
                            className={`cursor-pointer rounded-tile border py-2.5 text-sm font-medium transition-colors ${
                              draft.hora === h
                                ? "border-brand bg-brand text-white"
                                : "border-line bg-surface text-graphite hover:border-haze"
                            }`}
                          >
                            {h}
                          </button>
                        ))}
                      </div>
                    </Campo>

                    <p className="text-xs text-haze">
                      Los horarios mostrados son los que suele haber disponibles. Confirmamos por
                      WhatsApp antes de apartarlo.
                    </p>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-5">
                    <Campo id="nombre" label="Nombre completo" error={errors.nombre}>
                      <input
                        id="nombre"
                        type="text"
                        value={draft.nombre}
                        onChange={(e) => handleChange("nombre", e.target.value)}
                        placeholder="María Fernanda López"
                        className={inputClases}
                      />
                    </Campo>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <Campo id="email" label="Correo" error={errors.email}>
                        <input
                          id="email"
                          type="email"
                          value={draft.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          placeholder="tu@correo.com"
                          className={inputClases}
                        />
                      </Campo>
                      <Campo id="telefono" label="WhatsApp" error={errors.telefono}>
                        <input
                          id="telefono"
                          type="tel"
                          value={draft.telefono}
                          onChange={(e) => handleChange("telefono", e.target.value)}
                          placeholder="33 1234 5678"
                          className={inputClases}
                        />
                      </Campo>
                    </div>

                    <label className="flex cursor-pointer items-center gap-3 text-sm text-graphite">
                      <input
                        type="checkbox"
                        checked={draft.esPrimeraVisita}
                        onChange={(e) => handleChange("esPrimeraVisita", e.target.checked)}
                        className="h-4 w-4 cursor-pointer accent-[#3144d9]"
                      />
                      Es mi primera visita a la clínica
                    </label>

                    <Campo id="notas" label="Algo que debamos saber (opcional)">
                      <textarea
                        id="notas"
                        rows={3}
                        value={draft.notas}
                        onChange={(e) => handleChange("notas", e.target.value)}
                        placeholder="Dolor, ansiedad al dentista, tratamientos previos…"
                        className={`${inputClases} resize-none`}
                      />
                    </Campo>

                    {/* Resumen */}
                    <div className="rounded-panel bg-ink p-5 text-white">
                      <p className="text-eyebrow font-medium uppercase text-white/40">Resumen</p>
                      <dl className="mt-4 space-y-2.5 text-sm">
                        <div className="flex justify-between gap-4">
                          <dt className="text-white/50">Tratamiento</dt>
                          <dd className="text-right">{servicio?.nombre ?? "—"}</dd>
                        </div>
                        <div className="flex justify-between gap-4">
                          <dt className="text-white/50">Especialista</dt>
                          <dd className="text-right">
                            {doctor ? `${doctor.titulo} ${doctor.nombre}` : "Sin preferencia"}
                          </dd>
                        </div>
                        <div className="flex justify-between gap-4">
                          <dt className="text-white/50">Cita</dt>
                          <dd className="text-right">
                            {draft.fecha || "—"} · {draft.hora || "—"}
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                )}
            </motion.div>
          </div>

          {/* Navegacion */}
          <div className="flex shrink-0 items-center justify-between gap-3 border-t border-line px-6 py-5 sm:px-8">
            {step > 0 ? (
              <Button variant="ghost" size="md" onClick={prevStep}>
                Atrás
              </Button>
            ) : (
              <span className="text-xs text-haze">Paso {step + 1} de {totalPasos}</span>
            )}

            {step < totalPasos - 1 ? (
              <Button variant="primary" size="md" withArrow onClick={handleNext}>
                Continuar
              </Button>
            ) : (
              <Button
                variant="primary"
                size="md"
                withArrow
                onClick={handleConfirm}
                disabled={enviando}
              >
                {enviando ? "Enviando…" : "Confirmar cita"}
              </Button>
            )}
          </div>
        </>
      )}
    </Modal>
  );
};
