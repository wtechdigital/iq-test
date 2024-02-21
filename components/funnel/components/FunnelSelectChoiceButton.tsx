import { Button } from "@nextui-org/button";
import clsx from "clsx";
import Answer from "@/assets/1_1.svg"
import Image from "next/image"


interface Props {
  value: string;
  onClick: () => void;
  isActive?:boolean;
}

export const FunnelSelectChoiceButton = ({ value, onClick, isActive }: Props) => {
  return (
    <Button
      size="lg"
      className={clsx("min-h-[3.75rem] bg-blue-50 hover:bg-blue-100 text-lg dark:bg-content1 dark:hover:bg-blue-100/80 w-full min-w-unit-16", {"bg-teal-700 text-white hover:bg-teal-700 text-lg" : isActive })}
      onPress={onClick}
    >
      <Image
             className="mx-auto lg:mx-0 rounded-lg object-fill  "
            src={Answer}
            alt="asd"
            title="asd"
          />
    </Button>
  );
};
