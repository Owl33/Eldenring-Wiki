import React, { useEffect, useState } from "react";
import ClassGrid from "./classGrid/classlistgrid";
import styles from "./list.module.css";
import CategoryGrid from "./categorygrid/categorygrid";
import { useParams } from "react-router-dom";
import Talismans from "./talismanGrid/talisman";
import Spirits from "./spiritGrid/spirits";
import Items from "./items/items";
import Creatures from "./creatures/creatures";
import Boss from "./boss/boss";
import Npcs from "./npcs/npcs";

const List = ({ eldenring, onGetCategory }) => {
  const Params = useParams();
  const [classes, SetClasses] = useState([]);
  const [weapons, SetWeapons] = useState([]);
  const [armors, SetArmors] = useState([]);
  const [talismans, SetTalismans] = useState([]);
  const [spirits, SetSpirits] = useState([]);
  const [items, SetItems] = useState([]);
  const [creatures, SetCreatures] = useState([]);
  const [boss, SetBoss] = useState([]);
  const [npcs, SetNpcs] = useState([]);
  const [loading, SetLoading] = useState(false);

  const reset = () => {
    SetClasses(null);
    SetWeapons(null);
    SetArmors(null);
    SetTalismans(null);
    SetSpirits(null);
    SetItems(null);
    SetCreatures(null);
    SetBoss(null);
    SetNpcs(null);
    window.scrollTo({
      top: 0,
    });
  };

  useEffect(() => {
    switch (Params.pagedata) {
      case "classes":
        reset();
        SetLoading(true);
        eldenring.Class().then((data) => {
          SetClasses(data);
          SetLoading(false);
        });
        break;

      case "weapons":
        reset();
        SetLoading(true);
        eldenring
          .Weapons()
          .then((data) => {
            // return data.filter((x)=> x.category )
            return data.filter((x, i) => {
              return (
                data.findIndex((x2) => {
                  return x.category === x2.category;
                }) === i
              );
            });
          })
          .then((result) => {
            const filtering = [
              "Crossbows",
              "Axes",
              "Weapon",
              "Daggers",
              "Flails",
              "Glintstone Staffs",
              "Greataxes",
              "Halberds",
              "Hammers",
              "Great Spears",
              "Light Bows",
              "Sacred Seals",
              "Spears",
              "Straight Swords",
              "Twinblades",
              "Curved Swords",
              "Greatswords",
              "Glintstone S",
              null,
            ];
            return result.filter((x) => {
              return filtering.every((currentvalue) => {
                return x.category !== currentvalue;
              });
            });
          })
          .then((weapons) => {
            SetWeapons(weapons);
            SetLoading(false);
          });
        break;

      case "armors":
        reset();
        SetLoading(true);

        eldenring
          .Armors()
          .then((data) => {
            return data.filter((x, i) => {
              return (
                data.findIndex((x2) => {
                  return x.category === x2.category;
                }) === i
              );
            });
          })
          .then((result) => {
            SetArmors(result);
            SetLoading(false);
          });
        break;

      case "talismans":
        reset();
        SetLoading(true);
        eldenring.Talismans().then((data) => {
          SetTalismans(data);
          SetLoading(false);
        });
        break;
      case "spirits":
        reset();
        SetLoading(true);
        eldenring.Spirits().then((data) => {
          SetSpirits(data);
          SetLoading(false);
        });
      case "items":
        reset();
        SetLoading(true);
        eldenring
          .Items()
          .then((data) => {
            return data
              .filter((x) => {
                return x.image != null;
              })
              .sort((a, b) => {
                return a.name < b.name ? -1 : 1;
              });
          })
          .then((result) => {
            SetItems(result);
            SetLoading(false);
          });
        break;
      case "creatures":
        reset();
        SetLoading(true);

        eldenring
          .Creatures()
          .then((data) => {
            return data
              .filter((x) => {
                return x.drops != null;
              })
              .filter((x) => x.image != null);
          })
          .then((result) => {
            SetCreatures(result);
            SetLoading(false);
          });
        break;
      case "boss":
        reset();
        SetLoading(true);
        eldenring
          .Boss()
          .then((data) => {
            return data.filter((x) => {
              return x.image != null;
            });
          })
          .then((result) => {
            SetBoss(result);
            SetLoading(false);
          });
        break;
      case "npcs":
        reset();
        SetLoading(true);
        eldenring.Npcs().then((data) => {
          SetNpcs(data);
          SetLoading(false);
        });

        break;
    }
  }, [Params.pagedata]);

  return (
    <>
      <section className={styles.section}>
        {!loading && (
          <>
            <div className={styles.grid}>
              {classes &&
                classes.map((classes) => (
                  <ClassGrid key={classes.id} data={classes} />
                ))}
              {weapons &&
                weapons.map((weapons) => (
                  <CategoryGrid
                    key={weapons.id}
                    eldenring={eldenring}
                    data={weapons}
                    onGetCategory={onGetCategory}
                  />
                ))}
              {armors &&
                armors.map((armors) => (
                  <CategoryGrid
                    key={armors.id}
                    eldenring={eldenring}
                    data={armors}
                    onGetCategory={onGetCategory}
                  />
                ))}
              {talismans &&
                talismans.map((talismans) => (
                  <Talismans key={talismans.id} data={talismans} />
                ))}
              {spirits &&
                spirits.map((spirits) => (
                  <Spirits key={spirits.id} data={spirits} />
                ))}
              {items &&
                items.map((items) => <Items key={items.id} data={items} />)}
              {creatures &&
                creatures.map((creatures) => (
                  <Creatures key={creatures.id} data={creatures} />
                ))}
              {boss && boss.map((boss) => <Boss key={boss.id} data={boss} />)}
              {npcs && npcs.map((npcs) => <Npcs key={npcs.id} data={npcs} />)}
            </div>
          </>
        )}
        {loading && (
          <div className={styles.loadingbox}>
            <div className={styles.loading}></div>
          </div>
        )}
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
  );
};

export default List;
