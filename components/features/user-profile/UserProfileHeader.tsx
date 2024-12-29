import { UserAvatar } from "@/components/common/UserAvatar";
import { UserBadgeIsActive } from "@/components/common/UserBadgeIsActive";
import { UserBadgeRole } from "@/components/common/UserBadgeRole";
import type { User } from "@/types";

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
          <UserBadgeIsActive user={user} />
          <UserBadgeRole user={user} />
        </h2>
        <p className="font-semibold text-gray-500">@{user.username}</p>
      </div>
    </div>
  );
};
