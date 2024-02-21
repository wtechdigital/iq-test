"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FunnelScreen, getStepNumber, routes } from "../../helpers";
import { FunnelBackButton, FunnelSelectChoiceButton } from "../../components";
import content from "./content.json";

const plans = ["Up to $3000", "$3 000 - $10 000", "$10 000 - $50 000", "Above $50 000"];

interface Props {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

export const Plans = ({ setStep }: Props) => {
  const router = useRouter();

  const [selected, setSelected] = useState("");

  const handleSubmit = () => {
    router.push(`/${routes.features}`);
    // const stepNumber = getStepNumber(routes.features as FunnelScreen);
    // setStep(stepNumber || 1);
  };

  const handleBack = () => {
    router.push(`/${routes.chart}`);
    const stepNumber = getStepNumber(routes.chart as FunnelScreen);
    setStep(stepNumber || 1);
  };

  return (
    <>
      <div className="flex flex-col gap-1 py-0 lg:mt-4 text-center px-0 ">
        <FunnelBackButton onPress={handleBack} />

        <div className="px-4 mb-4">
          <h1 className="text-xl lg:text-2xl font-semibold text-center mb-1">
            {/* How much are you planning to invest each year? */}
            {content.title}
          </h1>
        </div>
      </div>

      <div className="gap-1 px-0 pt-0">
        <div className="mb-2 px-6 flex flex-col gap-3">
          {plans.map((plan) => (
            <FunnelSelectChoiceButton
              value={plan}
              key={plan}
              onClick={() => {
                setSelected(plan);
                handleSubmit();
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
};
