import { Box, Grid, GridItem, Image, useMediaQuery, Heading, Text, Skeleton, Badge, Stack } from "@chakra-ui/react"
import Link from "next/link";

const WorkScreen = () => {
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
                {works.map((work, index) => (
                    <GridItem key={index}>
                        <Link href={work.url}>
                            <Image src={work.path} borderRadius={10} fallback={<Skeleton height={240} width={"100%"} borderRadius={10} />
                            } />
                            <Box mt={5}>
                                <Text textAlign={"center"} color={"blue.400"}>
                                    <b>{work.category}</b>
                                </Text>
                                <Heading fontSize={"2xl"} textAlign={"center"}>
                                    {work.title}
                                </Heading>
                                <Text fontSize={"md"} textAlign={"center"}>
                                    {work.content}
                                </Text>
                            </Box>
                        </Link>
                        <Box display={"flex"} flexDirection={"row"} justifyContent="center" alignItems={"center"} mt={3}>
                            <Stack direction={"row"} spacing={3}>
                                <Badge colorScheme="blue">{work.tool.name}</Badge>
                                <Badge colorScheme="blue">{work.tool.framework}</Badge>
                                <Badge colorScheme="blue">{work.tool.other}</Badge>
                                <Badge colorScheme="blue">{work.tool.other2}</Badge>
                            </Stack>
                        </Box>
                    </GridItem>
                ))}
            </Grid>
        </Box>
    )
}

const works = [
    {
        path: "/crib.my.png",
        category: "Featured project",
        title: "Build new crib.my",
        content: "Build new crib website with a focus on user management and front-end design. Collaborating with other teams, we completed the project within a year and updated all dependency libraries. Our goal was to create a modern, minimalist website with a clean interface and flawless performance on all devices.",
        url: "https://crib.my/",
        tool: { name: "Next.js", framework: "Material-UI", other: "Firebase", other2: "Redux" }
    },
]

export default WorkScreen