import { render, screen } from "@testing-library/react";
import ProductList from "@/components/ProductList";
import { Product } from "@/lib/types";

const mockProducts: Product[] = [
  { id: "1", name: "Laptop", price: 1200 },
  { id: "2", name: "Smartphone", price: 800 },
];

describe("ProductList", () => {
  it("renders a list of products", () => {
    render(<ProductList products={mockProducts} />);

    expect(screen.getByText("Laptop")).toBeInTheDocument();
    expect(screen.getByText("Precio: $1200")).toBeInTheDocument();
    expect(screen.getByText("Smartphone")).toBeInTheDocument();
    expect(screen.getByText("Precio: $800")).toBeInTheDocument();
  });

  it("renders no products when the list is empty", () => {
    render(<ProductList products={[]} />);

    expect(screen.queryByText(/Precio/)).not.toBeInTheDocument();
  });
});