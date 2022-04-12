import React from "react";
import styles from "./talisman.module.css";
const Talismans = ({ data }) => {
  return (
    <div className={styles.list}>
      <div className={styles.imgbox}>
        <img className={styles.image} src={data.image}></img>
        <h1>{data.name}</h1>
      </div>
      <br />
      <div>
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
};

export default Talismans;
