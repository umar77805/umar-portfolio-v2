import { Flex, HStack, Icon, Spinner, Text } from "@chakra-ui/react";
import useGlobal from "../utils/hooks/useGlobal";
import { FaRegCopyright } from "react-icons/fa";

const FooterEnd = () => {
  const { data, isLoading } = useGlobal();

  if (isLoading) return <Spinner />;

  return (
    <Flex
      paddingY={5}
      paddingX={20}
      justifyContent="space-between"
      width="100%"
    >
      <HStack>
        <Icon color="white" size="xs">
          <FaRegCopyright />
        </Icon>
        <Text color="gray" fontSize="xs">
          {data?.final_statement}
        </Text>
      </HStack>
      <Text color="gray" fontSize="xs">
        v{import.meta.env.VITE_REACT_APP_VERSION}
      </Text>
    </Flex>
  );
};

export default FooterEnd;
