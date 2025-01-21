import React, { useState } from "react";
import GameBoard from "./components/GameBoard";
import "./App.css";

const App: React.FC = () => {
  const [board, setBoard] = useState<(string | null)[]>(Array(9).fill(null));

  const handleCellClick = (index: number) => {
  };

  return (
    <div className="app">
      <GameBoard board={board} onCellClick={handleCellClick} />
    </div>
  );
};

export default App;
