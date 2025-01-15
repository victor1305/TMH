import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "./";

describe("TodoList Component", () => {
  it("renders input, button, and heading", () => {
    render(<TodoList />);

    expect(screen.getByPlaceholderText("Agrega una nueva tarea")).toBeInTheDocument();
    expect(screen.getByText("Agregar")).toBeInTheDocument();
    expect(screen.getByText("TodoList")).toBeInTheDocument();
  });

  it("adds a task to the list", () => {
    render(<TodoList />);

    const input = screen.getByPlaceholderText("Agrega una nueva tarea");
    const addButton = screen.getByText("Agregar");

    fireEvent.change(input, { target: { value: "Nueva tarea" } });
    fireEvent.click(addButton);

    expect(screen.getByText("Nueva tarea")).toBeInTheDocument();
    expect(input).toHaveValue("");
  });

  it("deletes a task from the list", () => {
    render(<TodoList />);

    const input = screen.getByPlaceholderText("Agrega una nueva tarea");
    const addButton = screen.getByText("Agregar");

    fireEvent.change(input, { target: { value: "Tarea a eliminar" } });
    fireEvent.click(addButton);

    expect(screen.getByText("Tarea a eliminar")).toBeInTheDocument();

    const deleteButton = screen.getByText("Eliminar");

    fireEvent.click(deleteButton);

    expect(screen.queryByText("Tarea a eliminar")).not.toBeInTheDocument();
  });

  it("renders multiple tasks correctly", () => {
    render(<TodoList />);

    const input = screen.getByPlaceholderText("Agrega una nueva tarea");
    const addButton = screen.getByText("Agregar");

    fireEvent.change(input, { target: { value: "Tarea 1" } });
    fireEvent.click(addButton);

    fireEvent.change(input, { target: { value: "Tarea 2" } });
    fireEvent.click(addButton);

    fireEvent.change(input, { target: { value: "Tarea 3" } });
    fireEvent.click(addButton);

    expect(screen.getByText("Tarea 1")).toBeInTheDocument();
    expect(screen.getByText("Tarea 2")).toBeInTheDocument();
    expect(screen.getByText("Tarea 3")).toBeInTheDocument();
  });
});
