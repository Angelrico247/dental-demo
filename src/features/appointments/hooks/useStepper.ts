"use client";

import { useCallback, useState } from "react";

export function useStepper(totalPasos: number) {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextStep = useCallback(() => {
    setDirection(1);
    setStep((s) => Math.min(s + 1, totalPasos - 1));
  }, [totalPasos]);

  const prevStep = useCallback(() => {
    setDirection(-1);
    setStep((s) => Math.max(s - 1, 0));
  }, []);

  const resetStepper = useCallback(() => {
    setDirection(1);
    setStep(0);
  }, []);

  return { step, direction, nextStep, prevStep, resetStepper };
}
