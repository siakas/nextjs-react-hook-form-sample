import type { AppSettings, User } from "@/types/schema";

const USERS_KEY = "registered_users" as const;
const SETTINGS_KEY = "app_settings" as const;

export const defaultSettings: AppSettings = {
  minPasswordLength: 8,
  requireSpecialChar: false,
  allowedDomains: [],
  customErrorMessages: {
    username: "ユーザー名が無効です",
    email: "メールアドレスが無効です",
    password: "パスワードが無効です",
  },
  theme: "light",
};

/**
 * ローカルストレージに保存されたユーザー一覧を取得
 */
export const getUsers = (): User[] => {
  if (typeof window === "undefined") return [];

  const savedUsers = localStorage.getItem(USERS_KEY);
  return savedUsers ? JSON.parse(savedUsers) : [];
};

/**
 * ユーザー情報をローカルストレージに保存
 */
export const saveUser = (user: User) => {
  const users = getUsers();
  const updatedUsers = [user, ...users];
  localStorage.setItem(USERS_KEY, JSON.stringify(updatedUsers));
};

/**
 * ローカルストレージに保存されたアプリ設定を取得
 */
export const getSettings = (): AppSettings => {
  if (typeof window === "undefined") return defaultSettings;

  const savedSettings = localStorage.getItem(SETTINGS_KEY);
  return savedSettings ? JSON.parse(savedSettings) : defaultSettings;
};

/**
 * アプリ設定をローカルストレージに保存
 */
export const saveSettings = (settings: AppSettings) => {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
};
