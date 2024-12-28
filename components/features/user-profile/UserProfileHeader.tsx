import { UserAvatar } from "@/components/common/user-avatar/UserAvatar";
import { Badge } from "@/components/ui/badge";
import type { User } from "@/types";
import { toRoleText } from "@/utils/toRoleText";

type Props = {
  user: User;
};

export const UserProfileHeader = ({ user }: Props) => {
  return (
    <div className="flex items-center gap-4">
      <UserAvatar
        src={user.profile?.avatarUrl}
        username={user.username}
        size="lg"
        isUpperCase={true}
      />
      <div>
        <p className="text-xs text-gray-500">{user.id}</p>
        <h2 className="flex items-center gap-2 text-2xl font-bold">
          {user.profile?.fullName || user.username}
          <Badge variant={user.isActive ? "default" : "secondary"}>
            {user.isActive ? "アクティブ" : "非アクティブ"}
          </Badge>
          <Badge variant="outline">{toRoleText(user.role)}</Badge>
        </h2>
        <p className="font-semibold text-gray-500">@{user.username}</p>
      </div>
    </div>
  );
};
