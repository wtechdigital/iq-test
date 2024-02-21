"use client";

import { FunnelContainer } from "@/components/funnel/components";
import { FunnelScreen, getStepNumber, routes } from "@/components/funnel/helpers";
import { Goal } from "@/components/funnel/sections";
import { useState } from "react";

export default function GoalPage() {
  const [currentStep, setCurrentStep] = useState(getStepNumber(routes.goal as FunnelScreen));

  return (
    <FunnelContainer step={currentStep}>
      <Goal setStep={setCurrentStep} />
    </FunnelContainer>
  );
}
