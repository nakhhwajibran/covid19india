import React from "react";
import ActiveLineChart from "./ActiveLineChart";
import ActiveBarChart from "./ActiveBarChart";

function ActiveChart(props) {
  const chartData = props.chartData;
  return (
    <div>
      {props.dailyGraph ? (
        <ActiveBarChart chartData={chartData} />
      ) : (
        <ActiveLineChart chartData={chartData} />
      )}
    </div>
  );
}

export default ActiveChart;
