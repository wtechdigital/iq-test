"use client";

import { useRouter } from "next/navigation";
import { FunnelScreen, getStepNumber, routes } from "../../helpers";
import content from "./content.json";
import { FunnelButton } from "../../components";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import {Icon} from "@iconify/react";
import React from 'react';
import type { SVGProps } from 'react';

interface Props {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

export const Intro = ({ setStep }: Props) => {
  const router = useRouter();

  const handleSubmit = () => {
    router.push(`/${routes.experience}`);
    const stepNumber = getStepNumber(routes.experience as FunnelScreen);
    setStep(stepNumber || 1);
  };

  function MaterialSymbolsCognitionOutline(props: SVGProps<SVGSVGElement>) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...props}>
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor:"#2e8bf3", stopOpacity:1}} />
            <stop offset="100%" style={{stopColor:"#025dc5", stopOpacity:1}} />
          </linearGradient>
        </defs>
        <path d="M12.275 15.525q1.75 0 2.975-1.125t1.225-2.725q0-1.425-.913-2.412t-2.212-.988q-1.175 0-1.987.75t-.813 1.85q0 .475.188.925t.537.825L12.7 11.2q-.075-.05-.112-.125t-.038-.175q0-.275.225-.438t.575-.162q.5 0 .825.412t.325.988q0 .775-.638 1.313t-1.562.537q-1.175 0-1.987-.95T9.5 10.275q0-.725.275-1.388t.775-1.162L9.125 6.3q-.8.775-1.225 1.8t-.425 2.15q0 2.2 1.4 3.738t3.4 1.537M6 22v-4.3q-1.425-1.3-2.212-3.037T3 11q0-3.75 2.625-6.375T12 2q3.125 0 5.538 1.838t3.137 4.787l1.3 5.125q.125.475-.175.863T21 15h-2v3q0 .825-.587 1.413T17 20h-2v2h-2v-4h4v-5h2.7l-.95-3.875q-.575-2.275-2.45-3.7T12 4Q9.1 4 7.05 6.025T5 10.95q0 1.5.613 2.85t1.737 2.4l.65.6V22zm6.35-9" fill="url(#grad1)"></path>
      </svg>
    );
  }

  function MaterialSymbolsCognitionOutline1(props: SVGProps<SVGSVGElement>) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...props}>
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor:"#2e8bf3", stopOpacity:1}} />
            <stop offset="100%" style={{stopColor:"#025dc5", stopOpacity:1}} />
          </linearGradient>
        </defs>
        <path d="M12.275 15.525q1.75 0 2.975-1.125t1.225-2.725q0-1.425-.913-2.412t-2.212-.988q-1.175 0-1.987.75t-.813 1.85q0 .475.188.925t.537.825L12.7 11.2q-.075-.05-.112-.125t-.038-.175q0-.275.225-.438t.575-.162q.5 0 .825.412t.325.988q0 .775-.638 1.313t-1.562.537q-1.175 0-1.987-.95T9.5 10.275q0-.725.275-1.388t.775-1.162L9.125 6.3q-.8.775-1.225 1.8t-.425 2.15q0 2.2 1.4 3.738t3.4 1.537M6 22v-4.3q-1.425-1.3-2.212-3.037T3 11q0-3.75 2.625-6.375T12 2q3.125 0 5.538 1.838t3.137 4.787l1.3 5.125q.125.475-.175.863T21 15h-2v3q0 .825-.587 1.413T17 20h-2v2h-2v-4h4v-5h2.7l-.95-3.875q-.575-2.275-2.45-3.7T12 4Q9.1 4 7.05 6.025T5 10.95q0 1.5.613 2.85t1.737 2.4l.65.6V22zm6.35-9" fill="url(#grad1)"></path>
      </svg>
    );
  }


  return (
    
    <>
      {/* background gradient */}
      <div className="absolute -z-10 h-[calc(100dvh)] overflow-hidden dark:hidden inset-0">
        <div className="absolute w-[60rem] h-[60rem] blur-2xl -z-10 bg-gradient-radial from-green-50/80 -right-[37rem] top-[-21rem]"></div>
        <div className="absolute w-[109rem] h-[94rem] blur-2xl -z-10 bg-gradient-radial from-blue-100 right-[24rem] top-[-10rem]"></div>
        <div className="absolute w-[66rem] h-[40rem] blur-2xl -z-10 bg-gradient-radial from-sky-100 right-[-18rem] top-[20rem]"></div>
      </div>
      <div className="flex flex-col gap-1 py-0 lg:mt-4 text-center px-0">
    <div className="px-4">
      <MaterialSymbolsCognitionOutline className="bg-clip-text text-transparent bg-gradient-to-r font-bold from-blue-400 to-blue-600 w-20 h-20 mr-2" style={{ display: 'inline-block' }} />
      <h1 className="text-xl lg:text-2xl font-semibold text-center mb-4 mt-4 flex items-center justify-center">
        Get ready to start the 
        <span className="bg-clip-text px-2 text-transparent bg-gradient-to-r font-bold from-primary-400 to-primary-600">
          IQ test!
        </span>
      </h1>
    </div>
      </div>

      <div className="mb-6 mt-4 px-6 flex flex-col gap-4 dark:text-foreground-700 lg:text-lg ">
  <ul>
    <li className="flex items-start gap-1"> {/* Changed items-center to items-start */}
      <Icon className="text-default-600" icon="ci:check" width={28} />
      <p className="text-lg text-default-700">You will get 30 questions with growing difficulty</p>
    </li>
    <li className="flex items-start gap-1"> {/* Changed items-center to items-start */}
      <Icon className="text-default-700" icon="ci:check" width={28} />
      <p className="text-lg text-default-600">Check the right answer out of the 6 options</p>
    </li>
    <li className="flex items-start gap-1"> {/* Changed items-center to items-start */}
      <Icon className="text-default-700" icon="ci:check" width={28} />
      <p className="text-lg text-default-600">You can skip the question and return back later</p>
    </li>
  </ul>
</div>

      <div className="mx-auto text-center mt-8 px-4">
        <FunnelButton text="Start Certified Test" handleSubmit={handleSubmit} />
      </div>
    </>
  );
};