// theme.js

// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react";

// 2. Add your color mode config
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

// Add your fonts
const fonts = {
  heading: `'Open Sans', sans-serif`,
  body: `'Raleway', sans-serif`,
};

// Define your breakpoints
const breakpoints = {
  base: "0em",
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
};

// 3. extend the theme
const theme = extendTheme({ config, fonts, breakpoints });

export default theme;
