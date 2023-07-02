import { Box, Grid, GridItem, Image, useMediaQuery, Heading, Skeleton } from "@chakra-ui/react"
import { useState } from "react";

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
    const [isLoading, setIsLoading] = useState(false);

    return (
        <Box mx={isMobile ? 5 : 10}>
            <Box w="100%">
                <Heading mb={10} textAlign={"center"}>
                    Gallery 📸
                </Heading>
            </Box>
            <Grid templateColumns={isMobile ? 'repeat(1, 1fr)' : 'repeat(3, 1fr)'} gap={6}>
                {imageurl && imageurl.map((d, i) => (
                    <GridItem key={i}>
                        <Image src={d.url} borderRadius={10} fallback={<Skeleton height={240} width={"100%"} borderRadius={10} />
 />
                        } />
                    </GridItem>
                ))}
            </Grid>
        </Box>
    )
}