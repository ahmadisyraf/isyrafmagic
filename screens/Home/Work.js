import {
  Box,
  Image,
  Heading,
  Text,
  Skeleton,
  Badge,
  Stack,
  Card,
  Button,
  CardHeader,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

const WorkScreen = ({ isMobile, worksRef }) => {
  const router = useRouter();
  return (
    <Box ref={worksRef} py={20}>
      <Box w="100%">
        <Heading size={"xl"} mb={10} textAlign={"left"}>
          Here are the projects I've been involved in
        </Heading>
      </Box>
      <Stack direction={isMobile ? "column" : "row"} spacing={isMobile ? 8 : 4}>
        {works.map((work, index) => (
          <Card
            key={index}
            variant="outline"
            position={"relative"}
            maxW={500}
            shadow={"md"}
            borderRadius={15}
            overflow={"hidden"}
            w={isMobile ? "100%" : "auto"}
            height={isMobile ? 400 : "auto"}
          >
            <Image
              src={work.path}
              borderRadius={10}
              fallback={
                <Skeleton
                  height={"260px"}
                  width={"100%"}
                  borderRadius={10}
                  opacity={1}
                />
              }
              objectFit="cover"
              height="100%"
              width="100%"
            />
            <Box
              position={"absolute"}
              bg={"rgba(0, 0, 0, 0.7)"}
              backdropFilter={"blur(0.5px)"}
              h={"100%"}
              color={"white"}
              px={5}
              py={10}
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Stack direction={"column"} spacing={"10px"}>
                <Heading size={"md"}>{work.title}</Heading>
                <Text size={"md"} color={"gray.200"}>
                  {work.content}
                </Text>
                <Button
                  variant={"outline"}
                  width={"fit-content"}
                  rightIcon={<ExternalLinkIcon />}
                  colorScheme="whiteAlpha"
                  color={"white"}
                  mt={2}
                  onClick={() => router.push(work.url)}
                >
                  Visit
                </Button>
              </Stack>
            </Box>
          </Card>
        ))}
      </Stack>
    </Box>
  );
};

const works = [
  {
    path: "/crib.my.png",
    category: "FEATURED PROJECT",
    title: "MyCrib",
    content: `
      This project encompasses multiple tasks: proficiently handling
      user accounts, establishing a logical user journey, crafting a
      sleek and adaptable interface that guarantees seamless
      performance across devices, and also focusing on enhancing
      performance by upgrading all dependencies to their most
      up-to-date versions for improved functionality and security.`,
    url: "https://crib.my/",
    tools: ["NextJS", "Material-UI", "Firebase", "Redux"],
  },
];

export default WorkScreen;
