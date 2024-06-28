import React from "react";
import {
  Box,
  Card,
  CardBody,
  Stack,
  StackDivider,
} from "@chakra-ui/react";
import SectionHeading from "../components/common/SectionHeading";
import { EducationDetails } from "../assets/data";
import EducationCard from "../components/education/EducationCard";

const Education = () => {
  return (
    <Box id={"education"} mt={[20, 20, 32]}>
      <SectionHeading sectionName={"Education"} />
      <Card maxW={"600px"} m={"auto"}>
        <CardBody>
          <Stack divider={<StackDivider />} spacing={8}>
            {EducationDetails.map((education) => (
              <EducationCard key={education.id} {...education} />
            ))}
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
};

export default Education;
