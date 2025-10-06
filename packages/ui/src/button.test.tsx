import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from "./button";

describe("Button", () => {
  it("should render with children", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeTruthy();
  });

  it("should apply primary variant styles by default", () => {
    render(<Button>Primary</Button>);
    const button = screen.getByText("Primary");
    expect(button.className).toContain("bg-blue-600");
  });

  it("should apply secondary variant styles", () => {
    render(<Button variant="secondary">Secondary</Button>);
    const button = screen.getByText("Secondary");
    expect(button.className).toContain("bg-gray-600");
  });

  it("should apply outline variant styles", () => {
    render(<Button variant="outline">Outline</Button>);
    const button = screen.getByText("Outline");
    expect(button.className).toContain("border");
  });
});
