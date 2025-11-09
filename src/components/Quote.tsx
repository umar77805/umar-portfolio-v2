import { Flex, Icon, Text } from "@chakra-ui/react";
import { FaQuoteLeft } from "react-icons/fa";

const Quote = () => {
  return (
    <Flex
      justifyContent={{ mdDown: "center" }}
      alignItems="center"
      marginTop={{ mdDown: 5 }}
      padding={{ md: 20, mdDown: 5 }}
      width="100%"
      backgroundColor="#e68570ff"
      id="quote"
    >
      <Text
        width="70%"
        paddingLeft={{ md: "20%" }}
        color="white"
        _dark={{ color: "white" }}
        fontSize={{ md: "medium", mdDown: "sm" }}
      >
        <Icon marginRight={10} size="2xl">
          <FaQuoteLeft />
        </Icon>
        Working on core fintech products has given me a deep appreciation for
        the craft of building impactful software. I’ve collaborated closely with
        clients to design and deliver solutions that address complex challenges,
        while ensuring quality, scalability, and clarity through well-maintained
        documentation
      </Text>
    </Flex>
  );
};

export default Quote;
