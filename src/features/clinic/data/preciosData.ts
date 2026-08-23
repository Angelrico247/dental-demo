import { CategoriaServicio, PlanPrecio } from "../types/clinic.types";
import { MOCK_SERVICIOS } from "./serviciosData";

export const MOCK_PLANES: PlanPrecio[] = [
  {
    id: "p1",
    nombre: "Esencial",
    descripcion: "Lo mínimo para no llegar tarde a ningún problema.",
    precioMensual: 349,
    precioAnual: 279,
    incluye: [
      "Dos limpiezas al año",
      "Revisión semestral con radiografías",
      "Aplicación de flúor",
      "10% de descuento en tratamientos",
      "Urgencias con prioridad de agenda",
    ],
    noIncluye: ["Ortodoncia", "Implantes", "Estética dental"],
    destacado: false,
  },
  {
    id: "p2",
    nombre: "Familiar",
    descripcion: "Para dos adultos y hasta dos menores de edad.",
    precioMensual: 749,
    precioAnual: 599,
    incluye: [
      "Todo lo del plan Esencial, para cuatro personas",
      "Selladores y flúor para los menores",
      "Dos resinas al año sin costo por persona",
      "15% de descuento en tratamientos",
      "Valoración de ortodoncia sin costo",
      "Urgencias el mismo día",
    ],
    destacado: true,
    badge: "Más elegido",
  },
  {
    id: "p3",
    nombre: "Premium",
    descripcion: "Cobertura amplia para quien ya trae tratamientos en curso.",
    precioMensual: 1290,
    precioAnual: 1032,
    incluye: [
      "Todo lo del plan Familiar",
      "Cuatro limpiezas al año",
      "Blanqueamiento anual incluido",
      "25% de descuento en ortodoncia e implantes",
      "Guarda oclusal incluida",
      "Urgencias el mismo día, también en sábado",
    ],
    destacado: false,
  },
];

export interface PrecioTratamiento {
  id: string;
  nombre: string;
  categoria: CategoriaServicio;
  slug: string;
  precioDesde: number;
  unidad: string;
}

/** Tabla plana derivada de los servicios: una sola fuente de verdad para los precios. */
const UNIDADES: Record<string, string> = {
  s4: "por diente",
  s5: "por arcada",
  s6: "por arcada",
  s7: "por pieza",
  s8: "por arcada",
  s12: "por molar",
};

export const MOCK_PRECIOS_TRATAMIENTOS: PrecioTratamiento[] = MOCK_SERVICIOS.map((s) => ({
  id: s.id,
  nombre: s.nombre,
  categoria: s.categoria,
  slug: s.slug,
  precioDesde: s.precioDesde,
  unidad: UNIDADES[s.id] ?? "por sesión",
}));

export function getPreciosPorCategoria(): { categoria: CategoriaServicio; items: PrecioTratamiento[] }[] {
  const categorias: CategoriaServicio[] = [
    "preventiva",
    "estetica",
    "ortodoncia",
    "implantologia",
    "endodoncia",
    "odontopediatria",
  ];
  return categorias.map((categoria) => ({
    categoria,
    items: MOCK_PRECIOS_TRATAMIENTOS.filter((p) => p.categoria === categoria),
  }));
}
