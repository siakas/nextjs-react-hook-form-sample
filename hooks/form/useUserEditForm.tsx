import { useRouter } from "next/router";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useGetUserById } from "@/hooks/useGetUserById";
import { useUserStore } from "@/stores/userStore";
import { userEditFormSchema, type UserEditFormInput } from "@/types/schema";

export const useUserEditForm = (userId: string) => {
  const router = useRouter();
  const updateUser = useUserStore((state) => state.updateUser);

  // userId に一致するユーザー情報を取得
  const { user } = useGetUserById(userId);

  // フォームの設定
  const form = useForm<UserEditFormInput>({
    resolver: zodResolver(userEditFormSchema),
    defaultValues: {
      email: "",
      profile: {
        fullName: "",
        avatarUrl: "",
        bio: "",
        location: "",
        website: "",
      },
      settings: {
        language: "",
        timezone: "",
      },
    },
  });

  /** フォーム送信処理 */
  const onSubmit = (formData: UserEditFormInput) => {
    updateUser(userId, formData);
    toast(`${user?.username}の情報を更新しました`);
    router.push(`/user/${userId}`);
  };

  return { form, user, onSubmit };
};
