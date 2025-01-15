"use client";

import React, { useState } from "react";
import { Product } from "@/lib/types";
import ProductFilter from "../ProductFilter";
import ProductList from "../ProductList";

const Products: React.FC<{ products: Product[] }> = ({ products }) => {
  const [filter, setFilter] = useState("");
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-5">Productos</h1>
      <ProductFilter filter={filter} onFilterChange={setFilter} />
      {filteredProducts.length > 0 ? (
        <ProductList products={filteredProducts} />
      ) : (
        <p>No se encontraron productos que coincidan con el filtro.</p>
      )}
    </div>
  );
};

export default Products;
