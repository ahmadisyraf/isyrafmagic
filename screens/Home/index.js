import { Box, Stack, useMediaQuery } from "@chakra-ui/react";
import { useEffect, useRef } from "react";

import HeaderScreen from "./Header";
import StackScreen from "./Stack";
import WorkScreen from "./Work";
import AboutmeScreen from "./Aboutme";
import ContactScreen from "./Contact";

import useBreakPoints from "../../hooks/useBreakpoints";

const HomeScreen = ({ worksRef, aboutMeRef, techStackRef, contactRef }) => {
  const { isMobile } = useBreakPoints();

  return (
    <Box mx={isMobile ? 5 : 200} pb={20} position={"relative"}>
      <Stack direction={"column"} spacing={0}>
        <HeaderScreen isMobile={isMobile} />
        <AboutmeScreen isMobile={isMobile} aboutMeRef={aboutMeRef} />
        <WorkScreen isMobile={isMobile} worksRef={worksRef} />
        <StackScreen isMobile={isMobile} techStackRef={techStackRef} />
        <ContactScreen isMobile={isMobile} contactRef={contactRef}/>
      </Stack>
    </Box>
  );
};

export default HomeScreen;
