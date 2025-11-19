import {
  Drawer,
  Icon,
  Portal,
  VStack,
  For,
  Link,
  CloseButton,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import useGlobal from "../utils/hooks/useGlobal";
import VersionInfo from "./VersionInfo";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const NavbarOpenContent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data } = useGlobal();

  return (
    <Drawer.Root
      placement={{ md: "start", mdDown: "top" }}
      size="full"
      trapFocus={false}
      onOpenChange={(changeInfo) => setIsOpen(changeInfo.open)}
    >
      <Drawer.Trigger>
        <Icon size="lg" cursor="pointer">
          {isOpen ? <IoMdClose /> : <GiHamburgerMenu />}
        </Icon>
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner
            padding={{ md: "0 0 0 100px", mdDown: "100px 0 0 0" }}
          >
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
                <VStack
                  display="flex"
                  direction="column"
                  alignItems="flex-start"
                >
                  <For each={data?.sections}>
                    {({ name, target_id, id }) => (
                      <Link
                        href={`#${target_id}`}
                        fontSize="4xl"
                        lineHeight="4rem"
                        fontWeight="med"
                        margin="10px 0"
                        _active={{ textDecoration: "none" }}
                        _focus={{ boxShadow: "none", outline: "none" }}
                        data-aos="fade-up"
                        data-aos-duration="400"
                        key={id}
                      >
                        {name}
                      </Link>
                    )}
                  </For>
                </VStack>
              </Drawer.Body>
              <Drawer.Footer placeContent="start">
                <VersionInfo />
              </Drawer.Footer>
              <Drawer.CloseTrigger asChild>
                <CloseButton size="sm" marginRight={5} />
              </Drawer.CloseTrigger>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Trigger>
    </Drawer.Root>
  );
};

export default NavbarOpenContent;
