import React, { useState, useEffect } from "react";
import cx from "classnames";
import styles from "./StateCards.module.scss";
import { useSelector } from "react-redux";

const StateCards = () => {
  const [stateCardData, setStateCardData] = useState(null);
  const stateCardSelector = useSelector((state) => state.singleStateData);

  useEffect(() => {
    setStateCardData(stateCardSelector);
  }, [stateCardSelector]);

  return (
    <div className={styles.stateCard}>
      <div className={styles.stateCard__header}>India Map</div>
      <div className={styles.stateCard__sub_header}>
        Hover over a state/UT for more detailsp
      </div>
      <div className={styles.map_stats}>
        <div className={styles.card}>
          <div className={cx(styles.card__section, styles.confirm)}>
            <h5>Confirmed</h5>
            <h4>{stateCardData ? stateCardData.confirmed : 0}</h4>
            <h5>+{stateCardData ? stateCardData.deltaconfirmed : 0}</h5>
          </div>
          <div className={cx(styles.card__section, styles.active)}>
            <h5>Active</h5>
            <h4>{stateCardData ? stateCardData.active : 0}</h4>
            <h5>&nbsp;</h5>
          </div>
          <div className={cx(styles.card__section, styles.recovered)}>
            <h5>Recovered</h5>
            <h4>{stateCardData ? stateCardData.recovered : 0}</h4>
            <h5>+{stateCardData ? stateCardData.deltarecovered : 0}</h5>
          </div>
          <div className={cx(styles.card__section, styles.death)}>
            <h5>Deceased</h5>
            <h4>{stateCardData ? stateCardData.deaths : 0}</h4>
            <h5>+{stateCardData ? stateCardData.deltadeaths : 0}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StateCards;
