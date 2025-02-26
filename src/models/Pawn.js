import ChessPiece from "./ChessPiece";

export default class Pawn extends ChessPiece {
  getPossibleMoves() {
    return this.row < 8 ? [`${this.col}${this.row + 1}`] : [];
  }
}
