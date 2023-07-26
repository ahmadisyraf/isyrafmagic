import { Box, Heading, Stack } from "@chakra-ui/react"
import { TwitterEmbed } from "react-social-media-embed"

const TwitterScreen = ({ isMobile }) => {
    return (
        <Box w={"100%"}>
            <Heading textAlign={"center"} mb={10}>
                Follow me on Twitter
            </Heading>
            <Stack direction={isMobile ? "column" : "row"} gap={10} display={"flex"} flexDirection={isMobile ? "column" : "row"} justifyContent={"center"}>
                {links.map((link, index) => (
                    <Box width={isMobile ? "100%" : "400px"} height={isMobile ? "auto" : "400px"} key={index}>
                        <TwitterEmbed url={link.url} />
                    </Box>
                ))}
            </Stack>
        </Box>
    )
}

const links = [
    { url: "https://twitter.com/isyrafmagic/status/1674305347614564353" },
    { url: "https://twitter.com/isyrafmagic/status/1662441504819003400?s=20" },
    { url: "https://twitter.com/isyrafmagic/status/1663867519722196992?s=20" }
]

export default TwitterScreen