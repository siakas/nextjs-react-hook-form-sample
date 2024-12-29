import { StatusCircleIcon } from "@/components/common/StatusCircleIcon";
import type { User } from "@/types";

type Props = {
  user: User;
};

export const UserSettingsNotification = ({ user }: Props) => {
  return (
    <>
      <h3 className="mt-6 text-lg font-semibold">通知設定</h3>
      <div className="mt-2 space-y-1">
        <p className="flex items-center">
          メール通知：
          <StatusCircleIcon isActive={user.settings.notifications.email} />
        </p>
        <p className="flex items-center">
          プッシュ通知：
          <StatusCircleIcon isActive={user.settings.notifications.push} />
        </p>
      </div>
    </>
  );
};
