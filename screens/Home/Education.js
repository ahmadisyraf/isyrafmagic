import { Box, Stack, Heading, Text, Spacer, Step, StepIndicator, StepStatus, StepSeparator, useSteps, Stepper, StepTitle, StepDescription } from "@chakra-ui/react"
import { StepIcon, StepNumber } from "@chakra-ui/react";

const steps = [
    { title: "High School (2013)", description: "SMK Tg Panglima Perang Tg Muhammad" },
    { title: "Diploma in Science Computer (2019)", description: "Universiti Malaysia Pahang" },
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

const EducationScreen = ({ isMobile }) => {
    return (
        <Stack direction={isMobile ? "column" : "row"} spacing={1} px={isMobile ? 5 : 20} mt={20} mb={10}>
            <Box width={isMobile ? "" : "50%"}>
                <Heading textAlign={isMobile ? "center" : ""}>
                    Education Background
                </Heading>
                <Text fontSize="xl" textAlign={isMobile ? "center" : ""} mt={5}>
                    Education 📚 has been a transformative journey for me, shaping my character and opening doors 🚪 to new opportunities. From the early days of curiosity to the present, I continue to embrace learning as a lifelong student 👨‍🎓
                </Text>
            </Box>
            <Spacer />
            <Example />
        </Stack>
    )
}

export default EducationScreen