import React from "react";
import { Box } from "@chakra-ui/react";
import SectionHeading from "../components/common/SectionHeading";
import GitHubCommitsInfo from "../components/github-stats/GitHubCommitsInfo";
import GithubCalendar from "../components/github-stats/GitHubCalender";

const GithubStats = () => {
  return (
    <Box mt={[20, 20, 32]}>
      <SectionHeading sectionName={"GitHub Stats"} />
      <GitHubCommitsInfo />
      <GithubCalendar />
    </Box>
  );
};

export default GithubStats;
