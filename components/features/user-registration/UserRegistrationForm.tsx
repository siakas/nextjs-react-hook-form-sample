import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { InputErrorMessage } from "@/components/features/user-registration/InputErrorMessage";
import { Label } from "@/components/features/user-registration/Label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { userRegistrationSchema, type UserRegistration } from "@/types/schema";

export const UserRegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserRegistration>({
    resolver: zodResolver(userRegistrationSchema),
  });

  const onSubmit = (data: UserRegistration) => {
    toast("設定を保存しました：", {
      description: (
        <pre className="mt-2 block w-full rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <Label htmlFor="username">ユーザー名</Label>
        <Input type="text" id="username" {...register("username")} />
        {errors.username && (
          <InputErrorMessage>{errors.username.message}</InputErrorMessage>
        )}
      </div>

      <div>
        <Label htmlFor="email">メールアドレス</Label>
        <Input type="email" id="email" {...register("email")} />
        {errors.email && (
          <InputErrorMessage>{errors.email.message}</InputErrorMessage>
        )}
      </div>

      <div>
        <Label htmlFor="password">パスワード</Label>
        <Input type="password" id="password" {...register("password")} />
        {errors.password && (
          <InputErrorMessage>{errors.password.message}</InputErrorMessage>
        )}
      </div>

      <div>
        <Label htmlFor="confirmPassword">パスワード（確認）</Label>
        <Input
          type="password"
          id="confirmPassword"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <InputErrorMessage>
            {errors.confirmPassword.message}
          </InputErrorMessage>
        )}
      </div>

      <div className="flex justify-center pt-8">
        <Button type="submit">登録</Button>
      </div>
    </form>
  );
};
