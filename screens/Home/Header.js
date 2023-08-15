import {
  Box,
  Image,
  Heading,
  Text,
  Button,
  HStack,
  IconButton,
  Center,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import { AiFillLinkedin, AiFillGithub, AiOutlineTwitter } from "react-icons/ai";

const HeaderScreen = ({ isMobile }) => {
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

  return (
    <Box
      py={20}
      borderRadius={20}
      display={"flex"}
      flexDirection={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      flexWrap={isMobile ? "wrap" : "nowrap"} // Wrap elements on smaller screens
    >
      {isMobile ? (
        <Box
          height={"100%"}
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          mb={10}
          position={"relative"}
          width={"100%"}
        >
          <Image
            borderRadius="full"
            border={`4px solid black`}
            boxSize={"100%"}
            maxWidth={"180"}
            bg={"gray.100"}
            src="/isyraf-minum.png"
            alt="isyrafmagic"
          />
        </Box>
      ) : null}
      <Box maxWidth={"550"}>
        <Heading
          as="h1"
          size={"2xl"}
          lineHeight={1.1}
          textAlign="left"
          // fontWeight={"800"}
        >
          Hello, I&apos;m Ahmad Isyraf
        </Heading>
        <Text fontSize="xl" textAlign="left" mt={5} color={"gray.600"}>
          I&apos;m a passionate Software Engineer based in Pahang, Malaysia.
          Currently, I&apos;m focused on building web application at MyCrib.
        </Text>
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
            <IconButton variant={"ghost"} onClick={handleGithub}>
              <AiOutlineTwitter fontSize={25} />
            </IconButton>
          </HStack>
        </Box>
        <HStack>
          <Button variant={"solid"}>Contact me</Button>
        </HStack>
      </Box>
      {isMobile ? null : (
        <Box
          height={"100%"}
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          mb={isMobile ? "5" : ""}
          position={"relative"}
          width={"100%"}
        >
          <Image
            borderRadius="full"
            border={`4px solid black`}
            boxSize={"100%"}
            maxWidth={"240px"}
            bg={"gray.100"}
            src="/isyraf-minum.png"
            alt="isyrafmagic"
          />
        </Box>
      )}
    </Box>
  );
};

export default HeaderScreen;
