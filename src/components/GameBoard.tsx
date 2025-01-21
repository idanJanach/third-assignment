import React from "react";
import Cell from "./Cell";
import "./GameBoard.css";

interface GameBoardProps {
  board: (string | null)[];
  onCellClick: (index: number) => void;
}

const GameBoard: React.FC<GameBoardProps> = ({ board, onCellClick }) => (
  <div className="game-board">
    {board.map((value, index) => (
      <Cell key={index} value={value} onClick={() => onCellClick(index)} />
    ))}
  </div>
);

export default GameBoard;
