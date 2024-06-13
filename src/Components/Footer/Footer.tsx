import React from "react";
import { Tile } from "../Body/Body";
import styles from "./styles.module.css";

interface INewFooterProps {
  setBoard: React.Dispatch<React.SetStateAction<Tile[][]>>;
  initialBoard: Tile[][];
  setWinCounts: React.Dispatch<React.SetStateAction<{ X: number; O: number }>>;
  setIsGameOver: React.Dispatch<React.SetStateAction<boolean>>;
  handleRestartGame: () => void;
}
export const Footer = (props: INewFooterProps) => {
  const {
    setBoard,
    initialBoard,
    setWinCounts,
    setIsGameOver,
    handleRestartGame,
  } = props;

  const handleRefreshPage = () => {
    setBoard(initialBoard);
    setWinCounts({ X: 0, O: 0 });
    localStorage.removeItem("winCounts");
    setIsGameOver(false);
  };

  return (
    <div className={styles.parent}>
      <div className={styles.container}>
        <button className={styles.refresh_action} onClick={handleRefreshPage}>
          Refresh
        </button>

        <button className={styles.action} onClick={handleRestartGame}>
          Restart
        </button>
      </div>
      <span className={styles.signature}>
        Prepared by Ugochi Iwuchukwu &#9829;
      </span>
    </div>
  );
};
