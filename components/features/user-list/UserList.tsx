import { useRouter } from "next/router";
import { useMemo } from "react";
import { BulkDeleteUsersDialog } from "@/components/features/dialog/BulkDeleteUsersDialog";
import { UserTableHeader } from "@/components/features/user-list/UserTableHeader";
import { UserTableRow } from "@/components/features/user-list/UserTableRow";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody } from "@/components/ui/table";
import { useUserSelection } from "@/hooks/user-list/useUserSelection";
import { cn } from "@/lib/utils";
import { useUserStore } from "@/stores/userStore";

export const UserList = () => {
  const router = useRouter();

  // URL パラメータからフィルタリング条件を取得
  const filter = router.query.filter as string;

  const users = useUserStore((state) => state.users);

  const { hasSelectedUsers, deleteSelectedUsers } = useUserSelection();

  // フィルタリング条件によってユーザーを絞り込む
  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      if (filter === "active") return user.isActive;
      if (filter === "admin") return user.role === "admin";
      return true;
    });
  }, [users, filter]);

  if (users.length === 0) {
    return null;
  }

  return (
    <Card className="my-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div>ユーザーリスト</div>
          <div
            className={cn(
              "opacity-0 transition-opacity",
              hasSelectedUsers && "opacity-100",
            )}
          >
            <BulkDeleteUsersDialog onDelete={deleteSelectedUsers} />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <UserTableHeader />
          <TableBody>
            {filteredUsers.map((user) => (
              <UserTableRow key={user.id} user={user} />
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
