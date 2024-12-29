import { useRouter } from "next/router";
import { Eye, Pencil } from "lucide-react";
import { DeleteUserDialog } from "@/components/features/dialog/DeleteUserDialog";
import { Button } from "@/components/ui/button";
import type { User } from "@/types";

type Props = {
  user: User;
  onDelete: (id: string, username: string) => void;
};

export const UserActionButtons = ({ user, onDelete }: Props) => {
  const router = useRouter();

  return (
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
        onClick={() => onDelete(user.id, user.username)}
        username={user.username}
      />
    </div>
  );
};
