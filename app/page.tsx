"use client";

import { FunnelContainer } from "@/components/funnel/components";
import { Intro } from "@/components/funnel/sections";
import { useState } from "react";

export default function IntroPage() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <FunnelContainer step={currentStep}>
      <Intro setStep={setCurrentStep} />
    </FunnelContainer>
  );
}
