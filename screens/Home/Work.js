import {
  Box,
  Image,
  Heading,
  Text,
  Skeleton,
  Badge,
  Stack,
  Flex,
  HStack,
  Grid,
} from "@chakra-ui/react";
import Link from "next/link";

const WorkScreen = ({ isMobile, worksRef }) => {
  return (
    <Box ref={worksRef} py={20}>
      <Box w="100%">
        <Heading size={"xl"} mb={10} textAlign={"left"}>
          Here are the projects I&apos;ve been involved in
        </Heading>
      </Box>
      <Grid
        templateColumns={{
          base: "1fr", // Mobile
          md: "repeat(2, 1fr)", // Tablet
          lg: "repeat(3, 1fr)", // Desktop
        }}
        gap={6}
      >
        {works.map((work, index) => (
          <Link href={work.url} key={index}>
            <Box
              variant="outline"
              position={"relative"}
              w={isMobile ? "100%" : "auto"}
              aspectRatio={3 / 2}
            >
              <Image
                src={work.path}
                borderRadius={10}
                alt="crib.my"
                fallback={
                  <Skeleton
                    height={"100%"}
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
                py={5}
                color={"black"}
                display={"flex"}
                flexDirection={"row"}
                justifyContent={"center"}
                alignItems={"center"}
                position={"relative"}
              >
                <Stack direction={"column"} spacing={"10px"}>
                  <HStack
                    spacing={"10px"}
                    display={"flex"}
                    flexDirection={"row"}
                    alignItems={"center"}
                  >
                    <Heading size={"md"}>{work.title}</Heading>
                  </HStack>
                  <Text size={"md"} fontWeight={"500"} color={"gray.500"}>
                    <strong>{work.category}</strong> - {work.content}
                  </Text>
                </Stack>
              </Box>
              <Flex wrap="wrap" gap={3}>
                {work.tools.map((d, index) => (
                  <Badge key={index}>{d}</Badge>
                ))}
              </Flex>
            </Box>
          </Link>
        ))}
      </Grid>
    </Box>
  );
};

const works = [
  {
    path: "/crib.my.png",
    category: "Featured",
    title: "MyCrib",
    content: `
      MyCrib is a sophisticated web application designed for the real estate market, offering a comprehensive platform for buying and renting properties. It facilitates seamless property exploration for prospective buyers, providing advanced search filters, interactive maps, and a powerful calculator tool. Additionally, it simplifies property listing processes for agents, enhancing their efficiency and reach.`,
    url: "https://crib.my/",
    tools: [
      "NextJS",
      "Pages router",
      "Strapi",
      "Material-UI",
      "Firebase",
      "Redux",
      "Google Cloud Platform",
    ],
  },
  {
    path: "/loka.png",
    category: "Featured",
    title: "Loka",
    content: `
      Loka is a cutting-edge web application highlighting the diverse tourist attractions of Malaysia, with a particular focus on Langkawi. It offers users an immersive experience, showcasing interactive maps and curated information on activities and events in the Langkawi region. Through Loka, users can discover the essence of Langkawi's charm and plan memorable experiences with ease.`,
    url: "https://loka.my/",
    tools: [
      "NextJS",
      "App router",
      "Mapbox",
      "Google Map",
      "Material-UI",
      "Firebase",
      "Redux",
      "Google Cloud Platform",
      "Typescript",
    ],
  },
  {
    path: "/jomreview.png",
    category: "Personal",
    title: "Jomreview",
    content: `
      Jomreview is a sophisticated web application tailored to discerning cafe enthusiasts, providing them with authentic reviews and personalized recommendations. Powered by an AI assistant named Rodong, Jomreview delivers unparalleled insights into the cafe scene, ensuring users find establishments that align perfectly with their tastes and preferences.`,
    url: "https://jomreview.app/",
    tools: [
      "NextJS",
      "App router",
      "Mapbox",
      "Gemini AI",
      "Tailwind CSS",
      "Shadcn UI",
      "Zustand",
      "Primsa",
      "Typescript",
      "HonoJS",
      "Tensorflow JS",
    ],
  },
];

export default WorkScreen;
