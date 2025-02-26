import React from "react";
import { render, screen } from "@testing-library/react";
import MoveDisplay from "../components/MoveDisplay";
import "@testing-library/jest-dom";

describe("MoveDisplay Component", () => {
  test("renders move display", () => {
    render(<MoveDisplay moves={[]} />);
    const textElement = screen.getByTestId("moves-text");
    expect(textElement).toBeInTheDocument();
  });

  test("displays 'No moves available' when there are no moves", () => {
    render(<MoveDisplay moves={[]} />);
    const textElement = screen.getByTestId("moves-text");
    expect(textElement).toHaveTextContent("No moves available");
  });

  test("displays correct moves when available", () => {
    const sampleMoves = ["A3", "B4", "C5"];
    render(<MoveDisplay moves={sampleMoves} />);
    const textElement = screen.getByTestId("moves-text");
    expect(textElement).toHaveTextContent("A3, B4, C5");
  });
});
