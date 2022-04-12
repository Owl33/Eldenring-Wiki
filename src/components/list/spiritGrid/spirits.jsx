import React, { memo } from "react";
import styles from "./spirits.module.css";

const Spirits = memo(({ data }) => {
  return (
    <div className={styles.list}>
      <div className={styles.imgbox}>
        <img className={styles.image} src={data.image}></img>
        <h1>{data.name}</h1>
      </div>
      <div className={styles.cost}>
        <div>
          <h3>HP Cost</h3>
          <p>{data.hpCost}</p>
        </div>
        <div>
          <h3>FP Cost</h3>
          <p>{data.fpCost}</p>
        </div>
      </div>
      <br />
      <div className={styles.effectbox}>
        <h3>효과</h3>
        <p className={styles.effect}>{data.effect}</p>
      </div>
      <br />
      <h3>설명</h3>
      <p>{data.description}</p>
    </div>
  );
});

export default Spirits;
