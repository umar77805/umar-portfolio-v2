import { Box, Flex, For, Heading, Icon, Link, Spinner } from "@chakra-ui/react";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import useGlobal from "../utils/hooks/useGlobal";
import { PiPlugsConnected } from "react-icons/pi";

const FooterContacts = () => {
  const { data, isLoading } = useGlobal();

  const getConnactable = () => {
    if (!data) return [];

    return data.contact.filter((con) => con.connectable);
  };

  const getConnectableIcons = (alias: string) => {
    switch (alias) {
      case "mail":
        return <MdEmail />;
      case "linkedin":
        return <FaLinkedin />;
      default:
        return <PiPlugsConnected />;
    }
  };

  return (
    <Box color="white">
      <Heading as="h3">Contacts</Heading>
      <Flex direction="column" marginTop={2}>
        {isLoading ? (
          <Spinner marginTop={3} />
        ) : (
          <>
            <For each={getConnactable()}>
              {({ alias, target, name, id }) => (
                <Flex alignItems="center" key={id}>
                  <Icon>{getConnectableIcons(alias || "")}</Icon>
                  <Link
                    href={target}
                    color="gray"
                    marginLeft={2}
                    _active={{ textDecoration: "none" }}
                    _focus={{ boxShadow: "none", outline: "none" }}
                    fontSize={{ mdDown: "sm" }}
                  >
                    {name}
                  </Link>
                </Flex>
              )}
            </For>
          </>
        )}
      </Flex>
    </Box>
  );
};

export default FooterContacts;
