import { UserAvatar } from "@/components/common/UserAvatar";
import { UserBadgeIsActive } from "@/components/common/UserBadgeIsActive";
import { UserBadgeRole } from "@/components/common/UserBadgeRole";
import { UserActionButtons } from "@/components/features/user-list/UserActionButtons";
import { TableCell, TableRow } from "@/components/ui/table";
import { useUserAction } from "@/hooks/user-list/useUserAction";
import type { User } from "@/types";

type Props = {
  user: User;
};

export const UserTableRow = ({ user }: Props) => {
  const { handleDelete } = useUserAction();

  return (
    <TableRow key={user.id}>
      <TableCell>
        <UserAvatar src={user.profile?.avatarUrl} username={user.username} />
      </TableCell>
      <TableCell className="whitespace-nowrap">{user.username}</TableCell>
      <TableCell className="whitespace-nowrap">
        {user.profile?.fullName || "-"}
      </TableCell>
      <TableCell className="whitespace-nowrap">{user.email}</TableCell>
      <TableCell className="whitespace-nowrap">
        <UserBadgeIsActive user={user} />
      </TableCell>
      <TableCell>
        <UserBadgeRole user={user} />
      </TableCell>
      <TableCell>
        <UserActionButtons user={user} onDelete={handleDelete} />
      </TableCell>
    </TableRow>
  );
};
