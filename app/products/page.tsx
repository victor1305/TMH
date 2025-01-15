import React from "react";

import { getProducts } from "@/lib/api";

import Products from "@/components/Products";

export default async function ProductsPage() {
  const products = await getProducts();

  return <Products products={products} />;
}
