import { UserProfileBasic } from "@/components/features/user-profile/UserProfileBasic";
import { UserProfileBio } from "@/components/features/user-profile/UserProfileBio";
import { UserProfileHeader } from "@/components/features/user-profile/UserProfileHeader";
import { UserSettingsNotification } from "@/components/features/user-profile/UserSettingsNotification";
import { UserSettingsOther } from "@/components/features/user-profile/UserSettingsOther";
import { Card, CardContent } from "@/components/ui/card";
import { useGetUserById } from "@/hooks/useGetUserById";

type Props = {
  userId: string;
};

export const UserProfile = ({ userId }: Props) => {
  const { user } = useGetUserById(userId);

  if (!user) {
    return null;
  }

  return (
    <div className="my-4 grid grid-cols-2 gap-6">
      <Card>
        <CardContent className="p-6">
          <UserProfileHeader user={user} />
          <UserProfileBasic user={user} />
          <UserProfileBio user={user} />
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold">設定</h2>
          <UserSettingsNotification user={user} />
          <UserSettingsOther user={user} />
        </CardContent>
      </Card>
    </div>
  );
};
