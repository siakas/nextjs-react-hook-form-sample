import { v4 as uuidv4 } from "uuid";
import type { User } from "@/types";

/**
 * 新規ユーザー登録時の初期値を生成
 */
export const createInitialUserData = (): Omit<
  User,
  "email" | "username" | "hashedPassword"
> => ({
  id: uuidv4(),
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  isActive: true,
  isEmailVerified: false,
  profile: {
    fullName: "",
    avatarUrl: "",
    bio: "",
    location: "",
    website: "",
  },
  role: null,
  settings: {
    notifications: {
      email: false,
      push: false,
    },
    language: "ja",
    timezone: "Asia/Tokyo",
  },
});
