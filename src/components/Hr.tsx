import { chakra } from "@chakra-ui/react";

const Hr = chakra("hr", {
  base: {
    padding: "0",
    margin: "0",
    // backgroundColor: { _light: "1px solid black", _dark: "1px solid white" },
    width: "100%",
  },
});

export default Hr;
