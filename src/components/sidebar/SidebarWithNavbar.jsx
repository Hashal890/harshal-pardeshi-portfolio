import {
  Box,
  Drawer,
  DrawerContent,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import SidebarContent from "./SidebarContent";
import MobileNavbar from "./MobileNavbar";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Skills from "../../pages/Skills";
import Projects from "../../pages/Projects";
import Contact from "../../pages/Contact";

const SidebarWithHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <MobileNavbar onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </Box>
    </Box>
  );
};

export default SidebarWithHeader;
