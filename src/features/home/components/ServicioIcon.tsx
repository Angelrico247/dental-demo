import React from "react";

/* Iconos propios de cada tratamiento: viven aqui porque no se usan en ningun otro lado */
const base = {
  fill: "none" as const,
  viewBox: "0 0 24 24",
  stroke: "currentColor" as const,
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const TRAZOS: Record<string, React.ReactNode> = {
  limpieza: (
    <>
      <path d="M9 3v6M15 3v6M7 9h10l-1 8a3 3 0 0 1-3 2.6h-2A3 3 0 0 1 8 17z" />
      <path d="M12 13v3" />
    </>
  ),
  encias: (
    <>
      <path d="M4 10c0-3 3.5-5 8-5s8 2 8 5c0 4-2.5 9-4.5 9S13 15 12 15s-1.5 4-3.5 4S4 14 4 10z" />
      <path d="M9 9h6" />
    </>
  ),
  blanqueamiento: (
    <>
      <path d="M12 4c-1.4-1-3-1.5-4.2-1.1C6.2 3.4 5.5 4.8 5.5 6.8c0 3.4 1.3 6.6 1.9 9.8.3 1.4.7 2.4 1.5 2.4 1 0 1.2-1.3 1.5-2.6.3-1.3.6-2.6 1.6-2.6s1.3 1.3 1.6 2.6c.3 1.3.5 2.6 1.5 2.6.8 0 1.2-1 1.5-2.4.6-3.2 1.9-6.4 1.9-9.8 0-2-.7-3.4-2.3-3.9C15 2.5 13.4 3 12 4z" />
      <path d="M19.5 3.5l.7 1.6 1.6.7-1.6.7-.7 1.6-.7-1.6-1.6-.7 1.6-.7z" fill="currentColor" stroke="none" />
    </>
  ),
  carillas: (
    <>
      <rect x="4" y="5" width="6" height="14" rx="2" />
      <rect x="14" y="5" width="6" height="14" rx="2" />
      <path d="M7 9v3M17 9v3" />
    </>
  ),
  alineador: (
    <>
      <path d="M4 9c0-2.5 3.5-4 8-4s8 1.5 8 4c0 3.5-2 8-4 8-1.5 0-2-2-4-2s-2.5 2-4 2c-2 0-4-4.5-4-8z" />
      <path d="M8 9h8" />
    </>
  ),
  brackets: (
    <>
      <path d="M3 12h18" />
      <rect x="5" y="9.5" width="4" height="5" rx="1" />
      <rect x="15" y="9.5" width="4" height="5" rx="1" />
      <path d="M11 9.5v5" />
    </>
  ),
  implante: (
    <>
      <path d="M12 3c2 0 3.5 1.5 3.5 3.5S14 10 12 10 8.5 8.5 8.5 6.5 10 3 12 3z" />
      <path d="M12 10v11M9.5 13h5M9.5 16h5M10.5 19h3" />
    </>
  ),
  arcada: (
    <>
      <path d="M3 8c0-1.5 4-3 9-3s9 1.5 9 3c0 5-3 11-5 11s-2-4-4-4-2 4-4 4S3 13 3 8z" />
      <path d="M7 8h10" />
    </>
  ),
  endodoncia: (
    <>
      <path d="M12 3c-1.5-1-3.5-1.3-5 0S5 7 5.5 10s1.5 6.5 2 8.5c.3 1.2 1.5 1.3 1.8 0 .4-1.5.7-3.5 2.7-3.5s2.3 2 2.7 3.5c.3 1.3 1.5 1.2 1.8 0 .5-2 1.5-5.5 2-8.5s.5-5.4-1.5-7-3.5-1-5 0z" />
      <path d="M12 7v7" />
    </>
  ),
  retratamiento: (
    <>
      <path d="M12 4c-1.3-.9-3-1.2-4.3 0S6 8 6.5 10.6s1.3 5.6 1.7 7.3c.3 1.1 1.3 1.1 1.6 0 .3-1.3.6-3 2.2-3s1.9 1.7 2.2 3c.3 1.1 1.3 1.1 1.6 0" />
      <path d="M17 14a3.5 3.5 0 1 0 3.4-4.4M20.5 6v3.5H17" />
    </>
  ),
  infantil: (
    <>
      <circle cx="12" cy="9" r="5" />
      <path d="M10 8.5h.01M14 8.5h.01M9.8 11c.6.7 1.4 1 2.2 1s1.6-.3 2.2-1" />
      <path d="M5 21c1-3.5 3.8-5 7-5s6 1.5 7 5" />
    </>
  ),
  sellador: (
    <>
      <path d="M12 3l7 3v5.5c0 4.2-2.9 7.9-7 9-4.1-1.1-7-4.8-7-9V6z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
};

interface ServicioIconProps {
  nombre: string;
  className?: string;
}

export const ServicioIcon: React.FC<ServicioIconProps> = ({ nombre, className = "w-6 h-6" }) => (
  <svg className={className} {...base}>
    {TRAZOS[nombre] ?? TRAZOS.limpieza}
  </svg>
);
