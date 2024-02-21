"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FunnelScreen, getStepNumber, routes } from "../../helpers";
import { FunnelBackButton, FunnelSelectChoiceButton } from "../../components";
import content from "./content.json";

const frequencies = ["Daily", "Weekly", "Monthly"];

interface Props {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

export const Insight = ({ setStep }: Props) => {
  const router = useRouter();
  const [selected, setSelected] = useState("");

  const handleSubmit = () => {
    router.push(`/${routes.analyzing}`);
    // const stepNumber = getStepNumber(routes.analyzing as FunnelScreen);
    // setStep(stepNumber || 1);
  };

  const handleBack = () => {
    router.push(`/${routes.risk}`);
    const stepNumber = getStepNumber(routes.risk as FunnelScreen);
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
        </div>
      </div>

      <div className="gap-1 px-0 pt-0">
        <div className="px-6 flex flex-col gap-3">
          {frequencies.map((frequency) => (
            <FunnelSelectChoiceButton
              value={frequency}
              key={frequency}
              onClick={() => {
                setSelected(frequency);
                handleSubmit();
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
};
