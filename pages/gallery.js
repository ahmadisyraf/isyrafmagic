import { Box, Grid, GridItem, Image, useMediaQuery, Heading } from "@chakra-ui/react"

const imageurl = [
    { url: "/isyraf-di-pantai.jpg" },
    { url: "/isyraf-di-tc.jpg" },
    { url: "/kuantan.jpg" },
]
export default function Gallery() {
    const [isMobile] = useMediaQuery("(max-width: 768px)");

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
                        <Image src={d.url}  borderRadius={10}/>
                    </GridItem>
                ))}
            </Grid>
        </Box>
    )
}