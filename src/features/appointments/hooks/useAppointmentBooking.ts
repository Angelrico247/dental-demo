"use client";

import { useCallback, useMemo, useState } from "react";
import { useStepper } from "./useStepper";
import { useAppointmentForm } from "./useAppointmentForm";
import { AppointmentErrors, CitaPrefill } from "../types/appointment.types";

const TOTAL_PASOS = 3;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function useAppointmentBooking() {
  const { step, direction, nextStep, prevStep, resetStepper } = useStepper(TOTAL_PASOS);
  const { draft, errors, setErrors, handleChange, resetForm } = useAppointmentForm();
  const [enviando, setEnviando] = useState(false);
  const [confirmada, setConfirmada] = useState(false);

  /** No se pueden agendar citas en el pasado */
  const minDate = useMemo(() => new Date().toISOString().split("T")[0], []);

  const validarPaso = useCallback(
    (paso: number): AppointmentErrors => {
      const e: AppointmentErrors = {};
      if (paso === 0 && !draft.servicioId) {
        e.servicioId = "Elige el tratamiento que te interesa.";
      }
      if (paso === 1) {
        if (!draft.fecha) e.fecha = "Elige una fecha.";
        else if (draft.fecha < minDate) e.fecha = "Esa fecha ya pasó.";
        if (!draft.hora) e.hora = "Elige un horario.";
      }
      if (paso === 2) {
        if (!draft.nombre.trim()) e.nombre = "Escribe tu nombre.";
        if (!EMAIL_RE.test(draft.email)) e.email = "Escribe un correo válido.";
        if (draft.telefono.replace(/\D/g, "").length !== 10) {
          e.telefono = "El teléfono debe tener 10 dígitos.";
        }
      }
      return e;
    },
    [draft, minDate]
  );

  const handleNext = useCallback(() => {
    const e = validarPaso(step);
    if (Object.keys(e).length > 0) {
      setErrors(e);
      return;
    }
    nextStep();
  }, [step, validarPaso, setErrors, nextStep]);

  const handleConfirm = useCallback(() => {
    const e = validarPaso(2);
    if (Object.keys(e).length > 0) {
      setErrors(e);
      return;
    }
    setEnviando(true);
    // Demo: no hay backend, simulamos el envio
    setTimeout(() => {
      setEnviando(false);
      setConfirmada(true);
    }, 1200);
  }, [validarPaso, setErrors]);

  const reset = useCallback(
    (prefill?: CitaPrefill) => {
      resetStepper();
      resetForm(prefill);
      setEnviando(false);
      setConfirmada(false);
    },
    [resetStepper, resetForm]
  );

  return {
    step,
    direction,
    totalPasos: TOTAL_PASOS,
    draft,
    errors,
    minDate,
    enviando,
    confirmada,
    handleChange,
    handleNext,
    prevStep,
    handleConfirm,
    reset,
  };
}
