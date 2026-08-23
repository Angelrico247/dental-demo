import { notFound } from "next/navigation";
import DoctorDetailClient from "../../../features/doctores/components/DoctorDetailClient";
import { MOCK_DOCTORES, getDoctorBySlug } from "../../../features/clinic/data/doctoresData";

export function generateStaticParams() {
  return MOCK_DOCTORES.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doctor = getDoctorBySlug(slug);
  if (!doctor) return { title: "Doctor no encontrado | Dental Clinic" };
  return {
    title: `${doctor.titulo} ${doctor.nombre} | Dental Clinic Zapopan`,
    description: `${doctor.especialidadLabel}. ${doctor.aniosExperiencia} años de experiencia en Zapopan, Jalisco.`,
  };
}

export default async function DoctorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doctor = getDoctorBySlug(slug);
  if (!doctor) notFound();
  return <DoctorDetailClient doctor={doctor} />;
}
