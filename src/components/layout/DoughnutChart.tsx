import React, { useState, useContext, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Title, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Container } from "@chakra-ui/react";
import DashboardContext from "../../context/Dashboard/DashboardContext";
ChartJS.register(ArcElement, Title, Tooltip, Legend);

export const DoughnutChart: React.FC<any> = () => {
  const { data } = useContext(DashboardContext);
  const result = {
    datasets: [
      {
        data: [data.total_supply, data.total_volume],
        backgroundColor: ["rgb(255, 84, 243)", "rgb(193, 99, 221)"],
      },
    ],
    labels: ["Total Supply", "Total Volume"],
  };

  return (
    <Container w="23rem">
      <Doughnut data={result} />
    </Container>
  );
};
