import { Flex, Heading, Icon, Spinner, Text } from "@chakra-ui/react";
import { FaLocationArrow } from "react-icons/fa";
import { Tooltip } from "./ui/tooltip";
import useAboutMe from "../utils/hooks/useAboutMe";

const AboutMe = () => {
  const { data, isLoading } = useAboutMe();

  if (isLoading) return <Spinner />;
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
      {data?.paragraphs.map((para, idx) => (
        <Text color="gray" fontSize="sm" mb={7} key={idx}>
          {para}
        </Text>
      ))}
    </Flex>
  );
};

export default AboutMe;
