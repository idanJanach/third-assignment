import React, { useState } from "react";
import GameBoard from "./components/GameBoard";
import ResultModal from "./components/ResultModal";
import "./App.css";

const App: React.FC = () => {
  const [board, setBoard] = useState<(string | null)[]>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">("X");
  const [winner, setWinner] = useState<"X" | "O" | "Draw" | null>(null);

  const winningCombos: number[][] = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6],            // Diagonals
  ];

  const checkWinner = (newBoard: (string | null)[]): "X" | "O" | "Draw" | null => {
    for (let combo of winningCombos) {
      const [a, b, c] = combo;
      if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
        return newBoard[a] as "X" | "O";
      }
    }
    return newBoard.every(cell => cell) ? "Draw" : null;
  };

  const handleCellClick = (index: number) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    const gameWinner = checkWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
    } else {
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer("X");
    setWinner(null);
  };

  return (
    <div className="app">
      <h1>X Mix Drix</h1>
      <GameBoard board={board} onCellClick={handleCellClick} />
      {winner && <ResultModal winner={winner} onPlayAgain={resetGame} />}
    </div>
  );
};

export default App;
