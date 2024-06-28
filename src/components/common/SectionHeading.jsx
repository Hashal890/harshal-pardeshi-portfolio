import React from "react";
import { Heading } from "@chakra-ui/react";

const SectionHeading = ({ sectionName }) => {
  return (
    <Heading
      textAlign={"center"}
      bgGradient="linear(to-r, teal.400, green.500)"
      bgClip="text"
      fontWeight="extrabold"
      fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
      my={8}
    >
      {sectionName}
    </Heading>
  );
};

export default SectionHeading;
