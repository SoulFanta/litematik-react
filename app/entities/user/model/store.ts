import { devtools } from "zustand/middleware";
import { createJSONStorage, persist } from "zustand/middleware";
import { create } from "zustand/react";
import type { TelegramAuthUser } from "~/entities/telegram-user/model/types";



type UserState = {
    user: TelegramAuthUser | null;
    setUser: (user: TelegramAuthUser) => void;  // вставить/обновить
    clearUser: () => void;          // удалить
};

export const useUserStore = create<UserState>()(devtools(persist(
    (set) => ({
        user: null,
        setUser: (user) => set({ user }),
        clearUser: () => set({ user: null }),
    }),
    {
        name: "user-store",
        storage: createJSONStorage(() => localStorage),
    }
))
);

export const selectUser = (s: UserState) => s.user;
export const selectSetUser = (s: UserState) => s.setUser;
export const selectClearUser = (s: UserState) => s.clearUser;