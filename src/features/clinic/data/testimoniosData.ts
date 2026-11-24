import { Testimonio } from "../types/clinic.types";

export const MOCK_TESTIMONIOS: Testimonio[] = [
  {
    id: "t1",
    nombre: "Nombre Apellido",
    tratamiento: "Lorem ipsum",
    calificacion: 5,
    texto:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    foto: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400",
    fecha: "2026-04-18",
  },
  {
    id: "t2",
    nombre: "Nombre Apellido",
    tratamiento: "Lorem ipsum",
    calificacion: 5,
    texto:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400",
    fecha: "2026-02-05",
  },
  {
    id: "t3",
    nombre: "Nombre Apellido",
    tratamiento: "Lorem ipsum",
    calificacion: 5,
    texto:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    foto: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400",
    fecha: "2026-05-22",
  },
  {
    id: "t4",
    nombre: "Nombre Apellido",
    tratamiento: "Lorem ipsum",
    calificacion: 5,
    texto:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    foto: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400",
    fecha: "2026-03-11",
  },
  {
    id: "t5",
    nombre: "Nombre Apellido",
    tratamiento: "Lorem ipsum",
    calificacion: 5,
    texto:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    foto: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=400",
    fecha: "2026-01-29",
  },
  {
    id: "t6",
    nombre: "Nombre Apellido",
    tratamiento: "Lorem ipsum",
    calificacion: 4,
    texto:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    foto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400",
    fecha: "2025-11-14",
  },
];

export function getTestimoniosDestacados(limit = 3): Testimonio[] {
  return MOCK_TESTIMONIOS.slice(0, limit);
}
