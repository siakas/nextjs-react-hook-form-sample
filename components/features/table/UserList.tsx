import dayjs from "dayjs";
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
  const users = useUserStore((state) => state.users);

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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
