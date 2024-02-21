"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
  Tooltip
} from "recharts";
import React, { useState, useCallback } from "react";
import { Image } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { FunnelScreen, getStepNumber, routes } from "../../helpers";
import { FunnelBackButton, FunnelButton } from "../../components";
import { Icon } from "@iconify/react";
import content from "./content.json";

interface Props {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const data = [
  {
    name: "2020",
    'General Electric Stock': 77,
    'NVIDIA Stock': 59,
  },
  {
    name: "2021",
    'General Electric Stock': 66,
    'NVIDIA Stock': 129,
  },
  {
    name: "2022",
    'General Electric Stock': 73,
    'NVIDIA Stock': 244,
  },
  {
    name: "2023",
    'General Electric Stock': 80,
    'NVIDIA Stock': 195,
  },
  {
    name: "2024",
    'General Electric Stock': 132,
    'NVIDIA Stock': 615,
  },
];

export const Chart = ({ setStep }: Props) => {
  const router = useRouter();

  const [opacity, setOpacity] = useState({
    uv: 1,
    pv: 1
  });

  const handleSubmit = () => {
    router.push(`/${routes.plans}`);
  };

  const handleBack = () => {
    router.push(`/${routes.opportunities}`);
    const stepNumber = getStepNumber(routes.opportunities as FunnelScreen);
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

        <div className="px-4">

        <h1 className="text-xl lg:text-2xl font-semibold text-center mb-2">
            {/* That’s great! */}
            {content.title}
          </h1>
        <div className="flex justify-center mb-0" style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <AreaChart
      width={450}
      height={300}
      data={data}
      margin={{
        top: 10,
        right: 20,
        left: 0,
        bottom: -10
      }}
    >
        <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="85%" stopColor="#F04438" stopOpacity={0.9}/>
      <stop offset="100%" stopColor="#F04438" stopOpacity={0.6}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="85%" stopColor="#1570EF" stopOpacity={0.9}/>
      <stop offset="100%" stopColor="#1570EF" stopOpacity={0.6}/>
    </linearGradient>
  </defs>
      <CartesianGrid strokeDasharray="3 3" fillOpacity={0.6} />
      <XAxis dataKey="name" tick={{ fontSize: "14px" }} />
      <YAxis unit="$" tick={{ fontSize: "14px" }}/>
      <Tooltip />
      <Legend width={200} wrapperStyle={{ top: 30, left: 80, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '20px' }} />
      <Area
        type="monotone"
        dataKey="General Electric Stock"
        stackId="1"
        strokeOpacity={opacity.uv}
        stroke="#F04438"
        fill="url(#colorUv)"
      />
      <Area
        type="monotone"
        dataKey="NVIDIA Stock"
        strokeOpacity={opacity.pv}
        stackId="1"
        stroke="#1570EF"
        fill="url(#colorPv)"
      />
    </AreaChart> 
    </ResponsiveContainer>
          </div>
        </div>

        <div className="gap-1 px-0 pt-0">
          <div className="mb-2 px-6 dark:text-foreground-700 lg:text-lg">
            <p>
            For example,<span className="underline"> our NVIDIA stock recommendation in 2020 yielded a 10.4x return in 4 years
  </span>, 
  versus General Electric&apos;s 1.7x, among over a hundred similar stock picks.
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
