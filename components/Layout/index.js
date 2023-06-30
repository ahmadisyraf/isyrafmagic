import Navigation from "./Navigation"
import { Box, useMediaQuery } from "@chakra-ui/react"

export default function Layout({ children }) {
    const [isMobile] = useMediaQuery("(max-width: 768px)");
    return (
        <main>
            <Navigation />
            <Box pt={20}>
                {children}
            </Box>
        </main>
    )
}