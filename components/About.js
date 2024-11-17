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
  useMediaQuery,
} from "@chakra-ui/react";

export default function About() {
  const [isMobile] = useMediaQuery("(max-width: 768px)", {
    ssr: true,
    fallback: true,
  });

  return (
    <Box py={20}>
      <Stack direction={"column"} spacing={8}>
        <Heading size={"xl"}>About Me</Heading>
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

          <TabPanels mt={{ base: 5, md: 0, lg: 0 }}>
            {["work", "education", "achievement"].map((tab, idx) => (
              <TabPanel key={idx} px={0}>
                <Box height={"100%"} px={{ base: 0, md: 20, lg: 20 }}>
                  <Stack spacing={5} direction={"column"}>
                    {aboutMeData[tab].map((item, index) => (
                      <Stack spacing={3} key={index}>
                        <Heading fontSize={"xl"}>
                          {item.title || item.degree || item.name}
                        </Heading>
                        {item.duration && (
                          <Text fontSize={"sm"} color={"gray.600"}>
                            {item.duration}
                          </Text>
                        )}
                        {item.university && (
                          <Text fontSize={"sm"} color={"gray.600"}>
                            {item.university}
                          </Text>
                        )}
                        {item.cgpa && (
                          <Text fontSize={"sm"} color={"gray.600"}>
                            {item.cgpa}
                          </Text>
                        )}
                        <UnorderedList spacing={2}>
                          {item.descriptions?.map((desc, idx) => (
                            <ListItem
                              key={idx}
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
            ))}
          </TabPanels>
        </Tabs>
      </Stack>
    </Box>
  );
}

const aboutMeData = {
  work: [
    {
      title:
        "Technology Intern @ Deloitte - Innovation & Cloud Development Centre (ICDC)",
      duration: "August 2024 - January 2025",
      descriptions: ["Developed Internal System Task Management System"],
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
      title: "Front-End Intern @ My Crib Sdn. Bhd.",
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
      descriptions: [
        "Engaged in various software engineering courses",
        "Worked on numerous group projects and personal assignments",
      ],
    },
    {
      degree: "Diploma in Computer Science",
      university: "Universiti Malaysia Pahang Al-Sultan Abdullah",
      cgpa: "CGPA: 3.15",
      duration: "June 2019 - October 2021",
      descriptions: [
        "Completed core computer science courses",
        "Participated in coding challenges and tech meetups",
      ],
    },
  ],
  achievement: [
    {
      name: "Gold Award Undergraduate Project (Degree) - FYPro-Com Exhibition",
      duration: "Jun 2024",
      descriptions: [
        "Developed Customer Review and Feedback System (JomReview) that won the gold award",
      ],
    },
    {
      name: "Dean List Semester I Academic Session 2022/2023",
      duration: "January 2023",
      descriptions: ["Achieved top academic performance during the semester"],
    },
    {
      name: "Pengarah Terbaik Drama Komsas Peringkat Negeri Pahang",
      duration: "July 2018",
      descriptions: [
        "Awarded Best Director for a drama production at the state level",
      ],
    },
  ],
};
