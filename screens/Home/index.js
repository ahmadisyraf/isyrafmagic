import { Box, Stack } from "@chakra-ui/react";

import HeaderScreen from "./Header";
import WorkScreen from "./Work";
import AboutmeScreen from "./Aboutme";

import useBreakPoints from "../../hooks/useBreakPoints";

const HomeScreen = ({ worksRef, aboutMeRef }) => {
  const { isMobile, isTablet } = useBreakPoints();

  return (
    <Box
      px={isMobile ? 15 : isTablet ? 100 : 200}
      pb={20}
      position={"relative"}
    >
      <Stack direction={"column"} spacing={0}>
        <HeaderScreen isMobile={isMobile} />
        <AboutmeScreen isMobile={isMobile} aboutMeRef={aboutMeRef} />
        <WorkScreen isMobile={isMobile} worksRef={worksRef} />
      </Stack>
    </Box>
  );
};

export default HomeScreen;
