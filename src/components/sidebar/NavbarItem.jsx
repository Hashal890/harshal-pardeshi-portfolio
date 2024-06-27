import { Box, Flex } from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";

const NavbarItem = ({ id, name, to, onClose }) => {
  return (
    <>
      {id === 6 ? (
        <a
          href={to}
          target="_blank"
          rel="noopener noreferrer"
          cursor={"pointer"}
          onClick={onClose}
        >
          <Flex
            align="center"
            p="4"
            mx="4"
            borderRadius="lg"
            role="group"
            cursor="pointer"
            _hover={{
              bg: "cyan.400",
              color: "white",
            }}
          >
            {name}
          </Flex>
        </a>
      ) : (
        <ScrollLink
          to={to}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          onClick={onClose}
        >
          <Box
            style={{ textDecoration: "none" }}
            _focus={{ boxShadow: "none" }}
          >
            <Flex
              align="center"
              p="4"
              mx="4"
              borderRadius="lg"
              role="group"
              cursor="pointer"
              _hover={{
                bg: "cyan.400",
                color: "white",
              }}
            >
              {name}
            </Flex>
          </Box>
        </ScrollLink>
      )}
    </>
  );
};

export default NavbarItem;
