"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FunnelScreen, getStepNumber, routes } from "../../helpers";
import { FunnelBackButton, FunnelForwardButton, FunnelSelectChoiceButton } from "../../components";
import content from "./content.json";
import Qquestion from "@/assets/question.png"
import Answer from "@/assets/answer.png"
import {Image} from "@nextui-org/react";
import { ClockIcon } from "@heroicons/react/24/outline";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import type { SVGProps } from 'react';
import {Chip} from "@nextui-org/react";
import {Pagination} from "@nextui-org/react";

const experienceLevels = ["Answer", "Answer", "Answer", "asdadasd", "asdadasd", "asdadasd"];

interface Props {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

export function MaterialSymbolsTimerOutline(props: SVGProps<SVGSVGElement>) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M9 3V1h6v2zm2 11h2V8h-2zm1 8q-1.85 0-3.488-.712T5.65 19.35q-1.225-1.225-1.937-2.863T3 13q0-1.85.713-3.488T5.65 6.65q1.225-1.225 2.863-1.937T12 4q1.55 0 2.975.5t2.675 1.45l1.4-1.4l1.4 1.4l-1.4 1.4Q20 8.6 20.5 10.025T21 13q0 1.85-.713 3.488T18.35 19.35q-1.225 1.225-2.863 1.938T12 22m0-2q2.9 0 4.95-2.05T19 13q0-2.9-2.05-4.95T12 6Q9.1 6 7.05 8.05T5 13q0 2.9 2.05 4.95T12 20m0-7"></path></svg>);
}

export const Experience = ({ setStep }: Props) => {
  const router = useRouter();

  const [selected, setSelected] = useState("");

  const handleSubmit = () => {
    router.push(`/${routes.opportunities}`);
    const stepNumber = getStepNumber(routes.opportunities as FunnelScreen);
    setStep(stepNumber || 1);
  };

  const handleBack = () => {
    router.push(`${routes.intro}`);
    const stepNumber = getStepNumber(routes.intro as FunnelScreen);
    setStep(stepNumber || 1);
  };

  return (
    <>
    <div className="" >
  <div className="flex w-screen justify-center items-center"> 
  <div className="flex items-center justify-center w-full max-w-xl mx-auto">
 
  </div>
</div>
      <div className="flex  flex-col gap-1 py-0 lg:mt-4 text-center px-0">
            {/* New container for header with both buttons */}
            <div className="flex justify-between items-center px-4 mb-4">
              {/* Left aligned back button */}{/* Adjust with the correct onPress function */}
              <div className="absolute top-4 z-10 transform translate-x-0 translate-y-0">
            
          </div>
            </div>

        <div className="px-4 flex justify-center mb-6">
          <Image
              className="mx-auto lg:mx-0   object-fill" // Removed radius-lg
              src="Layer_1_blue.svg"
              alt="asd"
              title="asd"
              // If Next UI supported a prop for radius, it would look something like this:
              radius="sm"
              shadow="sm"
            />
        </div>
        <div className="absolute top-4 right-4 z-10">
            <Chip size="sm" classNames={{
        base: "bg-teal-700/10"
      }} >
              <div className="flex items-center">
                <MaterialSymbolsTimerOutline className="w-5 h-5 text-black" />
                <p className="font-semibold">0:34</p>
              </div>
            </Chip>
          </div>
      </div>
          <div className="gap-1 px-0 pt-0">
          <div className="mb-2 px-6 dark:text-foreground-700 text-center lg:text-md">
            <p>
            Choose your answer:
            </p>
          </div>
        </div>

      <div className="gap-1 px-0 pt-0">
        <div className="px-6 grid grid-cols-2 gap-3">

          {experienceLevels.map((experience) => (
            <FunnelSelectChoiceButton
              key={experience}
              value={experience}
              onClick={() => {
                setSelected(experience);
                handleSubmit();
              }}
            />
          ))}
        </div>
        <div className="w-full mt-10 px-5 flex-wrap gap-4  flex items-center justify-center ">
          <Pagination showControls isCompact total={30} initialPage={1} 
                 classNames={{
                  cursor:
                    "bg-teal-700",
                }} 
                />
      </div>
      </div>
      </div>
    </>
  );
};
