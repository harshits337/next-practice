'use client';
// components/BarChart.js
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

import styles from './datewise.module.css'

// Register required Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const BarChart = () => {
  // Sample data
  const data = {
    labels: ["2025-01-15", "2025-01-16", "2025-01-17", "2025-01-18"], // Dates
    datasets: [
      {
        label: "Completed Tasks",
        data: [12, 15, 9, 14], // Number of tasks done
        backgroundColor: "#4CAF50", // Green for completed
      },
      {
        label: "Pending Tasks",
        data: [8, 10, 11, 7], // Number of pending tasks
        backgroundColor: "#FF5722", // Red for pending
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const, // Position of legend
      },
    },
    scales: {
      x: {
        stacked: false, // Side-by-side bars
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className={styles.wrapper}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
