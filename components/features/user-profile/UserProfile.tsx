import { AvatarImage } from "@radix-ui/react-avatar";
import { CircleCheck, CircleX } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useUserStore } from "@/stores/userStore";
import { toRoleText } from "@/utils/toRoleText";

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
              <p className="text-xs text-gray-500">{user.id}</p>
              <h2 className="flex items-center gap-2 text-2xl font-bold">
                {user.profile?.fullName || user.username}
                <Badge variant={user.isActive ? "default" : "secondary"}>
                  {user.isActive ? "アクティブ" : "非アクティブ"}
                </Badge>
                <Badge variant="outline">{toRoleText(user.role)}</Badge>
              </h2>
              <p className="font-semibold text-gray-500">@{user.username}</p>
            </div>
          </div>
          <h3 className="mt-6 text-lg font-semibold">基本情報</h3>
          <div className="mt-2 space-y-2">
            <p>{user.email}</p>
            <p>{user.hashedPassword}</p>
            <p className="flex items-center">
              メール認証：
              {user.isEmailVerified ? (
                <CircleCheck className="size-4 text-green-500" />
              ) : (
                <CircleX className="size-4 text-red-500" />
              )}
            </p>
            <p>登録日：{user.createdAt}</p>
            <p>最終更新日：{user.updatedAt}</p>
          </div>
          <h3 className="mt-6 text-lg font-semibold">プロフィール</h3>
          <div className="mt-2 space-y-1">
            <p>自己紹介：{user.profile?.bio}</p>
            <p>場所：{user.profile?.location}</p>
            <p>ウェブサイト：{user.profile?.website}</p>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold">設定</h2>
          <h3 className="mt-6 text-lg font-semibold">通知設定</h3>
          <div className="mt-2 space-y-1">
            <p className="flex items-center">
              メール通知：
              {user.settings.notifications.email ? (
                <CircleCheck className="size-4 text-green-500" />
              ) : (
                <CircleX className="size-4 text-red-500" />
              )}
            </p>
            <p className="flex items-center">
              プッシュ通知：
              {user.settings.notifications.push ? (
                <CircleCheck className="size-4 text-green-500" />
              ) : (
                <CircleX className="size-4 text-red-500" />
              )}
            </p>
          </div>
          <h3 className="mt-6 text-lg font-semibold">その他の設定</h3>
          <div className="mt-2 space-y-1">
            <p>言語：{user.settings.language}</p>
            <p>タイムゾーン：{user.settings.timezone}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
