import { Box, useMediaQuery } from "@chakra-ui/react";

import HeaderScreen from "./Header";
import EducationScreen from "./Education";
import ExperienceScreen from "./Experience";
import TwitterScreen from "./Twitter";

const HomeScreen = () => {
    const [isMobile] = useMediaQuery("(max-width: 768px)", {
        ssr: true,
        fallback: true, // return false on the server, and re-evaluate on the client side
    });

    return (
        <Box mx={isMobile ? 5 : 10}>
            <HeaderScreen isMobile={isMobile} />
            <EducationScreen isMobile={isMobile} />
            <ExperienceScreen isMobile={isMobile} />
            <TwitterScreen isMobile={isMobile} />
        </Box>
    );
}

export default HomeScreen;
