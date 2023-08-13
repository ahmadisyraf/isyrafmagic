import Footer from "./Footer";
import Navigation from "./Navigation"
import { Box } from "@chakra-ui/react"
import { useRef } from "react";

export default function Layout({ children }) {
    const HeaderRef = useRef(null);
    return (
        <Box position={"relative"}>
            <Navigation />
            <Box pt={20}>
                {children}
            </Box>
            <Footer />
        </Box>
    )
}