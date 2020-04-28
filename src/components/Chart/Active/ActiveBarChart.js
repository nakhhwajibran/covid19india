import React from "react";
import { Bar } from "react-chartjs-2";
import styles from "../Chart.module.scss";

function ActiveBarChart({ chartData }) {
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
            zeroLineColor: "rgba(0, 123, 255, 1)",
            tickMarkLength: 20,
          },
          ticks: {
            fontSize: 10,
            autoSkip: true,
            maxRotation: 0,
            maxTicksLimit: 5,
            stepSize: 7,
            fontColor: "rgba(0, 123, 255, 1)",
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
            zeroLineColor: "rgba(0, 123, 255, 1)",
          },
          ticks: {
            beginAtZero: false,
            fontSize: 10,
            autoSkip: true,
            maxRotation: 0,
            maxTicksLimit: 5,
            stepSize: 5,
            fontColor: "rgba(0, 123, 255, 1)",
          },
        },
      ],
    },
    legend: {
      display: true,
      position: "top",
      align: "start",
      labels: {
        fontColor: "rgba(0, 123, 255, 1)",
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
    <div className={styles.chart__activeChart}>
      {chartData ? (
        <Bar
          data={{
            labels: chartData.date,
            datasets: [
              {
                data: chartData.dailyActive,
                label: "Active",
                backgroundColor: "rgba(0, 123, 255, 1)",
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

export default ActiveBarChart;
