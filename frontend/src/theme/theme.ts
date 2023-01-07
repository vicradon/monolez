import { extendTheme } from "@chakra-ui/react";
import Heading from "./Heading";

const theme = extendTheme({
  fonts: {
    heading: `Inter, sans-serif`,
    body: `Inter, sans-serif`,
  },
  components: {
    Heading,
  },
});

export default theme;
