import React from "react";
import Link from "next/link";
import { IconChevronRight, IconSparkle } from "../../icons";

interface PageHeaderProps {
  eyebrow?: string;
  titulo: string;
  descripcion?: string;
  breadcrumb?: { href: string; label: string }[];
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  eyebrow,
  titulo,
  descripcion,
  breadcrumb,
}) => (
  <header className="mx-auto max-w-7xl px-4 pb-6 pt-14 sm:px-6 lg:px-8 lg:pt-20">
    {breadcrumb && (
      <nav aria-label="Ruta de navegación" className="mb-8 flex flex-wrap items-center gap-1.5 text-xs text-mist">
        <Link href="/" className="transition-colors hover:text-ink">
          Inicio
        </Link>
        {breadcrumb.map((b, i) => (
          <React.Fragment key={b.href}>
            <IconChevronRight className="h-3 w-3 text-haze" />
            {i === breadcrumb.length - 1 ? (
              <span className="text-graphite">{b.label}</span>
            ) : (
              <Link href={b.href} className="transition-colors hover:text-ink">
                {b.label}
              </Link>
            )}
          </React.Fragment>
        ))}
      </nav>
    )}

    {eyebrow && (
      <p className="mb-4 flex items-center gap-2 text-eyebrow font-medium uppercase text-mist">
        <IconSparkle className="h-3 w-3" />
        {eyebrow}
      </p>
    )}
    <h1 className="max-w-3xl text-display font-light text-ink">{titulo}</h1>
    {descripcion && (
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-mist">{descripcion}</p>
    )}
  </header>
);
