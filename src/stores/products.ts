import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface ProductState {
  products: unknown[];
}

interface ProductAction {
  getProducts: () => Promise<unknown[]>;
  getProduct: (id: number) => Promise<unknown>;
}

const productStore = create<ProductState & ProductAction>()(
  devtools(
    (set) => ({
      products: [],
      async getProducts() {
        const response = await fetch("https://fakestoreapi.com/products");
        const products = await response.json();
        set({ products });
        return products;
      },
      async getProduct(id) {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const product = await response.json();
        return product;
      },
    })
  )
);

export const useProducts = () => productStore((state) => state);
