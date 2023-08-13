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
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const WorkScreen = ({ isMobile, worksRef }) => {
  return (
    <Box ref={worksRef} py={20}>
      <Box w="100%">
        <Heading size={"md"} mb={2} textAlign={"center"} color={"gray.600"}>
          WORKS
        </Heading>
        <Heading size={"lg"} mb={10} textAlign={"center"}>
          Each project stands as a unique development undertaking 💼
        </Heading>
      </Box>
      <Box
        w={"100%"}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"center"}
      >
        {works.map((work, index) => (
          <Card
            key={index}
            variant="outline"
            px={isMobile ? 5 : 10}
            py={10}
            position={"relative"}
            // maxW={500}
            shadow={"md"}
            borderRadius={20}
          >
            <Stack
              direction={isMobile ? "column" : "row"}
              spacing={"30px"}
              display={"flex"}
              alignItems={"center"}
            >
              <Image
                src={work.path}
                borderRadius={10}
                fallback={
                  <Skeleton height={"260px"} width={"100%"} borderRadius={10} />
                }
                objectFit="cover"
                height="260px"
                width="100%"
              />
              <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
                <Box>
                  <Text
                    textAlign={"center"}
                    color={"gray.500"}
                    fontSize={"md"}
                    mb={1}
                  >
                    <b>{work.category}</b>
                  </Text>
                  <Heading fontSize={"xl"} textAlign={"center"}>
                    {work.title}
                  </Heading>
                  <Text
                    fontSize={"lg"}
                    textAlign={"center"}
                    color={"gray.600"}
                    mt={3}
                  >
                    {work.content}
                  </Text>
                  <Box
                    display={"flex"}
                    flexDirection={"row"}
                    justifyContent="center"
                    alignItems={"center"}
                    mt={3}
                  >
                    <Stack direction={"row"} spacing={3}>
                      {work.tools.map((tool, toolIndex) => (
                        <Badge key={toolIndex}>{tool}</Badge>
                      ))}
                    </Stack>
                  </Box>
                  <Box
                    w={"100%"}
                    display={"flex"}
                    flexDirection={"row"}
                    justifyContent={"center"}
                    mt={5}
                  >
                    <Button
                      variant={"ghost"}
                      rightIcon={<ExternalLinkIcon />}
                      as="a"
                      href={work.url}
                      target="_blank"
                    >
                      Visit Website
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Stack>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

const works = [
  {
    path: "/crib.my.png",
    category: "FEATURED PROJECT",
    title: "MyCrib Web Application",
    content:
      "Build new crib website with a focus on user management and front-end design. Collaborating with other teams, we completed the project within a year and updated all dependency libraries. Our goal was to create a modern, minimalist website with a clean interface and flawless performance on all devices.",
    url: "https://crib.my/",
    tools: ["NextJS", "Material-UI", "Firebase", "Redux"],
  },
];

export default WorkScreen;
