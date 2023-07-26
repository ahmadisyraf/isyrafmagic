import { Box, Grid, GridItem, Image, useMediaQuery, Heading, Skeleton } from "@chakra-ui/react"

const GalleryScreen = () => {
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
                {images && images.map((image, index) => (
                    <GridItem key={index}>
                        <Image src={image.path} borderRadius={10} fallback={<Skeleton height={240} width={"100%"} borderRadius={10} />
                        } />
                    </GridItem>
                ))}
            </Grid>
        </Box>
    )
}

const images = [
    { path: "/isyraf-di-pantai.jpg" },
    { path: "/isyraf-di-tc.jpg" },
    { path: "/view-kuantan.jpg" },
]

export default GalleryScreen