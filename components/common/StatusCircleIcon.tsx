import { CircleCheck, CircleX } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  isActive: boolean;
};

const activeClass = "size-4 text-green-500";
const inactiveClass = "size-4 text-red-500";

export const StatusCircleIcon = ({ isActive }: Props) => {
  return (
    <>
      {isActive ? (
        <CircleCheck className={cn(activeClass)} />
      ) : (
        <CircleX className={cn(inactiveClass)} />
      )}
    </>
  );
};
