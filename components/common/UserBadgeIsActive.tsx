import { Badge } from "@/components/ui/badge";
import type { User } from "@/types";

type Props = {
  user: User;
};

export const UserBadgeIsActive = ({ user }: Props) => {
  return (
    <Badge variant={user.isActive ? "default" : "secondary"}>
      {user.isActive ? "アクティブ" : "非アクティブ"}
    </Badge>
  );
};
