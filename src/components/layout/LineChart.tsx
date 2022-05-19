import React, { useState, useContext, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Container } from "@chakra-ui/react";
import DashboardContext from "../../context/Dashboard/DashboardContext";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const labels: string[] = [];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
for (let i = 0; i < 7; i++) {
  labels.push(`${new Date().getDate() - i} ${months[new Date().getMonth()]}`);
}
labels.reverse();
const options = {
  responsive: true,
  // maintainAspectRatio: false,
  fill: true,
  plugins: {
    legend: {
      display: true,
    },
  },
};

export const LineChart: React.FC<any> = () => {
  const { data } = useContext(DashboardContext);

  let result = {
    datasets: [
      {
        label: `${data.name && data.name} to USD Chart`,
        data: data.length !== 0 && data.sparkline_in_7d.price,
        tension: 0.2,
        borderColor: "rgb(102, 158, 255)",
        backgroundColor: "rgba(102, 158, 255,0.2)",
      },
    ],
    labels,
  };
  return (
    <Container minW="50rem">
      <Line data={result} options={options} />
    </Container>
  );
};
