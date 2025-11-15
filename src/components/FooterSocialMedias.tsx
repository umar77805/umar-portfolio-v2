import { Flex, Heading } from "@chakra-ui/react";
import SocialMedias from "./SocialMedias";

const FooterSocialMedias = () => {
  return (
    <Flex direction="column" width="100%" color="white">
      <Heading as="h3">Connect</Heading>
      <Flex gap={2} marginTop={2}>
        <SocialMedias flipColor="white" />
      </Flex>
    </Flex>
  );
};

export default FooterSocialMedias;
