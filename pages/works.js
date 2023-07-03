import { Box, Grid, GridItem, Image, useMediaQuery, Heading, Text, Skeleton, Badge, Stack } from "@chakra-ui/react"
import Link from "next/link";

const imageurl = [
    {
        url: "/crib.my.png",
        Category: "Featured project",
        Title: "Build new crib.my",
        Content: "Build new crib website with a focus on user management and front-end design. Collaborating with other teams, we completed the project within a year and updated all dependency libraries. Our goal was to create a modern, minimalist website with a clean interface and flawless performance on all devices.",
        Link: "https://crib.my/",
        Tool: { Name: "Next.js", Framework: "Material-UI", Other: "Firebase", Other2: "Redux" }
    },
]
export default function Works() {
    const [isMobile] = useMediaQuery("(max-width: 768px)", {
        ssr: true,
        fallback: true, // return false on the server, and re-evaluate on the client side
    });

    return (
        <Box mx={isMobile ? 5 : 10}>
            <Box w="100%">
                <Heading mb={10} textAlign={"center"}>
                    Works 💼
                </Heading>
            </Box>
            <Grid templateColumns={isMobile ? 'repeat(1, 1fr)' : 'repeat(3, 1fr)'} gap={6}>
                {imageurl.map((d, i) => (
                    <GridItem key={i}>
                        <Link href={d.Link}>
                            <Image src={d.url} borderRadius={10} fallback={<Skeleton height={240} width={"100%"} borderRadius={10} />
                            } />
                            <Box mt={5}>
                                <Text textAlign={"center"} color={"blue.400"}>
                                    <b>{d.Category}</b>
                                </Text>
                                <Heading fontSize={"2xl"} textAlign={"center"}>
                                    {d.Title}
                                </Heading>
                                <Text fontSize={"md"} textAlign={"center"}>
                                    {d.Content}
                                </Text>
                            </Box>
                            <Box display={"flex"} flexDirection={"row"} justifyContent={"center"} mt={3}>
                                <Stack direction={"row"}>
                                    <Badge colorScheme="blue">{d.Tool.Name}</Badge>
                                    <Badge colorScheme="blue">{d.Tool.Framework}</Badge>
                                    <Badge colorScheme="blue">{d.Tool.Other}</Badge>
                                    <Badge colorScheme="blue">{d.Tool.Other2}</Badge>
                                </Stack>
                            </Box>
                        </Link>
                    </GridItem>
                ))}
            </Grid>
        </Box>
    )
}