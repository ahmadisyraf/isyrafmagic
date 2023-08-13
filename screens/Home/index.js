import { Box, Stack, useMediaQuery } from "@chakra-ui/react";
import { useEffect, useRef } from "react";

import HeaderScreen from "./Header";
import StackScreen from "./Stack";
import WorkScreen from "./Work";
import AboutmeScreen from "./Aboutme";

const HomeScreen = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)", {
    ssr: true,
    fallback: true, // return false on the server, and re-evaluate on the client side
  });

  const WorkScreenRef = useRef(null);
  let navigation;
  if (typeof localStorage !== "undefined") {
    navigation = localStorage.getItem("navigation");
  }

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
    //   if (navigation === "Works") {
    //     WorkScreenRef.current.scrollIntoView({ behavior: "smooth" });
    //     localStorage.removeItem("navigation");
    //   }
    console.log(navigation)
    }
  });

  return (
    <Box mx={isMobile ? 5 : 200} pb={20} position={"relative"}>
      <Stack direction={"column"} spacing={100}>
        <HeaderScreen isMobile={isMobile} />
        <AboutmeScreen isMobile={isMobile} />
        <WorkScreen WorkScreenRef={WorkScreenRef} />
        <StackScreen isMobile={isMobile} />
      </Stack>
    </Box>
  );
};

export default HomeScreen;
