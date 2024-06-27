import {
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  Text,
  Avatar,
} from "@chakra-ui/react";
import React from "react";
import NavbarItem from "./NavbarItem";
import { NavbarLinks } from "../../assets/data";

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex flexDir={"row-reverse"}>
        <CloseButton
          display={{ base: "flex", md: "none" }}
          onClick={onClose}
          p={4}
          m={6}
          border={"1px dotted"}
        />
      </Flex>
      <Box mt={[4, 4, 8]}>
        {NavbarLinks.map((link) => (
          <NavbarItem
            key={link.id}
            id={link.id}
            name={link.name}
            to={link.to}
            onClose={onClose}
          />
        ))}
      </Box>
    </Box>
  );
};

export default SidebarContent;
