import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import PieceSelector from "../PieceSelector";

import "@testing-library/jest-dom";

describe("PieceSelector Component", () => {
  test("renders the piece selector dropdown", () => {
    render(<PieceSelector onMoveCalculated={jest.fn()} />);
    const selectElement = screen.getByTestId("piece-selector");
    expect(selectElement).toBeInTheDocument();
  });

  test("renders the position input field", () => {
    render(<PieceSelector onMoveCalculated={jest.fn()} />);
    const inputElement = screen.getByTestId("position-input");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.value).toBe("D4");
  });

  test("renders the calculate button", () => {
    render(<PieceSelector onMoveCalculated={jest.fn()} />);
    const buttonElement = screen.getByTestId("calculate-btn");
    expect(buttonElement).toBeInTheDocument();
  });

  test("updates piece selection", () => {
    render(<PieceSelector onMoveCalculated={jest.fn()} />);
    const selectElement = screen.getByTestId("piece-selector");

    fireEvent.change(selectElement, { target: { value: "King" } });

    expect(selectElement.value).toBe("King");
  });

  test("updates position input", () => {
    render(<PieceSelector onMoveCalculated={jest.fn()} />);
    const inputElement = screen.getByTestId("position-input");

    fireEvent.change(inputElement, { target: { value: "E5" } });

    expect(inputElement.value).toBe("E5");
  });

  test("triggers move calculation on button click", () => {
    const mockOnMoveCalculated = jest.fn();
    render(<PieceSelector onMoveCalculated={mockOnMoveCalculated} />);

    const buttonElement = screen.getByTestId("calculate-btn");
    fireEvent.click(buttonElement);

    expect(mockOnMoveCalculated).toHaveBeenCalled();
  });
});
