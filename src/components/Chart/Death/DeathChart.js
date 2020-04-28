import React from "react";
import DeathBarChart from "./DeathBarChart";
import DeathLineChart from "./DeathLineChart";

function DeathChart(props) {
  const chartData = props.chartData;
  return (
    <div>
      {props.dailyGraph ? (
        <DeathBarChart chartData={chartData} />
      ) : (
        <DeathLineChart chartData={chartData} />
      )}
    </div>
  );
}

export default DeathChart;
