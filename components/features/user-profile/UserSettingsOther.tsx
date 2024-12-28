import type { User } from "@/types";

type Props = {
  user: User;
};

export const UserSettingsOther = ({ user }: Props) => {
  return (
    <>
      <h3 className="mt-6 text-lg font-semibold">その他の設定</h3>
      <div className="mt-2 space-y-1">
        <p>言語：{user.settings.language}</p>
        <p>タイムゾーン：{user.settings.timezone}</p>
      </div>
    </>
  );
};
