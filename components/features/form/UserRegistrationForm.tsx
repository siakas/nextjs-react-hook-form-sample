import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { v4 as uuidv4 } from "uuid";
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
import type { User } from "@/types/schema";
import { userRegistrationSchema, type UserRegistration } from "@/types/schema";

export const UserRegistrationForm = () => {
  const form = useForm<UserRegistration>({
    resolver: zodResolver(userRegistrationSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const addUser = useUserStore((state) => state.addUser);

  // ID と作成日時はフォームの送信データに含まないため除外
  const onSubmit = (formData: UserRegistration) => {
    // 送信時に ID と作成日時を設定
    const newUser: User = {
      ...formData,
      id: uuidv4(),
      createdAt: new Date(),
    };

    // ユーザーを保存
    addUser(newUser);

    // フォームをリセット
    form.reset();

    toast("ユーザーを登録しました：", {
      description: (
        <pre className="mt-2 block w-full rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(newUser, null, 2)}</code>
        </pre>
      ),
    });
  };

  const handleReset = () => {
    form.reset();
    toast("フォームをリセットしました");
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
