import React from "react";
import King from "../models/King";
import Queen from "../models/Queen";
import Pawn from "../models/Pawn";

const PieceSelector = ({ onMoveCalculated, setPosition, position }) => {
  // State for selected chess piece and board position
  const [piece, setPiece] = React.useState("King");

  // Handles dropdown selection change for chess piece
  const handlePieceChange = (event) => {
    setPiece(event.target.value);
  };

  // Handles position input change
  const handlePositionChange = (event) => {
    setPosition(event.target.value.toUpperCase()); // Ensure uppercase for consistency
  };

  // Calculates possible moves based on the selected piece and position
  const calculateMoves = () => {
    if (!position) return; // Ensure position is provided
    // Mapping of piece names to their respective classes
    const pieceClasses = {
      King: King,
      Queen: Queen,
      Pawn: Pawn, // Default piece
    };

    // Get the appropriate piece class or default to Pawn
    const PieceClass = pieceClasses[piece] || Pawn;

    // Instantiate the piece with the given position
    const pieceInstance = new PieceClass(position);

    // Retrieve possible moves from the piece instance
    const moves = pieceInstance.getPossibleMoves();

    // Call parent handler with calculated moves
    onMoveCalculated(moves);
  };

  return (
    <div className="piece-selector-component">
      {/* Dropdown for selecting a chess piece */}
      <label htmlFor="piece-selector">Select a piece:</label>
      <select
        id="piece-selector"
        data-testid="piece-selector"
        value={piece}
        onChange={handlePieceChange}
      >
        <option value="Pawn">Pawn</option>
        <option value="King">King</option>
        <option value="Queen">Queen</option>
      </select>

      <br />
      <br />

      {/* Input field for entering board position */}
      <label htmlFor="position-input">Enter position:</label>
      <input
        id="position-input"
        data-testid="position-input"
        type="text"
        value={position}
        onChange={handlePositionChange}
      />

      <br />
      <br />

      {/* Button to trigger move calculation */}
      <button data-testid="calculate-btn" onClick={calculateMoves}>
        Calculate Moves
      </button>
      <br />
      <br />
    </div>
  );
};

export default PieceSelector;
