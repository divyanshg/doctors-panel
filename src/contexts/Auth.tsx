import { createContext, useCallback, useContext, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { useLocalStorage } from '@/hooks/useLocalStorage';

interface AuthProps {
  user: unknown | null;
  login: (data: unknown) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthProps>({
  user: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useLocalStorage("user", null);
  const navigate = useNavigate();

  // call this function when you want to authenticate the user
  const login = useCallback(
    async (data: unknown) => {
      setUser(data);
      navigate("/profile");
    },
    [navigate, setUser]
  );

  // call this function to sign out logged in user
  const logout = useCallback(() => {
    setUser(null);
    navigate("/", { replace: true });
  }, [navigate, setUser]);

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user, login, logout]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
