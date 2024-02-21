"use client";

import { useRouter } from "next/navigation";
import { FunnelScreen, getStepNumber, routes } from "../../helpers";
import { FunnelBackButton, FunnelButton } from "../../components";
import { Icon } from "@iconify/react";
import content from "./content.json";

interface Props {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

export const Features = ({ setStep }: Props) => {
  const router = useRouter();

  const handleSubmit = () => {
    router.push(`/${routes.goal}`);
    // const stepNumber = getStepNumber(routes.goal as FunnelScreen);
    // setStep(stepNumber || 1);
  };

  const handleBack = () => {
    router.push(`/${routes.plans}`);
    const stepNumber = getStepNumber(routes.plans as FunnelScreen);
    setStep(stepNumber || 1);
  };

  return (
    <>
      <div className="absolute -z-10 h-[calc(100dvh)] overflow-hidden dark:hidden inset-0">
        <div className="absolute w-[60rem] h-[60rem] blur-2xl -z-10 bg-gradient-radial from-green-50/80 -right-[37rem] top-[-21rem]"></div>
        <div className="absolute w-[109rem] h-[94rem] blur-2xl -z-10 bg-gradient-radial from-blue-100 right-[24rem] top-[-10rem]"></div>
        <div className="absolute w-[66rem] h-[40rem] blur-2xl -z-10 bg-gradient-radial from-sky-100 right-[-18rem] top-[20rem]"></div>
      </div>

      <div className="flex flex-col gap-1 py-0 lg:mt-4 text-center px-0">
        <FunnelBackButton onPress={handleBack} />

        <div className="px-4 mb-4">
          <div className="min-h-[4.5rem] mb-10">
            <Icon icon="fluent:data-trending-32-regular" className="mx-auto text-7xl text-primary" aria-hidden />
          </div>

          <h1 className="text-xl lg:text-2xl font-semibold text-center mb-1">
            {/* That’s great! */}
            {content.title}
          </h1>
        </div>

        <div className="gap-1 px-0 pt-0">
          <div className="mb-2 px-6 dark:text-foreground-700 lg:text-lg">
            <p>
              {/* With options like fractional shares and our expert, budget-friendly picks, you can begin your investment
          journey with even the smallest savings. */}
              {content.body}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 mx-auto text-center px-4">
        <FunnelButton text="Next" handleSubmit={handleSubmit} />
      </div>
    </>
  );
};
