import { Image, Flex, Icon, SimpleGrid, Link, Box } from "@chakra-ui/react";
import { BsArrowDown } from "react-icons/bs";
import HeroContent from "./HeroContent";
import ProfilePic from "../assets/profile.jpeg";

const Hero = () => {
  return (
    <SimpleGrid
      columns={{ mdDown: 1, md: 2 }}
      position="relative"
      id="hero"
      maxWidth="100vw"
    >
      <Flex
        justifyContent="center"
        alignItems="center"
        minHeight={{ md: "100vh" }}
        position={{ mdDown: "absolute" }}
        top={{ mdDown: "35%" }}
        zIndex={1}
      >
        <HeroContent />
      </Flex>
      <Box maxHeight="100vh">
        <Image
          height="100%"
          width="100%"
          src={ProfilePic}
          objectFit="cover"
          objectPosition={{ md: "top" }}
          zIndex={0}
          filter={{ mdDown: "blur(2px) brightness(120%)" }}
        />
      </Box>
      <Link href="#about" _focus={{ boxShadow: "none", outline: "none" }}>
        <Icon
          position="absolute"
          bottom="10vh"
          left="40%"
          cursor="pointer"
          background="#DA6A52"
          boxShadow="0 5px 20px grey"
          padding="10px"
          zIndex={5}
        >
          <BsArrowDown size="50px" color="white" />
        </Icon>
      </Link>
    </SimpleGrid>
  );
};

export default Hero;
