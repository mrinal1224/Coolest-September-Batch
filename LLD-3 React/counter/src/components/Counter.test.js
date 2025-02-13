import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

describe("Counter Component", () => {
  render(<Counter />);
});

// Test Cases
// Initial count should be 0
// if the counter increments by 1
// if the counter decrements by 1
// on press of reset counters sets to 0

// test("renders initial count of 0", () => {
//   const counterElement = screen.getByTestId("counter");
//   expect(counterElement).toHaveTextContent("Count: 0");
// });

// if the counter increments by 1

test("the counter increments by 1", () => {
  render(<Counter/>)
  const incBtn = screen.getByTestId("increment")
  fireEvent.click(incBtn);
  expect(screen.getByTestId("counter")).toHaveTextContent("Count: 1");
});






test("the counter decrements by 1", () => {
  render(<Counter/>)
  const decBtn = screen.getByTestId("decrement")
  fireEvent.click(decBtn);
  expect(screen.getByTestId("counter")).toHaveTextContent("Count: -1");
});




