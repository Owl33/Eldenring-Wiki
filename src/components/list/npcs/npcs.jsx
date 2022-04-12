import React, { memo } from "react";
import styles from "./npcs.module.css";

const Npcs = memo(({ data }) => {
  return (
    <div className={styles.list}>
      <div className={styles.imgbox}>
        <img src={data.image}></img>
        <h1>{data.name}</h1>
      </div>
      <div className={styles.role}>
        <h3>역할</h3>
        <p className={styles.role}>{data.role}</p>
      </div>
      <br />
      <div className={styles.location}>
        <h3>위치</h3>
        <p className={styles.effect}>{data.location}</p>
      </div>
      <br />
      <div>
        <h3>대사</h3>
        <p>{data.quote}</p>
      </div>
    </div>
  );
});

export default Npcs;
