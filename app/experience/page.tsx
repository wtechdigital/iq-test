"use client";

import { FunnelContainer } from "@/components/funnel/components";
import { FunnelScreen, getStepNumber, routes } from "@/components/funnel/helpers";
import { Experience } from "@/components/funnel/sections";
import { useState } from "react";

export default function ExperiencePage() {
  const [currentStep, setCurrentStep] = useState(getStepNumber(routes.experience as FunnelScreen));

  return (
    <FunnelContainer step={currentStep}>
      <Experience setStep={setCurrentStep} />
    </FunnelContainer>
  );
}
