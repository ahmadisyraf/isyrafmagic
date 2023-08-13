import { Box, Text, HStack, IconButton } from "@chakra-ui/react";
import { AiFillLinkedin, AiFillTwitterSquare } from "react-icons/ai";

const Footer = () => {
    return (
        <Box w={"100%"} py={5} px={5} mt={10} bg={"gray.100"}>
            <Text textAlign={"center"} color={"grey"}>
                © 2023 Ahmad Isyraf. All Rights Reserved
            </Text>
        </Box>
    )
}

export default Footer;