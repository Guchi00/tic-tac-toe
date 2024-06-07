import React from "react";
import styles from "./styles.module.css";

interface INewPlayerProps {
  winCount: { X: number; O: number };
}

export const Players = (props: INewPlayerProps) => {
  const { winCount } = props;
  return (
    <div className={styles.container}>
      <div className={styles.player}>
        <h1 className={styles.players}>X</h1>
        <h2>{winCount.X}</h2>
      </div>

      <div className={styles.player}>
        <h1 className={styles.players}>O</h1>
        <h2>{winCount.O}</h2>
      </div>
    </div>
  );
};
