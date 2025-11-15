import { Flex, Heading, Text } from "@chakra-ui/react";

const FooterAboutMe = () => {
  return (
    <Flex direction="column" color="white">
      <Heading as="h3">About</Heading>
      <Text color="gray" fontSize="sm" marginTop={2}>
        A Software Developer based in India. Currently working at Lentra AI as
        an Associate - Fullstack Developer
      </Text>
      <Text
        fontFamily="Mea Culpa"
        marginTop={1}
        fontSize={{ md: "4xl", mdDown: "2xl" }}
      >
        Umar Ahmed
      </Text>
    </Flex>
  );
};

export default FooterAboutMe;
