import React, { memo } from "react";
import styles from "./categorygrid.module.css";
const CategoryGrid = memo(({ eldenring, data, onGetCategory }) => {
  return (
    <div className={styles.list} onClick={() => onGetCategory(data)}>
      <img className={styles.image}src={data.image}></img>
      <h1>{data.category}</h1>
    </div>
  );
});
export default CategoryGrid;
