import { Flex, Heading, Spinner } from "@chakra-ui/react";
import SocialMedias from "./SocialMedias";
import useGlobal from "../utils/hooks/useGlobal";

const FooterSocialMedias = () => {
  const { isLoading } = useGlobal();
  return (
    <Flex direction="column" width="100%" color="white">
      <Heading as="h3">Connect</Heading>
      {isLoading ? (
        <Spinner marginTop={3} />
      ) : (
        <Flex gap={2} marginTop={2}>
          <SocialMedias flipColor="white" />
        </Flex>
      )}
    </Flex>
  );
};

export default FooterSocialMedias;
