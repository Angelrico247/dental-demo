"use client";

import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import { useCita } from "../../../features/appointments/components/CitaProvider";

interface PageShellProps {
  children: React.ReactNode;
}

/** Unico lugar donde las paginas internas obtienen navbar solido y footer. */
export const PageShell: React.FC<PageShellProps> = ({ children }) => {
  const { abrirCita } = useCita();

  return (
    <div className="min-h-screen bg-canvas">
      <div className="sticky top-0 z-50">
        <Navbar variant="solid" onAgendar={() => abrirCita()} />
      </div>
      <main>{children}</main>
      <Footer />
    </div>
  );
};
