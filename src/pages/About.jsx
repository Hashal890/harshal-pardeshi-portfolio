import React from "react";
import { Box } from "@chakra-ui/react";
import AboutMeCard from "../components/about/AboutMeCard";

const About = () => {
  return (
    <Box id={"about"} w={["95%", "95%", "80%"]} m={"auto"} pt={4}>
      <AboutMeCard />
    </Box>
  );
};

export default About;
