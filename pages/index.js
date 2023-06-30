import {
  Heading,
  Box,
  Stack,
  Image,
  useMediaQuery,
  Text,
  Button,
  Stepper,
  Step,
  StepIndicator,
  StepTitle,
  StepDescription,
  StepSeparator,
  StepStatus,
  useSteps,
  Spacer,
  Link,
} from "@chakra-ui/react";
import { StepIcon, StepNumber } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

const steps = [
  { title: "High School (2011)", description: "SMK Tg Panglima Perang Tg Muhammad" },
  { title: "Diploma in Science Computer (2017)", description: "Universiti Malaysia Pahang" },
  { title: "Degree in Software Engineering (2022)", description: "Universiti Malaysia Pahang" },
];

function Example() {
  const { activeStep } = useSteps({
    index: 2,
    count: steps.length,
  });

  return (
    <Stepper index={activeStep} orientation="vertical" height="200px" gap="0" mt={5}>
      {steps.map((step, index) => (
        <Step key={index}>
          <StepIndicator>
            <StepStatus
              complete={<StepIcon />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>

          <Box flexShrink={0}>
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </Box>

          <StepSeparator />
        </Step>
      ))}
    </Stepper>
  );
}

export default function Home() {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const router = useRouter();

  const handleEmail = () => {
    router.push("mailto:isyrafmagic@gmail.com");
  }

  return (
    <Box mx={isMobile ? 5 : 10}>
      <Box bg="#DCD6F7" borderRadius={15}>
        <Box px={isMobile ? 10 : 200} py={20}>
          <Box w="100%" display="flex" justifyContent="center" alignItems="center" mb={5}>
            <Image
              borderRadius="full"
              boxSize={isMobile ? "150px" : "180px"}
              src="/profile.JPG"
              alt="isyrafmagic"
              border={"5px solid white"}
            />
          </Box>
          <Heading as="h2" size={isMobile ? "xl" : "2xl"} lineHeight={1.1} textAlign="center">
            👋 Hello! My name is Ahmad Isyraf. I&apos;m Software Engineer 💻
          </Heading>
          <Text fontSize="xl" textAlign="center" mt={5}>
            I am a software engineer based in Kuantan, Pahang, Malaysia. My primary focus is web app development, and I have a strong passion for exploring and learning new technologies. When it comes to building applications, my go-to tools are React, Next.js, and Laravel. I strive to stay updated with the latest tech trends, enabling me to tackle new challenges and deliver innovative solutions in the ever-evolving field of software engineering.
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
      <Stack direction={isMobile ? "column" : "row"} spacing={1} px={isMobile ? 5 : 20} mt={20} mb={10}>
        <Box width={isMobile ? "" : "50%"}>
          <Heading textAlign={isMobile ? "center" : ""}>
            Education Background
          </Heading>
          <Text fontSize="xl" textAlign={isMobile ? "center" : ""} mt={5}>
            EduBcation 📚 has been a transformative journey for me, shaping my character and opening doors 🚪 to new opportunities. From the early days of curiosity to the present, I continue to embrace learning as a lifelong student 👨‍🎓
          </Text>
        </Box>
        <Spacer />
        <Example />
      </Stack>
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
    </Box>
  );
}
