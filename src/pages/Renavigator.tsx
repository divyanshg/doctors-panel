import React from 'react';
import { Navigate } from 'react-router-dom';

import { useAuth } from '../stores/auth';

function Renavigator() {
  const { user } = useAuth();
  return <Navigate to={`/${user?.id}/apps`} />;
}

export default Renavigator;
