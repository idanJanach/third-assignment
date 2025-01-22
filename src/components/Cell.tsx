import React from "react";
import xImage from "../assets/x-image.png";
import oImage from "../assets/o-image.png";
import "./Cell.css";

interface CellProps {
  value: string | null;
  onClick: () => void;
}

const Cell: React.FC<CellProps> = ({ value, onClick }) => (
  <div className="cell" onClick={onClick}>
    {value === "X" && <img src={xImage} alt="X" />}
    {value === "O" && <img src={oImage} alt="O" />}
  </div>
);

export default Cell;
