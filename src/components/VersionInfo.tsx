import { HStack, Text, StackSeparator } from "@chakra-ui/react";

const VersionInfo = () => {
  return (
    <HStack color="gray" separator={<StackSeparator />} fontSize="xs">
      <Text>{import.meta.env.VITE_REACT_APP_NAME}</Text>
      <Text>React - 19</Text>
      <Text>{`Application - ${import.meta.env.VITE_REACT_APP_VERSION}`}</Text>
    </HStack>
  );
};

export default VersionInfo;
