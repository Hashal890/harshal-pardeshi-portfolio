import { GridItem, Text, IconButton, VStack } from "@chakra-ui/react";
import React from "react";

const SkillsCard = ({ name, link, icon, color }) => {
  return (
    <GridItem border={"1px dashed cyan"} borderRadius={"20px"} p={4}>
      <VStack justifyContent={"center"} alignItems={"center"} gap={4}>
        <Text textAlign={"center"} fontSize={["10px", "12px", "12px", "14px"]}>
          {name}
        </Text>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <IconButton
            colorScheme={"none"}
            aria-label={name}
            fontSize="20px"
            icon={icon}
            color={color}
          />
        </a>
      </VStack>
    </GridItem>
  );
};

export default SkillsCard;
