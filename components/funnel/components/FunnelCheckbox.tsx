import { Checkbox } from "@nextui-org/react";

interface Props {
  value: string;
}

export const FunnelCheckbox = ({ value }: Props) => {
  return (
    <Checkbox
      value={value}
      className="p-4 rounded-medium max-w-none -m-0 bg-blue-50 dark:bg-content1 text-left [@media(hover:hover)]:hover:bg-blue-100 transition-transform-colors-opacity"
      classNames={{
        wrapper: "group-data-[hover=true]:before:bg-blue-100 ",
        label: "text-lg font-normal ",
      }}
    >
      {value}
    </Checkbox>
  );
};
