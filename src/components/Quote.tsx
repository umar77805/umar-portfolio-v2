import { Flex, Icon, SkeletonText, Text } from "@chakra-ui/react";
import { FaQuoteLeft } from "react-icons/fa";
import useQuote from "../utils/hooks/useQuote";

const Quote = () => {
  const { data, isLoading } = useQuote();

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
      {isLoading ? (
        <SkeletonText
          marginLeft={{ md: "20%" }}
          variant="shine"
          width="50%"
          height="5"
          css={{
            "--start-color": "colors.whiteAlpha.200",
            "--end-color": "colors.whiteAlpha.700",
          }}
        />
      ) : (
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
          {data?.text || ""}
        </Text>
      )}
    </Flex>
  );
};

export default Quote;
