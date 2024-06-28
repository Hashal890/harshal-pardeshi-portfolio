import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import SectionHeading from "../components/common/SectionHeading";
// import ProjectsCarousel from "../components/projects/ProjectsCarousel";
import { ProjectsList } from "../assets/data";
import ProjectCard from "../components/projects/ProjectCard";

const Projects = () => {
  return (
    <Box id={"projects"} mt={[20, 20, 32]}>
      <SectionHeading sectionName={"Projects"} />
      {/* <ProjectsCarousel /> */}
      <SimpleGrid columns={[1, 1, 2, 3]} gap={4}>
        {ProjectsList.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Projects;
