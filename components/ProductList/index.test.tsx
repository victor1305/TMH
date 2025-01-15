import { render, screen } from "@testing-library/react";

import { Product } from "@/lib/types";
import ProductList from ".";

const mockProducts: Product[] = [
  { id: "1", name: "Laptop", price: 1200 },
  { id: "2", name: "Smartphone", price: 800 },
];

describe("ProductList Component", () => {
  it("renders a list of products", () => {
    render(<ProductList products={mockProducts} />);

    expect(screen.getByText("Laptop")).toBeInTheDocument();
  });

  it("renders an empty list without errors", () => {
    render(<ProductList products={[]} />);

    expect(screen.queryByText("Precio:")).not.toBeInTheDocument();
  });
});