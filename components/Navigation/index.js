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
import { useEffect, useState } from "react";

import useBreakPoints from "../../hooks/useBreakpoints";

const Navigation = ({ aboutMeRef, worksRef, techStackRef, contactRef }) => {
  const { isMobile } = useBreakPoints();
  const [clickedButton, setClickedButton] = useState("");

  useEffect(() => {
    if (clickedButton) {
      if (clickedButton === "Works") {
        worksRef.current.scrollIntoView({ behavior: "smooth" });
        setClickedButton("");
      } else if (clickedButton === "About me") {
        aboutMeRef.current.scrollIntoView({ behavior: "smooth" });
        setClickedButton("");
      } else if (clickedButton === "Tech Stack") {
        techStackRef.current.scrollIntoView({ behavior: "smooth" });
        setClickedButton("");
      } else if (clickedButton === "Contact") {
        contactRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [clickedButton]);

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
                <MenuItem
                  key={index}
                  onClick={() => setClickedButton(navigation.name)}
                >
                  {navigation.name}
                </MenuItem>
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
                onClick={() => setClickedButton(navigation.name)}
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
  { name: "Contact" },
];

export default Navigation;
 