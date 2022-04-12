import React, { memo } from "react";
import styles from "./requirement.module.css";
const Requirement = memo(({ requirement }) => {
  return (
    <div className={styles.requirement}>
      <p>{requirement.name}</p>
      <p>{requirement.amount}</p>
    </div>
  );
});

export default Requirement;
