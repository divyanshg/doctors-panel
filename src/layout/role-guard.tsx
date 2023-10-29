import { Navigate, Outlet } from 'react-router-dom';

import { useAuth, UserRoles } from '@/stores/auth';

import Doctor from './roles/doctor';

interface GuardProps {
  routeFor?: UserRoles[];
}

const ComingSoon = ({ children }: { children?: React.ReactNode }) => {
  return <div>Coming soon</div>;
};

const Layouts = {
  USER: ComingSoon,
  DOCTOR: Doctor,
  PHARMACY: ComingSoon,
};

function RoleGuard({ routeFor }: GuardProps) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (routeFor) {
    const userHasRequiredRole =
      user && routeFor.includes(user.role) ? true : false;

    if (!userHasRequiredRole) {
      return <div>Unauthorized</div>;
    }

    const Layout = Layouts[user.role];

    return (
      <Layout>
        <Outlet />
      </Layout>
    );
  } else {
    return <Outlet />;
  }
}

export default RoleGuard;
