import { AvatarImage } from "@radix-ui/react-avatar";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { useUserStore } from "@/stores/userStore";

type Props = {
  userId: string;
};

export const UserProfile = ({ userId }: Props) => {
  // ストアからユーザー一覧を取得
  const users = useUserStore((state) => state.users);

  // userId に一致するユーザー情報を取得
  const user = users.find((user) => user.id === userId);

  if (!user) {
    return null;
  }

  return (
    <div className="my-4 grid grid-cols-2 gap-6">
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <Avatar className="size-20">
              <AvatarImage src={user.profile?.avatarUrl} alt={user.username} />
              <AvatarFallback>{user.username[0].toUpperCase()}</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-2xl font-bold">
                {user.profile?.fullName || user.username}
              </h2>
              <p className="font-semibold text-gray-500">@{user.username}</p>
            </div>
          </div>
          <h3 className="mt-6 text-lg font-semibold">基本情報</h3>
          <h3 className="mt-6 text-lg font-semibold">プロフィール</h3>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold">設定</h2>
          <h3 className="mt-6 text-lg font-semibold">通知設定</h3>
          <h3 className="mt-6 text-lg font-semibold">その他の設定</h3>
        </CardContent>
      </Card>
    </div>
  );
};
