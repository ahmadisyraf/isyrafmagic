import {
  Box,
  Image,
  Heading,
  Text,
  Button,
  HStack,
  IconButton,
  Link,
} from "@chakra-ui/react";

import { useRouter } from "next/router";

import { AiFillLinkedin, AiFillGithub, AiOutlineTwitter } from "react-icons/ai";

export default function Header() {
  const router = useRouter();

  const handleEmail = () => {
    router.push("mailto:isyrafmagic@gmail.com");
  };

  const handleGithub = () => {
    router.push("https://github.com/ahmadisyraf");
  };

  const handleLinkedin = () => {
    router.push("https://www.linkedin.com/in/ahmad-isyraf-350348b8/");
  };

  const handleTwitter = () => {
    router.push("https://twitter.com/isyrafmagic");
  };

  return (
    <Box py={20} borderRadius={20}>
      <Box
        height={"100%"}
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        mb={5}
        position={"relative"}
        width={"100%"}
      >
        <Image
          borderRadius="full"
          border={`3px solid black`}
          boxSize={"100%"}
          maxWidth={"120"}
          bg={"gray.100"}
          src="/myprofile.jpg"
          alt="isyrafmagic"
        />
      </Box>

      <Box maxWidth={"4xl"}>
        <Heading as="h1" size={"2xl"} lineHeight={1.1} textAlign="left">
          Hello, I&apos;m Isyraf
        </Heading>
        <Text fontSize="xl" textAlign="left" mt={5} color={"gray.600"}>
          I&apos;m a passionate Software Engineer based in Pahang, Malaysia.
          Currently, I&apos;m focused on building{" "}
          <Link fontWeight={"medium"} href={"https://jomreview.app/"}>
            jomreview.app
          </Link>
          .
        </Text>

        {/* Social Media Icons */}
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"left"}
          w="100%"
          mb={5}
          mt={5}
        >
          <HStack spacing={"10px"}>
            <IconButton variant={"ghost"} onClick={handleGithub}>
              <AiFillGithub fontSize={25} />
            </IconButton>
            <IconButton variant={"ghost"} onClick={handleLinkedin}>
              <AiFillLinkedin fontSize={25} />
            </IconButton>
            <IconButton variant={"ghost"} onClick={handleTwitter}>
              <AiOutlineTwitter fontSize={25} />
            </IconButton>
          </HStack>
        </Box>

        {/* Action Buttons */}
        <HStack mt={5}>
          <Button
            variant={"solid"}
            bgColor={"gray.900"}
            color={"white"}
            _hover={{ bgColor: "gray.700" }}
            onClick={handleEmail}
          >
            Contact me
          </Button>
          <Button
            variant={"outline"}
            border={"1px solid #171923"}
            isDisabled={true}
          >
            Download resume
          </Button>
        </HStack>
      </Box>
    </Box>
  );
}
