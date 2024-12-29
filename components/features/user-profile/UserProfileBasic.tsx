import { StatusCircleIcon } from "@/components/common/StatusCircleIcon";
import type { User } from "@/types";

type Props = {
  user: User;
};

export const UserProfileBasic = ({ user }: Props) => {
  return (
    <>
      <h3 className="mt-6 text-lg font-semibold">基本情報</h3>
      <div className="mt-2 space-y-2">
        <p>{user.email}</p>
        <p>{user.hashedPassword}</p>
        <p className="flex items-center">
          メール認証：
          <StatusCircleIcon isActive={user.isEmailVerified} />
        </p>
        <p>登録日：{user.createdAt}</p>
        <p>最終更新日：{user.updatedAt}</p>
      </div>
    </>
  );
};
