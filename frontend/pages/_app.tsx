import { ChakraProvider } from "@chakra-ui/react";
import Fonts from "Components/Fonts";
import theme from "theme/theme";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
