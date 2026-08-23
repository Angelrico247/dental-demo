"use client";

import React from "react";
import { HeroSection } from "./components/HeroSection";
import { TrustStripSection } from "./components/TrustStripSection";
import { ServiciosSection } from "./components/ServiciosSection";
import { PorQueElegirnosSection } from "./components/PorQueElegirnosSection";
import { ProcesoSection } from "./components/ProcesoSection";
import { TecnologiaSection } from "./components/TecnologiaSection";
import { DoctoresSection } from "./components/DoctoresSection";
import { PreciosSection } from "./components/PreciosSection";
import { TestimoniosSection } from "./components/TestimoniosSection";
import { FaqSection } from "./components/FaqSection";
import { CtaBannerSection } from "./components/CtaBannerSection";
import { Footer } from "../../components/layout/Footer/Footer";
import { useCita } from "../appointments/components/CitaProvider";

export default function LandingPage() {
  const { abrirCita } = useCita();

  return (
    <div className="min-h-screen w-full bg-canvas">
      <HeroSection onAgendar={() => abrirCita()} />
      <TrustStripSection />
      <ServiciosSection />
      <PorQueElegirnosSection />
      <ProcesoSection />
      <TecnologiaSection />
      <DoctoresSection />
      <PreciosSection onAgendar={() => abrirCita()} />
      <TestimoniosSection />
      <FaqSection />
      <CtaBannerSection onAgendar={() => abrirCita()} />
      <Footer />
    </div>
  );
}
