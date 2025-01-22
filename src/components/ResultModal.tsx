import React from "react";
import "./ResultModal.css";

interface ResultModalProps {
  winner: "X" | "O" | "Draw";
  onPlayAgain: () => void;
}

const ResultModal: React.FC<ResultModalProps> = ({ winner, onPlayAgain }) => (
  <div className="result-modal">
    <h2>{winner === "Draw" ? "Draw" : `Winner: ${winner}`}</h2>
    <button onClick={onPlayAgain}>Play Again</button>
  </div>
);

export default ResultModal;
