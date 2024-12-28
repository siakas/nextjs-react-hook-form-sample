import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import type { User } from "@/types";
import type { UserEditFormInput } from "@/types/schema";

type UserStore = {
  /** ユーザー一覧 */
  users: User[];
  /** ユーザー追加 */
  addUser: (user: User) => void;
  /** ユーザー削除 */
  deleteUser: (id: string) => void;
  /** ユーザー情報更新 */
  updateUser: (id: string, updates: UserEditFormInput) => void;
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
        updateUser: (id, updates) =>
          set(
            (state) => ({
              users: state.users.map((user) =>
                user.id === id
                  ? {
                      ...user,
                      email: updates.email,
                      profile: updates.profile,
                      settings: {
                        ...user.settings,
                        language: updates.settings.language,
                        timezone: updates.settings.timezone,
                      },
                    }
                  : user,
              ),
            }),
            false,
            "User/updateUser",
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
