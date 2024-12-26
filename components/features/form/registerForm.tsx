import { useRouter } from "next/router";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useUserStore } from "@/stores/userStore";
import type { User } from "@/types";
import type { RegisterFormInput } from "@/types/schema";
import { registerFormSchema } from "@/types/schema";
import { createInitialUserData } from "@/utils/createInitialUserData";

export const RegisterForm = () => {
  const router = useRouter();

  const form = useForm<RegisterFormInput>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const addUser = useUserStore((state) => state.addUser);

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

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto my-4 max-w-md space-y-4"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ユーザー名</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>メールアドレス</FormLabel>
              <FormControl>
                <Input type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>パスワード</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>パスワード（確認）</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-center gap-4 pt-2">
          <Button type="submit" className="min-w-24">
            登録
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={handleReset}
            className="min-w-24"
          >
            リセット
          </Button>
        </div>
      </form>
    </Form>
  );
};
