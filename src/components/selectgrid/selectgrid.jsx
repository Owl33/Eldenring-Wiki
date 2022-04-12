import React, { memo, useEffect, useState } from "react";
import styles from "./selectgrid.module.css";
import { useParams } from "react-router-dom";
import DetailGrid from "../detailgrid/detailGrid";

const Selectgrid = memo(({ eldenring }) => {
  const param = useParams();
  const [category, setCategory] = useState();
  const [loading, SetLoading] = useState(false);
  useEffect(() => {
    switch (param.pagedata) {
      case "weapons":
        SetLoading(true);
        setCategory(null);
        eldenring
          .Weapons()
          .then((data) => {
            return data
              .filter((x) => {
                return (
                  `${param.selectCategory}s` == x.category ||
                  param.selectCategory == x.category
                );
              })
              .sort((a, b) => {
                return a.category < b.category ? -1 : 1;
              });
          })
          .then((result) => {
            setCategory(result);
            SetLoading(false);
          });
        break;
      case "armors":
        SetLoading(true);
        setCategory(null);

        eldenring
          .Armors()
          .then((data) => {
            return data.filter((x) => {
              return x.category === param.selectCategory;
            });
          })
          .then((result) => {
            return result.filter((x) => {
              return x.image != null;
            });
          })
          .then((armor) => {
            setCategory(armor);
            SetLoading(false);
          });
        break;
    }
  }, [param.pagedata]);

  return (
    <>
      {!loading && (
        <>
          <section className={styles.section}>
            <div className={styles.grid}>
              {category &&
                category.map((category) => (
                  <DetailGrid key={category.id} category={category} />
                ))}
            </div>
          </section>
          <div>
            <button
              className={styles.handletop}
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              <i className="fa-solid fa-angles-up"></i>
            </button>
          </div>
        </>
      )}
      {loading && (
        <div className={styles.loadingbox}>
          <div className={styles.loading}></div>
        </div>
      )}
    </>
  );
});

export default Selectgrid;
