import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
    return (
        <Box w={"100%"} bg={"white"} py={5} px={5}>
            <Text textAlign={"center"} color={"grey"}>
                © 2023 Ahmad Isyraf. All Rights Reserved
            </Text>
        </Box>
    )
}

export default Footer;