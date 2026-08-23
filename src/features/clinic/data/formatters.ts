const mxn = new Intl.NumberFormat("es-MX", {
  style: "currency",
  currency: "MXN",
  maximumFractionDigits: 0,
});

export function formatPrecio(monto: number): string {
  return mxn.format(monto);
}

export function formatPrecioDesde(monto: number): string {
  return `desde ${mxn.format(monto)}`;
}

export function formatDuracion(minutos: number): string {
  if (minutos < 60) return `${minutos} min`;
  const horas = Math.floor(minutos / 60);
  const resto = minutos % 60;
  return resto === 0 ? `${horas} h` : `${horas} h ${resto} min`;
}

export function formatFecha(iso: string): string {
  return new Date(iso).toLocaleDateString("es-MX", {
    month: "long",
    year: "numeric",
  });
}

export function formatSesiones(sesiones: number): string {
  return sesiones === 1 ? "1 sesión" : `${sesiones} sesiones`;
}
