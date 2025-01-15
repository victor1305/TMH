import React from "react";
import { Product } from "@/lib/types";

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => (
  <ul className="mt-4 ml-5">
    {products.map((product) => (
      <li key={product.id} className="flex pb-2">
        <h3>{product.name}</h3>
        <p className="ml-4">${product.price}</p>
      </li>
    ))}
  </ul>
);

export default ProductList;
