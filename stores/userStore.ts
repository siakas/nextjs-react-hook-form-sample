import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import type { User } from "@/types/schema";

type UserStore = {
  users: User[];
  actions: {
    addUser: (user: User) => void;
  };
};

export const useUserStore = create<UserStore>()(
  devtools(
    persist(
      (set) => ({
        users: [],
        actions: {
          addUser: (user) =>
            set((state) => ({ users: [user, ...state.users] })),
        },
      }),
      {
        name: "UserStore",
        storage: createJSONStorage(() => localStorage),
      },
    ),
    {
      name: "UserStore",
      enabled: process.env.NODE_ENV === "production",
    },
  ),
);
