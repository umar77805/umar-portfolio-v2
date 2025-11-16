import { Flex, Spinner, Text } from "@chakra-ui/react";
import useGlobal from "../utils/hooks/useGlobal";

const FooterEnd = () => {
  const { data, isLoading } = useGlobal();

  if (isLoading) return <Spinner marginLeft={10} />;

  return (
    <Flex marginLeft={5}>
      <Text color="gray" fontSize="xs">
        {data?.final_statement}
      </Text>
    </Flex>
  );
};

export default FooterEnd;
