import { Box, Text, HStack, IconButton } from "@chakra-ui/react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();

  const handleGithub = () => {
    router.push("https://github.com/ahmadisyraf");
  };

  const handleLinkedin = () => {
    router.push("https://www.linkedin.com/in/ahmad-isyraf-350348b8/");
  };

  return (
    <Box
      w={"100%"}
      py={5}
      px={5}
      bg={"gray.100"}
      display={"flex"}
      flexDirection={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Text textAlign={"left"} color={"gray.600"}>
        © 2023 Ahmad Isyraf. All Rights Reserved
      </Text>
      <HStack spacing={"10px"}>
        <IconButton
          variant={"ghost"}
          color={"gray.600"}
          onClick={handleLinkedin}
        >
          <AiFillLinkedin fontSize={25} />
        </IconButton>
        <IconButton variant={"ghost"} color={"gray.600"} onClick={handleGithub}>
          <AiFillGithub fontSize={25} />
        </IconButton>
      </HStack>
    </Box>
  );
};

export default Footer;
