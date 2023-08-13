import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Box,
  Heading,
  Textarea,
  Stack,
  Card,
  Button,
  Container,
  FormErrorMessage,
  Alert,
  AlertTitle,
  AlertDescription
} from "@chakra-ui/react";
import { useState, useRef, useEffect } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AlertIcon } from "@chakra-ui/react";
import emailjs from "@emailjs/browser";

const ContactScreen = ({ isMobile, contactRef }) => {
  const [subject, setSubject] = useState("");
  const [isSubjectInvalid, setIsSubjectInvalid] = useState(false);

  const [email, setEmail] = useState("");
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);

  const [message, setMessage] = useState("");
  const [isMessageInvalid, setIsMessageInvalid] = useState(false);

  const [isSubmited, setIsSubmited] = useState(false);

  const form = useRef();

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!email) {
      setIsEmailInvalid(true);
      return;
    } else {
      setIsEmailInvalid(false);
    }

    if (!subject) {
      setIsSubjectInvalid(true);
      return;
    } else {
      setIsSubjectInvalid(false);
    }

    if (!message) {
      setIsMessageInvalid(true);
      return;
    } else {
      setIsMessageInvalid(false);
    }

    if (!isSubjectInvalid && !isEmailInvalid && !isMessageInvalid) {
      emailjs
        .sendForm(
          "service_ygi6urp",
          "template_49xklod",
          form.current,
          "0RB44v9fpWJlQ6eRg"
        )
        .then(
          (result) => {
            console.log(result);
            setIsSubmited(true);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <Box px={isMobile ? 0 : 20} ref={contactRef} pt={20}>
      <Box w="100%">
        <Heading size={"md"} mb={2} textAlign={"center"} color={"gray.600"}>
          CONTACT
        </Heading>
        <Heading size={"lg"} mb={10} textAlign={"center"}>
          Love to hear from you, get in touch 📬
        </Heading>
      </Box>
      <Container centerContent>
        <Card
          variant={"outline"}
          shadow={"md"}
          borderRadius={20}
          px={isMobile ? 5 : 10}
          py={10}
          width={isMobile ? "100%" : "500px"}
          ref={form}
          as={"form"}
          onSubmit={sendEmail}
        >
          {isSubmited ? (
            <FormSubmited />
          ) : (
            <Stack
              direction={"column"}
              spacing={"20px"}
              position={"relative"}
              width={"100%"}
            >
              <FormControl isInvalid={isEmailInvalid}>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  name="from_email"
                />
                {!isEmailInvalid ? (
                  <FormHelperText>
                    I&apos;ll never share your email.
                  </FormHelperText>
                ) : (
                  <FormErrorMessage>
                    Something wrong with email.
                  </FormErrorMessage>
                )}
              </FormControl>
              <FormControl isInvalid={isSubjectInvalid}>
                <FormLabel>Subject</FormLabel>
                <Input
                  value={subject}
                  onChange={handleSubjectChange}
                  type="text"
                  name="subject"
                />
                {!isSubjectInvalid ? null : (
                  <FormErrorMessage>Subject is required</FormErrorMessage>
                )}
              </FormControl>
              <FormControl isInvalid={isMessageInvalid}>
                <FormLabel>Message</FormLabel>
                <Textarea
                  placeholder=""
                  value={message}
                  onChange={handleMessageChange}
                  name="message"
                />
                {!isMessageInvalid ? null : (
                  <FormErrorMessage>Message is required</FormErrorMessage>
                )}
              </FormControl>
              <Button
                variant={"solid"}
                bg={"gray.900"}
                color={"white"}
                rightIcon={<AiOutlineArrowRight />}
                type="submit"
              >
                Submit
              </Button>
            </Stack>
          )}
        </Card>
      </Container>
    </Box>
  );
};

const FormSubmited = () => {
  return (
    <Alert
      status="success"
      variant="subtle"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      height="200px"
      borderRadius={20}
    >
      <AlertIcon boxSize="40px" mr={0} />
      <AlertTitle mt={4} mb={1} fontSize="lg">
        Submited!
      </AlertTitle>
      <AlertDescription maxWidth="sm">
        Thanks for reaching out. I'll get back to you as soon as I can.
      </AlertDescription>
    </Alert>
  );
};

export default ContactScreen;
