import React from "react";
import { Box, Text } from "@chakra-ui/react";
import SectionHeading from "../components/common/SectionHeading";
import ContactPlatforms from "../components/contact/ContactPlatforms";

const Contact = () => {
  return (
    <Box id={"contact"} mt={[20, 20, 32]} mb={32}>
      <SectionHeading sectionName={"Get in Touch"} />
      <Text maxW={"600px"} m={"auto"} textAlign={"center"}>
        👋 I'm actively seeking new opportunities in Full Stack Web Development
        and would love to hear from you! Whether you have an exciting project
        idea, a job opportunity, or simply want to connect, feel free to reach
        out to me via any of the platforms below:
      </Text>
      <ContactPlatforms />
    </Box>
  );
};

export default Contact;
