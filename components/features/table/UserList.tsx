import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { User } from "@/types/schema";
import { getUsers } from "@/utils/storage";

export const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    setUsers(getUsers());
  }, []);

  if (users.length === 0) {
    return <p>登録されているユーザーはいません</p>;
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
                  {new Date(user.createdAt).toLocaleString()}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
