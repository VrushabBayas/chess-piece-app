export default class ChessPiece {
  constructor(position) {
    this.columns = "ABCDEFGH";
    this.rows = "12345678";
    this.col = position[0];
    this.row = parseInt(position[1]);
    this.colIndex = this.columns.indexOf(this.col);
  }
  /**
   * Checks if the move is valid on a ChessPiece.
   *
   * @param {number} newColumnIndex - The new column index (0-based).
   * @param {number} newRow - The new row index (1-based).
   * @returns {boolean} True if the move is within the bounds of the ChessPiece, false otherwise.
   */
  isValidMove(newColumnIndex, newRow) {
    return (
      newColumnIndex >= 0 && newColumnIndex < 8 && newRow >= 1 && newRow <= 8
    );
  }

  /**
   * Generates all possible moves for a piece given its movement directions and maximum steps.
   *
   * @param {Array.<Array.<number>>} directions - An array of direction vectors, where each vector is an array of two numbers [dx, dy].
   * @param {number} [maxSteps=8] - The maximum number of steps a piece can move in any direction. Defaults to 8.
   * @returns {Array.<string>} An array of strings representing the valid moves in chess notation.
   */
  generateMoves(directions, maxSteps = 8) {
    const moves = [];
    for (let i = 1; i <= maxSteps; i++) {
      directions.forEach(([dx, dy]) => {
        const newColumnIndex = this.colIndex + dx * i;
        const newRow = this.row + dy * i;
        if (this.isValidMove(newColumnIndex, newRow)) {
          moves.push(`${this.columns[newColumnIndex]}${newRow}`);
        }
      });
    }
    return moves;
  }
}
