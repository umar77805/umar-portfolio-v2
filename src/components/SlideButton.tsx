import { chakra } from "@chakra-ui/react";

export const SlideButton = chakra("button", {
  base: {
    position: "relative",
    overflow: "hidden",
    zIndex: 1,
    transition: "color 400ms ease-in-out",

    _before: {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "#DA6A52",
      zIndex: -1,
      transform: "scaleY(0)",
      transformOrigin: "bottom",
      transition: "transform 400ms ease-in-out",
      transitionDelay: "100ms",
    },

    _hover: {
      color: "white",
      _before: {
        transform: "scaleY(1)",
      },
    },
  },
});
