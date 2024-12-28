import { useUserStore } from "@/stores/userStore";

/**
 * userId に一致するユーザー情報を取得するカスタムフック
 * @param userId ユーザー ID
 */
export const useUserProfile = (userId: string) => {
  const users = useUserStore((state) => state.users);
  const user = users.find((user) => user.id === userId);

  return { user };
};
