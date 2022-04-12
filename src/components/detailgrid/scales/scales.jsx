import React from "react";
import styles from "./scales.module.css";
const Scales = ({ scales }) => {
  return (
    <div className={styles.scales}>
      <p>{scales.name}</p>
      <p>{scales.scaling}</p>
    </div>
  );
};

export default Scales;
