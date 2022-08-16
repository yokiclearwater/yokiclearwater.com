
import "../styles/globals.css";
import { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      100: "#FEFFDE",
      200: "#DDFFBC",
      300: "#91C788",
      400: "#52734D",
      500: "#393939",
    },
  },
});

// #587b7f, #1e2019, #394032, #8dab7f, #cfee9e

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
