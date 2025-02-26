import "./App.css";
import ChessBoard from "./components/ChessBoard";
import PieceSelector from "./components/PieceSelector";

function App() {
  return (
    <div data-testid="app" className="App">
      <ChessBoard />
      <PieceSelector onMoveCalculated={() => {}} />
    </div>
  );
}

export default App;
