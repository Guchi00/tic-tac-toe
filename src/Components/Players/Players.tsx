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
        <h3 className={styles.players}>X</h3>
        <h3>{winCount.X}</h3>
      </div>

      <div className={styles.player}>
        <h3 className={styles.players}>O</h3>
        <h3>{winCount.O}</h3>
      </div>
    </div>
  );
};
