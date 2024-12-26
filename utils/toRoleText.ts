import type { UserRole } from "@/types";

export const toRoleText = (role: UserRole) => {
  switch (role) {
    case "admin":
      return "管理者";
    case "user":
      return "一般ユーザー";
    case "guest":
      return "ゲスト";
    case null:
      return "未設定";
  }
};
