import React, { memo } from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./home.module.css";
import wallpaper from "../../image/elden-ring-poster.jpg";
const Home = memo(() => {
  return (
    <section className={styles.section}>
      <img src={wallpaper}></img>
    </section>
  );
});

export default Home;
