import { useAuth } from '@/stores/auth';

import { Button } from './components/ui/button';

function App() {
  const { user, logout } = useAuth();
  return (
    <div>
      <p>{JSON.stringify(user)}</p>
      <Button onClick={logout}>Logout</Button>
    </div>
  );
}

export default App;
