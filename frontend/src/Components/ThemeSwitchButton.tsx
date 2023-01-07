import React from "react";
import { BiSun } from "react-icons/bi";
import { Button, useColorMode } from "@chakra-ui/react";

interface Props {}

function ThemeSwitchButton(props: Props) {
  const {} = props;
  const { toggleColorMode } = useColorMode();

  return (
    <Button
      width={"50px"}
      height={"50px"}
      padding={"0"}
      rounded={"full"}
      onClick={toggleColorMode}
    >
      <BiSun />
    </Button>
  );
}

export default ThemeSwitchButton;
