import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import SectionHeading from "../common/SectionHeading";
import ProfilePhoto from "../../assets/Harshal-Pardeshi-Profile-Photo.png";

const AboutMeCard = () => {
  return (
    <Box>
      <SectionHeading sectionName={"About Me"} />
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        gap={4}
        flexDir={["column-reverse", "column-reverse", "row"]}
      >
        <Box>
          <Text color={"gray"} mb={4}>
            As a Full Stack Web Developer, I have accumulated a year of
            practical experience in full-stack web development. My journey began
            with 7 months of rigorous training at Masai School, where I
            developed my proficiency in both frontend and backend technologies.
            Following this, I dedicated 5 months to working on personal
            projects, which helped me further refine my web development skills.
            Currently, I am pursuing a B.Sc. in Computer Science from BITS
            Pilani and am willing to relocate for the right opportunity.
          </Text>
          <Text color={"gray"}>
            I am passionate about using technology to solve real-world problems
            and am driven by a genuine love for coding and a dedication to
            continuous learning. I find great satisfaction in tackling complex
            challenges and thrive in environments that encourage innovation and
            growth. My goal is to contribute to impactful projects that make a
            significant difference. Whether working independently or as part of
            a team, I am committed to delivering high-quality, innovative
            solutions that can transform lives.
          </Text>
        </Box>
        <Image
          src={ProfilePhoto}
          alt={"profile-photo"}
          w={"300px"}
          h={"300px"}
          borderRadius={"30px"}
          border={"3px dotted cyan"}
        />
      </Flex>
    </Box>
  );
};

export default AboutMeCard;
