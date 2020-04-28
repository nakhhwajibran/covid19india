import React from "react";
import ConfirmBarChart from "./ConfirmBarChart";
import ConfirmLineChart from "./ConfirmLineChart";
function ConfirmChart(props) {
  const chartData = props.chartData;
  return (
    <div>
      {props.dailyGraph ? (
        <ConfirmBarChart chartData={chartData} />
      ) : (
        <ConfirmLineChart chartData={chartData} />
      )}
    </div>
  );
}

export default ConfirmChart;
