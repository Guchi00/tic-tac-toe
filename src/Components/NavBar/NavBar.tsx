import React from "react";
import styles from "./styles.module.css";
import { Select } from "../Select/Select";
import { Modes } from "../Modes/Modes";
import { Players } from "../Players/Players";

export interface INewNavBarProps {
  onToggleMode: () => void;
  onToggleLightMode: () => void;
  currentPlayer: "X" | "O";
  gameStart: Boolean;
  winCount: { X: number; O: number };
}
export const NavBar = (props: INewNavBarProps) => {
  const {
    onToggleMode,
    onToggleLightMode,
    currentPlayer,
    gameStart,
    winCount,
  } = props;

  return (
    <div className={styles.container}>
      <div className={styles.contents}>
        <Select />
        <Modes onToggleMode={onToggleMode} onLightMode={onToggleLightMode} />
      </div>
      <Players winCount={winCount} />
      <span>
        {gameStart ? `Current player: ${currentPlayer}` : "Start playing"}{" "}
      </span>
    </div>
  );
};
