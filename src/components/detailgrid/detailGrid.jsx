import React, { memo } from "react";
import Attacktype from "./attacktype/attacktype";
import Requirement from "./requirement/requirement";
import Scales from "./scales/scales";
import styles from "./detailGrid.module.css";
import { useParams } from "react-router-dom";

const DetailGrid = memo(({ category }) => {
  const param = useParams();
  let attackType = null;
  let requirement = null;
  let scales = null;
  let dmgNegation = null;
  let resistance = null;

  switch (param.pagedata) {
    case "weapons":
      attackType = category.attack.filter((x) => {
        return x.amount != 0;
      });
      requirement = category.requiredAttributes;
      scales = category.scalesWith;
      break;

    case "armors":
      dmgNegation = category.dmgNegation;
      resistance = category.resistance;
  }
  return (
    <div className={styles.section}>
      <div className={styles.imgbox}>
        <img src={category.image}></img>
        <h1>{category.name}</h1>
      </div>
      <div className={styles.weigth}>
        <h3>무게</h3>
        <p>{category.weigth}</p>
      </div>
      <br />
      {attackType && (
        <>
          <div>
            <h3>공격 형태</h3>
            <div className={styles.attacktype}>
              {Object.keys(attackType).map((key) => (
                <Attacktype key={key} attackType={attackType[key]} />
              ))}
            </div>
          </div>
          <div>
            <h3>필요 능력치</h3>
            <div className={styles.requirement}>
              {Object.keys(requirement).map((key) => (
                <Requirement key={key} requirement={requirement[key]} />
              ))}
            </div>
          </div>
          <div>
            <h3>능력 보정</h3>
            <div className={styles.scales}>
              {Object.keys(scales).map((key) => (
                <Scales key={key} scales={scales[key]} />
              ))}
            </div>
          </div>
        </>
      )}
      {dmgNegation && (
        <div className={styles.armor}>
          <div className={styles.test}>
            <h3>경감률</h3>
            <div className={styles.dmgNegation}>
              {Object.keys(dmgNegation).map((key) => (
                <Attacktype key={key} attackType={dmgNegation[key]} />
              ))}
            </div>
          </div>
          <div>
            <h3>내성치</h3>
            <div className={styles.resistance}>
              {Object.keys(resistance).map((key) => (
                <Requirement key={key} requirement={resistance[key]} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

export default DetailGrid;
