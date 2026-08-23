"use client";

import React, { createContext, useCallback, useContext, useState } from "react";
import { AgendarCitaModal } from "./AgendarCitaModal";
import { useAppointmentBooking } from "../hooks/useAppointmentBooking";
import { CitaPrefill } from "../types/appointment.types";

interface CitaContextValue {
  abrirCita: (prefill?: CitaPrefill) => void;
  cerrarCita: () => void;
}

const CitaContext = createContext<CitaContextValue>({
  abrirCita: () => {},
  cerrarCita: () => {},
});

/** El CTA de agendar aparece en muchos lugares: el modal se monta una sola vez aqui. */
export function useCita(): CitaContextValue {
  return useContext(CitaContext);
}

export function CitaProvider({ children }: { children: React.ReactNode }) {
  const [abierto, setAbierto] = useState(false);
  const booking = useAppointmentBooking();
  const { reset } = booking;

  const abrirCita = useCallback(
    (prefill?: CitaPrefill) => {
      reset(prefill);
      setAbierto(true);
    },
    [reset]
  );

  const cerrarCita = useCallback(() => setAbierto(false), []);

  return (
    <CitaContext.Provider value={{ abrirCita, cerrarCita }}>
      {children}
      <AgendarCitaModal isOpen={abierto} onClose={cerrarCita} booking={booking} />
    </CitaContext.Provider>
  );
}
