import { useState } from "react";
import "./App.css";
import ChessBoard from "./components/ChessBoard";
import MoveDisplay from "./components/MoveDisplay";
import PieceSelector from "./components/PieceSelector";
import AuthorList from "./components/Author";

function App() {
  const [moves, setMoves] = useState([]);
  const [position, setPosition] = useState("D4");
  const onMoveCalculated = (moves) => {
    setMoves(moves);
  };
  console.log("position: ", position);

  return (
    <div className="container" data-testid="container">
      <ChessBoard position={position} moves={moves} />
      <div className="controls-class">
        <PieceSelector
          onMoveCalculated={onMoveCalculated}
          setPosition={setPosition}
          position={position}
        />
        <MoveDisplay moves={moves} />
      </div>

      <AuthorList />
    </div>
  );
}

export default App;
