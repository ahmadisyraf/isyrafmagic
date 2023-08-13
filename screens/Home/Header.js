import {
  Box,
  Image,
  Heading,
  Text,
  Button,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const HeaderScreen = ({ isMobile }) => {
  const router = useRouter();

  const handleEmail = () => {
    router.push("mailto:isyrafmagic@gmail.com");
  };

  return (
    <Box py={20} px={isMobile? 5 : 10} bg={"gray.100"} borderRadius={20}>
      <Box
        w="100%"
        display="flex"
        flexDirection={"row"}
        justifyContent={"center"}
        mb={3}
      >
        <Image
          borderRadius="full"
          boxSize={isMobile ? "150px" : "180px"}
          src="/profile.jpg"
          alt="isyrafmagic"
          border={"4px solid lightgrey"}
        />
      </Box>
      <Box>
        <Heading
          as="h1"
          size={"2xl"}
          lineHeight={1.1}
          textAlign="center"
          fontWeight={"800"}
        >
          Software Engineer 👋
        </Heading>
        <Text fontSize="xl" textAlign="center" mt={5} color={"gray.600"}>
          Hi, I&apos;m Ahmad Isyraf. A passionate Software Engineer based in
          Pahang, Malaysia. 📍
        </Text>
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"center"}
          w="100%"
          mb={5}
          mt={5}
        >
          <HStack spacing={"10px"}>
            <Button
              variant="solid"
              bg="gray.900"
              color={"white"}
              textAlign="center"
              leftIcon={<EmailIcon />}
              _hover={{
                background: "gray.700",
              }}
              onClick={handleEmail}
            >
              Contact Me
            </Button>
            <IconButton variant={"ghost"}>
              <AiFillLinkedin fontSize={25} />
            </IconButton>
            <IconButton variant={"ghost"}>
              <AiFillGithub fontSize={25} />
            </IconButton>
          </HStack>
        </Box>
      </Box>
    </Box>
  );
};

export default HeaderScreen;
