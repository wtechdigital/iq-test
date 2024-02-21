"use client";

import { FunnelContainer } from "@/components/funnel/components";
import { FunnelScreen, getStepNumber, routes } from "@/components/funnel/helpers";
import { Analyzing } from "@/components/funnel/sections";
import { useState } from "react";

export default function AnalyzingPage() {
  const [currentStep, setCurrentStep] = useState(getStepNumber(routes.analyzing as FunnelScreen));

  return (
    <FunnelContainer step={currentStep}>
      <Analyzing setStep={setCurrentStep} />
    </FunnelContainer>
  );
}
