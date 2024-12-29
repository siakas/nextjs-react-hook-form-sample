import Link from "next/link";
import type { User } from "@/types";

type Props = {
  user: User;
};

export const UserProfileBio = ({ user }: Props) => {
  return (
    <>
      <h3 className="mt-6 text-lg font-semibold">プロフィール</h3>
      <div className="mt-2 space-y-1">
        <p>自己紹介：{user.profile?.bio}</p>
        <p>場所：{user.profile?.location}</p>
        {user.profile?.website && (
          <p>
            ウェブサイト：
            <Link
              href={user.profile.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline hover:no-underline"
            >
              {user.profile?.website}
            </Link>
          </p>
        )}
      </div>
    </>
  );
};
