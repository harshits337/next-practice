'use client';
import { Doughnut } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
  } from "chart.js";

  import styles from './totalData.module.css'

  ChartJS.register(ArcElement, Tooltip, Legend);
const TotalData = () => {
  const data = {
    labels: [`Completed Tasks : ${89} `, `Pending Tasks : ${99}`],
    datasets: [
      {
        label: "Count",
        data: [89, 99], // Your task data
        backgroundColor: ["green", "red"], // Colors for completed and pending tasks
        hoverBackgroundColor: ["#45A049", "#FF7043"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "left" as const,
      },
    },
  };
  return (
      <div className={styles.wrapper}>
        <div>
          <div style={{ width: "400px", height: "200px" }}>
            <Doughnut data={data} options={options} />
          </div>
        </div>
      </div>
  );
};

export default TotalData;
