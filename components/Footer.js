import { Box, Text, HStack, IconButton } from "@chakra-ui/react";
import { AiFillLinkedin, AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();

  const socials = [
    {
      name: "Github",
      icon: <AiFillGithub fontSize={25} />,
      handle: () => router.push("https://github.com/ahmadisyraf"),
      ariaLabel: "Github",
    },
    {
      name: "Linkedin",
      icon: <AiFillLinkedin fontSize={25} />,
      handle: () =>
        router.push("https://www.linkedin.com/in/ahmad-isyraf-350348b8/"),
      ariaLabel: "Linkedin",
    },
    {
      name: "Twitter",
      icon: <AiOutlineTwitter fontSize={25} />,
      handle: () => router.push("https://twitter.com/isyrafmagic"),
      ariaLabel: "Twitter",
    },
  ];

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
        {socials.map(({ icon, handle, ariaLabel }, index) => (
          <IconButton
            key={index}
            variant={"ghost"}
            color={"gray.600"}
            onClick={handle}
            aria-label={ariaLabel}
          >
            {icon}
          </IconButton>
        ))}
      </HStack>
    </Box>
  );
};

export default Footer;
