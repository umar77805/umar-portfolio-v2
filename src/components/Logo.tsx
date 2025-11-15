import { Flex, Text } from "@chakra-ui/react";

const Logo = () => {
  return (
    <Flex
      as="a"
      href="#hero" //TS error is not fixable at the moment. No issues at UI end
      width="50px"
      aspectRatio={1}
      borderRadius="50%"
      backgroundColor="#DA6A52"
      justifyContent="center"
      alignItems="center"
    >
      <Text fontFamily="Fascinate Inline" color="white" fontSize="lg">
        UA
      </Text>
    </Flex>
  );
};

export default Logo;
