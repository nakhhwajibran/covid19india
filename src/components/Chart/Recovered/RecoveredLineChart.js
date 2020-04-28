import React from "react";
import { Line } from "react-chartjs-2";
import styles from "../Chart.module.scss";

function RecoveredLineChart({ chartData }) {
  const Options = {
    scales: {
      xAxes: [
        {
          stacked: true,
          gridLines: {
            display: false,
            drawBorder: true,
            drawOnChartArea: true,
            drawTicks: true,
            zeroLineColor: "rgba(40, 167, 69, 1)",
            tickMarkLength: 20,
          },
          ticks: {
            fontSize: 10,
            autoSkip: true,
            maxRotation: 0,
            maxTicksLimit: 5,
            stepSize: 7,
            fontColor: "rgba(40, 167, 69, 1)",
          },
        },
      ],
      yAxes: [
        {
          stacked: true,
          position: "right",
          gridLines: {
            display: true,
            drawBorder: true,
            drawOnChartArea: true,
            drawTicks: true,
            tickMarkLength: 20,
            zeroLineColor: "rgba(40, 167, 69, 1)",
          },
          ticks: {
            beginAtZero: false,
            fontSize: 10,
            autoSkip: true,
            maxRotation: 0,
            maxTicksLimit: 5,
            stepSize: 5,
            fontColor: "rgba(40, 167, 69, 1)",
          },
        },
      ],
    },
    legend: {
      display: true,
      position: "top",
      align: "start",
      labels: {
        fontColor: "rgba(40, 167, 69, 1)",
      },
    },
    tooltips: {
      enabled: true,
    },
    layout: {
      padding: {
        left: 20,
        right: 20,
        top: 20,
        bottom: 20,
      },
    },
  };
  return (
    <div className={styles.chart__recoveredChart}>
      {chartData ? (
        <Line
          data={{
            labels: chartData.date,
            datasets: [
              {
                data: chartData.culmativeRecovered,
                label: "Recovered",
                backgroundColor: "rgba(40, 167, 69, 1)",
              },
            ],
          }}
          options={Options}
        />
      ) : (
        "Charts"
      )}
    </div>
  );
}

export default RecoveredLineChart;
