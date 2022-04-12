import React, { memo } from "react";
import styles from "./boss.module.css";
const Boss = memo(({ data }) => {
    const test = data.drops;
    return (
      <div className={styles.list}>
        <div className={styles.imgbox}>
          <img src={data.image}></img>
          <h1>{data.name}</h1>
        </div>
        <div>
          <h3>체력</h3>
          <p>{data.healthPoints}</p>
        </div>
        <br />
        <div className={styles.drops}>
          <h3>전리품</h3>
          <p>{data.drops[0]}</p>
          {data.drops[1] && <p>{data.drops[1]}</p>}
          {data.drops[2] && <p>{data.drops[2]}</p>}
        </div>
        <br />
  
        <div className={styles.location}>
          <h3>위치</h3>
          <p className={styles.effect}>{data.location}</p>
        </div>
        <br />
        <div>
          <h3>설명</h3>
          <p>{data.description}</p>
        </div>
      </div>
    );
  });

export default Boss;
