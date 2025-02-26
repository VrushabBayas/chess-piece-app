import React from "react";
import "./style.css";

export default function ChessBoard() {
  const columns = ["A", "B", "C", "D", "E", "F", "G", "H"];
  const rows = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div data-testid="chess-board" className="chess-board">
      {rows.reverse().map((row) =>
        columns.map((col) => (
          <div key={col} data-testid={`cell-${col}${row}`} className="cell">
            {col + row}
          </div>
        ))
      )}
    </div>
  );
}
