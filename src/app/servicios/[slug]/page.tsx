import { notFound } from "next/navigation";
import ServicioDetailClient from "../../../features/servicios/components/ServicioDetailClient";
import { MOCK_SERVICIOS, getServicioBySlug } from "../../../features/clinic/data/serviciosData";
import { formatPrecio } from "../../../features/clinic/data/formatters";

export function generateStaticParams() {
  return MOCK_SERVICIOS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const servicio = getServicioBySlug(slug);
  if (!servicio) return { title: "Tratamiento no encontrado | Dental Clinic" };
  return {
    title: `${servicio.nombre} | Dental Clinic Zapopan`,
    description: `${servicio.resumen} Desde ${formatPrecio(servicio.precioDesde)} en Zapopan, Jalisco.`,
  };
}

export default async function ServicioPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const servicio = getServicioBySlug(slug);
  if (!servicio) notFound();
  return <ServicioDetailClient servicio={servicio} />;
}
