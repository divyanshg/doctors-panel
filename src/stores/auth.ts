import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';

type UserRoles = "USER" | "DOCTOR" | "PHARMACY";

interface User {
  firstname: string;
  lastname: string;
  role: UserRoles;
}

interface AuthState {
  token: string | null;
  user: User | null;
  isAuthenticated: boolean;
}

interface AuthActions {
  setUser: (user: User) => void;
  login: ({ user, token }: { user: User; token: string }) => void;
  logout: () => void;
}

const authStore = create<AuthState & AuthActions>()(
  devtools(
    persist(
      (set) => ({
        token: null,
        user: null,
        isAuthenticated: false,
        setUser(user) {
          set({ user, isAuthenticated: !!user });
        },
        login({ user, token }) {
          set({
            isAuthenticated: true,
            user,
            token,
          });
        },
        logout() {
          set({
            isAuthenticated: false,
            user: null,
            token: null,
          });
        },
      }),
      {
        name: "auth-storage",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);

export const useAuth = () => authStore((state) => state);
