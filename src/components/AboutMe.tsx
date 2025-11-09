import { Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { FaLocationArrow } from "react-icons/fa";
import { Tooltip } from "./ui/tooltip";

const AboutMe = () => {
  return (
    <Flex
      direction="column"
      maxWidth={{ md: "23vw" }}
      data-aos="fade-left"
      data-aos-delay="200"
    >
      <Tooltip content="Know more about me" closeDelay={0}>
        <Heading
          as="h2"
          marginBottom={10}
          fontSize={{ md: "2rem", sm: "1rem" }}
          data-aos-duration="500"
          data-aos="fade-left"
          data-aos-delay="0"
        >
          About Me
          <Icon
            marginLeft={2}
            color="grey"
            cursor="pointer"
            transition="0.2s"
            width="2rem"
            _hover={{
              marginLeft: "3",
              scale: 1.2,
              color: "#DA6A52",
              transition: "0.2s ease-in",
            }}
          >
            <FaLocationArrow size="1rem" />
          </Icon>
        </Heading>
      </Tooltip>
      <Text color="gray" fontSize="sm" mb={7}>
        I’m Mohammad Umar Ahmed, currently working at Lentra AI as an Associate
        Fullstack Developer. With over 2.5 years of experience in building
        enterprise-grade applications, I specialize in creating robust, scalable
        solutions that serve hundreds of thousands of users every day.
      </Text>

      <Text color="gray" fontSize="sm" mb={7}>
        My journey as a developer began in 2019, when I joined SRM University to
        pursue a degree in Computer Science. Inspired by mentors and driven by a
        genuine passion for technology, I began exploring the world of software
        development and have enjoyed every step since.
      </Text>

      <Text color="gray" fontSize="sm">
        At Lentra, my contributions have been consistently recognized through
        annual performance awards, and I’ve been commended for both my technical
        proficiency and clear, effective communication skills.
      </Text>
    </Flex>
  );
};

export default AboutMe;
