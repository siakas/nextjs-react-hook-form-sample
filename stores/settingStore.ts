import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import type { AppSettings } from "@/types/schema";

type SettingStore = {
  settings: AppSettings;
  updateSettings: (settings: AppSettings) => void;
};

/** デフォルト設定 */
const initialSettings: AppSettings = {
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

export const useSettingStore = create<SettingStore>()(
  devtools(
    persist(
      (set) => ({
        settings: initialSettings,
        updateSettings: (newSettings) =>
          set(() => ({
            settings: newSettings,
          })),
      }),
      {
        name: "SettingStore",
        partialize: (state) => ({
          settings: state.settings,
        }),
        storage: createJSONStorage(() => localStorage),
      },
    ),
    {
      name: "SettingStore",
      enabled: process.env.NODE_ENV === "production",
    },
  ),
);
