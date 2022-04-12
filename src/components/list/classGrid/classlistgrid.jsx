import React, { memo } from "react";
import styles from "./classlistgrid.module.css";
const ClassGrid = memo(({ data }) => {
  return (
    <>
      <div className={styles.list}>
        <div className={styles.imgbox}>
          <h1 className={styles.classtitle}>{data.name}</h1>
          <div className={styles.titleborder}></div>
          <img className={styles.image} src={data.image}></img>
        </div>
        <div className={styles.status}>
          <div className={styles.level}>
            <h1>Level {data.stats.level}</h1>
          </div>
          <div className={styles.statusflex}>
            <div className={styles.stats}>
              <span>생명력 : {data.stats.vigor}</span>
              <span>정신력 : {data.stats.mind}</span>
              <span>지구력 : {data.stats.endurance}</span>
              <span>근력 : {data.stats.strength}</span>
            </div>
            <div className={styles.stats}>
              <span>기량 : {data.stats.dexterity}</span>
              <span>지력 : {data.stats.inteligence}</span>
              <span>신앙 : {data.stats.faith}</span>
              <span>신비 : {data.stats.arcane}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
export default ClassGrid;
