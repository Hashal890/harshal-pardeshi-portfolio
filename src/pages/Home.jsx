import React from "react";
import { Flex, Heading, Text, Code } from "@chakra-ui/react";
import ResumeButtons from "../components/home/ResumeButtons";

export default function Home() {
  return (
    <Flex
      flexDir={"column"}
      gap={4}
      justifyContent={"center"}
      alignItems={"center"}
      h={"80vh"}
      w={"100%"}
      id={"home"}
    >
      <Text color={"gray"}>HI MY NAME IS</Text>
      <Heading
        bgGradient="linear(to-r, teal.400, green.500)"
        bgClip="text"
        fontWeight="extrabold"
        fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
      >
        Harshal Pardeshi
      </Heading>
      <Code colorScheme={"messenger"} fontSize={"18px"}>
        A Full Stack Web Developer
      </Code>
      <Text maxW={"600px"} textAlign={"center"} color={"gray"}>
        Aspiring Full Stack Web Developer with a strong foundation in MERN
        stacks, Next.js, Redux, Node.js, JavaScript, TypeScript, HTML, CSS and
        DSA. Dedicated to delivering high-quality web applications and
        solutions. Proven ability to collaborate effectively in team
        environments, with a keen eye for detail and a passion for continuous
        learning and growth.
      </Text>
      <ResumeButtons />
    </Flex>
  );
}
