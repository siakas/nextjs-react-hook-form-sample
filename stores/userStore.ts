import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import type { User } from "@/types";
import type { BulkUpdateUsersHandler } from "@/types/callbacks";
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
  /** ユーザー情報一括更新 */
  bulkUpdateUsers: BulkUpdateUsersHandler;

  /** 選択されたユーザーの ID 一覧 */
  selectedUserIds: string[];
  /** 個別のユーザー選択を切り替え */
  toggleUserSelection: (userId: string) => void;
  /** すべてのユーザー選択を切り替え */
  toggleAllUsers: () => void;
  /** ユーザー選択を解除 */
  clearSelection: () => void;
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
        bulkUpdateUsers: (updates) =>
          set(
            (state) => ({
              users: state.users.map((user) => {
                const update = updates.find((u) => u.id === user.id);
                return update
                  ? {
                      ...user,
                      isActive: update.isActive,
                      role: update.role,
                    }
                  : user;
              }),
            }),
            false,
            "User/bulkUpdateUsers",
          ),

        selectedUserIds: [],
        toggleUserSelection: (userId) =>
          set(
            (state) => ({
              selectedUserIds: state.selectedUserIds.includes(userId)
                ? state.selectedUserIds.filter((id) => id !== userId)
                : [...state.selectedUserIds, userId],
            }),
            false,
            "User/toggleUserSelection",
          ),
        toggleAllUsers: () =>
          set((state) => ({
            selectedUserIds:
              state.selectedUserIds.length === state.users.length
                ? []
                : state.users.map((user) => user.id),
          })),
        clearSelection: () =>
          set({ selectedUserIds: [] }, false, "User/clearSelection"),
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
