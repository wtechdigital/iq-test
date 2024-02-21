"use client";

import { useState } from "react";
import {FunnelContainer} from "@/components/funnel/components";
import {Offer} from "@/components/funnel/sections";
import {FunnelScreen, getStepNumber, routes} from "@/components/funnel/helpers";

const IntroPage = () => {
  const [currentStep, setCurrentStep] = useState(getStepNumber(routes.offer as FunnelScreen));

  return (
    <FunnelContainer step={currentStep}>
      <Offer setStep={setCurrentStep} />
    </FunnelContainer>
  );
};
export default IntroPage;
