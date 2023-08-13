import {
  Box,
  Heading,
  Card,
  Stack,
  Icon,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import {
  SiReact,
  SiMui,
  SiTailwindcss,
  SiChakraui,
  SiFirebase,
  SiRedux,
  SiMongodb,
} from "react-icons/si";
import { TbBrandNextjs, TbBrandMysql } from "react-icons/tb";
import { useRouter } from "next/router";

const StackScreen = ({ isMobile }) => {
  const router = useRouter();

  return (
    <Box px={isMobile ? 5 : 20}>
      <Box w={"100%"} mb={10} textAlign={"center"}>
        <Heading size={"md"} color={"gray.600"} mb={2}>
          TECH STACK
        </Heading>
        <Heading size={"lg"}>
          Every Component Contributes to a Unique Development Ecosystem 🛠️
        </Heading>
      </Box>
      <Wrap
        spacing={"20px"}
        position={"relative"}
        align={"center"}
        justify={"center"}
      >
        {stacks.map((stack, index) => {
          return (
            <WrapItem key={index}>
              <Card
                variant={"outline"}
                px={4}
                py={4}
                boxShadow={"md"}
                width={"fit-content"}
                borderRadius={"full"}
                onClick={() => router.push(stack.url)}
              >
                <Stack direction={"row"} spacing={2}>
                  <Icon as={stack.icon.type} boxSize={10} color={stack.color} />
                </Stack>
              </Card>
            </WrapItem>
          );
        })}
      </Wrap>
    </Box>
  );
};

const stacks = [
  {
    icon: <SiReact />,
    title: "React",
    description:
      "A popular front-end UI library for building web applications.",
    color: "#61DAFB",
    url: "https://reactjs.org",
  },
  {
    icon: <TbBrandNextjs />,
    title: "Next.js",
    description:
      "A server-side rendering (SSR) React framework with great features.",
    color: "black",
    url: "https://nextjs.org",
  },
  {
    icon: <SiMui />,
    title: "Material-UI",
    description:
      "A comprehensive React UI framework with beautifully styled components.",
    color: "#1976d2",
    url: "https://material-ui.com",
  },
  {
    icon: <SiChakraui />,
    title: "Chakra UI",
    description: "A modular set of React components designed for flexibility.",
    color: "#319795",
    url: "https://chakra-ui.com",
  },
  {
    icon: <SiTailwindcss />,
    title: "Tailwind CSS",
    description:
      "A utility-first CSS framework enabling rapid and responsive design.",
    color: "#06B6D4",
    url: "https://tailwindcss.com",
  },
  {
    icon: <SiFirebase />,
    title: "Firebase",
    description:
      "A powerful app development platform offering various tools and services.",
    color: "#FFCA28",
    url: "https://firebase.google.com",
  },
  {
    icon: <SiRedux />,
    title: "Redux",
    description:
      "A reliable state management solution for predictable application state.",
    color: "#764ABC",
    url: "https://redux.js.org",
  },
  {
    icon: <SiMongodb />,
    title: "MongoDB",
    description:
      "A scalable NoSQL database designed for handling large volumes of data.",
    color: "#47A248",
    url: "https://www.mongodb.com",
  },
  {
    icon: <TbBrandMysql />,
    title: "MySQL",
    description:
      "A widely used open-source relational database management system.",
    color: "#0078D4",
    url: "https://www.mysql.com",
  },
];

export default StackScreen;
