import { Navigate, Outlet } from 'react-router-dom';

import Sidebar from '@/components/Sidebar';
import { useAuth } from '@/stores/auth';

function Protected() {
  const { isAuthenticated, user, token } = useAuth();

  if (!isAuthenticated || !user || !token) {
    return <Navigate to="/login" />;
  }

  return (
    <main className="flex flex-row justify-start min-h-screen">
      <Sidebar />
      <div className="flex-1 p-4 bg-gray-100">
        <Outlet />
      </div>
    </main>
  );
}

export default Protected;
