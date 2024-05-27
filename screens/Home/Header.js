import {
  Box,
  Image,
  Heading,
  Text,
  Button,
  HStack,
  IconButton,
  Center,
  Link,
} from "@chakra-ui/react";
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

  const handleTwitter = () => {
    router.push("https://twitter.com/isyrafmagic");
  };

  return (
    <Box
      py={20}
      borderRadius={20}
      display={"flex"}
      flexDirection={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      flexWrap={isMobile ? "wrap" : "nowrap"}
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
            maxWidth={"150"}
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
        >˝
          Hello, I&apos;m Ahmad Isyraf
        </Heading>
        <Text fontSize="xl" textAlign="left" mt={5} color={"gray.600"}>
          I&apos;m a passionate Software Engineer based in Pahang, Malaysia.
          Currently, I&apos;m focused on building web application for{" "}
          <Link fontWeight={"medium"} href={"https://jomreview.app/"}>
            jomreview.app
          </Link>
          .
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
            <IconButton variant={"ghost"} onClick={handleTwitter}>
              <AiOutlineTwitter fontSize={25} />
            </IconButton>
          </HStack>
        </Box>
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
