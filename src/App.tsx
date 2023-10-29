import { useAuth } from '@/stores/auth';

import { Button } from './components/ui/button';

function App() {
  const { user, logout } = useAuth();
  return (
    <div>
      <h1 className="text-3xl font-bold text-red-200 underline">
        Hello world!
      </h1>
      <p>{JSON.stringify(user)}</p>
      <Button onClick={logout}>Logout</Button>
    </div>
  );
}

export default App;
