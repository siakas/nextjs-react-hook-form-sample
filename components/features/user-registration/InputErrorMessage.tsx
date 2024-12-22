import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const InputErrorMessage = ({ children }: Props) => {
  return <p className="mt-2 text-sm text-red-500">{children}</p>;
};
