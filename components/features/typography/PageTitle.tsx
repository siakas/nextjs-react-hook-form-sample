import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const PageTitle = ({ children }: Props) => {
  return <h1 className="my-4 text-xl font-bold">{children}</h1>;
};
