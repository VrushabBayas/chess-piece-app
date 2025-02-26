import React from "react";

/**
 * MoveDisplay Component
 * Displays the possible moves for a selected chess piece.
 *
 * @param {Object} props - Component props
 * @param {string[]} props.moves - Array of possible moves
 */
const MoveDisplay = ({ moves }) => {
  return (
    <div className="move-display">
      {/* Heading for possible moves */}
      <h3>Possible Moves:</h3>

      {/* Display moves or show fallback message */}
      <p data-testid="moves-text">
        {moves && moves.length > 0 ? moves.join(", ") : "No moves available"}
      </p>
    </div>
  );
};

export default MoveDisplay;
