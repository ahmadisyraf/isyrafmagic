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
  ListItem,
  UnorderedList,
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
            <Tab>Achievement</Tab>
          </TabList>

          <TabPanels mt={isMobile ? 5 : 0}>
            <TabPanel px={0}>
              <Box height={"100%"} px={isMobile ? 0 : 100}>
                <Stack spacing={5} direction={"column"}>
                  {aboutMeData.work.map((job, index) => (
                    <Stack key={index} direction={"column"} spacing={3}>
                      <Heading fontSize={"xl"}>{job.title}</Heading>
                      <Text fontSize={"sm"} color={"gray.600"}>
                        {job.duration}
                      </Text>
                      <UnorderedList spacing={2}>
                        {job.descriptions.map((desc, index) => (
                          <ListItem
                            key={index}
                            color={"gray.600"}
                            fontSize={"md"}
                          >
                            {desc}
                          </ListItem>
                        ))}
                      </UnorderedList>
                    </Stack>
                  ))}
                </Stack>
              </Box>
            </TabPanel>
            <TabPanel px={0}>
              <Box height={"100%"} px={isMobile ? 0 : 100}>
                <Stack spacing={"10px"} direction={"column"}>
                  {aboutMeData.education.map((edu, index) => (
                    <Stack key={index} spacing={2}>
                      <Heading fontSize={"xl"}>{edu.degree}</Heading>
                      <Text fontSize={"sm"} color={"gray.600"}>
                        {edu.university}
                      </Text>
                      <UnorderedList spacing={2}>
                        <ListItem color={"gray.600"} fontSize={"md"}>
                          {edu.cgpa}
                        </ListItem>
                        <ListItem color={"gray.600"} fontSize={"md"}>
                          {edu.duration}
                        </ListItem>
                        <ListItem color={"gray.600"} fontSize={"md"}>
                          {edu.address}
                        </ListItem>
                      </UnorderedList>
                    </Stack>
                  ))}
                </Stack>
              </Box>
            </TabPanel>
            <TabPanel px={0}>
              <Box height={"100%"} px={isMobile ? 0 : 100}>
                <Stack spacing={"10px"} direction={"column"}>
                  {aboutMeData.achievement.map((achieve, index) => (
                    <Stack key={index} spacing={2}>
                      <Heading fontSize={"xl"}>{achieve.name}</Heading>
                      {/* <Text fontSize={"sm"} color={"gray.600"}>
                        {edu.university}
                      </Text>
                      <UnorderedList spacing={2}>
                        <ListItem color={"gray.600"} fontSize={"md"}>
                          {edu.cgpa}
                        </ListItem>
                        <ListItem color={"gray.600"} fontSize={"md"}>
                          {edu.duration}
                        </ListItem>
                        <ListItem color={"gray.600"} fontSize={"md"}>
                          {edu.address}
                        </ListItem>
                      </UnorderedList> */}
                    </Stack>
                  ))}
                </Stack>
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Stack>
    </Box>
  );
};

const aboutMeData = {
  work: [
    {
      title:
        "Technology Intern @ Deloitte - Innovation & Cloud Development Centre (ICDC)",
      duration: "August 2024 - January 2025",
      descriptions: ["Unknown"],
    },
    {
      title: "Part-Time Software Engineer @ My Crib Sdn. Bhd.",
      duration: "January 2022 - April 2024",
      descriptions: [
        "Developed a real estate platform web app for buyers, investors, and realtors.",
        "Built a travel system web app simplifying vacation search and booking.",
        "Developed a mobile app version of the travel system for enhanced accessibility.",
      ],
    },
    {
      title: "Web developer Intern @ My Crib Sdn. Bhd.",
      duration: "August 2021 - January 2022",
      descriptions: [
        "Built a real estate marketplace web app with analytical tools.",
        "Developed a tender management web app to streamline the bidding process.",
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor of Computer Science (Software Engineering) With Honors",
      university: "Universiti Malaysia Pahang Al-Sultan Abdullah",
      cgpa: "CGPA: 3.34",
      duration: "February 2022 - February 2025",
      address:
        "Universiti Malaysia Pahang Al-Sultan Abdullah, 26600, Pekan, Pahang",
    },
    {
      degree: "Diploma in Computer Science",
      university: "Universiti Malaysia Pahang Al-Sultan Abdullah",
      cgpa: "CGPA: 3.15",
      duration: "June 2019 - October 2021",
      address:
        "Universiti Malaysia Pahang Al-Sultan Abdullah, 26600, Pekan, Pahang",
    },
  ],
  achievement: [
    {
      name: "Gold Award Undergraduate Project (Degree) - FYPro-Com Exhibition",
    },
    {
      name: "Dean List Semester I Academic Session 2022/2023",
    },
    {
      name: "Pengarah Terbaik Drama Komsas Peringkat Negeri Pahang",
    },
    {
      name: "Naib Johan Drama Komsas Peringkat Negeri Pahang",
    },
  ],
};

export default AboutmeScreen;
