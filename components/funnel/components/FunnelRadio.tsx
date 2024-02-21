import { Radio } from "@nextui-org/react";

interface Props {
  value: string;
}

export const FunnelRadio = ({ value }: Props) => {
  return (
    <Radio value={value} className="p-4 rounded-medium max-w-none -m-0 shadow-small dark:bg-content1 text-left">
      {value}
    </Radio>
  );
};
