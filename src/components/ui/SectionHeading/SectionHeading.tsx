import React from "react";
import { IconSparkle } from "../../icons";

interface SectionHeadingProps {
  eyebrow?: string;
  titulo: React.ReactNode;
  descripcion?: string;
  align?: "left" | "center";
  /** Boton o link que va a la derecha del titulo en escritorio */
  accion?: React.ReactNode;
  tone?: "dark" | "light";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  titulo,
  descripcion,
  align = "left",
  accion,
  tone = "dark",
  className = "",
}) => {
  const centrado = align === "center";
  const colorTitulo = tone === "light" ? "text-white" : "text-ink";
  const colorTexto = tone === "light" ? "text-white/65" : "text-mist";

  return (
    <div
      className={`flex flex-col gap-6 sm:flex-row sm:items-end ${
        centrado ? "sm:justify-center" : "sm:justify-between"
      } ${className}`}
    >
      <div className={`max-w-2xl ${centrado ? "mx-auto text-center" : ""}`}>
        {eyebrow && (
          <p
            className={`mb-4 flex items-center gap-2 text-eyebrow font-medium uppercase ${colorTexto} ${
              centrado ? "justify-center" : ""
            }`}
          >
            <IconSparkle className="h-3 w-3" />
            {eyebrow}
          </p>
        )}
        <h2 className={`text-display font-light ${colorTitulo}`}>{titulo}</h2>
        {descripcion && (
          <p className={`mt-4 text-base leading-relaxed ${colorTexto}`}>{descripcion}</p>
        )}
      </div>
      {accion && <div className="shrink-0">{accion}</div>}
    </div>
  );
};
