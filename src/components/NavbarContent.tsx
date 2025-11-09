import {
  Text,
  Flex,
  Icon,
  Drawer,
  Portal,
  CloseButton,
  VStack,
  For,
  Link,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdHorizontalRule } from "react-icons/md";

interface Props {
  nameRotate?: boolean;
}

const NavbarContent = ({ nameRotate = true }: Props) => {
  const menuItems = [
    { title: "Home", target: "hero" },
    { title: "About", target: "about" },
  ];
  return (
    <>
      <Text>Logo</Text>
      <Flex
        transform={nameRotate ? "rotate(-90deg)" : ""}
        alignItems="center"
        flexDirection="column"
      >
        <Text whiteSpace="nowrap" transformOrigin="center" fontWeight="bold">
          MD Umar Ahmed
        </Text>
        <Icon>
          <MdHorizontalRule />
        </Icon>
        {/* <hr style={{ width: "100%" }} /> */}
        <Text fontSize="sm" color="gray">
          SDE
        </Text>
      </Flex>
      <Drawer.Root placement={{ md: "start", mdDown: "top" }} size="full">
        <Drawer.Trigger>
          <Icon size="lg" cursor="pointer">
            <GiHamburgerMenu />
          </Icon>
          <Portal>
            <Drawer.Backdrop />
            <Drawer.Positioner>
              <Drawer.Content>
                <Drawer.Header>
                  <Drawer.Title as="h2" fontSize="xx-large">
                    Navigation
                  </Drawer.Title>
                </Drawer.Header>
                <Drawer.Body
                  display="flex"
                  width="100%"
                  height="100%"
                  justifyContent={{ mdDown: "center" }}
                  marginLeft={{ md: "30vw" }}
                  alignItems="center"
                >
                  <VStack>
                    <For each={menuItems}>
                      {({ title, target }) => (
                        <Link
                          href={`#${target}`}
                          fontSize="3xl"
                          fontWeight="med"
                          margin="10px 0"
                          _active={{ textDecoration: "none" }}
                        >
                          {title}
                        </Link>
                      )}
                    </For>
                  </VStack>
                </Drawer.Body>
                <Drawer.CloseTrigger asChild>
                  <CloseButton size="sm" marginRight={5} />
                </Drawer.CloseTrigger>
              </Drawer.Content>
            </Drawer.Positioner>
          </Portal>
        </Drawer.Trigger>
      </Drawer.Root>
    </>
  );
};

export default NavbarContent;
