import '../styles/globals.css'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from '../utils/theme';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Layout>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp
