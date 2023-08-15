import {
  Box,
  Heading,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Stack,
} from "@chakra-ui/react";

const AboutmeScreen = ({ isMobile, aboutMeRef }) => {
  return (
    <Box py={20} ref={aboutMeRef}>
      <Stack direction={"column"} spacing={"30px"}>
        <Heading size={"xl"}>About me</Heading>
        <Tabs
          orientation={isMobile ? "horizontal" : "vertical"}
          size={"md"}
          colorScheme="gray"
        >
          <TabList>
            <Tab>Work</Tab>
            <Tab>Education</Tab>
          </TabList>

          <TabPanels mt={isMobile? 5 : 0 }>
            <TabPanel px={0}>
              <Box height={"100%"} px={isMobile? 0 : 100}>
                <Stack spacing={"10px"} direction={"column"}>
                  <Heading size={"md"}>
                    Software Engineering (part-time) @ MyCrib
                  </Heading>
                  <Text size={"sm"}>2020 - Present</Text>
                  <Text color={"gray.600"} mt={1}>
                    After completing my internship as a front-end developer at
                    MyCrib, I was offered a part-time position while pursuing my
                    degree in Computer Science (Software Engineering). In this
                    role, I focus on developing web applications using various
                    languages, frameworks, and Content Management Systems (CMS)
                    like JavaScript, Next.js, and Strapi. Additionally, I
                    regularly communicate with multi-disciplinary engineering
                    teams on a daily basis.
                  </Text>
                </Stack>
              </Box>
            </TabPanel>
            <TabPanel px={0}>
              <Box height={"100%"} px={isMobile? 0 : 100}>
                <Stack spacing={"10px"} direction={"column"}>
                  <Heading size={"md"}>Education Journey</Heading>
                  <Text size={"sm"}>2011 - Present</Text>
                  <Text color={"gray.600"} mt={1}>
                    I attended SMK TG Panglima Perang TG Muhammad for high
                    school, where I pursued the Accounting Stream. Following
                    high school, I enrolled at Universiti Malaysia Pahang for a
                    Diploma in Computer Science. I excelled in my diploma
                    studies due to my strong interest in computer science. This
                    success led me to pursue a Bachelor of Computer Science
                    (Software Engineering) with Honours at the same university.
                  </Text>
                </Stack>
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Stack>
    </Box>
  );
};

export default AboutmeScreen;
