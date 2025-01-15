import { render, screen, fireEvent } from "@testing-library/react";
import ProductFilter from "./ProductFilter";

describe("ProductFilter Component", () => {
  it("renders input with the correct placeholder", () => {
    render(<ProductFilter filter="" onFilterChange={() => {}} />);
    const input = screen.getByPlaceholderText(/Buscar productos.../i);
    expect(input).toBeInTheDocument();
  });

  it("calls onFilterChange when the input value changes", () => {
    const handleFilterChange = jest.fn();
    render(<ProductFilter filter="" onFilterChange={handleFilterChange} />);

    const input = screen.getByPlaceholderText(/Buscar productos.../i);
    fireEvent.change(input, { target: { value: "Laptop" } });

    expect(handleFilterChange).toHaveBeenCalledWith("Laptop");
  });

  it("sets the correct input value based on props", () => {
    render(<ProductFilter filter="Smartphone" onFilterChange={() => {}} />);
    const input = screen.getByPlaceholderText(/Buscar productos.../i);
    expect(input).toHaveValue("Smartphone");
  });
});