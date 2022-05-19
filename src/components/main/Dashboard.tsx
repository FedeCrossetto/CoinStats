import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  Container,
  Input,
  Box,
  Image,
  Text,
  HStack,
  VStack,
  Button,
  Heading,
  InputGroup,
  InputRightElement,
  Spinner,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import DashboardContext from "../../context/Dashboard/DashboardContext";
//Charts
import { LineChart } from "../layout/LineChart";
import { DoughnutChart } from "../layout/DoughnutChart";
import { PieChart } from "../layout/PieChart";

export const Dashboard = () => {
  const [coins, setCoins] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const { getData,getCollections} = useContext(DashboardContext);
  const APIURL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=1000&page=${page}&sparkline=true`;

  useEffect(() => {
    axios
      .get(APIURL)
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, [page]);

  // console.table(coins);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredCoins: any[] = coins.filter((coin) =>
    coin.symbol.toLowerCase().includes(search.toLocaleLowerCase())
  );

  const filteredSlice: any[] = filteredCoins.slice(0, 25);

  const sendInfo = (val: any[]) => (_event: any) => {
    getData(val);
    getCollections(val);
  };

  const formatNumber = (number: number) => {
    return new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "USD",
    }).format(number);
  };

  return (
    <Grid
      h="100vh"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(6, 1fr)"
      gap={1}
    >
      <GridItem colSpan={5} rowSpan={2} ml="6rem">
        <Heading m="1rem">
          Dashboard
        </Heading>
        <VStack mt="1rem">
          <Box bg="white" borderRadius="xl" p="1rem" boxShadow="2xl">
            <LineChart />
          </Box>
          <HStack pt="2rem" gap={4}>
            <Box bg="white" borderRadius="xl" p="1rem" boxShadow="2xl">
              <DoughnutChart />
            </Box>
            <Box bg="white" borderRadius="xl" p="1rem" boxShadow="2xl">
              <PieChart />
            </Box>
          </HStack>
        </VStack>
      </GridItem>
      <GridItem colSpan={1} rowSpan={2}>
        <Container
          p="2rem"
          maxWidth="32rem"
          bg="white"
          boxShadow="xl"
          h="100vh"
        >
          <HStack justify="space-between" mb="2rem">
            <InputGroup>
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
            <TableContainer
              mt="2rem"
              border="0.9px"
              borderRadius="xl"
              color="grey"
            >
              <Table
                variant="simple"
                colorScheme="blackAlpha"
                size="xs"
                fontSize="xs"
                maxWidth="26rem"
                w={["40rem", "50rem", "70rem", "80rem"]}
              >
                <Thead>
                  <Tr bg="brand.fourth">
                    <Th pl="2rem">Name</Th>
                    <Th px="1rem" isNumeric>
                      Price
                    </Th>
                    <Th pr="1rem" isNumeric>
                      Change (24h)
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {filteredSlice.map((c: any) => {
                    return (
                      <Tr>
                        <Td isNumeric>
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
                        <Td pr="1rem" isNumeric>
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
                      </Tr>
                    );
                  })}
                </Tbody>
                <Tfoot>
                  <HStack fontSize="xs" my="1rem">
                    <Button
                      onClick={() => setPage(page - 1)}
                      h="1rem"
                      leftIcon={<BsArrowLeftShort />}
                      disabled={page <= 1 ? true : false}
                    >
                      <Text fontSize="xs">Prev</Text>
                    </Button>
                    <Box>{page}</Box>
                    <Button
                      onClick={() => setPage(page + 1)}
                      h="1rem"
                      rightIcon={<BsArrowRightShort />}
                    >
                      <Text fontSize="xs">Next</Text>
                    </Button>
                  </HStack>
                </Tfoot>
              </Table>
            </TableContainer>
          )}
        </Container>
      </GridItem>
    </Grid>
  );
};
