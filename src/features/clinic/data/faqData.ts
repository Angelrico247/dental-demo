import { FaqItem } from "../types/clinic.types";

export const MOCK_FAQ: FaqItem[] = [
  {
    id: "f1",
    pregunta: "¿La primera valoración tiene costo?",
    respuesta:
      "No. La primera valoración incluye revisión completa, escáner 3D y plan de tratamiento por escrito, sin costo y sin compromiso de agendar nada después.",
    categoria: "citas",
  },
  {
    id: "f2",
    pregunta: "Me da mucho miedo el dentista. ¿Qué hacen en esos casos?",
    respuesta:
      "Es más común de lo que crees y lo tomamos en serio. Trabajamos con anestesia computarizada, que elimina el ardor del piquete, y ofrecemos sedación consciente para quien la necesita. Además agendamos citas más largas para no tener que apurarte.",
    categoria: "general",
  },
  {
    id: "f3",
    pregunta: "¿Manejan facilidades de pago?",
    respuesta:
      "Sí. Meses sin intereses con tarjetas participantes a partir de $3,000, y planes de pago directos con la clínica para ortodoncia e implantes.",
    categoria: "precios",
  },
  {
    id: "f4",
    pregunta: "¿Trabajan con aseguradoras?",
    respuesta:
      "Somos proveedores de las principales aseguradoras de gastos médicos con cobertura dental. Te entregamos toda la documentación para el reembolso aunque tu póliza no sea de red directa.",
    categoria: "precios",
  },
  {
    id: "f5",
    pregunta: "¿Atienden urgencias?",
    respuesta:
      "Reservamos espacios todos los días para dolor agudo, golpes y piezas fracturadas. Escríbenos por WhatsApp y te confirmamos horario el mismo día.",
    categoria: "citas",
  },
  {
    id: "f6",
    pregunta: "¿El presupuesto puede cambiar a mitad del tratamiento?",
    respuesta:
      "No. El presupuesto que firmas es cerrado. Si en el camino aparece algo que no era visible en el diagnóstico, te lo consultamos y decides antes de que se haga cualquier cosa.",
    categoria: "precios",
  },
  {
    id: "f7",
    pregunta: "¿Cada cuánto debo hacerme una limpieza?",
    respuesta:
      "Cada seis meses para la mayoría de las personas. Si fumas, usas ortodoncia o tienes tendencia a formar sarro, cada cuatro meses.",
    categoria: "tratamientos",
  },
  {
    id: "f8",
    pregunta: "¿Puedo ir con mis hijos a la misma cita?",
    respuesta:
      "Sí, y de hecho lo recomendamos: agendamos consecutivo para que no vengan dos veces. Tenemos una odontopediatra de tiempo completo.",
    categoria: "citas",
  },
  {
    id: "f9",
    pregunta: "¿Cuánto tarda una ortodoncia?",
    respuesta:
      "Entre 8 y 18 meses con alineadores y entre 18 y 24 con brackets, dependiendo del caso. En la valoración te damos el rango real del tuyo, no un promedio.",
    categoria: "tratamientos",
  },
  {
    id: "f10",
    pregunta: "¿Dónde están y hay estacionamiento?",
    respuesta:
      "En Av. Patria 1950, piso 3, en Puerta de Hierro, Zapopan. El edificio tiene estacionamiento con validación para pacientes.",
    categoria: "general",
  },
];

export function getFaqPorCategoria(categoria: FaqItem["categoria"]): FaqItem[] {
  if (!categoria) return MOCK_FAQ;
  return MOCK_FAQ.filter((f) => f.categoria === categoria);
}

export function getFaqDestacadas(limit = 6): FaqItem[] {
  return MOCK_FAQ.slice(0, limit);
}
