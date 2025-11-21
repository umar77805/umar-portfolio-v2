import { Flex, Text } from "@chakra-ui/react";
import useGlobal from "../utils/hooks/useGlobal";
import { Link } from "react-router";

const Logo = () => {
  const { data } = useGlobal();

  const getShortName = () => {
    if (!data) return "";

    const splitted = data.name.split(" ");
    if (splitted.length <= 2)
      return splitted.reduce(
        (acc, curr) => acc + curr.charAt(0).toUpperCase(),
        ""
      );

    splitted.splice(0, splitted.length - 2);

    return splitted.reduce(
      (acc, curr) => acc + curr.charAt(0).toUpperCase(),
      ""
    );
  };

  return (
    <Flex
      width="50px"
      aspectRatio={1}
      borderRadius="50%"
      backgroundColor="#DA6A52"
      justifyContent="center"
      alignItems="center"
    >
      <Link to="/">
        <Text fontFamily="Fascinate Inline" color="white" fontSize="lg">
          {getShortName()}
        </Text>
      </Link>
    </Flex>
  );
};

export default Logo;
