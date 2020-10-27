import "./board.css";
import React, { useState } from "react";
import Square from "./Square";
import calculateWinner from "../utils/GameEngine";
// import { getRandomPlayer } from "../utils/GameEngine"

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null)); // hier füllen wir unser array mit 9 x null
  const [xIsNext, setXIsNext] = useState("🍆");

  const winner = calculateWinner(squares);

  function handleClick(index) {
    if (winner) {
      return;
    }

    const newSquares = squares.slice(); // .slice erstllt eine kopie vom array (immer wenn sie im state drin sind)
    newSquares[index] = xIsNext;
    setSquares(newSquares);
    setXIsNext(xIsNext === "🍆" ? "🍑" : "🍆");
  }

  function renderSquare(index) {
    return <Square value={squares[index]} onClick={() => handleClick(index)} />;
  }

  // const winner = calculateWinner(squares);
  // let status;
  // if (winner) {
  //   status = "Winner: " + winner;
  // } else {
  //   status = "Next player: " + (xIsNext ? "🍆" : "🍑");
  // }

  const status = winner ? `Winner: ${winner}` : `Next Player: ${xIsNext}`;

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

// function calculateWinner(squares) {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];
//   for (let index = 0; index < lines.length; index++) {
//     const [a, b, c] = lines[index];
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a];
//     }
//   }
//   return null;
// }
