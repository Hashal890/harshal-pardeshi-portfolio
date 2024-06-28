import React from "react";
import { Flex, useColorModeValue } from "@chakra-ui/react";
import GitHubCalendar from "react-github-calendar";

export default function GithubCalendar() {
  return (
    <Flex justifyContent={"center"} alignContent={"center"} mt={12}>
      <GitHubCalendar
        username="Hashal890"
        blockSize={15}
        blockMargin={5}
        // color="rgb(10,120,219)"
        fontSize={16}
        colorScheme={useColorModeValue("light", "dark")}
      />
    </Flex>
  );
}
