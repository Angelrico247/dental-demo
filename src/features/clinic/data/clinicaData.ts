import { Estadistica, Sede, CategoriaServicio, Especialidad } from "../types/clinic.types";

export const CLINICA: Sede = {
  nombre: "Dental Clinic",
  eslogan: "Odontología moderna, sin miedo y sin prisas.",
  direccion: {
    calle: "Av. Patria 1950, piso 3",
    colonia: "Puerta de Hierro",
    ciudad: "Zapopan",
    estado: "Jalisco",
    cp: "45116",
  },
  telefono: "33 1204 8890",
  whatsapp: "523312048890",
  email: "hola@dentalclinic.mx",
  horarios: [
    { dia: "Lunes a viernes", rango: "9:00 – 20:00" },
    { dia: "Sábado", rango: "9:00 – 15:00" },
    { dia: "Domingo", rango: "Cerrado" },
  ],
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Av.%20Patria%201950,%20Puerta%20de%20Hierro,%20Zapopan,%20Jalisco&output=embed",
  redes: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    tiktok: "https://tiktok.com",
  },
};

/**
 * Distribución real de reseñas: de aquí sale el 4.9 que se muestra en el hero,
 * en vez de escribir el número a mano.
 */
export const RESENAS = {
  total: 824,
  distribucion: { 5: 742, 4: 68, 3: 9, 2: 2, 1: 3 } as Record<number, number>,
};

export function getCalificacionPromedio(): string {
  const entradas = Object.entries(RESENAS.distribucion);
  const total = entradas.reduce((acc, [, n]) => acc + n, 0);
  const puntos = entradas.reduce((acc, [estrellas, n]) => acc + Number(estrellas) * n, 0);
  return (puntos / total).toFixed(1);
}

export const MOCK_ESTADISTICAS: Estadistica[] = [
  { id: "e1", valor: "12", etiqueta: "Años cuidando sonrisas", sufijo: "+" },
  { id: "e2", valor: "8,000", etiqueta: "Pacientes atendidos", sufijo: "+" },
  { id: "e3", valor: getCalificacionPromedio(), etiqueta: "Calificación promedio" },
  { id: "e4", valor: "6", etiqueta: "Especialistas certificados" },
];

export const NAV_LINKS: { href: string; label: string }[] = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/doctores", label: "Doctores" },
  { href: "/servicios", label: "Servicios" },
  { href: "/precios", label: "Precios" },
];

export const NAV_MAS: { href: string; label: string }[] = [
  { href: "/contacto", label: "Contacto" },
  { href: "/#faq", label: "Preguntas frecuentes" },
];

export const CATEGORIAS_LABEL: Record<CategoriaServicio, string> = {
  preventiva: "Preventiva",
  estetica: "Estética dental",
  ortodoncia: "Ortodoncia",
  implantologia: "Implantología",
  endodoncia: "Endodoncia",
  odontopediatria: "Odontopediatría",
};

export const ESPECIALIDADES_LABEL: Record<Especialidad, string> = {
  "odontologia-general": "Odontología general",
  ortodoncia: "Ortodoncia",
  implantologia: "Implantología",
  endodoncia: "Endodoncia",
  periodoncia: "Periodoncia",
  odontopediatria: "Odontopediatría",
  "estetica-dental": "Estética dental",
};

export const BENEFICIOS_CLINICA: { titulo: string; texto: string }[] = [
  {
    titulo: "Diagnóstico digital en la primera cita",
    texto:
      "Escáner intraoral 3D y radiografía panorámica el mismo día. Ves tu boca en pantalla antes de decidir nada.",
  },
  {
    titulo: "Protocolo sin dolor",
    texto:
      "Anestesia computarizada, sedación consciente opcional y consultas largas. Aquí nadie te apura.",
  },
  {
    titulo: "Presupuesto cerrado por escrito",
    texto:
      "Te entregamos el plan completo con costos antes de empezar. Sin cargos sorpresa a mitad del tratamiento.",
  },
  {
    titulo: "Un especialista para cada cosa",
    texto:
      "No hacemos de todo con un solo doctor: ortodoncia, implantes, endodoncia y niños tienen su propio equipo.",
  },
];

export const PASOS_PROCESO: { titulo: string; texto: string }[] = [
  {
    titulo: "Valoración",
    texto: "45 minutos de revisión, escáner 3D y fotografías. Sin costo si es tu primera visita.",
  },
  {
    titulo: "Plan de tratamiento",
    texto: "Te explicamos opciones, tiempos y costos con imágenes de tu propia boca.",
  },
  {
    titulo: "Tratamiento",
    texto: "Citas puntuales, tiempos realistas y control del dolor en cada sesión.",
  },
  {
    titulo: "Seguimiento",
    texto: "Revisiones de control incluidas y recordatorios de limpieza cada seis meses.",
  },
];

export const TECNOLOGIA: { nombre: string; texto: string; imagen: string }[] = [
  {
    nombre: "Escáner intraoral 3D",
    texto: "Impresiones digitales en minutos. Se acabaron las pastas que dan náuseas.",
    imagen: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1400",
  },
  {
    nombre: "Tomografía de haz cónico",
    texto: "Vemos hueso y nervio en tres dimensiones antes de colocar un implante.",
    imagen: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=1400",
  },
  {
    nombre: "Diseño digital de sonrisa",
    texto: "Simulamos el resultado en pantalla para que lo apruebes antes de tocar un diente.",
    imagen: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1400",
  },
];
