import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Card } from "./card";

describe("Card", () => {
  it("should render with children", () => {
    render(<Card>Card content</Card>);
    expect(screen.getByText("Card content")).toBeTruthy();
  });

  it("should render with title", () => {
    render(<Card title="Card Title">Content</Card>);
    expect(screen.getByText("Card Title")).toBeTruthy();
  });

  it("should render with footer", () => {
    render(<Card footer={<div>Footer content</div>}>Content</Card>);
    expect(screen.getByText("Footer content")).toBeTruthy();
  });
});
