"use client";

import { FunnelContainer } from "@/components/funnel/components";
import { FunnelScreen, getStepNumber, routes } from "@/components/funnel/helpers";
import { Signup } from "@/components/funnel/sections";
import { useState } from "react";

export default function SignupPage() {
  const [currentStep, setCurrentStep] = useState(getStepNumber(routes.signup as FunnelScreen));

  return (
    <FunnelContainer step={currentStep}>
      <Signup setStep={setCurrentStep} />
    </FunnelContainer>
  );
}
