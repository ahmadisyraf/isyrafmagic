import {
  Box,
  Heading,
  Text,
  Badge,
  Stack,
  Card,
  CardHeader,
  Icon,
} from "@chakra-ui/react";
import Link from "next/link";
import { IoMdLink } from "react-icons/io";

export default function Work() {
  return (
    <Box py={20}>
      <Heading size={"xl"} mb={10} textAlign={"left"}>
        Here are the projects I&apos;ve been involved in
      </Heading>
      <Stack direction={"column"} spacing={"5"}>
        {works.map((work, index) => (
          <Link href={work.url} key={index}>
            <Card variant="outline">
              <CardHeader>
                <Box display={"flex"} flex={"row"} alignItems={"center"}>
                  <Heading size={"md"} mr={2}>
                    {work.title}
                  </Heading>
                  <IoMdLink size={18} style={{ marginTop: 3 }} />
                </Box>
                <Text>{work.description}</Text>
                <Stack spacing={2} direction={"row"} flexWrap={"wrap"} mt={2}>
                  {work.tools.map((tool, indexTool) => (
                    <Badge index={indexTool} variant={"solid"} bg={"black"}>
                      {tool}
                    </Badge>
                  ))}
                </Stack>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </Stack>
    </Box>
  );
}

const works = [
  {
    imagePath: "/crib.my.png",
    category: "Featured",
    title: "MyCrib",
    description: `
      Platform for real estate, helping people buy and rent properties. It offers tools like search filters, interactive maps, and a calculator to make property hunting easy. Agents can also list properties efficiently.`,
    url: "https://crib.my/",
    tools: [
      "NextJS",
      "Pages router",
      "Material-UI",
      "Redux",
      "Google Cloud Platform",
    ],
  },
  {
    imagePath: "/loka.png",
    category: "Featured",
    title: "Loka",
    description: `
      Platform for showcasing tourist spots in Malaysia, especially Langkawi. It provides maps and information about activities and events, helping users plan their trips effortlessly.`,
    url: "https://loka.my/",
    tools: [
      "NextJS",
      "App router",
      "Material-UI",
      "Redux",
      "Google Cloud Platform",
      "Typescript",
    ],
  },
  {
    imagePath: "/jomreview.png",
    category: "Personal",
    title: "JomReview",
    description: `
      Platform for cafe lovers, offering honest reviews and recommendations. It uses an AI assistant, Rodong, to help users find cafes that match their preferences.`,
    url: "https://jomreview.app/",
    tools: [
      "NextJS",
      "App router",
      "Tailwind CSS",
      "Zustand",
      "Prisma",
      "Typescript",
      "HonoJS",
    ],
  },
];
