import { Grid, Box, GridItem, Text, Heading, Image, Card, Stack, Icon } from "@chakra-ui/react";
import { SiReact, SiMui, SiTailwindcss, SiChakraui, SiFirebase, SiRedux, SiMongodb } from "react-icons/si"
import { TbBrandNextjs, TbBrandMysql } from "react-icons/tb"

const data = [
    { icon: <SiReact />, title: "React", description: "A popular front-end UI library for building web applications.", color: "#61DAFB" },
    { icon: <TbBrandNextjs />, title: "Next.js", description: "A server-side rendering (SSR) React framework with great features.", color: "black" },
    { icon: <SiMui />, title: "Material-UI", description: "A comprehensive React UI framework with beautifully styled components.", color: "#1976d2" },
    { icon: <SiChakraui />, title: "Chakra UI", description: "A modular set of React components designed for flexibility.", color: "#319795" },
    { icon: <SiTailwindcss />, title: "Tailwind CSS", description: "A utility-first CSS framework enabling rapid and responsive design.", color: "#06B6D4" },
    { icon: <SiFirebase />, title: "Firebase", description: "A powerful app development platform offering various tools and services.", color: "#FFCA28" },
    { icon: <SiRedux />, title: "Redux", description: "A reliable state management solution for predictable application state.", color: "#764ABC" },
    { icon: <SiMongodb />, title: "MongoDB", description: "A scalable NoSQL database designed for handling large volumes of data.", color: "#47A248" },
    { icon: <TbBrandMysql />, title: "MySQL", description: "A widely used open-source relational database management system.", color: "#0078D4" },
];



const StackScreen = ({ isMobile }) => {
    return (
        <Box px={isMobile ? 5 : 20}>
            <Box w={"100%"} mb={10} textAlign={"center"}>
                <Heading>Stack</Heading>
                <Text fontSize="xl" mt={5}>
                    I used a powerful technology stack that serves as the foundation for all my projects. This combination of modern tools and frameworks enables me to create strong, scalable, and user-friendly software. With these tools at my disposal, I deliver efficient and reliable solutions for various projects, ensuring they meet high standards and provide a great user experience.
                </Text>
            </Box>
            <Grid templateColumns={isMobile ? 'repeat(1, 1fr)' : 'repeat(4, 1fr)'} gap={3}>
                {data.map((d, i) => {
                    return (
                        <GridItem key={i}>
                            <Card variant={"outline"} px={5} h={180} display={"flex"} flexDirection={"row"} alignItems={"center"} boxShadow={"xs"}>
                                <Stack direction={"row"} spacing={2}>
                                    <Icon as={d.icon.type} boxSize={10} color={d.color} />
                                    <Stack direction={"column"} spacing={1}>
                                        <Text fontWeight={"bold"}>
                                            {d.title}
                                        </Text>
                                        <Text>
                                            {d.description}
                                        </Text>
                                    </Stack>
                                </Stack>
                            </Card>
                        </GridItem>
                    );
                })}
            </Grid>
        </Box>
    )
}

export default StackScreen;