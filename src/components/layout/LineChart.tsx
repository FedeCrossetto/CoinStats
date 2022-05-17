import React, { useMemo, useState } from "react";
import { Container } from "@chakra-ui/react";
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

const scores = [6, 4, 5, 3, 2, 1];
const labels = [100, 300, 1500, 40, 102];

const options = {
  responsive: true,
  // maintainAspectRatio: false,
  fill:true,
  plugins: {
    legend: {
      display: true,
    },
  },
};
export const LineChart = () => {
  const data = useMemo(function () {
    return {
      datasets: [
        {
          label: "Mis datos",
          data: scores,
          tension: 0.3,
          borderColor:"rgb(102, 158, 255)",
          backgroundColor:"rgba(102, 158, 255,0.2)"
        },
      ],
      labels,
    };
  }, []);
  return <Line data={data} options={options}/>;
};
