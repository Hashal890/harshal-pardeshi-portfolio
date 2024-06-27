import {
  Flex,
  HStack,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { FaMoon, FaSun } from "react-icons/fa";

const MobileNavbar = ({ onOpen, ...rest }) => {
  const { toggleColorMode } = useColorMode();

  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />
      <HStack spacing={{ base: "0", md: "6" }}>
        <IconButton
          variant="outline"
          icon={useColorModeValue(<FaMoon />, <FaSun />)}
          onClick={toggleColorMode}
          aria-label="toggle-dark-mode"
          _hover={{
            textDecoration: "none",
            bg: useColorModeValue("blue.200", "blue.600"),
          }}
        />
      </HStack>
    </Flex>
  );
};

export default MobileNavbar;
