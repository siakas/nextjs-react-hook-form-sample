import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { BulkDeleteUsersDialog } from "@/components/features/dialog/BulkDeleteUsersDialog";
import { UserTableHeader } from "@/components/features/user-list/UserTableHeader";
import { UserTableRow } from "@/components/features/user-list/UserTableRow";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody } from "@/components/ui/table";
import { useUserSelection } from "@/hooks/user-list/useUserSelection";
import { cn } from "@/lib/utils";
import { dummyUsers } from "@/mock/dummyUsers";
import { useUserStore } from "@/stores/userStore";

export const UserList = () => {
  const router = useRouter();

  // URL パラメータからフィルタリング条件を取得
  const filter = router.query.filter as string;

  const users = useUserStore((state) => state.users);
  const addUser = useUserStore((state) => state.addUser);

  const { hasSelectedUsers, deleteSelectedUsers } = useUserSelection();

  // 検証用：テストデータを追加する関数
  const addTestUsers = () => {
    dummyUsers.forEach((user) => {
      addUser(user);
    });
  };

  // フィルタリング条件によってユーザーを絞り込む
  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      if (filter === "active") return user.isActive;
      if (filter === "admin") return user.role === "admin";
      return true;
    });
  }, [users, filter]);

  if (users.length === 0) {
    return (
      <Card>
        <CardContent className="p-6">
          <p className="text-center">ユーザーが登録されていません。</p>
          <div className="mt-4 flex justify-center gap-4">
            <Button asChild>
              <Link href="/user/new">新規ユーザー登録</Link>
            </Button>
            {/* テストデータを追加するボタン */}
            <Button
              variant="outline"
              onClick={() => {
                addTestUsers();
              }}
            >
              テストデータ追加
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="my-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div>ユーザーリスト</div>
          <div
            className={cn(
              "opacity-0 transition-opacity invisible",
              hasSelectedUsers && "opacity-100 visible",
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
