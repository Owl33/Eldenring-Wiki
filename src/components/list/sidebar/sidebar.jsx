import React, { memo } from "react";
import styles from "./sidebar.module.css";

const Sidebar = memo(({ data, onGetCategory }) => {
  const stats = data.stats;
  return (
    <li className={styles.sidebar}>
      {stats && <p className={styles.p}></p>}
      <p
        className={styles.p}
        href="#"
        onClick={() => {
          onGetCategory(data);
        }}
      >
        {data.category}
      </p>
    </li>
  );
});

export default Sidebar;
