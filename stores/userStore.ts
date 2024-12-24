import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import type { User } from "@/types/schema";

type UserStore = {
  /** ユーザー一覧 */
  users: User[];
  /** ユーザーを追加 */
  addUser: (user: User) => void;
  /** ユーザーを削除 */
  deleteUser: (id: string) => void;
};

export const useUserStore = create<UserStore>()(
  devtools(
    persist(
      (set) => ({
        users: [],
        addUser: (user) =>
          set(
            (state) => ({
              users: [user, ...state.users],
            }),
            false,
            "User/addUser",
          ),
        deleteUser: (id) =>
          set(
            (state) => ({
              users: state.users.filter((user) => user.id !== id),
            }),
            false,
            "User/deleteUser",
          ),
      }),
      {
        name: "UserStore",
        partialize: (state) => ({ users: state.users }),
        storage: createJSONStorage(() => localStorage),
      },
    ),
    {
      name: "UserStore",
      enabled: process.env.NODE_ENV === "production",
    },
  ),
);
