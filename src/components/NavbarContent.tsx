import { Flex, Icon, Spinner, Text } from "@chakra-ui/react";
import { MdHorizontalRule } from "react-icons/md";
import useGlobal from "../utils/hooks/useGlobal";
import Logo from "./Logo";
import NavbarOpenContent from "./NavbarOpenContent";

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
      <NavbarOpenContent />
    </>
  );
};

export default NavbarContent;
