import type { AppSettings } from "@/types/schema";

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
