import {
  Stack,
  Box,
  Image,
  Spacer,
  Heading,
  Text
} from "@chakra-ui/react";

const AboutmeScreen = ({ isMobile, aboutMeRef }) => {
  return (
    <Box py={20} ref={aboutMeRef}>
      <Stack
        direction={isMobile ? "column" : "row"}
        spacing={1}
        //   px={isMobile ? 5 : 20}
        display={"flex"}
        alignItems={"center"}
      >
        <Box
          height={"100%"}
          display={isMobile ? "flex" : ""}
          flexDirection={isMobile ? "column" : ""}
          alignItems={isMobile ? "center" : ""}
          mb={isMobile ? "5" : ""}
          bg={"gray.100"}
          borderRadius={"full"}
        >
          <Image
            borderRadius="full"
            boxSize={isMobile ? "250px" : "300px"}
            src="/isyraf-minum.png"
            alt="isyrafmagic"
          />
        </Box>
        <Spacer />
        <Box width={isMobile ? "" : "55%"}>
          <Box w="100%">
            <Heading
              size={"md"}
              mb={2}
              textAlign={isMobile ? "center" : ""}
              color={"gray.600"}
            >
              ABOUT ME
            </Heading>
            <Heading size={"lg"} textAlign={isMobile ? "center" : ""}>
              A dedicated Software Engineer based in Pahang, Malaysia 📍
            </Heading>
          </Box>
          <Text
            fontSize="xl"
            textAlign={isMobile ? "center" : ""}
            mt={5}
            color={"gray.600"}
          >
            {/* As a lifelong learner and dedicated Front-End Developer. From Diploma
          in Computer Science to a Degree in Software Engineering, I've
          cultivated a passion for learning. Currently, I contribute to
          impactful projects as a part-time Front-End Developer at{" "}
          <Link color="teal.500" href="https://crib.my/">
            crib.my
          </Link>
          . Starting as a web app developer during my diploma internship, I'm
          now driven to create user-friendly, scalable software with a real
          impact. */}
            I&apos;m a dedicated Software Engineer with a proven track record.
            My journey began with an internship at MyCrib, where I showcased my
            skills and dedication, leading to a part-time front-end developer
            position. Alongside my pursuit of a Degree in Computer Science
            (Software Engineering), I specialize in web app development,
            leveraging tools like React and Next. I prioritize staying ahead of
            tech trends to deliver innovative solutions in the ever-changing
            software engineering landscape.
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};

export default AboutmeScreen;
