import React from "react";

const MoveDisplay = ({ moves }) => {
  return (
    <div>
      <h3>Possible Moves:</h3>
      <p data-testid="moves-text">
        {moves.length > 0 ? moves.join(", ") : "No moves available"}
      </p>
    </div>
  );
};

export default MoveDisplay;
