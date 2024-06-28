import React from "react";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Code,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

const ProjectCard = ({
  title,
  description,
  techStack,
  githubUrl,
  liveUrl,
  image,
}) => {
  return (
    <Card maxW="sm" height="100%" display="flex" flexDirection="column">
      <CardBody flex="1">
        <Image src={image} alt={title} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text color={"grey"} fontSize={"14px"}>{description}</Text>
          <Flex flexWrap={"wrap"} gap={4}>
            {techStack.map((tech, index) => (
              <Code
                key={index + 1}
                colorScheme="whatsapp"
                borderRadius={"10px"}
                p={2}
              >
                {tech}
              </Code>
            ))}
          </Flex>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <a href={githubUrl} target="_blank" rel="noreferrer">
            <Button variant="solid" colorScheme="linkedin">
              View Code
            </Button>
          </a>
          <a href={liveUrl} target="_blank" rel="noreferrer">
            <Button variant="solid" colorScheme="linkedin">
              View Live
            </Button>
          </a>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
