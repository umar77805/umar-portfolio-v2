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
  Spinner,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdHorizontalRule } from "react-icons/md";
import Logo from "./Logo";
import useGlobal from "../utils/hooks/useGlobal";

interface Props {
  nameRotate?: boolean;
}

const NavbarContent = ({ nameRotate = true }: Props) => {
  const { data, isLoading } = useGlobal();

  if (isLoading) return <Spinner />;
  return (
    <>
      <Logo />
      <Flex
        transform={nameRotate ? "rotate(-90deg)" : ""}
        alignItems="center"
        flexDirection="column"
      >
        <Text whiteSpace="nowrap" transformOrigin="center" fontWeight="bold">
          {data?.name}
        </Text>
        <Icon>
          <MdHorizontalRule />
        </Icon>
        {/* <hr style={{ width: "100%" }} /> */}
        <Text fontSize="sm" color="gray">
          {data?.current_position}
        </Text>
      </Flex>
      <Drawer.Root
        placement={{ md: "start", mdDown: "top" }}
        size="full"
        trapFocus={false}
      >
        <Drawer.Trigger>
          <Icon size="lg" cursor="pointer">
            <GiHamburgerMenu />
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
