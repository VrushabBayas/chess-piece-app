import React from "react";
import "./style.css";

const ChessBoard = ({ position = "", moves = [] }) => {
  const columns = ["A", "B", "C", "D", "E", "F", "G", "H"];
  const rows = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div data-testid="chess-board" className="chess-board">
      {rows.reverse().map((row) =>
        columns.map((col) => {
          const cellPosition = `${col}${row}`.toUpperCase();
          const isPiecePosition = cellPosition === position.toUpperCase();
          const isMovePosition = moves
            .map((move) => move.toUpperCase())
            .includes(cellPosition);

          return (
            <div
              key={cellPosition}
              data-testid={`cell-${cellPosition}`}
              className={`cell 
                ${isPiecePosition ? "highlighted-piece" : ""} 
                ${isMovePosition ? "highlighted-move" : ""}`}
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
