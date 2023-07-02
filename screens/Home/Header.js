import { Box, Image, Heading, Text, Button } from "@chakra-ui/react";
import ConfettiExplosion from "react-confetti-explosion";
import { EmailIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

const HeaderScreen = ({ isMobile }) => {
    const router = useRouter();
  
    const handleEmail = () => {
      router.push("mailto:isyrafmagic@gmail.com");
    }

    return (
        <Box bg="#DCD6F7" borderRadius={15}>
            <Box px={isMobile ? 10 : 200} py={20}>
                <Box w="100%" display="flex" justifyContent="center" alignItems="center" mb={5}>
                    <Box position={"absolute"}><ConfettiExplosion /></Box>
                    <Image
                        borderRadius="full"
                        boxSize={isMobile ? "150px" : "180px"}
                        src="/profile.JPG"
                        alt="isyrafmagic"
                        border={"5px solid white"}
                    />
                </Box>
                <Heading as="h2" size={isMobile ? "xl" : "2xl"} lineHeight={1.1} textAlign="center">
                    👋 Hello! My name is Ahmad Isyraf. I&apos;m a Software Engineer 💻
                </Heading>
                <Text fontSize="xl" textAlign="center" mt={5}>
                    I&apos;m a software engineer based in <b>Malaysia</b>. My primary focus is web app development, and I have a strong passion for exploring and learning new technologies. When it comes to building applications, my go-to tools are <b>React, Next.js, and Laravel</b>. I strive to stay updated with the latest tech trends, enabling me to tackle new challenges and deliver innovative solutions in the ever-evolving field of software engineering.
                </Text>
                <Box w="100%" display="flex" justifyContent="center" alignItems="center" mb={5} mt={5}>
                    <Button
                        variant="solid"
                        bg="white"
                        textAlign="center"
                        leftIcon={<EmailIcon />}
                        onClick={handleEmail}
                    >
                        Contact Me
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default HeaderScreen;