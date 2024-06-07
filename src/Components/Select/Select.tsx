import React from "react";
import styles from "./styles.module.css";

export const Select = () => {
  return (
    <div className={styles.container}>
      <select className={styles.select}>
        <option value="simple">Simple</option>
        <option value="volvo">Medium</option>
        <option value="saab">Hard</option>
        <option value="opel">Play with a friend</option>
      </select>
    </div>
  );
};
