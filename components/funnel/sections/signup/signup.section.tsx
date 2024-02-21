"use client";

import { Input } from "@nextui-org/input";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FunnelScreen, getStepNumber, routes } from "../../helpers";
import { FunnelButton } from "../../components";
import content from "./content.json";

interface Props {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

export const Signup = ({ setStep }: Props) => {
  const router = useRouter();

  const emptyFieldErrorMessage = "Email is required";
  const [isInvalid, setIsInvalid] = useState(false);
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (value.trim().length === 0) {
      setIsInvalid(true);
    } else {
      router.push(`${routes.offer}`);
      const stepNumber = getStepNumber(routes.offer as FunnelScreen);
      setStep(stepNumber || 1);
    }
  };

  // hydration error fix
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <div className="flex flex-col gap-1 py-0 lg:mt-4 text-center px-0">
        <div className="px-4 mb-4">
          <h1 className="text-xl lg:text-2xl font-semibold text-center mb-4">
            {/* Thank you for completing the quiz! */}
            {content.title}
          </h1>
          <p className="text-foreground-500 lg:text-lg">
            {/* Based on your responses, we have determined the ideal investment insights for you. Subscribe to Envest now
            to receive personalized, actionable investment information tailored to your interests and goals, directly in
            your inbox. */}
            {content.body}
          </p>
        </div>
      </div>

      <div className="mt-6 mx-auto px-4 text-center">
        <Input
          defaultValue=""
          name="email"
          type="email"
          autoComplete="email"
          label="Email"
          // placeholder="Enter your email"
          value={value}
          onValueChange={(value) => {
            setIsInvalid(false);
            setValue(value);
          }}
          className="max-w-[400px] w-full mx-auto mb-6"
          classNames={{
            errorMessage: "text-left",
          }}
          isInvalid={isInvalid}
          errorMessage={isInvalid && emptyFieldErrorMessage}
        />
        <FunnelButton text="Continue" handleSubmit={handleSubmit} />

        <div className="flex flex-col gap-4 mt-12">
          <p className="text-foreground-500 lg:text-lg">
            {/* By subscribing, you&apos;ll stay informed on the latest trends and opportunities in your preferred
              investment options, empowering you to make confident decisions and achieve your financial goals. */}
            {content.message1}
          </p>
          <p className="font-semibold z-10 relative lg:text-lg">
            {content.message2start}
            <span className="bg-clip-text text-transparent bg-gradient-to-r font-bold from-primary-400 to-primary-600">
              {content.message2highlight}
            </span>
            {content.message2end}
            {/* Don&apos;t miss out –&nbsp;
                <span className="bg-clip-text text-transparent bg-gradient-to-r font-bold from-primary-300 to-primary-600">
                  subscribe&nbsp;
                </span>
                to Envest today! */}
          </p>
        </div>
      </div>
    </>
  );
};
