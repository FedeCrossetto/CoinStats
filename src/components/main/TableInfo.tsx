import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Container,
  Input,
  Box,
  Image,
  Text,
  HStack
} from '@chakra-ui/react';
import { Cards } from '../layout/Cards';


export const TableInfo = () => {
  interface FooProp {
    name: string;
    X: number;
    Y: number;
  }
  
  const APIURL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&sparkline=false';
  const [coins,setCoins] = useState<any[]>([]);
  const [search,setSearch] = useState('');

  useEffect(() => {
    axios.get(APIURL).then(res=>{
     setCoins(res.data);
     console.table(res.data);
    }).catch(error => console.log(error))
  }, [])
   
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log('search',search)
  }

  const filteredCoins:any[] = coins.filter(coin =>
    coin.symbol.toLowerCase().includes(search.toLocaleLowerCase())
    )

  return (
    <Container   minWidth={["570px", "767px", "992px", "1200px"]} p="2rem">
      <Input variant='outline' placeholder='Search coin...' mb="2rem" onChange={e=> handleChange(e)}/>
    { coins &&
    (
      // <Cards key={coins} data={coins}/>
      <TableContainer>
      <Table variant="simple" colorScheme="pink">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th isNumeric>Current Price</Th>
            <Th isNumeric>Total Supply</Th>
            <Th isNumeric>Total Vol</Th>
          </Tr>
        </Thead>
        <Tbody>
          {/* <Tr> */}
            {filteredCoins.map((c:any) =>{
              return (

                <Tr>
                <Td><HStack><Image src={c.image} boxSize="1rem"/><Text>{c.name}</Text></HStack></Td>
                <Td isNumeric>{c.current_price}</Td>
                <Td isNumeric>{c.total_supply}</Td>
                <Td isNumeric>{c.total_volume}</Td>
                </Tr>
              )
            })}
            {/* <Td>millimetres (mm)</Td>
            <Td isNumeric>25.4</Td>
          </Tr>
          <Tr>
            <Td>feet</Td>
            <Td>centimetres (cm)</Td>
            <Td isNumeric>30.48</Td>
          </Tr>
          <Tr>
            <Td>yards</Td>
            <Td>metres (m)</Td>
            <Td isNumeric>0.91444</Td>
          </Tr> */}
        </Tbody>
        {/* <Tfoot>
        <Tr>
          <Th>To convert</Th>
          <Th>into</Th>
          <Th isNumeric>multiply by</Th>
        </Tr>
      </Tfoot> */}
      </Table>
    </TableContainer>
      )}
    </Container>)
}
