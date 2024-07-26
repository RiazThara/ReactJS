import { describe, expect, it, vi } from "vitest";
import {
  render,
  screen,
  waitForElementToBeRemoved,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import App from "./App.tsx";

///region 1
// // Mock the global fetch function
// globalThis.fetch = vi.fn(() =>
//   Promise.resolve({
//     json: () => Promise.resolve('Loaded data'),
//   })
// );

// describe("App Component", () => {
//   it("should remove loading message once data is loaded", async () => {
//     render(<App />);

//     // Verify the loading message is in the document initially
//     expect(screen.getByRole("status")).toBeInTheDocument();

//     // Wait for the isLoading state to be false
//     await waitFor(
//       () => {
//         expect(screen.queryByRole("status")).not.toBeInTheDocument();
//       },
//       { timeout: 5000 }
//     );

//     // Verify that the loaded data is displayed
//     expect(screen.getByText("Bookstore")).toBeInTheDocument();
//   });
///endregion1


describe("App Component", () => {
  it("should remove loading message once data is loaded", async () => {
    render(<App />);

    // Verify the loading message is in the document initially
    expect(screen.getByRole("status")).toBeInTheDocument();

    // Wait for the isLoading state to be false
    await waitFor(
      () => {
         expect(screen.getByText("Bookstore")).toBeInTheDocument();
      }
    );

    // Verify that the loaded data is displayed
    expect(screen.getByText("Bookstore")).toBeInTheDocument();
  });

  // it("Renders 3 components", () => {
  //   render(<App />);
  //   let element = screen.getByTestId("app-container");
  //   expect(element.children.length).toBe(3);
  //   //[...element.children].forEach((child) => console.log(child.textContent.trim().substring(0,20) + "\n"));
  // });
});
