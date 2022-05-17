import React, { useEffect, useState } from "react";
import axios from "axios";
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
  HStack,
  Button,
  Heading,
  InputGroup,
  InputRightElement,
  Spinner,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { LineChart } from "../layout/LineChart";

export const Dashboard = () => {
  const [coins, setCoins] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [value, setValue] = useState<any>([]);
  const [page, setPage] = useState(1);
  const APIURL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=1000&page=${page}&sparkline=true`;

  useEffect(() => {
    axios
      .get(APIURL)
      .then((res) => {
        setCoins(res.data);
        console.table(res.data);
      })
      .catch((error) => console.log(error));
  }, [page]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredCoins: any[] = coins.filter((coin) =>
    coin.symbol.toLowerCase().includes(search.toLocaleLowerCase())
  );

  const filteredSlice: any[] = filteredCoins.slice(0, 10);

  const sendInfo = (val: any[]) => (_event: any) => {
     console.log("e", val);
    setValue(val);
  };
  
  const formatNumber = (number:number) =>{
    return new Intl.NumberFormat('de-DE',{ style: 'currency', currency: 'USD' }).format(number);
  }

  return (
    <Container minWidth={["570px", "767px", "992px", "1200px"]} p="2rem">
      <HStack justify="space-between" mb="2rem">
        <Heading>Dashboard</Heading>
        <InputGroup w={["10rem", "15rem", "20rem", "30rem"]}>
          <Input
            h="2rem"
            fontSize="xs"
            variant="outline"
            placeholder="Search coin..."
            onChange={(e) => handleChange(e)}
          />
          <InputRightElement
            h="2rem"
            fontSize="xs"
            children={<SearchIcon color="brand.tertiary" />}
          />
        </InputGroup>
      </HStack>
      {!coins ? (
        <Container
          my={["10rem", "12rem", "12rem", "14rem"]}
          mx={["16rem", "16rem", "20rem", "28rem"]}
        >
          {" "}
          <Spinner size="xl" color="brand.primary" />
        </Container>
      ) : (
        <TableContainer mt="2rem" border="0.9px" borderRadius="xl" color="grey">
          <Table
            variant="simple"
            colorScheme="blackAlpha"
            size="xs"
            fontSize="xs"
            w={["40rem", "50rem", "60rem", "70rem"]}
          >
            <Thead>
              <Tr bg="brand.fourth">
                <Th pl="1rem">Rank</Th>
                <Th>Name</Th>
                <Th isNumeric>Current Price</Th>
                <Th isNumeric>Change (24h)</Th>
                <Th isNumeric>Total Supply</Th>
                <Th isNumeric>Total Vol</Th>
                <Th isNumeric pr="2rem">
                  Last 7 days
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {filteredSlice.map((c: any) => {
                return (
                  <Tr>
                    <Td pl="1rem">{c.market_cap_rank}</Td>
                    <Td>
                      <HStack>
                        <Image src={c.image} boxSize="1rem" />
                        <Text>{c.name}</Text>
                        <Button
                          size="xs"
                          textTransform="uppercase"
                          fontSize="xs"
                          onClick={sendInfo(c)}
                        >
                          {c.symbol}
                        </Button>
                      </HStack>
                    </Td>
                    <Td isNumeric>{formatNumber(c.current_price)}</Td>
                    <Td isNumeric>
                      <Text
                        color={
                          c.market_cap_change_percentage_24h <= 0
                            ? "red"
                            : "green"
                        }
                      >
                        {c.market_cap_change_percentage_24h} %
                      </Text>
                    </Td>
                    <Td isNumeric>{c.total_supply}</Td>
                    <Td isNumeric>{c.total_volume}</Td>
                    <Td>
                      <Image
                        boxSize="4rem"
                        h="2rem"
                        ml="3rem"
                        src={`https://www.coingecko.com/coins/${c.market_cap_rank}/sparkline`}
                      ></Image>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
            <Tfoot>
              <HStack fontSize="xs" mx="1rem" my="1rem">
                <Button
                  onClick={() => setPage(page - 1)}
                  h="2rem"
                  leftIcon={<BsArrowLeftShort />}
                  disabled={page <= 1 ? true : false}
                >
                  <Text fontSize="xs">Prev</Text>
                </Button>
                <Box>{page}</Box>
                <Button
                  onClick={() => setPage(page + 1)}
                  h="2rem"
                  rightIcon={<BsArrowRightShort />}
                >
                  <Text fontSize="xs">Next</Text>
                </Button>
              </HStack>
            </Tfoot>
          </Table>
        </TableContainer>
      )}
      <Box >
      <LineChart />
      </Box>
    </Container>
  );
};
