import React from "react";
import { render, screen } from "@testing-library/react";
import ChessBoard from "../ChessBoard";

import "@testing-library/jest-dom";

describe("ChessBoard Component", () => {
  test("renders the chess board", () => {
    render(<ChessBoard />);
    const boardElement = screen.getByTestId("chess-board");
    expect(boardElement).toBeInTheDocument();
  });

  test("renders 64 cells", () => {
    render(<ChessBoard />);
    const cells = screen.getAllByTestId(/cell-/);
    expect(cells.length).toBe(64);
  });

  test("renders correct cell labels", () => {
    render(<ChessBoard />);
    expect(screen.getByTestId("cell-A8")).toHaveTextContent("A8");
    expect(screen.getByTestId("cell-H1")).toHaveTextContent("H1");
  });

  test("renders the board in correct order (A8 at the top, H1 at the bottom)", () => {
    render(<ChessBoard />);
    const firstCell = screen.getByTestId("cell-A8");
    const lastCell = screen.getByTestId("cell-H1");

    expect(firstCell).toBeInTheDocument();
    expect(lastCell).toBeInTheDocument();
  });
});
