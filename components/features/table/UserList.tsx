import { useRouter } from "next/router";
import dayjs from "dayjs";
import { Pencil, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
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
    <div className="mt-8">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>ユーザー名</TableHead>
            <TableHead>メールアドレス</TableHead>
            <TableHead>登録日時</TableHead>
            <TableHead />
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>
                <span className="text-xs text-gray-400">
                  {user.id.slice(0, 8)}
                </span>
              </TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <span className="text-xs">
                  {dayjs(user.createdAt).format("YYYY/MM/DD HH:mm:ss")}
                </span>
              </TableCell>
              <TableCell>
                <div className="flex gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleEdit(user.id)}
                  >
                    <Pencil className="size-4" />
                  </Button>
                  <Button
                    variant="ghost"
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
    </div>
  );
};
