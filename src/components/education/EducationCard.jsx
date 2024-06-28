import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

const EducationCard = ({ title, role, period }) => {
  return (
    <Box>
      <Heading size="xs" textTransform="uppercase">
        {title}
      </Heading>
      <Text pt="2" fontSize="sm">
        {role}
      </Text>
      <Text pt="2" fontSize="sm">
        {period}
      </Text>
    </Box>
  );
};

export default EducationCard;
