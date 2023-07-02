import { Box, Grid, GridItem, Image, useMediaQuery, Heading, Skeleton } from "@chakra-ui/react"

const imageurl = [
    { url: "/isyraf-di-pantai.jpg" },
    { url: "/isyraf-di-tc.jpg" },
    { url: "/view-kuantan.jpg" },
]
export default function Gallery() {
    const [isMobile] = useMediaQuery("(max-width: 768px)", {
        ssr: true,
        fallback: true, // return false on the server, and re-evaluate on the client side
    });

    return (
        <Box mx={isMobile ? 5 : 10}>
            <Box w="100%">
                <Heading mb={10} textAlign={"center"}>
                    Gallery 📸
                </Heading>
            </Box>
            <Grid templateColumns={isMobile ? 'repeat(1, 1fr)' : 'repeat(3, 1fr)'} gap={6}>
                {imageurl.map((d, i) => (
                    <GridItem key={i}>
                        <Skeleton borderRadius={10} isLoaded>
                            <Image src={d.url} borderRadius={10} />
                        </Skeleton>
                    </GridItem>
                ))}
            </Grid>
        </Box>
    )
}