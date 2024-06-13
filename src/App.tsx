import React, { useState, useEffect } from "react";
import "./App.css";
import { NavBar } from "./Components/NavBar/NavBar";
import { Body } from "./Components/Body/Body";
import styles from "./styles.module.css";
import { Footer } from "./Components/Footer/Footer";
import { Tile } from "./Components/Body/Body";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">("X");
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [winCounts, setWinCounts] = useState<{ X: number; O: number }>({
    X: 0,
    O: 0,
  });
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [winner, setWinner] = useState<"X" | "O" | null>(null);

  const initialBoard = Array(3)
    .fill(null)
    .map(() => Array(3).fill({ value: "" }));

  const [board, setBoard] = useState<Tile[][]>(initialBoard);

  useEffect(() => {
    const storeWinCounts = localStorage.getItem("winCounts");
    if (storeWinCounts) {
      setWinCounts(JSON.parse(storeWinCounts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("winCounts", JSON.stringify(winCounts));
  }, [winCounts]);

  const handleToggleDarkMode = () => {
    setDarkMode(true);
  };

  const handleToggleLightMode = () => {
    setDarkMode(false);
  };

  const handleStartGame = () => {
    setGameStarted(true);
    setIsGameOver(false);
    setBoard(initialBoard);
    setWinner(null);
  };

  const handleRestartGame = () => {
    setGameStarted(true);
    setIsGameOver(false);
    setBoard(initialBoard);
    setWinner(null);
  };

  const updateWinCount = (winner: "X" | "O") => {
    window.setTimeout(() => {
      const newWinCounts = { ...winCounts, [winner]: winCounts[winner] + 1 };
      setWinCounts(newWinCounts);
      localStorage.setItem("winCounts", JSON.stringify(newWinCounts));
      setWinner(winner);
      setIsGameOver(true);
    }, 1000);
  };

  return (
    <>
      <div
        className={`${styles.container} ${
          darkMode ? styles.dark_mode : styles.light_mode
        }`}
      >
        <h1 className={styles.title}>Tic Tac Toe</h1>
        <NavBar
          onToggleMode={handleToggleDarkMode}
          onToggleLightMode={handleToggleLightMode}
          currentPlayer={currentPlayer}
          gameStart={gameStarted}
          winCount={winCounts}
        />
        <Body
          currentPlayer={currentPlayer}
          setCurrentPlayer={setCurrentPlayer}
          startGame={handleStartGame}
          updateWinCount={updateWinCount}
          board={board}
          setBoard={setBoard}
          initialBoard={initialBoard}
          isGameOver={isGameOver}
          setIsGameOver={setIsGameOver}
          winner={winner}
        />
        <Footer
          setBoard={setBoard}
          initialBoard={initialBoard}
          setWinCounts={setWinCounts}
          setIsGameOver={setIsGameOver}
          handleRestartGame={handleRestartGame}
        />
      </div>
    </>
  );
}

export default App;
