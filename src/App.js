import { useState } from "react";
import "./App.css";
import ChessBoard from "./components/ChessBoard";
import MoveDisplay from "./components/MoveDisplay";
import PieceSelector from "./components/PieceSelector";

function App() {
  const [moves, setMoves] = useState([]);
  const onMoveCalculated = (moves) => {
    setMoves(moves);
  };
  return (
    <div data-testid="app" className="App">
      <ChessBoard />
      <div>
        <PieceSelector onMoveCalculated={onMoveCalculated} />
        <MoveDisplay moves={moves} />
      </div>
    </div>
  );
}

export default App;
