import { Button } from "@nextui-org/button";
import clsx from "clsx";

interface Props {
  value: string;
  onClick: () => void;
  isActive?:boolean;
}

export const FunnelSelectChoiceButton = ({ value, onClick, isActive }: Props) => {
  return (
    <Button
      size="lg"
      className={clsx("min-h-[3.75rem] bg-green-50 hover:bg-green-100 text-lg dark:bg-content1 dark:hover:bg-green-100/80 w-full min-w-unit-16", {"bg-teal-700 text-white hover:bg-teal-700 text-lg" : isActive })}
      onPress={onClick}
    >
      {value}
    </Button>
  );
};
