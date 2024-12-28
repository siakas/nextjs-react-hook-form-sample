import { useRouter } from "next/router";
import { Eye, Pencil } from "lucide-react";
import { DeleteUserDialog } from "@/components/features/dialog/DeleteUserDialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { useUserAction } from "@/hooks/user-list/useUserAction";
import type { User } from "@/types";
import { toRoleText } from "@/utils/toRoleText";

type Props = {
  user: User;
};

export const UserTableRow = ({ user }: Props) => {
  const router = useRouter();

  const { handleDelete } = useUserAction();

  return (
    <TableRow key={user.id}>
      <TableCell>
        <Avatar>
          <AvatarImage src={user.profile?.avatarUrl} alt={user.username} />
          <AvatarFallback>{user.username[0]}</AvatarFallback>
        </Avatar>
      </TableCell>
      <TableCell className="whitespace-nowrap">{user.username}</TableCell>
      <TableCell className="whitespace-nowrap">
        {user.profile?.fullName || "-"}
      </TableCell>
      <TableCell className="whitespace-nowrap">{user.email}</TableCell>
      <TableCell className="whitespace-nowrap">
        <Badge variant={user.isActive ? "default" : "secondary"}>
          {user.isActive ? "アクティブ" : "非アクティブ"}
        </Badge>
      </TableCell>
      <TableCell>
        <Badge variant="outline">{toRoleText(user.role)}</Badge>
      </TableCell>
      <TableCell>
        <div className="flex gap-x-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => router.push(`/user/${user.id}`)}
          >
            <Eye className="size-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => router.push(`/user/${user.id}/edit`)}
          >
            <Pencil className="size-4" />
          </Button>
          <DeleteUserDialog
            onClick={() => handleDelete(user.id, user.username)}
            username={user.username}
          />
        </div>
      </TableCell>
    </TableRow>
  );
};
