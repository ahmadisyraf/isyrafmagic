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
  Icon,
  HStack,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import Link from "next/link";

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
          <Link href={work.url} key={index}>
            <Card
              variant="outline"
              position={"relative"}
              maxW={400}
              shadow={"md"}
              borderRadius={15}
              overflow={"hidden"}
              w={isMobile ? "100%" : "auto"}
              aspectRatio={1}
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
                px={10}
                display={"flex"}
                flexDirection={"row"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Stack direction={"column"} spacing={"10px"}>
                  <Icon
                    fontSize={20}
                    position={"absolute"}
                    top={"10"}
                    right={"10"}
                  >
                    <ExternalLinkIcon />
                  </Icon>
                  <HStack spacing={"10px"} display={"flex"} flexDirection={"row"} alignItems={"center"}>
                    <Heading size={"md"}>{work.title}</Heading>
                    <Badge w={"fit-content"}>
                      {work.category}
                    </Badge>
                  </HStack>
                  <Text size={"md"} fontWeight={"500"} color={"gray.200"}>
                    {work.content}
                  </Text>
                </Stack>
              </Box>
            </Card>
          </Link>
        ))}
      </Stack>
    </Box>
  );
};

const works = [
  {
    path: "/crib.my.png",
    category: "Featured",
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
