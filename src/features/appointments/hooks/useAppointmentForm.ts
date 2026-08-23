"use client";

import { useCallback, useState } from "react";
import { AppointmentDraft, AppointmentErrors, CitaPrefill } from "../types/appointment.types";

const VACIO: AppointmentDraft = {
  servicioId: "",
  doctorId: "",
  fecha: "",
  hora: "",
  nombre: "",
  email: "",
  telefono: "",
  esPrimeraVisita: true,
  notas: "",
};

export function useAppointmentForm() {
  const [draft, setDraft] = useState<AppointmentDraft>(VACIO);
  const [errors, setErrors] = useState<AppointmentErrors>({});

  const handleChange = useCallback(
    <K extends keyof AppointmentDraft>(campo: K, valor: AppointmentDraft[K]) => {
      setDraft((d) => ({ ...d, [campo]: valor }));
      setErrors((e) => (e[campo] ? { ...e, [campo]: undefined } : e));
    },
    []
  );

  const resetForm = useCallback((prefill?: CitaPrefill) => {
    setDraft({ ...VACIO, ...prefill });
    setErrors({});
  }, []);

  return { draft, errors, setErrors, handleChange, resetForm };
}
