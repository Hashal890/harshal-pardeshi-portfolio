import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import SectionHeading from "../components/common/SectionHeading";
import { SkillsList } from "../assets/data";
import SkillsCard from "../components/skills/SkillsCard";

const Skills = () => {
  return (
    <Box id={"skills"} mt={[20, 20, 32]}>
      <SectionHeading sectionName={"Skills"} />
      <SimpleGrid columns={[3, 4, 4, 7]} spacing="4" mt="5" mb="5">
        {SkillsList.map((skill) => (
          <SkillsCard key={skill.id} {...skill} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Skills;
