import "../styles/globals.css";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "../utils/theme";
import "@fontsource/raleway/400.css";
import "@fontsource/open-sans/700.css";

function MyApp({ Component, pageProps }) {

  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
