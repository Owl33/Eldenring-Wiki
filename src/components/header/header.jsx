import React, { memo, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";
import logos from "../../image/logo.png";

const Header = memo(({ pagedata }) => {
  const checkRef = useRef();
  const [isEquimentOpen, setEquimentIsOpen] = useState(false);
  const [isEnemyOpen, setEnemyOpen] = useState(false);
  const [burger, SetBurger] = useState(false);
  const EquimentSet = isEquimentOpen === true ? styles.over : styles.hidden;
  const EnemySet = isEnemyOpen === true ? styles.over : styles.hidden;
  const hiddenOnOff = burger === true ? styles.overburger : styles.hiddenburger;
  const burgurOnClick = (e) => {
    SetBurger(e.target.checked);
  };

  useEffect(() => {
    checkRef.current.checked = false;
    SetBurger(false);
    setEnemyOpen(false);
    setEquimentIsOpen(false);
  }, [pagedata]);

  return (
    <header>
      <Link to="/">
        <img className={styles.logo} src={logos}></img>
      </Link>
      <input
        ref={checkRef}
        type="checkbox"
        id="burgurmenu"
        onChange={burgurOnClick}
      />
      <label htmlFor="burgurmenu">
        <div></div>
        <div></div>
        <div></div>
      </label>
      <nav className={hiddenOnOff}>
        <ul className={styles.menu}>
          <li className={styles.list}>
            <Link to="/classes" className={styles.overMenu}>
              캐릭터
            </Link>
          </li>
          <li
            className={styles.list}
            onClick={() =>
              setEquimentIsOpen((isEquimentOpen) => !isEquimentOpen)
            }
          >
            <span className={styles.overMenu}>장비</span>
            <ul className={`${styles.hiddenMenu} ${EquimentSet}`}>
              <Link to="/weapons">
                <li>무기</li>
              </Link>
              <Link to="/armors">
                <li>방어구</li>
              </Link>
              <Link to="/talismans">
                <li>탈리스만</li>
              </Link>
              <Link to="/spirits">
                <li>영체</li>
              </Link>
            </ul>
          </li>
          <li className={styles.list}>
            <Link to="/items" className={styles.overMenu}>
              아이템
            </Link>
          </li>
          <li
            className={styles.list}
            onClick={() => setEnemyOpen((isEnemyOpen) => !isEnemyOpen)}
          >
            <span className={styles.overMenu}>적</span>
            <ul className={`${styles.hiddenMenu} ${EnemySet}`}>
              <Link to="/creatures">
                <li>몬스터</li>
              </Link>
              <Link to="/boss">
                <li>보스</li>
              </Link>
            </ul>
          </li>
          <li className={styles.list}>
            <Link to="/npcs" className={styles.overMenu}>
              등장 인물
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
});

export default Header;
