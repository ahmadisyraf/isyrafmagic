import { Grid, Box, GridItem, Text, Heading, Image, Card, Stack, Icon, IconButton, Button, Container } from "@chakra-ui/react";
import { SiReact, SiMui, SiTailwindcss, SiChakraui, SiFirebase, SiRedux, SiMongodb } from "react-icons/si"
import { TbBrandNextjs, TbBrandMysql } from "react-icons/tb";
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const StackScreen = ({ isMobile }) => {
    const router = useRouter();
    const [showAll, setShowAll] = useState(true);

    const displayStack = showAll ? stacks : stacks.slice(0, 3);

    useEffect(() => {
        isMobile == true ? setShowAll(false) : setShowAll(true);
    }, [isMobile])

    return (
        <Box px={isMobile ? 5 : 20}>
            <Box w={"100%"} mb={10} textAlign={"center"}>
                <Heading>Stack</Heading>
                <Text fontSize="xl" mt={5}>
                    I used a powerful technology stack that serves as the foundation for all my projects. This combination of modern tools 🛠️ and frameworks enables me to create strong 💪, scalable, and user-friendly software. With these tools at my disposal, I deliver efficient and reliable solutions for various projects💻, ensuring they meet high standards and provide a great user experience 😇.
                </Text>
            </Box>
            <Box>
                <Grid templateColumns={isMobile ? 'repeat(1, 1fr)' : 'repeat(4, 1fr)'} gap={3}>
                    {displayStack.map((stack, index) => {
                        return (
                            <GridItem key={index}>
                                <Card variant={"outline"} px={5} h={180} display={"flex"} flexDirection={"row"} alignItems={"center"} boxShadow={"xs"}>
                                    <Stack direction={"row"} spacing={2}>
                                        <Icon as={stack.icon.type} boxSize={10} color={stack.color} />
                                        <Stack direction={"column"} spacing={1}>
                                            <Stack direction={"row"} spacing={1} display={"flex"} flexDirection={"row"} alignItems={"center"}>
                                                <Text fontWeight={"bold"}>
                                                    {stack.title}
                                                </Text>
                                                <IconButton
                                                    variant={"ghost"}
                                                    icon={<ExternalLinkIcon />}
                                                    borderRadius={"100%"}
                                                    onClick={() => router.push(stack.url)}
                                                />
                                            </Stack>
                                            <Text>
                                                {stack.description}
                                            </Text>
                                        </Stack>
                                    </Stack>
                                </Card>
                            </GridItem>
                        );
                    })}
                </Grid>
            </Box>
            <Box display={"flex"} flexDirection={"row"} justifyContent={"center"} alignItems={"center"} w={"100%"} mt={5}>
                <Button variant="outline" display={isMobile ? "" : "none"} onClick={() => setShowAll(!showAll)} colorScheme="blue">
                    {showAll ? "Hide" : `Show more (${stacks.length - 3})`}
                </Button>
            </Box>
        </Box>
    )
}

const stacks = [
    {
        icon: <SiReact />,
        title: "React",
        description: "A popular front-end UI library for building web applications.",
        color: "#61DAFB",
        url: "https://reactjs.org"
    },
    {
        icon: <TbBrandNextjs />,
        title: "Next.js",
        description: "A server-side rendering (SSR) React framework with great features.",
        color: "black",
        url: "https://nextjs.org"
    },
    {
        icon: <SiMui />,
        title: "Material-UI",
        description: "A comprehensive React UI framework with beautifully styled components.",
        color: "#1976d2",
        url: "https://material-ui.com"
    },
    {
        icon: <SiChakraui />,
        title: "Chakra UI",
        description: "A modular set of React components designed for flexibility.",
        color: "#319795",
        url: "https://chakra-ui.com"
    },
    {
        icon: <SiTailwindcss />,
        title: "Tailwind CSS",
        description: "A utility-first CSS framework enabling rapid and responsive design.",
        color: "#06B6D4",
        url: "https://tailwindcss.com"
    },
    {
        icon: <SiFirebase />,
        title: "Firebase",
        description: "A powerful app development platform offering various tools and services.",
        color: "#FFCA28",
        url: "https://firebase.google.com"
    },
    {
        icon: <SiRedux />,
        title: "Redux",
        description: "A reliable state management solution for predictable application state.",
        color: "#764ABC",
        url: "https://redux.js.org"
    },
    {
        icon: <SiMongodb />,
        title: "MongoDB",
        description: "A scalable NoSQL database designed for handling large volumes of data.",
        color: "#47A248",
        url: "https://www.mongodb.com"
    },
    {
        icon: <TbBrandMysql />,
        title: "MySQL",
        description: "A widely used open-source relational database management system.",
        color: "#0078D4",
        url: "https://www.mysql.com"
    },
];


export default StackScreen;