import LogoEnvest from "@/assets/logo";
import { stepMappings } from "../helpers";

interface Props {
  children: JSX.Element;
  step: number;
}

export const FunnelContainer = ({ children, step = 1 }: Props) => {
  const totalSteps = Object.keys(stepMappings).length;

  const progressWidth = (step / totalSteps) * 100 + "%";

  const noProgressStep =
    stepMappings[step] === "chart" || stepMappings[step] === "features" || stepMappings[step] === "analyzing";

  return (
    <div className="w-full relative">
      <header className={`pt-3 bg-[#f4f4f5] dark:bg-content1 ${step === 1 ? "pb-3" : ""}`}>
        <div className="flex flex-col items-left mx-auto pt-2 px-5 pb-1">
          <LogoEnvest className="h-7" /> 
        </div>
        <p>
          
        </p>

        {step !== 1 && (
          <div className={`w-full h-1 bg-foreground/5 ${noProgressStep ? "bg-transparent" : ""}`}>
            <div
              className={`h-1 mt-2 bg-teal-700 transition-all ${noProgressStep ? "bg-transparent" : ""}`}
              style={{ width: progressWidth }}
            />
          </div>
        )}
      </header>

      <main className="max-w-xl mx-auto py-4 sm:py-8 md:py-10">{children}</main>
    </div>
  );
};
