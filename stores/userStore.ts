import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import type { User } from "@/types/schema";

type UserStore = {
  users: User[];
  addUser: (user: User) => void;
};

export const useUserStore = create<UserStore>()(
  devtools(
    persist(
      (set) => ({
        users: [],
        addUser: (user) =>
          set(
            (state) => ({ users: [user, ...state.users] }),
            false,
            "User/addUser",
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
