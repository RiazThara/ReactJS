import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import ClickCounter from "./ClickCounter.jsx";
describe("App Component", () => {
  it("Renders", () => {
    render(<ClickCounter />);
    let element = screen.getByText(/count is/i);
    expect(element).toBeInTheDocument();
  });
});
