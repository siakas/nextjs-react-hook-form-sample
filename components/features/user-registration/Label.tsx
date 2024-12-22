import type { ReactNode } from "react";

type Props = {
  htmlFor: string;
  children: ReactNode;
};

export const Label = ({ htmlFor, children }: Props) => {
  return (
    <label htmlFor={htmlFor} className="mb-1 block text-sm font-bold">
      {children}
    </label>
  );
};
