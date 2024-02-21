"use client";

import { FunnelContainer } from "@/components/funnel/components";
import { FunnelScreen, getStepNumber, routes } from "@/components/funnel/helpers";
import { Features } from "@/components/funnel/sections";
import { useState } from "react";

export default function FeaturesPage() {
  const [currentStep, setCurrentStep] = useState(getStepNumber(routes.features as FunnelScreen));

  return (
    <FunnelContainer step={currentStep}>
      <Features setStep={setCurrentStep} />
    </FunnelContainer>
  );
}
