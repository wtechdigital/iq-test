"use client";

import { FunnelContainer } from "@/components/funnel/components";
import { FunnelScreen, getStepNumber, routes } from "@/components/funnel/helpers";
import { Risk } from "@/components/funnel/sections";
import { useState } from "react";

export default function RiskPage() {
  const [currentStep, setCurrentStep] = useState(getStepNumber(routes.risk as FunnelScreen));

  return (
    <FunnelContainer step={currentStep}>
      <Risk setStep={setCurrentStep} />
    </FunnelContainer>
  );
}
