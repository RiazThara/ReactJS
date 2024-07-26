import { beforeEach, describe, expect, it, vi } from "vitest";
import {
  render,
  screen,
  waitForElementToBeRemoved,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import App from "./App.tsx";


const mockResponse = [
  {
    id: "1",
    title: "Things Fall Apart",
    author: "Chinua Achebe",
    published: "1958",
    country: "Nigeria",
    lang: "English",
    pages: "209",
    image: "things-fall-apart.jpg",
    url: "https://en.wikipedia.org/wiki/Things_Fall_Apart",
    price: "5",
  },
];

// Mock the global fetch function
beforeEach(() =>{
  vi.spyOn(global, "fetch").mockResolvedValue({
    json: vi.fn().mockResolvedValue(mockResponse),
  });
});

describe("App Component", () => {
  it("should remove loading message once data is loaded", async () => {
    render(<App />);

    // Verify the loading message is in the document initially
    expect(screen.getByRole("status")).toBeInTheDocument();

    // Wait for the isLoading state to be false
    await waitFor(
      () => {
        expect(screen.queryByRole("status")).not.toBeInTheDocument();
      }
    );
    screen.debug();
    // Verify that the loaded data is displayed
    expect(screen.getByText("Welcome to React Bookstore")).toBeInTheDocument();
  });

});
