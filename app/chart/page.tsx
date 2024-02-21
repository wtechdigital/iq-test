"use client";

import { FunnelContainer } from "@/components/funnel/components";
import { FunnelScreen, getStepNumber, routes } from "@/components/funnel/helpers";
import { Chart } from "@/components/funnel/sections";
import { useState } from "react";

export default function FeaturesPage() {
  const [currentStep, setCurrentStep] = useState(getStepNumber(routes.chart as FunnelScreen));

  return (
    <FunnelContainer step={currentStep}>
      <Chart setStep={setCurrentStep} />
    </FunnelContainer>
  );
}
