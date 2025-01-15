import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ProductFilter from "./";

describe("ProductFilter Component", () => {
  it("renders the input field with the correct placeholder", () => {
    render(<ProductFilter filter="" onFilterChange={() => {}} />);

    const inputElement = screen.getByPlaceholderText("Buscar productos...");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue("");
  });

  it("renders the label correctly", () => {
    render(<ProductFilter filter="" onFilterChange={() => {}} />);

    const labelElement = screen.getByLabelText("Filtrar productos:");
    expect(labelElement).toBeInTheDocument();
  });

  it("calls onFilterChange when the input value changes", () => {
    const handleFilterChange = jest.fn();
    render(<ProductFilter filter="" onFilterChange={handleFilterChange} />);

    const inputElement = screen.getByPlaceholderText("Buscar productos...");
    fireEvent.change(inputElement, { target: { value: "Laptop" } });

    expect(handleFilterChange).toHaveBeenCalledTimes(1);
    expect(handleFilterChange).toHaveBeenCalledWith("Laptop");
  });

  it("displays the current filter value", () => {
    render(<ProductFilter filter="Smartphone" onFilterChange={() => {}} />);

    const inputElement = screen.getByPlaceholderText("Buscar productos...");
    expect(inputElement).toHaveValue("Smartphone");
  });
});