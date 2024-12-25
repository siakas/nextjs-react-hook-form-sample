import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Props = {
  label: string;
  userCount: number;
  onClick?: () => void;
};

export const UserStatisticsCard = ({ label, userCount, onClick }: Props) => {
  return (
    <Card onClick={onClick} className={cn(onClick && "cursor-pointer")}>
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
