import React from "react";
import { Button, Flex } from "@chakra-ui/react";
import { FaEye } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";

const ResumeButtons = () => {
  return (
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
  );
};

export default ResumeButtons;
