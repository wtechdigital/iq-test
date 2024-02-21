"use client";

import { CheckboxGroup } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FunnelScreen, getStepNumber, routes } from "../../helpers";
import {FunnelBackButton, FunnelButton, FunnelCheckbox, FunnelSelectChoiceButton} from "../../components";
import content from "./content.json";

const goals = ["Short-term gains", "Long-term wealth creation", "Retirement savings", "Diversification"];

interface Props {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

export const Goal = ({ setStep }: Props) => {

  const [selected, setSelected] = useState<string>();

  const router = useRouter();

  const handleSubmit = () => {
      router.push(`/${routes.risk}`);
      const stepNumber = getStepNumber(routes.risk as FunnelScreen);
      setStep(stepNumber || 1);
  };

  const handleBack = () => {
    router.push(`/${routes.features}`);
    const stepNumber = getStepNumber(routes.features as FunnelScreen);
    setStep(stepNumber || 1);
  };

  return (
    <>
      <div className="flex flex-col gap-1 py-0 lg:mt-4 text-center px-0">
        <FunnelBackButton onPress={handleBack} />
        <div className="px-4 mb-4">
          <h1 className="text-xl lg:text-2xl font-semibold text-center mb-1">
            {/* How frequently do you want to receive investment insights in your inbox? */}
            {content.title}
          </h1>
            <p className="text-foreground-500 text-base">
                {content.subtitle}
            </p>
        </div>
      </div>

      <div className="gap-1 px-0 pt-0">
        <div className="px-6 flex flex-col gap-3">
          {goals.map((goal) => (
              <FunnelSelectChoiceButton
                  value={goal}
                  key={goal}
                  onClick={() => {
                    setSelected(goal);
                    handleSubmit();
                  }}
              />
          ))}
        </div>
        </div>
    </>
  );
};
