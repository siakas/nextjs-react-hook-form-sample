import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
    console.log(data);
    alert("登録が完了しました");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
