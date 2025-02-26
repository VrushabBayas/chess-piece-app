import React from "react";

const PieceSelector = ({ onMoveCalculated }) => {
  const [piece, setPiece] = React.useState("King");
  const [position, setPosition] = React.useState("D4");
  const handlePieceChange = (event) => {
    setPiece(event.target.value);
  };

  const handlePositionChange = (event) => {
    setPosition(event.target.value);
  };
  return (
    <div className="piece-selector-component">
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
      <button data-testid="calculate-btn" onClick={onMoveCalculated}>
        Calculate
      </button>
      <br />
      <br />
    </div>
  );
};

export default PieceSelector;
