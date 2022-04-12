import React, { memo } from "react";
import styles from "./items.module.css";

const Items = memo(({ data }) => {
  return (
    <div className={styles.list}>
      <div className={styles.imgbox}>
        <img className={styles.image} src={data.image}></img>
        <h1>{data.name}</h1>
      </div>
      <br />
      <div className={styles.effectbox}>
        <h3>효과</h3>
        <p className={styles.effect}>{data.effect}</p>
      </div>
      <br />
      <div>
        <h3>설명</h3>
        <p>{data.description}</p>
      </div>
    </div>
  );
});

export default Items;
