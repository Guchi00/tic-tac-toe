import React from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import styles from "./styles.module.css";

export interface INewModeProps {
  onToggleMode: () => void;
  onLightMode: () => void;
}
export const Modes = (props: INewModeProps) => {
  const { onToggleMode, onLightMode } = props;

  return (
    <div className={styles.container}>
      <button className={styles.btn} onClick={onToggleMode}>
        <DarkModeIcon className={styles.mode} />
      </button>

      <button onClick={onLightMode} className={styles.btn}>
        <LightModeIcon className={styles.mode} />
      </button>
    </div>
  );
};
