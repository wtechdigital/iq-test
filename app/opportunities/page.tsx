"use client";

import { FunnelContainer } from "@/components/funnel/components";
import { FunnelScreen, getStepNumber, routes } from "@/components/funnel/helpers";
import { Opportunities } from "@/components/funnel/sections";
import { useState } from "react";

export default function OpportunitiesPage() {
  const [currentStep, setCurrentStep] = useState(getStepNumber(routes.opportunities as FunnelScreen));

  return (
    <FunnelContainer step={currentStep}>
      <Opportunities setStep={setCurrentStep} />
    </FunnelContainer>
  );
}
