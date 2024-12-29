import { useRouter } from "next/router";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useUserStore } from "@/stores/userStore";
import type { User } from "@/types";
import type { RegisterFormInput } from "@/types/schema";
import { registerFormSchema } from "@/types/schema";
import { createInitialUserData } from "@/utils/createInitialUserData";

export const useRegisterForm = () => {
  const router = useRouter();
  const addUser = useUserStore((state) => state.addUser);

  const form = useForm<RegisterFormInput>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  /** フォーム送信処理 */
  const onSubmit = async (formData: RegisterFormInput) => {
    // フォーム入力以外のユーザー情報のデフォルト値を生成
    const initialUserData = createInitialUserData();

    // デフォルト値を含めたユーザー情報を生成
    const newUser: User = {
      ...initialUserData,
      username: formData.username,
      email: formData.email,
      hashedPassword: formData.password, // TODO: パスワードのハッシュ化処理は別途実装
    };

    // ユーザーを保存し、フォームをリセット
    addUser(newUser);
    form.reset();

    // 通知処理
    toast("ユーザーを登録しました");

    // ページ遷移
    await router.push("/");
  };

  /** フォームリセット処理 */
  const handleReset = () => {
    form.reset();
    toast("フォームをリセットしました");
  };

  return { form, onSubmit, handleReset };
};
