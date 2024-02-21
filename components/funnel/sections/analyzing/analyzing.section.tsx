"use client";

import { Image, Progress } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FunnelScreen, getStepNumber, routes } from "../../helpers";
import content from "./content.json";
import AnalyzingImage from '../../../../assets/analyzing.svg'
import {Icon} from "@iconify/react";
import {CircularProgress} from "@nextui-org/react";
import {Card} from "@nextui-org/react";

interface Props {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

export const Analyzing = ({ setStep }: Props) => {
  const router = useRouter();

  const handleSubmit = () => {
    router.push(`/${routes.signup}`);
    const stepNumber = getStepNumber(routes.signup as FunnelScreen);
    setStep(stepNumber || 1);
  };

  const [progress, setProgress] = useState(30);

  useEffect(() => {
    let nextUpdate = Date.now() + randomInterval();
    let pausedUntil = 0;
  
    const updateProgress = () => {
      const now = Date.now();
      if (now < pausedUntil) return; // Skip update if we're in a pausedUntil period
  
      setProgress((prev) => {
        if (prev >= 100) return 100;
        const increment = randomIncrement();
        const newProgress = prev + increment > 100 ? 100 : prev + increment;
        if (newProgress >= 100) {
          clearInterval(intervalId);
         // handleSubmit();
        }
        return newProgress;
      });
      
      // Occasionally introduce longer pauses and adjust when the next update should occur
      if (Math.random() < 0.2) { // 20% chance to introduce a longer pause
        pausedUntil = now + 1000 + Math.random() * 2000; // Pause for 1-3 seconds
      }
  
      nextUpdate = now + randomInterval();
    };
  
    const intervalId = setInterval(() => {
      if (Date.now() >= nextUpdate) {
        updateProgress();
      }
    }, 100); // Check every 100ms if we should update, for reactive behavior
  
    return () => clearInterval(intervalId);
  }, []);
  
 // Updated helper function to generate a more varied and unpredictable random increment
function randomIncrement() {
  // 50% chance to choose a small increment (1-5), for more granularity
  if (Math.random() < 0.5) {
    return 1 + Math.floor(Math.random() * 5);
  } else {
    // 50% chance to choose a larger increment (6-20), for faster jumps
    return 6 + Math.floor(Math.random() * 15);
  }
}
  
// Updated randomInterval function for a 10% faster loading experience
function randomInterval() {
  // Reduced the interval duration by 10% for both minimum and maximum boundaries
  return (Math.random() * (900 - 225) + 225); // New range between 225ms and 900ms
}

  return (
    <>
      <div className="absolute -z-10 h-[calc(100dvh)] overflow-hidden dark:hidden inset-0">
        <div className="absolute w-[60rem] h-[60rem] blur-2xl -z-10 bg-gradient-radial from-green-50/80 -right-[37rem] top-[-21rem]"></div>
        <div className="absolute w-[109rem] h-[94rem] blur-2xl -z-10 bg-gradient-radial from-blue-100 right-[24rem] top-[-10rem]"></div>
        <div className="absolute w-[66rem] h-[40rem] blur-2xl -z-10 bg-gradient-radial from-sky-100 right-[-18rem] top-[20rem]"></div>
      </div>
      <div className="px-6  items-center pt-2 mb-18 text-left">
            <h1 className="text-3xl lg:text-3xl font-semibold text-left mb-4 mt-4">
            Calculation your
            <div className="bg-clip-text px-0 text-transparent bg-gradient-to-r font-bold from-primary-400 to-primary-600">
            IQ score...
            </div>
          </h1>
      <div className="flex justify-center">
       
      </div>
        <p className="text-foreground-500 text-sm">
          {/*Returns as of February 6, 2024. Envest AI launched in 2020.*/}
          Hang tight while our AI brain analyses your answers against the 5 key measures of intelligence...
        </p>

        <div className="relative max-w-md mx-auto mt-2">
            <div className="w-full bg-gray-200 rounded-full mt-5 dark:bg-gray-700">
            <div className="bg-gradient-to-r from-teal-400 to-teal-700 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: '45%' }}>45%</div>
          </div>

</div>
    <div className="border-t border-gray-200 dark:border-gray-600 my-4 mt-5"></div>
        <div className="mb-6 mt-4 flex flex-col gap-4 dark:text-foreground-700 lg:text-lg ">
          <ul>
            <li className="flex items-start gap-1"> {/* Changed items-center to items-start */}
              <Icon className="text-default-600" icon="ci:check" width={25} />
              <p className="text-md text-default-700">Memory</p>
            </li>
            <li className="flex items-start gap-1"> {/* Changed items-center to items-start */}
              <Icon className="text-default-700" icon="ci:check" width={25} />
              <p className="text-md text-default-600">Speed</p>
            </li>
            <li className="flex items-start gap-1"> {/* Changed items-center to items-start */}
              <Icon className="text-default-700" icon="ci:check" width={25} />
              <p className="text-md text-default-600">Reaction</p>
            </li>
            <li className="flex items-start gap-1"> {/* Changed items-center to items-start */}
              <Icon className="text-default-700" icon="ci:check" width={25} />
              <p className="text-md text-default-600">Concentration</p>
            </li>
            <li className="flex items-start gap-1"> {/* Changed items-center to items-start */}
              <Icon className="text-default-700" icon="ci:check" width={25} />
              <p className="text-md text-default-600">Logic</p>
            </li>
          </ul>
          
        </div>
      </div>
    </>
  );
};
