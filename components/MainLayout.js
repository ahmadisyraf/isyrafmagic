import { Box } from "@chakra-ui/react";

import Footer from "./Footer";

export default function MainLayout({ children }) {

  return (
    <Box position="relative">
      <Box
        py={15}
        px={{
          base: 10,
          sm: 50,
          md: 200,
          lg: 350,
        }}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
}
