import React from "react";
import image from "../assets/react.svg";
import "./Cell.css";

interface CellProps {
  value: string | null;
  onClick: () => void;
}

const Cell: React.FC<CellProps> = ({ value, onClick }) => (
  <div className="cell" onClick={onClick}>
    {value === "X" && <img src={image}/>}
    {value === "O" && <img src={image}/>}
  </div>
);

export default Cell;
