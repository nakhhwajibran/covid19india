import React, { useState } from "react";
import { useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import ActiveChart from "../Chart/Active/ActiveChart";
import ConfirmChart from "../Chart/Confirmed/ConfirmChart";
import DeathChart from "../Chart/Death/DeathChart";
import RecoveredChart from "../Chart/Recovered/RecoveredChart";
import styles from "./Chart.module.scss";

const Chart = () => {
  const chartData = useSelector((state) => state.singleChartData);
  const [dailyGraph, setDailyGraph] = useState(false);
  return (
    <div className={styles.chart}>
      <div className={styles.chart__header}>
        <h2>Spread Trends</h2>
      </div>
      <div className={styles.chart__button}>
        <Button variant="contained" onClick={() => setDailyGraph(false)}>
          Culmative
        </Button>
        <Button variant="contained" onClick={() => setDailyGraph(true)}>
          Daily
        </Button>
      </div>
      <ConfirmChart
        className={styles.chart__confirmChart}
        chartData={chartData}
        dailyGraph={dailyGraph}
      />
      <ActiveChart
        className={styles.chart__activeChart}
        chartData={chartData}
        dailyGraph={dailyGraph}
      />
      <RecoveredChart
        className={styles.chart__recoveredChart}
        chartData={chartData}
        dailyGraph={dailyGraph}
      />
      <DeathChart
        className={styles.chart__deathChart}
        chartData={chartData}
        dailyGraph={dailyGraph}
      />
    </div>
  );
};

export default Chart;
