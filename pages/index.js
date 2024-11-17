import { Box, Stack } from "@chakra-ui/react";
import { useRef } from "react";

import Header from "../components/Header";
import About from "../components/About";
import Work from "../components/Work";
import MainLayout from "../components/MainLayout";

export default function HomePages() {
  return (
    <MainLayout>
      <Stack direction="column" spacing={0}>
        <Header />
        <About />
        <Work />
      </Stack>
    </MainLayout>
  );
}
