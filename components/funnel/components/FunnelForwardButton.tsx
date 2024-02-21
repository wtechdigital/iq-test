import { Button } from "@nextui-org/button";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";

interface Props {
  onPress: () => void;
}

export const FunnelForwardButton = ({ onPress }: Props) => {
  return (
    <Button
      isIconOnly
      aria-label="Go back"
      className="absolute left-2 top-3 z-11 text-foreground-500"
      size="sm"
      variant="light"
      radius="full"
      onPress={onPress}
    >
      <ChevronLeftIcon aria-hidden className="h-7 w-7 text-blue-600" />
    </Button>
  );
};
