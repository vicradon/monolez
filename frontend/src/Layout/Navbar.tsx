import { Link, Flex, Image, Text } from "@chakra-ui/react";
import ThemeSwitchButton from "Components/ThemeSwitchButton";
import React from "react";

interface Props {}

function Navbar(props: Props) {
  const {} = props;

  return (
    <Flex justifyContent={"space-between"} alignItems={"center"}>
      <Image
        src="/logo.png"
        alt="Home"
        rounded={"full"}
        width={30}
        height={30}
      />

      <ThemeSwitchButton />
    </Flex>
  );
}

export default Navbar;
