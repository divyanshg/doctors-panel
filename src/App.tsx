import { Link } from 'react-router-dom';

import { useAuth } from '@/stores/auth';
import { useQuery } from '@tanstack/react-query';

import { Button } from './components/ui/button';
import { useProducts } from './stores/products';

// export const productsLoader = (queryClient: any) => async () => {
//   const query = productsQuery();

//   return (
//     queryClient.getQueryData(query.queryKey) ??
//     (await queryClient.fetchQuery(query))
//   );
// };

function App() {
  const { user, logout } = useAuth();
  const { getProducts } = useProducts();

  const productsQuery = () => ({
    queryKey: ["products"],
    queryFn: async () => await getProducts(),
  });

  const { data: products, refetch } = useQuery(productsQuery());

  return (
    <div>
      <h1 className="text-3xl font-bold text-red-200 underline">
        Hello world!
      </h1>
      <p>{JSON.stringify(user)}</p>
      <Button onClick={logout}>Logout</Button>
      <div>
        <ul>
          {(products as any[])?.map((product: any) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      </div>
      <Button onClick={refetch as never}>Refresh</Button>
      <Link to="/products">Products</Link>
    </div>
  );
}

export default App;
