export type CategoriaServicio =
  | "preventiva"
  | "estetica"
  | "ortodoncia"
  | "implantologia"
  | "endodoncia"
  | "odontopediatria";

export type Especialidad =
  | "odontologia-general"
  | "ortodoncia"
  | "implantologia"
  | "endodoncia"
  | "periodoncia"
  | "odontopediatria"
  | "estetica-dental";

export interface FaqItem {
  id: string;
  pregunta: string;
  respuesta: string;
  categoria?: "general" | "precios" | "tratamientos" | "citas";
}

export interface Servicio {
  id: string;
  slug: string;
  nombre: string;
  categoria: CategoriaServicio;
  /** Una linea, para tarjetas */
  resumen: string;
  /** Dos o tres parrafos, para la pagina de detalle */
  descripcion: string;
  beneficios: string[];
  pasos: { titulo: string; detalle: string }[];
  incluye: string[];
  duracionMinutos: number;
  sesiones: number;
  /** MXN */
  precioDesde: number;
  imagenes: string[];
  /** Clave del mapa de iconos inline */
  icono: string;
  destacado: boolean;
  doctoresIds: string[];
  faq: FaqItem[];
}

export interface Doctor {
  id: string;
  slug: string;
  nombre: string;
  /** "Dra." | "Dr." */
  titulo: string;
  especialidad: Especialidad;
  /** Etiqueta larga, p. ej. "Ortodoncista · Invisalign Provider" */
  especialidadLabel: string;
  cedula: string;
  aniosExperiencia: number;
  bio: string;
  formacion: { institucion: string; grado: string; anio: number }[];
  certificaciones: string[];
  idiomas: string[];
  foto: string;
  serviciosIds: string[];
  horario: { dia: string; rango: string }[];
  redes: { instagram?: string; linkedin?: string; facebook?: string };
  destacado: boolean;
}

export interface PlanPrecio {
  id: string;
  nombre: string;
  descripcion: string;
  /** MXN */
  precioMensual: number;
  /** MXN, equivalente mensual pagando un ano por adelantado */
  precioAnual: number;
  incluye: string[];
  noIncluye?: string[];
  destacado: boolean;
  badge?: string;
}

export interface Testimonio {
  id: string;
  nombre: string;
  tratamiento: string;
  calificacion: number;
  texto: string;
  foto: string;
  /** ISO */
  fecha: string;
}

export interface Estadistica {
  id: string;
  valor: string;
  etiqueta: string;
  sufijo?: string;
}

export interface Sede {
  nombre: string;
  eslogan: string;
  direccion: {
    calle: string;
    colonia: string;
    ciudad: string;
    estado: string;
    cp: string;
  };
  telefono: string;
  /** Solo digitos, para wa.me */
  whatsapp: string;
  email: string;
  horarios: { dia: string; rango: string }[];
  mapsEmbedUrl: string;
  redes: { instagram: string; facebook: string; tiktok?: string };
}
