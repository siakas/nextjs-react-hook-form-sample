import { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
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

// 仮のユーザーデータ
const initialUsers = [
  {
    id: 1,
    name: "siakas",
    fullName: "Sanshiro SAKAI",
    email: "sansyo@gmail.com",
    status: "active",
    avatar: "...",
    role: "admin",
    createdAt: "2021-10-01T00:00:00Z",
    updatedAt: "2021-10-01T00:00:00Z",
  },
  {
    id: 2,
    name: "eoka",
    fullName: "Eriko Oka",
    email: "oka@gmail.com",
    status: "active",
    avatar: "...",
    role: "admin",
    createdAt: "2021-10-01T00:00:00Z",
    updatedAt: "2021-10-01T00:00:00Z",
  },
  {
    id: 3,
    name: "yossy",
    fullName: "koki yoshihara",
    email: "koki@gmail.com",
    status: "inactive",
    avatar: "...",
    role: "user",
    createdAt: "2021-10-01T00:00:00Z",
    updatedAt: "2021-10-01T00:00:00Z",
  },
  {
    id: 4,
    name: "dasa",
    fullName: "Miki Asada",
    email: "dasa@gmail.com",
    status: "active",
    avatar: "...",
    role: "user",
    createdAt: "2021-10-01T00:00:00Z",
    updatedAt: "2021-10-01T00:00:00Z",
  },
];

export const UserList = () => {
  const [users, setUsers] = useState(initialUsers);

  return (
    <Card className="my-6">
      <CardHeader>
        <CardTitle>ユーザーリスト</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="whitespace-nowrap">&nbsp;</TableHead>
              <TableHead className="whitespace-nowrap">ニックネーム</TableHead>
              <TableHead className="whitespace-nowrap">名前</TableHead>
              <TableHead className="whitespace-nowrap">
                メールアドレス
              </TableHead>
              <TableHead className="whitespace-nowrap">ステータス</TableHead>
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
                  <div className="flex gap-x-2">
                    <Button variant="outline" size="icon">
                      <Pencil className="size-4" />
                    </Button>
                    <Button variant="outline" size="icon">
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
