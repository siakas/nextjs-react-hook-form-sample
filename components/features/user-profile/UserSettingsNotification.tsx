import { CircleCheck, CircleX } from "lucide-react";
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
    </>
  );
};
