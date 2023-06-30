import {
    Box, Button, Text, Stack, Spacer, useMediaQuery, Menu, MenuItem, MenuButton, IconButton, MenuList
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const Navigation = () => {
    const [isMobile] = useMediaQuery("(max-width: 768px)");

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
                    <Text fontSize={"lg"} as={"b"}>
                        👨‍💻 isyrafmagic
                    </Text>
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
                            <MenuItem>
                                Works
                            </MenuItem>
                            <MenuItem>
                                Posts
                            </MenuItem>
                        </MenuList>
                    </Menu>
                    :
                    <Stack direction={"row"} spacing={1} align={"center"}>
                        <Button colorScheme="teal" variant={"ghost"}>
                            Works
                        </Button>
                        <Button colorScheme="teal" variant={"ghost"}>
                            Posts
                        </Button>
                    </Stack>
                }
            </Box>
        </Box>
    );
};

export default Navigation;
