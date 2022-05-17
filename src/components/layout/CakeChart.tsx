import React,{useState} from 'react';
import {Container} from "@chakra-ui/react";
import axios from "axios";

export const CakeChart = () => {
  const [chartData, setChartData] = useState([]);
  // const APICHARTURL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=250&page=1&sparkline=false';

  // const fetchCoins = () => {
  //     axios.get(APICHARTURL)
  //     .then((resp)=>{
  //       setChartData(resp.data);
  //       console.table(resp.data);
  //     })
  //     .catch((error) => console.log(error));
  // };
  return (
    <Container mt="1rem">
      qweasdasd
    </Container>
  )
}
