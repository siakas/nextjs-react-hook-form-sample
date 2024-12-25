import { useRouter } from "next/router";
import { Pencil, Trash2 } from "lucide-react";
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

  const users = useUserStore((state) => state.users);
  const deleteUser = useUserStore((state) => state.deleteUser);

  /** ユーザーの削除 */
  const handleDelete = (id: string, username: string) => {
    deleteUser(id);
    toast(`${username}のデータを削除しました`);
  };

  /** ユーザー編集画面に遷移 */
  const handleEdit = (id: string) => {
    router.push(`/user/${id}/edit`);
  };

  if (users.length === 0) {
    return <p className="mt-6">登録されているユーザーはいません</p>;
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
              <TableHead className="whitespace-nowrap">ニックネーム</TableHead>
              <TableHead className="whitespace-nowrap">名前</TableHead>
              <TableHead className="whitespace-nowrap">
                メールアドレス
              </TableHead>
              <TableHead className="whitespace-nowrap">ステータス</TableHead>
              <TableHead className="whitespace-nowrap">アクセス権</TableHead>
              <TableHead className="whitespace-nowrap">&nbsp;</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  <Avatar>
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>{user.name[0]}</AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell className="whitespace-nowrap">{user.name}</TableCell>
                <TableCell className="whitespace-nowrap">
                  {user.fullName}
                </TableCell>
                <TableCell className="whitespace-nowrap">
                  {user.email}
                </TableCell>
                <TableCell className="whitespace-nowrap">
                  <Badge
                    variant={user.status === "active" ? "default" : "secondary"}
                  >
                    {user.status === "active" ? "アクティブ" : "非アクティブ"}
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
                      onClick={() => handleEdit(user.id)}
                    >
                      <Pencil className="size-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleDelete(user.id, user.name)}
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
