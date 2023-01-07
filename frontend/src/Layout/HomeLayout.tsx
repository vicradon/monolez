import { Box } from "@chakra-ui/react";
import React from "react";
import Meta from "./Meta";
import Navbar from "./Navbar";

interface Props {
  children: React.ReactNode;
}

function HomeLayout(props: Props) {
  const { children } = props;

  return (
    <Box>
      <Meta />

      <Box
        backgroundImage={"url('/images/hero-bg.png')"}
        backgroundRepeat={"no-repeat"}
        backgroundPosition={"center"}
        padding={{ base: "1rem 2rem", md: "2rem 4rem" }}
      >
        <Box marginBottom={"2rem"}>
          <Navbar />
        </Box>
        <Box>{children}</Box>
      </Box>
    </Box>
  );
}

export default HomeLayout;
