import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const H1 = ({ children }: Props) => {
  return <h1 className="mb-6 text-2xl font-bold">{children}</h1>;
};
