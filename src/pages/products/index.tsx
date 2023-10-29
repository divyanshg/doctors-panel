import { useProducts } from '../../stores/products';

function Products() {
  const { products } = useProducts();

  return (
    <div>
      <div>
        <ul>
          {(products as any[])?.map((product: any) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      </div>
      {/* <Button onClick={refetch as never}>Refresh</Button> */}
    </div>
  );
}

export default Products;
