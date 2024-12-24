import { z } from "zod";

/**
 * ユーザー登録フォームのスキーマ
 */
export const userRegistrationSchema = z.object({
  username: z
    .string()
    .min(3, "ユーザー名は3文字以上で入力してください")
    .max(20, "ユーザー名は20文字以下で入力してください"),
  email: z.string().email("有効なメールアドレスを入力してください"),
  password: z
    .string()
    .min(8, "パスワードは8文字以上で入力してください")
    .regex(
      /^(?=.*[A-Za-z])(?=.*\d)/,
      "パスワードは英字と数字を含める必要があります",
    ),
  confirmPassword: z.string().min(1, "確認用のパスワードを入力してください"),
});

// 確認用のパスワードが一致していることを確認
// スキーマ定義と合わせて refine で拡張すると、extend が使えなくなるため別途定義している
userRegistrationSchema.refine(
  (data) => data.password === data.confirmPassword,
  {
    message: "パスワードが一致しません",
    path: ["confirmPassword"],
  },
);

/**
 * ストレージ管理するユーザー情報のスキーマ
 */
export const userSchema = userRegistrationSchema.extend({
  id: z.string().uuid(),
  createdAt: z.date(),
});

/**
 * アプリケーション設定のスキーマ
 */
export const appSettingsSchema = z.object({
  minPasswordLength: z.number().min(6).max(30),
  requireSpecialChar: z.boolean(),
  allowedDomains: z.array(z.string()),
  customErrorMessages: z.object({
    username: z.string(),
    email: z.string(),
    password: z.string(),
  }),
  theme: z.enum(["light", "dark"]),
});

export type UserRegistration = z.infer<typeof userRegistrationSchema>;
export type User = z.infer<typeof userSchema>;
export type AppSettings = z.infer<typeof appSettingsSchema>;
