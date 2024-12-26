import { useRouter } from "next/router";
import { useMemo } from "react";
import { Eye, Pencil, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useUserStore } from "@/stores/userStore";

export const UserList = () => {
  const router = useRouter();

  // URL パラメータからフィルタリング条件を取得
  const filter = router.query.filter as string;

  const users = useUserStore((state) => state.users);
  const deleteUser = useUserStore((state) => state.deleteUser);

  // フィルタリング条件によってユーザーを絞り込む
  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      if (filter === "active") {
        return user.isActive;
      }
      if (filter === "admin") {
        return user.role === "admin";
      }
      return true;
    });
  }, [users, filter]);

  /** ユーザーの削除 */
  const handleDelete = (id: string, username: string) => {
    deleteUser(id);
    toast(`${username}のデータを削除しました`);
  };

  if (users.length === 0) {
    return null;
  }

  return (
    <Card className="my-6">
      <CardHeader>
        <CardTitle>ユーザーリスト</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-px">&nbsp;</TableHead>
              <TableHead className="w-56 whitespace-nowrap">表示名</TableHead>
              <TableHead className="w-72 whitespace-nowrap">名前</TableHead>
              <TableHead className="whitespace-nowrap">
                メールアドレス
              </TableHead>
              <TableHead className="w-40 whitespace-nowrap">
                ステータス
              </TableHead>
              <TableHead className="w-40 whitespace-nowrap">
                アクセス権
              </TableHead>
              <TableHead className="whitespace-nowrap">&nbsp;</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  <Avatar>
                    <AvatarImage
                      src={user.profile?.avatarUrl}
                      alt={user.username}
                    />
                    <AvatarFallback>{user.username[0]}</AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell className="whitespace-nowrap">
                  {user.username}
                </TableCell>
                <TableCell className="whitespace-nowrap">
                  {user.profile?.fullName || "-"}
                </TableCell>
                <TableCell className="whitespace-nowrap">
                  {user.email}
                </TableCell>
                <TableCell className="whitespace-nowrap">
                  <Badge variant={user.isActive ? "default" : "secondary"}>
                    {user.isActive ? "アクティブ" : "非アクティブ"}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge variant="outline">
                    {user.role === "admin"
                      ? "管理者"
                      : user.role === "user"
                        ? "一般ユーザー"
                        : "未設定"}
                  </Badge>
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
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleDelete(user.id, user.username)}
                    >
                      <Trash2 className="size-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
