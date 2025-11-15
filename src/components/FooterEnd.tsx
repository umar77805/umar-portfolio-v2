import { Flex, Icon, Text } from "@chakra-ui/react";
import { MdHorizontalRule } from "react-icons/md";

const FooterEnd = () => {
  return (
    <Flex marginLeft={5}>
      <Text color="gray" fontSize="xs">
        Made by <strong>MD Umar Ahmed</strong>
      </Text>
      <Icon margin="0 2" transform={"rotate(-90deg)"} color="gray">
        <MdHorizontalRule />
      </Icon>
      <Text color="gray" fontSize="xs">
        Please connect with me for any issues
      </Text>
    </Flex>
  );
};

export default FooterEnd;
