import HomeScreen from "../screens/Home";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

import { Box } from "@chakra-ui/react";
import { useRef } from "react";

export default function HomePages() {
  const aboutMeRef = useRef(null);
  const worksRef = useRef(null);
  const techStackRef = useRef(null);

  return (
    <Box position={"relative"}>
      <Navigation
        aboutMeRef={aboutMeRef}
        worksRef={worksRef}
        techStackRef={techStackRef}
      />
      <Box py={20}>
        <HomeScreen
          aboutMeRef={aboutMeRef}
          worksRef={worksRef}
          techStackRef={techStackRef}
        />
      </Box>
      <Footer />
    </Box>
  );
}
