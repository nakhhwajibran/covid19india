import React from "react";
import RecoveredBarChart from "./RecoveredBarChart";
import RecoveredLineChart from "./RecoveredLineChart";

function RecoveredChart(props) {
  const chartData = props.chartData;

  return (
    <div>
      {props.dailyGraph ? (
        <RecoveredBarChart chartData={chartData} />
      ) : (
        <RecoveredLineChart chartData={chartData} />
      )}
    </div>
  );
}

export default RecoveredChart;
