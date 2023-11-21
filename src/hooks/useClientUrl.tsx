import { useAuth } from '../stores/auth';

function useClientUrl() {
  const { user } = useAuth();

  return (link: string) => `/${user?.id}/apps/${link}`;
}

export default useClientUrl;
