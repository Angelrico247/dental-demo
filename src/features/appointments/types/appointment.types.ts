export interface AppointmentDraft {
  servicioId: string;
  doctorId: string;
  fecha: string;
  hora: string;
  nombre: string;
  email: string;
  telefono: string;
  esPrimeraVisita: boolean;
  notas: string;
}

export type AppointmentErrors = Partial<Record<keyof AppointmentDraft, string>>;

/** Datos con los que se puede abrir el modal ya prellenado */
export interface CitaPrefill {
  servicioId?: string;
  doctorId?: string;
}
