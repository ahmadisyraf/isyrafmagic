import {
    Box, Button, Text, Stack, Spacer, useMediaQuery, Menu, MenuItem, MenuButton, IconButton, MenuList
} from "@chakra-ui/react";
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
            // top={0}
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
                            <Link href="/works">
                                <MenuItem>
                                    Works
                                </MenuItem>
                            </Link>
                            <Link href="/gallery">
                                <MenuItem>
                                    Gallery
                                </MenuItem>
                            </Link>
                        </MenuList>
                    </Menu>
                    :
                    <Stack direction={"row"} spacing={1} align={"center"}>
                        <Link href="/works">
                            <Button colorScheme="teal" variant={"ghost"}>
                                Works
                            </Button>
                        </Link>
                        <Link href="/gallery">
                            <Button colorScheme="teal" variant={"ghost"}>
                                Gallery
                            </Button>
                        </Link>
                    </Stack>
                }
            </Box>
        </Box>
    );
};

export default Navigation;
