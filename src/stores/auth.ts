import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';

export type UserRoles = "USER" | "DOCTOR" | "PHARMACY";

interface User {
  firstname: string;
  lastname: string;
  email?: string;
  role: UserRoles;
}

interface AuthState {
  token: string | null;
  user: User | null;
  isAuthenticated: boolean;
}

interface AuthActions {
  setUser: (user: User) => void;
  login: ({ email, password }: { email: string; password: string }) => void;
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
        login({ email, password }) {
          set({
            isAuthenticated: true,
            user: {
              firstname: "John",
              lastname: "Doe",
              role: "DOCTOR",
              email,
            },
            token: "1234567890",
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
