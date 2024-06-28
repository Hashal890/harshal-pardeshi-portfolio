import React from "react";
import { Box } from "@chakra-ui/react";
import AboutMeCard from "../components/about/AboutMeCard";

const About = () => {
  return (
    <Box
      id={"about"}
      m={"auto"}
      pt={4}
      w={["95%", "95%", "80%"]}
    >
      <AboutMeCard />
    </Box>
  );
};

export default About;
