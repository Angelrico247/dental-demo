import { Testimonio } from "../types/clinic.types";

export const MOCK_TESTIMONIOS: Testimonio[] = [
  {
    id: "t1",
    nombre: "Mariana Estrada",
    tratamiento: "Ortodoncia invisible",
    calificacion: 5,
    texto:
      "Llevaba años diciendo que me iba a arreglar los dientes y siempre lo posponía por no traer brackets a los treinta y cuatro. Terminé en catorce meses y en el trabajo nadie se dio cuenta de que traía algo puesto.",
    foto: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400",
    fecha: "2026-04-18",
  },
  {
    id: "t2",
    nombre: "Jorge Beltrán",
    tratamiento: "Implante dental",
    calificacion: 5,
    texto:
      "Perdí una muela hace años y me habían dicho que no tenía hueso suficiente. Aquí me hicieron la tomografía, me explicaron el injerto con las imágenes en pantalla y salió sin complicaciones. Muerdo normal otra vez.",
    foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400",
    fecha: "2026-02-05",
  },
  {
    id: "t3",
    nombre: "Alejandra Ponce",
    tratamiento: "Primera visita infantil",
    calificacion: 5,
    texto:
      "Mi hija de cuatro años entró llorando y salió pidiendo volver. La doctora se sentó en el piso con ella un buen rato antes de siquiera acercarse al sillón. Eso no se compra.",
    foto: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400",
    fecha: "2026-05-22",
  },
  {
    id: "t4",
    nombre: "Ricardo Fuentes",
    tratamiento: "Endodoncia",
    calificacion: 5,
    texto:
      "Llegué un viernes con un dolor que no me dejaba dormir desde hacía tres días. Me atendieron ese mismo día y en una sola cita quedó. Honestamente esperaba mucho peor.",
    foto: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400",
    fecha: "2026-03-11",
  },
  {
    id: "t5",
    nombre: "Sofía Guerrero",
    tratamiento: "Carillas de porcelana",
    calificacion: 5,
    texto:
      "Lo que me convenció fue la prueba en boca antes de tallar nada. Vi exactamente cómo iba a quedar y pedí cambios dos veces. El resultado se ve mío, no de catálogo.",
    foto: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=400",
    fecha: "2026-01-29",
  },
  {
    id: "t6",
    nombre: "Daniel Ocampo",
    tratamiento: "Tratamiento de encías",
    calificacion: 4,
    texto:
      "Me sangraban las encías desde hacía años y lo tenía normalizado. El tratamiento fue incómodo dos días, no lo voy a negar, pero llevo ocho meses sin ver sangre en el lavabo.",
    foto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400",
    fecha: "2025-11-14",
  },
];

export function getTestimoniosDestacados(limit = 3): Testimonio[] {
  return MOCK_TESTIMONIOS.slice(0, limit);
}
