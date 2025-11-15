import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import FooterAboutMe from "./FooterAboutMe";
import FooterContacts from "./FooterContacts";
import FooterSocialMedias from "./FooterSocialMedias";
import Hr from "./Hr";
import FooterEnd from "./FooterEnd";

const Footer = () => {
  return (
    <Flex
      direction="column"
      justifyContent="space-between"
      paddingBottom={10}
      width="100%"
      backgroundColor="#2E2E2E"
      id="footer"
    >
      <SimpleGrid
        columns={{ sm: 2, md: 3 }}
        // gap={{ md: "25vw", mdDown: "5vh" }}
        gap={5}
        padding={{ md: 20, mdDown: 10 }}
        width="100%"
        backgroundColor="#2E2E2E"
        id="footer"
      >
        <Box>
          <FooterAboutMe />
        </Box>
        <Box>
          <FooterContacts />
        </Box>
        <Box>
          <FooterSocialMedias />
        </Box>
      </SimpleGrid>
      <Hr />
      <FooterEnd />
    </Flex>
  );
};

export default Footer;
