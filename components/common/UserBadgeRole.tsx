import { Badge } from "@/components/ui/badge";
import type { User } from "@/types";
import { toRoleText } from "@/utils/toRoleText";

type Props = {
  user: User;
};

export const UserBadgeRole = ({ user }: Props) => {
  return <Badge variant="outline">{toRoleText(user.role)}</Badge>;
};
