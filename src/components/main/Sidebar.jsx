import React,{useState} from "react";
import { Flex, Divider, Avatar, Heading, Text ,IconButton,Image} from "@chakra-ui/react";
import { FiHome ,FiCalendar,FiUser,FiMenu,FiDollarSign,FiBriefcase,FiSettings} from "react-icons/fi";
import { FaChartPie} from "react-icons/fa";
import { RiTableFill} from "react-icons/ri";
import { MdOutlineHistory} from "react-icons/md";
import {SidebarItem} from "../layout/SidebarItem"
import logo from '../../assets/logo2.png';

export const Sidebar = () => {
    const [navSize, changeNavSize] = useState("small")


  return (
    <Flex
    pos="fixed"
    h={["100vh", "100vh", "150vh", "100vh"]}
    boxShadow="2xl"
    w={navSize == "small" ? "75px" : "170px"}
    flexDir="column"
    justifyContent="space-between"
    fontSize="xs"
     outline="1px solid rgba(178,178,178, .25)"
     bg="white"
>
    <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize == "small" ? "center" : "flex-start"}
        as="nav"
    >
        <Image 
            src={logo}
            my="2vh"
            boxSize="3rem"
        />
        <Divider/>
        {/* <IconButton
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
        /> */}
        
        <SidebarItem name="dashboard" navSize={navSize} icon={FaChartPie} title="Dashboard"/>
        <SidebarItem name="history"  navSize={navSize} icon={MdOutlineHistory} title="History" disabled/>
        <SidebarItem name="settings" navSize={navSize} icon={FiSettings} title="Settings" disabled/>
    </Flex>
</Flex>
  );
};
