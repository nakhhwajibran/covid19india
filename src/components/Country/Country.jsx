import React from "react";
import styles from "./Country.module.scss";

const Country = () => {
  return (
    <div>
      <div className={styles.Search}>
        <label>Search your state</label>
        <input />
      </div>
    </div>
  );
};

export default Country;
