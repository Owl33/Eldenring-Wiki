import React, { memo } from "react";
import styles from "./attacktype.module.css";
const Attacktype = memo(({ attackType }) => {
  return (
    <div className={styles.attacktype}>
      <p>{attackType.name}</p>
      <p>{attackType.amount}</p>
    </div>
  );
});

export default Attacktype;
