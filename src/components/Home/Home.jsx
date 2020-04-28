import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  GlobalCards,
  Tables,
  StateCards,
  Country,
  Chart,
} from "../../components";

import styles from "./Home.module.css";
import { getAllData } from "../../store/Action";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllData());
  });

  return (
    <div className={styles.Home}>
      <div className={styles.homeLeft}>
        <Country />
        <GlobalCards />
        <Tables />
      </div>
      <div className={styles.homeRight}>
        <StateCards />
        <Chart />
      </div>
    </div>
  );
};

export default Home;
