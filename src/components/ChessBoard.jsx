import React from "react";
import "./style.css";

const ChessBoard = ({ position = "", moves = [] }) => {
  const columns = ["A", "B", "C", "D", "E", "F", "G", "H"];
  const rows = [1, 2, 3, 4, 5, 6, 7, 8];

  // Convert position and moves to uppercase once for efficiency
  const normalizedPosition = position.toUpperCase();
  const normalizedMoves = new Set(moves.map((move) => move.toUpperCase())); // Using Set for O(1) lookup

  return (
    <div data-testid="chess-board" className="chess-board">
      {rows.reverse().map((row) =>
        columns.map((col) => {
          const cellPosition = `${col}${row}`;

          return (
            <div
              key={cellPosition}
              data-testid={`cell-${cellPosition}`}
              className={`cell 
                  ${cellPosition === normalizedPosition ? "highlighted-piece" : ""} 
                  ${normalizedMoves.has(cellPosition) ? "highlighted-move" : ""}`}
            >
              {cellPosition}
            </div>
          );
        })
      )}
    </div>
  );
};

export default ChessBoard;
