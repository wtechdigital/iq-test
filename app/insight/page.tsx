"use client";

import { FunnelContainer } from "@/components/funnel/components";
import { FunnelScreen, getStepNumber, routes } from "@/components/funnel/helpers";
import { Insight } from "@/components/funnel/sections";
import { useState } from "react";

export default function InsightPage() {
  const [currentStep, setCurrentStep] = useState(getStepNumber(routes.insight as FunnelScreen));

  return (
    <FunnelContainer step={currentStep}>
      <Insight setStep={setCurrentStep} />
    </FunnelContainer>
  );
}
