import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Tooltip } from "../components/ui/tooltip";
import LentraLogo from "../assets/short_lentra_logo.svg";

const HeroContent = () => {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      // alignItems="center"
      maxWidth={{ md: "25vw" }}
      padding={{ mdDown: "5" }}
      backgroundColor={{ mdDown: "whiteAlpha.800" }}
    >
      <Heading
        as="h2"
        fontSize={{ md: "4xl", sm: "3xl" }}
        lineHeight="1em"
        fontWeight="light"
        marginBottom={5}
        color={{ md: { _dark: "white", _light: "black" }, mdDown: "black" }}
      >
        Lovely to have you here! I am Umar Ahmed
      </Heading>
      <Text color={{ md: "gray", mdDown: "black" }} marginBottom={5}>
        I am a Software Developer based in India. Currently working at Lentra AI
        as an <strong>Associate - Fullstack Developer</strong>
      </Text>
      <Tooltip content="Lentra AI">
        <Image
          width="50px"
          src={LentraLogo}
          alt="Lentra AI Logo"
          draggable="false"
        />
      </Tooltip>
    </Flex>
  );
};

export default HeroContent;
