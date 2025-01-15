import React from "react";
import { render, screen } from "@testing-library/react";
import UserProfile from "./";
import { User } from "@/lib/types";

describe("UserProfile Component", () => {
  const mockUser: User = {
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "https://via.placeholder.com/100",
  };

  it("renders the user's name, email, and avatar", () => {
    render(<UserProfile {...mockUser} />);

    expect(screen.getByText(mockUser.name)).toBeInTheDocument();
    expect(screen.getByText(mockUser.email)).toBeInTheDocument();
    const avatar = screen.getByAltText(mockUser.name);
    expect(avatar).toBeInTheDocument();
    expect(avatar.getAttribute("src")).toContain(encodeURIComponent(mockUser.avatar));
  });

  it("renders the image with the correct dimensions", () => {
    render(<UserProfile {...mockUser} />);

    const avatar = screen.getByAltText(mockUser.name);
    expect(avatar).toHaveAttribute("width", "100");
    expect(avatar).toHaveAttribute("height", "100");
  });

});