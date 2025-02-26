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
    expect(inputElement).toHaveValue(""); // Default empty value
  });

  test("renders the calculate button", () => {
    render(<PieceSelector onMoveCalculated={jest.fn()} />);
    const buttonElement = screen.getByTestId("calculate-btn");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent("Calculate Moves");
  });

  test("updates piece selection", () => {
    render(<PieceSelector onMoveCalculated={jest.fn()} />);
    const selectElement = screen.getByTestId("piece-selector");

    fireEvent.change(selectElement, { target: { value: "Queen" } });

    expect(selectElement.value).toBe("Queen");
  });

  test("updates position input field when user types", () => {
    render(
      <PieceSelector
        onMoveCalculated={jest.fn()}
        position="E5"
        setPosition={jest.fn()}
      />
    );
    const inputElement = screen.getByTestId("position-input");

    fireEvent.change(inputElement, { target: { value: "E5" } });

    expect(inputElement.value).toBe("E5");
  });

  test("triggers move calculation on button click", () => {
    const mockOnMoveCalculated = jest.fn();
    render(
      <PieceSelector
        onMoveCalculated={mockOnMoveCalculated}
        position="E5"
        setPosition={jest.fn()}
      />
    );

    const buttonElement = screen.getByTestId("calculate-btn");
    fireEvent.click(buttonElement);

    expect(mockOnMoveCalculated).toHaveBeenCalled();
  });

  test("does not call onMoveCalculated if position input is empty", () => {
    const mockOnMoveCalculated = jest.fn();
    render(
      <PieceSelector
        onMoveCalculated={mockOnMoveCalculated}
        position=""
        setPosition={jest.fn()}
      />
    );

    const buttonElement = screen.getByTestId("calculate-btn");
    fireEvent.click(buttonElement);

    expect(mockOnMoveCalculated).not.toHaveBeenCalled();
  });
});
