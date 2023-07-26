import { Box, Button, Text, Stack, Spacer, useMediaQuery, Menu, MenuItem, MenuButton, IconButton, MenuList } from "@chakra-ui/react";
import Link from "next/link";
import { HamburgerIcon } from "@chakra-ui/icons";

const Navigation = () => {
    const [isMobile] = useMediaQuery("(max-width: 768px)", {
        ssr: true,
        fallback: true, // return false on the server, and re-evaluate on the client side
    });

    return (
        <Box
            width={"100%"}
            position={"fixed"}
            bg={"rgba(255, 255, 255, 0.3)"}
            backdropFilter="blur(8px)"
            zIndex={1000}
        >
            <Box bg={""} py={4} px={5} display={"flex"}>
                <Box
                    display={"flex"}
                    flexDirection={"row"}
                    justifyContent={"center"}
                    alignItems={"center"}
                >
                    <Link href="/">
                        <Text fontSize={"lg"} as={"b"}>
                            👨‍💻 isyrafmagic
                        </Text>
                    </Link>
                </Box>
                <Spacer />
                {isMobile ?
                    <Menu>
                        <MenuButton
                            as={IconButton}
                            aria-label='Options'
                            icon={<HamburgerIcon />}
                            variant='outline'
                        />
                        <MenuList>
                            {navigations.map((navigation, index) => (
                                <Link href={navigation.path} key={index}>
                                    <MenuItem>
                                        {navigation.name}
                                    </MenuItem>
                                </Link>
                            ))}
                        </MenuList>
                    </Menu>
                    :
                    <Stack direction={"row"} spacing={1} align={"center"}>
                        {navigations.map((navigation, index) => (
                            <Link href={navigation.path} key={index}>
                                <Button colorScheme="teal" variant={"ghost"}>
                                    {navigation.name}
                                </Button>
                            </Link>
                        ))}
                    </Stack>
                }
            </Box>
        </Box>
    );
};

const navigations = [
    { name: "Works", path: "/works" },
    { name: "Gallery", path: "/gallery" }
]

export default Navigation;
