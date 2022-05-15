import React from 'react'
import {
    Flex,
    Text,
    Icon,
    Link,
    Menu,
    MenuButton,
    MenuList
} from '@chakra-ui/react'

export const SidebarItem = ({ name,icon, title, description, active, navSize }) => {
  return (
    <Flex
    mt={30}
    flexDir="column"
    w="100%"
    alignItems={navSize == "small" ? "center" : "flex-start"}
>
    <Menu placement="right">
        <Link
            href={name}
            backgroundColor={active && "brand.primary"}
            p={3}
            borderRadius={8}
            _hover={{ textDecor: 'none', backgroundColor: "brand.primary" }}
            w={navSize == "large" && "100%"}
        >
            <MenuButton w="100%">
                <Flex>
                    <Icon as={icon} fontSize="xl" color={active ? "brand.primary" : "gray.500"} />
                    <Text ml={5} display={navSize == "small" ? "none" : "flex"}>{title}</Text>
                </Flex>
            </MenuButton>
        </Link>
        {/* <MenuList
            py={0}
            border="none"
            w={200}
            h={200}
            ml={5}
        >
        </MenuList> */}
    </Menu>
</Flex>
  )
}
