import React from "react";
import "../../styles/components/Board.scss";

const Board = ({ title, sub, boards }) => {
  return (
    <div className="b__main">
      <h1>{title}</h1>
      <div className="board__con">
        <h2 style={{ borderBottom: "2px solid black", marginBottom: "10px" }}>
          {sub}+
        </h2>
        {boards.map((item) => (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h6>{item.title}</h6>
            <span>{item.created}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Board;
