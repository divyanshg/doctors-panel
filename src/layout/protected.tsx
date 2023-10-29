import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { useAuth } from '@/stores/auth';

function Protected() {
  const location = useLocation();

  const { isAuthenticated, user, token } = useAuth();

  if (!isAuthenticated || !user || !token) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <Outlet />;
}

export default Protected;
