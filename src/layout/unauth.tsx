import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '@/stores/auth';

function UnAuth() {
  const { isAuthenticated, user, token } = useAuth();

  if (isAuthenticated || user || token) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
}

export default UnAuth;
