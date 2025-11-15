import { Box, Flex, Heading, Icon, Link } from "@chakra-ui/react";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const FooterContacts = () => {
  return (
    <Box color="white">
      <Heading as="h3">Contacts</Heading>
      <Flex direction="column" marginTop={2}>
        <Flex alignItems="center">
          <Icon>
            <MdEmail />
          </Icon>
          <Link
            href="mailto:ahmedumar4647@gmail.com"
            color="gray"
            marginLeft={2}
            _active={{ textDecoration: "none" }}
            _focus={{ boxShadow: "none", outline: "none" }}
            fontSize={{ mdDown: "sm" }}
          >
            Mail
          </Link>
        </Flex>
        <Flex alignItems="center">
          <Icon>
            <FaLinkedin />
          </Icon>
          <Link
            href="https://www.linkedin.com/in/umar7780/"
            color="gray"
            marginLeft={2}
            target="_blank"
            _active={{ textDecoration: "none" }}
            _focus={{ boxShadow: "none", outline: "none" }}
          >
            LinkedIn
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default FooterContacts;
