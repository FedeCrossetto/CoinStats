import React, { useState, useContext, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Title, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Container } from "@chakra-ui/react";
import DashboardContext from "../../context/Dashboard/DashboardContext";
ChartJS.register(ArcElement, Title, Tooltip, Legend);

export const PieChart: React.FC<any> = () => {
  const { data } = useContext(DashboardContext);
  const result = {
    datasets: [
      {
        data: [data.high_24h, data.low_24h],
        backgroundColor: ["rgb(255, 84, 243)", "rgb(193, 99, 221)"],
      },
    ],
    labels: ["Data High 24h", "Data Low 24h"],
  };

  return (
    <Container w="23rem">
      <Pie data={result} />
    </Container>
  );
};
