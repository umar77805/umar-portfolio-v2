import { Flex, SimpleGrid } from "@chakra-ui/react";
import AboutMe from "./AboutMe";
import Experience from "./Experience";

const About = () => {
  return (
    <Flex
      id="about"
      minHeight="100vh"
      width="100%"
      justifyContent="center"
      alignItems="center"
      padding={{ mdDown: "5", md: "10vh" }}
    >
      <SimpleGrid
        columns={{ sm: 1, md: 2 }}
        gap={{ md: "25vw", mdDown: "5vh" }}
      >
        <AboutMe />
        <Experience />
        {/* <Box data-aos="fade-left">About</Box> */}
      </SimpleGrid>
    </Flex>
  );
};

export default About;
