import ChessPiece from "./ChessPiece";

export default class Queen extends ChessPiece {
  constructor(position) {
    super(position);
    this.directions = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
      [-1, 1],
      [1, -1],
      [-1, -1],
      [1, 1],
    ];
  }
  getPossibleMoves() {
    return this.generateMoves(this.directions);
  }
}
