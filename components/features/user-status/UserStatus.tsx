import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useUserStore } from "@/stores/userStore";

export const UserStatus = () => {
  const users = useUserStore((state) => state.users);

  const totalUsers = users.length;
  const activeUsers = users.filter((user) => user.status === "active").length;
  const adminUsers = users.filter((user) => user.role === "admin").length;

  return (
    <div className="my-4 grid grid-cols-3 gap-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-medium">総ユーザー数</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-bold">{totalUsers}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-medium">
            アクティブユーザー
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-bold">{activeUsers}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-medium">管理者</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-bold">{adminUsers}</div>
        </CardContent>
      </Card>
    </div>
  );
};
