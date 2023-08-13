import {
  Box,
  Button,
  Text,
  Stack,
  Spacer,
  useMediaQuery,
  Menu,
  MenuItem,
  MenuButton,
  IconButton,
  MenuList,
} from "@chakra-ui/react";
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
          <Text fontSize={"lg"} as={"b"}>
            👨‍💻 isyrafmagic
          </Text>
        </Box>
        <Spacer />
        {isMobile ? (
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
            />
            <MenuList>
              {navigations.map((navigation, index) => (
                <MenuItem key={index}>{navigation.name}</MenuItem>
              ))}
            </MenuList>
          </Menu>
        ) : (
          <Stack direction={"row"} spacing={1} align={"center"}>
            {navigations.map((navigation, index) => (
              <Button
                color="grey.900"
                key={index}
                variant={"ghost"}
                leftIcon={navigation.icon ? navigation.icon : null}
                onClick={() =>
                  localStorage.setItem("navigation", navigation.name)
                }
              >
                {navigation.name}
              </Button>
            ))}
          </Stack>
        )}
      </Box>
    </Box>
  );
};

const navigations = [
  { name: "About me" },
  { name: "Works" },
  { name: "Tech Stack" },
];

export default Navigation;
