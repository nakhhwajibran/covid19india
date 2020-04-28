import React, { useEffect, useState } from "react";
import styles from "./GlobalCards.module.scss";
import { useSelector } from "react-redux";

const GlobalCards = (props) => {
  const [globalCardData, setGlobalCardData] = useState(null);
  const globalData = useSelector((state) => state.globalData);

  useEffect(() => {
    setGlobalCardData(globalData);
  }, [globalData]);

  return (
    <div className={styles.GlobalCards}>
      <div className={styles.GlobalCards__date}>
        <span>{new Date().toDateString()}</span>
      </div>
      <div className={styles.GlobalCards__caseDetails}>
        <div className={styles.confirmed}>
          <div>
            <h5>Confirmed</h5>
          </div>
          <div>
            <h4>[+{globalCardData ? globalCardData.deltaconfirmed : 0}]</h4>
          </div>
          <div>
            <h2>{globalCardData ? globalCardData.confirmed : 0}</h2>
          </div>
        </div>
        <div className={styles.active}>
          <div>
            <h5>Active</h5>
          </div>
          <div>
            <h4>&nbsp;</h4>
          </div>
          <div>
            <h2>{globalCardData ? globalCardData.active : 0}</h2>
          </div>
        </div>
        <div className={styles.recovered}>
          <div>
            <h5>Recovered</h5>
          </div>
          <div>
            <h4>[+{globalCardData ? globalCardData.deltarecovered : 0}]</h4>
          </div>
          <div>
            <h2>{globalCardData ? globalCardData.recovered : 0}</h2>
          </div>
        </div>
        <div className={styles.deceased}>
          <div>
            <h5>Deceased</h5>
          </div>
          <div>
            <h4>[+{globalCardData ? globalCardData.deltadeaths : 0}]</h4>
          </div>
          <div>
            <h2>{globalCardData ? globalCardData.deaths : 0}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalCards;
