import King from "../models/King";
import Pawn from "../models/Pawn";
import Queen from "../models/Queen";

/**
 * Get the possible moves for a given chess piece at a specific position.
 *
 * @param {string} piece - The type of chess piece (e.g., "Pawn").
 * @param {string} position - The current position of the piece on the ChessPiece (e.g., "G1").
 * @returns {string} A comma-separated string of possible moves or an error message.
 */
function getPossibleMoves(piece, position) {
  const pieces = {
    pawn: new Pawn(position),
    king: new King(position),
    queen: new Queen(position),
  };
  if (!pieces[piece.toLowerCase()]) return "Invalid piece";
  const moves = pieces[piece.toLowerCase()].getPossibleMoves();
  return moves.length > 0 ? moves.join(", ") : "Move not possible";
}

export default getPossibleMoves;
