import { Doctor } from "../types/clinic.types";

const HORARIO_ESTANDAR = [
  { dia: "Lunes", rango: "9:00 – 18:00" },
  { dia: "Martes", rango: "9:00 – 18:00" },
  { dia: "Miércoles", rango: "9:00 – 18:00" },
  { dia: "Jueves", rango: "12:00 – 20:00" },
  { dia: "Viernes", rango: "9:00 – 15:00" },
];

export const MOCK_DOCTORES: Doctor[] = [
  {
    id: "d1",
    slug: "valeria-cardenas",
    nombre: "Valeria Cárdenas",
    titulo: "Dra.",
    especialidad: "ortodoncia",
    especialidadLabel: "Ortodoncista · Invisalign Diamond Provider",
    cedula: "8842176",
    aniosExperiencia: 14,
    bio: "Lleva más de una década alineando sonrisas complejas y es la persona a la que acuden los casos que otros consultorios devuelven. Trabaja casi siempre con alineadores transparentes porque cree que nadie debería posponer su tratamiento por miedo a cómo se va a ver un año. Atiende adolescentes y adultos, y explica cada movimiento del plan con el simulador 3D antes de empezar.",
    formacion: [
      { institucion: "Universidad de Guadalajara", grado: "Cirujano Dentista", anio: 2009 },
      { institucion: "UNAM", grado: "Especialidad en Ortodoncia", anio: 2013 },
      { institucion: "Align Technology", grado: "Certificación Invisalign avanzada", anio: 2016 },
    ],
    certificaciones: [
      "Consejo Mexicano de Ortodoncia",
      "Invisalign Diamond Provider 2024",
      "Miembro de la Asociación Dental Mexicana",
    ],
    idiomas: ["Español", "Inglés"],
    foto: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1000",
    serviciosIds: ["s5", "s6"],
    horario: HORARIO_ESTANDAR,
    redes: { instagram: "https://instagram.com", linkedin: "https://linkedin.com" },
    destacado: true,
  },
  {
    id: "d2",
    slug: "emilio-navarro",
    nombre: "Emilio Navarro",
    titulo: "Dr.",
    especialidad: "implantologia",
    especialidadLabel: "Implantólogo · Cirugía oral",
    cedula: "7719034",
    aniosExperiencia: 18,
    bio: "Coloca implantes desde 2007 y ha resuelto rehabilitaciones completas en pacientes que llevaban años sin poder masticar bien. Planea cada cirugía con tomografía y guía quirúrgica, lo que reduce el tiempo en el sillón y la inflamación posterior. Es directo con los pronósticos: si un diente se puede salvar, no lo extrae.",
    formacion: [
      { institucion: "Universidad Autónoma de Guadalajara", grado: "Cirujano Dentista", anio: 2005 },
      { institucion: "Universidad de Barcelona", grado: "Máster en Implantología Oral", anio: 2009 },
    ],
    certificaciones: [
      "Diplomado en Cirugía Guiada, Nobel Biocare",
      "Miembro de la Academia Mexicana de Implantología",
    ],
    idiomas: ["Español", "Inglés", "Catalán"],
    foto: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1000",
    serviciosIds: ["s7", "s8"],
    horario: HORARIO_ESTANDAR,
    redes: { linkedin: "https://linkedin.com" },
    destacado: true,
  },
  {
    id: "d3",
    slug: "renata-ibarra",
    nombre: "Renata Ibarra",
    titulo: "Dra.",
    especialidad: "estetica-dental",
    especialidadLabel: "Estética dental · Diseño de sonrisa",
    cedula: "9014588",
    aniosExperiencia: 11,
    bio: "Diseña sonrisas partiendo de la cara, no del catálogo: mide proporciones, revisa cómo hablas y cómo sonríes en video antes de proponer nada. Trabaja carillas de mínimo desgaste y blanqueamientos supervisados. Su regla es que el resultado tiene que verse como tuyo, no como un trabajo dental.",
    formacion: [
      { institucion: "Universidad Anáhuac", grado: "Cirujano Dentista", anio: 2012 },
      { institucion: "Universidad de Nueva York (NYU)", grado: "Programa en Odontología Estética", anio: 2015 },
    ],
    certificaciones: [
      "Certificación en Diseño Digital de Sonrisa (DSD)",
      "Curso avanzado de carillas de porcelana, Sao Paulo",
    ],
    idiomas: ["Español", "Inglés"],
    foto: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?q=80&w=1000",
    serviciosIds: ["s3", "s4"],
    horario: HORARIO_ESTANDAR,
    redes: { instagram: "https://instagram.com" },
    destacado: true,
  },
  {
    id: "d4",
    slug: "sebastian-ruvalcaba",
    nombre: "Sebastián Ruvalcaba",
    titulo: "Dr.",
    especialidad: "endodoncia",
    especialidadLabel: "Endodoncista · Microscopía dental",
    cedula: "8203991",
    aniosExperiencia: 13,
    bio: "Hace endodoncias con microscopio, lo que le permite encontrar conductos que a simple vista se pasan por alto y salvar dientes que llegan con sentencia de extracción. La mayoría de sus tratamientos se resuelven en una sola cita. Si te da pánico el tema, es el indicado: trabaja con sedación consciente sin problema.",
    formacion: [
      { institucion: "Universidad de Guadalajara", grado: "Cirujano Dentista", anio: 2010 },
      { institucion: "Universidad Intercontinental", grado: "Especialidad en Endodoncia", anio: 2014 },
    ],
    certificaciones: [
      "Consejo Mexicano de Endodoncia",
      "Certificación en microscopía operatoria",
    ],
    idiomas: ["Español", "Inglés"],
    foto: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1000",
    serviciosIds: ["s9", "s10"],
    horario: HORARIO_ESTANDAR,
    redes: { linkedin: "https://linkedin.com" },
    destacado: true,
  },
  {
    id: "d5",
    slug: "ximena-ordonez",
    nombre: "Ximena Ordóñez",
    titulo: "Dra.",
    especialidad: "odontopediatria",
    especialidadLabel: "Odontopediatra · Manejo de conducta",
    cedula: "8955412",
    aniosExperiencia: 9,
    bio: "Atiende a niños desde el primer diente y tiene una paciencia notable para los que llegan llorando. Su primera cita casi nunca incluye tratamiento: es para que el niño conozca el consultorio y se suba al sillón por gusto. Trabaja mucho con padres primerizos explicando lo que sí importa y lo que es mito.",
    formacion: [
      { institucion: "Universidad Autónoma de Nuevo León", grado: "Cirujano Dentista", anio: 2014 },
      { institucion: "Universidad Tecnológica de México", grado: "Especialidad en Odontopediatría", anio: 2018 },
    ],
    certificaciones: [
      "Consejo Mexicano de Odontopediatría",
      "Certificación en manejo de conducta infantil",
    ],
    idiomas: ["Español", "Inglés"],
    foto: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000",
    serviciosIds: ["s11", "s12"],
    horario: HORARIO_ESTANDAR,
    redes: { instagram: "https://instagram.com", facebook: "https://facebook.com" },
    destacado: false,
  },
  {
    id: "d6",
    slug: "andres-villasenor",
    nombre: "Andrés Villaseñor",
    titulo: "Dr.",
    especialidad: "odontologia-general",
    especialidadLabel: "Odontología general · Periodoncia",
    cedula: "7488260",
    aniosExperiencia: 16,
    bio: "Es quien hace la valoración inicial de la mayoría de los pacientes y quien coordina con el resto del equipo cuando un caso necesita varias manos. Se dedica sobre todo a prevención y encías, la parte que nadie presume pero que sostiene todo lo demás. Directo, sin venderte tratamientos que no necesitas.",
    formacion: [
      { institucion: "Universidad de Guadalajara", grado: "Cirujano Dentista", anio: 2007 },
      { institucion: "Universidad Latinoamericana", grado: "Diplomado en Periodoncia", anio: 2011 },
    ],
    certificaciones: [
      "Miembro de la Asociación Dental Mexicana",
      "Actualización anual en periodoncia clínica",
    ],
    idiomas: ["Español"],
    foto: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=1000",
    serviciosIds: ["s1", "s2"],
    horario: HORARIO_ESTANDAR,
    redes: { linkedin: "https://linkedin.com" },
    destacado: false,
  },
];

export function getDoctorBySlug(slug: string): Doctor | undefined {
  return MOCK_DOCTORES.find((d) => d.slug === slug);
}

export function getDoctoresDestacados(limit = 4): Doctor[] {
  return MOCK_DOCTORES.filter((d) => d.destacado).slice(0, limit);
}

export function getDoctoresByIds(ids: string[]): Doctor[] {
  return MOCK_DOCTORES.filter((d) => ids.includes(d.id));
}

export function getDoctoresPorServicio(servicioId: string): Doctor[] {
  return MOCK_DOCTORES.filter((d) => d.serviciosIds.includes(servicioId));
}
