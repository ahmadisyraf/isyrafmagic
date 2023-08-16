import { Box, Stack } from "@chakra-ui/react";

import HeaderScreen from "./Header";
import WorkScreen from "./Work";
import AboutmeScreen from "./Aboutme";
import ContactScreen from "./Contact";

import useBreakPoints from "../../hooks/useBreakpoints";

const HomeScreen = ({ worksRef, aboutMeRef }) => {
  const { isMobile } = useBreakPoints();

  return (
    <Box mx={isMobile ? 5 : 200} pb={20} position={"relative"}>
      <Stack direction={"column"} spacing={0}>
        <HeaderScreen isMobile={isMobile} />
        <AboutmeScreen isMobile={isMobile} aboutMeRef={aboutMeRef} />
        <WorkScreen isMobile={isMobile} worksRef={worksRef} />
        {/* <ContactScreen isMobile={isMobile} contactRef={contactRef}/> */}
      </Stack>
    </Box>
  );
};

export default HomeScreen;
