import { Flex, Heading, Spinner, Text } from "@chakra-ui/react";
import useGlobal from "../utils/hooks/useGlobal";

const FooterAboutMe = () => {
  const { data, isLoading } = useGlobal();

  return (
    <Flex direction="column" color="white">
      <Heading as="h3">About</Heading>
      {isLoading ? (
        <Spinner marginTop={4} />
      ) : (
        <Text color="gray" fontSize="sm" marginTop={2}>
          {data?.footer_about}
        </Text>
      )}
      <Text
        fontFamily="Mea Culpa"
        marginTop={1}
        fontSize={{ md: "4xl", mdDown: "2xl" }}
      >
        {data?.name}
      </Text>
    </Flex>
  );
};

export default FooterAboutMe;
