/**
 * ユーザーの基本情報を定義する型
 */
export type User = {
  id: string;
  email: string;
  username: string; // 表示名
  hashedPassword: string; // ハッシュ化されたパスワード。平文のパスワードは絶対に保存しないこと
  createdAt: string;
  updatedAt: string;
  isActive: boolean; // アカウントが有効かどうか
  isEmailVerified: boolean; // メールアドレスが認証済みかどうか
  profile?: {
    fullName?: string;
    avatarUrl?: string;
    bio?: string;
    location?: string;
    website?: string;
  };
  role: UserRole;
  settings: {
    // 通知設定
    notifications: {
      email: boolean;
      push: boolean;
    };
    language: string;
    timezone: string;
  };
};

/** ユーザー権限の型 */
export type UserRole = "admin" | "user" | "guest" | null;
