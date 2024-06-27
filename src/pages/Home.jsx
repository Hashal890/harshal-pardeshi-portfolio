import React from "react";
import {
  Flex,
  Heading,
  Text,
  Code,
  Button,
} from "@chakra-ui/react";
import { IoMdDownload } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import Typist from "react-typist";

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
      <Typist>
        <Code colorScheme={"messenger"} fontSize={"18px"}>
          A Full Stack Web Developer
        </Code>
      </Typist>
      <Text maxW={"600px"} textAlign={"center"} color={"gray"}>
        Aspiring Full Stack Web Developer with a strong foundation in MERN
        stacks, Next.js, Redux, Node.js, JavaScript, TypeScript, HTML, CSS and
        DSA. Dedicated to delivering high-quality web applications and
        solutions. Proven ability to collaborate effectively in team
        environments, with a keen eye for detail and a passion for continuous
        learning and growth.
      </Text>
      <Flex
        gap={[0, 0, 4]}
        justifyContent={"center"}
        alignItems={"center"}
        flexDir={["column", "column", "row"]}
      >
        <Button
          as="a"
          href={
            "https://drive.google.com/file/d/1pV8XBrEE6ZaN5BbITcfE215MNNCLl94z/view?usp=sharing"
          }
          target="_blank"
          rel="noopener noreferrer"
          rightIcon={<FaEye />}
          w="ms"
          mt={6}
          colorScheme={"linkedin"}
          size={"md"}
        >
          View Resume
        </Button>
        <Button
          as="a"
          href={
            "https://drive.google.com/uc?export=download&id=1pV8XBrEE6ZaN5BbITcfE215MNNCLl94z"
          }
          target="_blank"
          rel="noopener noreferrer"
          rightIcon={<IoMdDownload />}
          w="ms"
          mt={6}
          colorScheme={"linkedin"}
          size={"md"}
        >
          Download Resume
        </Button>
      </Flex>
    </Flex>
  );
}
