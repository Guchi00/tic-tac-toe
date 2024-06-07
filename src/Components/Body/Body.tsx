import React, { useState } from "react";
import styles from "./styles.module.css";
import rootStyles from "../../styles.module.css";

// [undefined, undefined, undefined]

// [null, null, null]

// [
//   [{ value: '' }, { value: '' }, { value: '' }],
//   [{ value: '' }, { value: '' }, { value: '' }],
//   [{ value: '' }, { value: '' }, { value: '' }]
// ]

export interface Tile {
  value: string;
}

interface BodyProps {
  currentPlayer: "X" | "O";
  setCurrentPlayer: React.Dispatch<React.SetStateAction<"X" | "O">>;
  startGame: () => void;
  updateWinCount: (winner: "X" | "O") => void;
  board: Tile[][];
  setBoard: React.Dispatch<React.SetStateAction<Tile[][]>>;
  initialBoard: Tile[][];
  isGameOver: Boolean;
  setIsGameOver: React.Dispatch<React.SetStateAction<Boolean>>;
  winner: "X" | "O" | null;
}

export const Body = (props: BodyProps) => {
  const {
    currentPlayer,
    setCurrentPlayer,
    startGame,
    updateWinCount,
    board,
    setBoard,
    isGameOver,
    winner,
  } = props;

  const [gameStarted, setGameStated] = useState(false);

  const getTileClasses = (rowIndex: Number, colIndex: Number) => {
    let classes = rootStyles.tile;
    if (rowIndex === 0) classes += ` ${rootStyles.top}`;
    if (colIndex === 0) classes += ` ${rootStyles.left}`;
    if (rowIndex === 2) classes += ` ${rootStyles.bottom}`;
    if (colIndex === 2) classes += ` ${rootStyles.right}`;

    return classes;
  };

  const handleTileClick = (rowIndex: number, colIndex: number) => {
    console.log(isGameOver, "isgameover");
    console.log(board[rowIndex][colIndex].value, "Board");
    if (isGameOver || board[rowIndex][colIndex].value !== "") {
      return;
    }
    if (!gameStarted) {
      startGame();
      setGameStated(true);
    }
    const newBoard = board.map((row, rowIdx) =>
      row.map((tile, colIdx) => {
        if (rowIdx === rowIndex && colIdx === colIndex) {
          return { ...tile, value: currentPlayer };
        }
        return tile;
      })
    );
    setBoard(newBoard);

    const winner = checkWinner(newBoard);
    if (winner) {
      updateWinCount(winner);
      return;
    }

    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  const checkWinner = (board: Tile[][]): "X" | "O" | null => {
    //check rows
    for (let i = 0; i < 3; i++) {
      if (
        board[i][0].value &&
        board[i][0].value === board[i][1].value &&
        board[i][0].value === board[i][2].value
      ) {
        return board[i][0].value as "X" | "O";
      }
    }
    //check columns
    for (let i = 0; i < 3; i++) {
      if (
        board[0][i].value &&
        board[0][i].value === board[1][i].value &&
        board[0][i].value === board[2][i].value
      ) {
        return board[0][i].value as "X" | "O";
      }
    }

    //check diagnal
    if (
      board[0][0].value &&
      board[0][0].value === board[1][1].value &&
      board[0][0].value === board[2][2].value
    ) {
      return board[0][0].value as "X" | "O";
    }

    if (
      board[0][2].value &&
      board[0][2].value === board[1][1].value &&
      board[0][2].value === board[2][0].value
    ) {
      return board[0][2].value as "X" | "O";
    }

    if (board.flat().every((tile) => tile.value !== "")) {
      return "Draw" as "X" | "O";
    }
    return null;
  };

  return (
    <div className={styles.parent}>
      {isGameOver ? (
        <h1>{` ${winner} ${
          winner === "O" || winner === "X" ? " wins!" : ""
        }`}</h1>
      ) : (
        <div className={styles.container}>
          {board.map((row, rowIndex) => (
            <div key={rowIndex} className={styles.row}>
              {row.map((tile, colIndex) => (
                <div
                  key={colIndex}
                  className={getTileClasses(rowIndex, colIndex)}
                  onClick={() => handleTileClick(rowIndex, colIndex)}
                >
                  {tile.value}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
