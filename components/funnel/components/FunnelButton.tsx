import { Button } from "@nextui-org/button";

interface Props {
  text: string;
  handleSubmit: () => void;
  isDisabled?: boolean;
}

export const FunnelButton = ({ text, handleSubmit, isDisabled = false }: Props) => {
  return (
    <Button
      onPress={handleSubmit}
      size="lg"
      className="max-w-[400px] w-full text-lg bg-[#0d766e] text-white"
      radius="sm"
      variant="shadow"
      isDisabled={isDisabled}
    >
      {text}
    </Button>
  );
};
