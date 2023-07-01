import Footer from "./Footer";
import Navigation from "./Navigation"
import { Box } from "@chakra-ui/react"

export default function Layout({ children }) {
    return (
        <main>
            <Navigation />
            <Box pt={20}>
                {children}
            </Box>
            <Footer />
        </main>
    )
}