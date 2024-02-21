"use client";

import { FunnelContainer } from "@/components/funnel/components";
import { FunnelScreen, getStepNumber, routes } from "@/components/funnel/helpers";
import { Plans } from "@/components/funnel/sections";
import { useState } from "react";

export default function PlansPage() {
  const [currentStep, setCurrentStep] = useState(getStepNumber(routes.plans as FunnelScreen));

  return (
    <FunnelContainer step={currentStep}>
      <Plans setStep={setCurrentStep} />
    </FunnelContainer>
  );
}
