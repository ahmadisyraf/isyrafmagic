import { Box, Stack, useMediaQuery } from "@chakra-ui/react";

import HeaderScreen from "./Header";
import EducationScreen from "./Education";
import ExperienceScreen from "./Experience";
import TwitterScreen from "./Twitter";
import StackScreen from "./Stack";

const HomeScreen = () => {
    const [isMobile] = useMediaQuery("(max-width: 768px)", {
        ssr: true,
        fallback: true, // return false on the server, and re-evaluate on the client side
    });

    return (
        <Box mx={isMobile ? 5 : 10}>
            <Stack direction={"column"} spacing={70}>
                <HeaderScreen isMobile={isMobile} />
                <EducationScreen isMobile={isMobile} />
                <ExperienceScreen isMobile={isMobile} />
                <StackScreen isMobile={isMobile} />
                <TwitterScreen isMobile={isMobile} />
            </Stack>
        </Box>
    );
}

export default HomeScreen;
