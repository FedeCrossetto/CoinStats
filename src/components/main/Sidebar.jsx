import React,{useState} from "react";
import { Flex, Divider, Avatar, Heading, Text ,IconButton,VStack} from "@chakra-ui/react";
import { FiHome ,FiCalendar,FiUser,FiMenu,FiDollarSign,FiBriefcase,FiSettings} from "react-icons/fi";
import {SidebarItem} from "../layout/SidebarItem"

export const Sidebar = () => {
    const [navSize, changeNavSize] = useState("large")


  return (
    <Flex
    pos="absolute"
    left="5"
    h="95vh"
    marginTop="2.5vh"
    boxShadow="xl"
    borderRadius={navSize == "small" ? "15px" : "30px"}
    w={navSize == "small" ? "75px" : "170px"}
    flexDir="column"
    justifyContent="space-between"
    fontSize="xs"
>
    <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize == "small" ? "center" : "flex-start"}
        as="nav"
    >
        <IconButton
            aria-label="Icon"
            background="none"
            mt={5}
            _hover={{ background: 'none' }}
            icon={<FiMenu />}
            onClick={() => {
                if (navSize == "small")
                    changeNavSize("large")
                else
                    changeNavSize("small")
            }}
        />
        <SidebarItem name="dashboard" navSize={navSize} icon={FiHome} title="Dashboard"/>
        <SidebarItem name="table"  navSize={navSize} icon={FiCalendar} title="Table" active />
        {/* <SidebarItem navSize={navSize} icon={FiUser} title="Clients" />
        <SidebarItem navSize={navSize} icon={FiDollarSign} title="Stocks" />
        <SidebarItem navSize={navSize} icon={FiBriefcase} title="Reports" /> */}
        <SidebarItem name="settings" navSize={navSize} icon={FiSettings} title="Settings" />
    </Flex>

    <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize == "small" ? "center" : "flex-start"}
        mb={4}
    >
        <Divider display={navSize == "small" ? "none" : "flex"} />
        <Flex mt={4} align="center">
            <Avatar size="sm" src="avatar-1.jpg" />
            <Flex flexDir="column" ml={4} display={navSize == "small" ? "none" : "flex"}>
                <Heading  size="xs">Sylwia Weller</Heading>
                <Text color="gray">Admin</Text>
            </Flex>
        </Flex>
    </Flex>
</Flex>
  );
};
