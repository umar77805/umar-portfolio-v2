import { SimpleGrid, VStack, StackSeparator } from "@chakra-ui/react";
import FooterAboutMe from "./FooterAboutMe";
import FooterContacts from "./FooterContacts";
import FooterSocialMedias from "./FooterSocialMedias";
import FooterEnd from "./FooterEnd";

const Footer = () => {
  return (
    <VStack backgroundColor="#2E2E2E" separator={<StackSeparator />}>
      <SimpleGrid
        columns={{ sm: 2, md: 3 }}
        gap={5}
        padding={{ md: 20, mdDown: 10 }}
        width="100%"
        id="footer"
      >
        <FooterAboutMe />
        <FooterContacts />
        <FooterSocialMedias />
      </SimpleGrid>
      <FooterEnd />
    </VStack>
  );
};

export default Footer;
