import { z } from "zod";

// 基本的な検証ルール
const usernameSchema = z
  .string()
  .min(3, "ユーザー名は 3 文字以上で入力してください")
  .max(20, "ユーザー名は 20 文字以下で入力してください");

const emailSchema = z.string().email("有効なメールアドレスを入力してください");

const passwordSchema = z
  .string()
  .min(8, "パスワードは 8 文字以上で入力してください")
  .regex(/[A-Za-z]/, "英字を含める必要があります")
  .regex(/\d/, "数字を含める必要があります");

/** 新規ユーザー登録フォームのスキーマ */
export const registerFormSchema = z
  .object({
    username: usernameSchema,
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: passwordSchema,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "パスワードが一致しません",
    path: ["confirmPassword"],
  });

/** 新規ユーザー登録フォームの型 */
export type RegisterFormInput = z.infer<typeof registerFormSchema>;

/** ユーザー編集フォームのスキーマ */
export const userEditFormSchema = z.object({
  email: emailSchema,
  profile: z.object({
    fullName: z.string().max(50).optional(),
    avatarUrl: z.string().url().optional().or(z.literal("")), // TODO: 画像アップロードのバリデーションに要変更
    bio: z.string().max(500).optional(),
    location: z.string().max(100).optional(),
    website: z.string().url().optional().or(z.literal("")), // URL 形式以外に空文字も受け付ける
  }),
  settings: z.object({
    language: z.string(),
    timezone: z.string(),
  }),
});

/** ユーザー編集フォームの型 */
export type UserEditFormInput = z.infer<typeof userEditFormSchema>;

/** 通知設定フォームのスキーマ */
export const notificationsSettingsFormSchema = z.object({
  settings: z.object({
    notifications: z.object({
      email: z.boolean(),
      push: z.boolean(),
    }),
  }),
});

/** 通知設定フォームの型 */
export type NotificationsSettingsFormInput = z.infer<
  typeof notificationsSettingsFormSchema
>;

/** ステータスおよびアクセス権の一括変更スキーマ */
const userBulkUpdateSchema = z.object({
  id: z.string().uuid(),
  isActive: z.boolean(),
  role: z.enum(["admin", "user", "guest"]).nullable(),
});

/** ステータスおよびアクセス権の一括変更フォームのスキーマ */
export const bulkUpdateFormSchema = z.object({
  users: z.array(userBulkUpdateSchema),
});

/** ステータスおよびアクセス権の一括変更フォームの型 */
export type BulkUpdateFormInput = z.infer<typeof bulkUpdateFormSchema>;

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
export type AppSettings = z.infer<typeof appSettingsSchema>;
