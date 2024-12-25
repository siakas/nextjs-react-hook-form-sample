import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Props = {
  label: string;
  userCount: number;
  onClick?: () => void;
};

export const UserStatisticsCard = ({ label, userCount, onClick }: Props) => {
  return (
    <Card
      onClick={onClick}
      className="cursor-pointer transition-colors hover:bg-accent"
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <CardHeader>
        <CardTitle className="text-base font-medium leading-none">
          {label}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-[64px] font-bold leading-none">{userCount}</div>
      </CardContent>
    </Card>
  );
};
