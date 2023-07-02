import { Stack, Box, Image, Spacer, Heading, Text, Link } from "@chakra-ui/react"

const ExperienceScreen = ({ isMobile }) => {
    return (
        <Stack direction={isMobile ? "column" : "row"} spacing={1} px={isMobile ? 5 : 20} mt={20} mb={10}>
            <Box display={isMobile ? "flex" : ""} flexDirection={isMobile ? "column" : ""} alignItems={isMobile ? "center" : ""} mb={isMobile ? "5" : ""}>
                <Image
                    borderRadius="full"
                    boxSize={isMobile ? "250px" : "300px"}
                    src="/IsyrafMinum.png"
                    alt="isyrafmagic"
                />
            </Box>
            <Spacer />
            <Box width={isMobile ? "" : "50%"}>
                <Heading textAlign={isMobile ? "center" : ""}>
                    Work Experience
                </Heading>
                <Text fontSize="xl" textAlign={isMobile ? "center" : ""} mt={5}>
                    I&apos;m currently working part-time as a software engineer 👨‍💻 at <Link color="teal.500" href="https://crib.my/">crib.my</Link>. It&apos;s been an incredible journey so far! After completing my diploma internship as a web app developer, I was thrilled 😇 to receive a proposal to continue working part-time with the company. I&apos;m truly passionate about what I do, especially in the realm of web app development. Every day, I get to expand my skills, contribute to exciting projects, and make a real impact 📈 at <Link color="teal.500" href="https://crib.my/">crib.my</Link>.
                </Text>
            </Box>
        </Stack>
    )
}

export default ExperienceScreen