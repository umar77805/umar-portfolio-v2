import { Box } from "@chakra-ui/react";
import NavbarContent from "./NavbarContent";

const Navbar = () => {
  return (
    <>
      {/* For large devices */}
      <Box
        as="aside"
        w="100px"
        bg="whiteAlpha.900"
        _dark={{ bg: "gray.800" }}
        borderRight="1px solid"
        borderColor="gray.600"
        p={5}
        h="100vh"
        display={{ base: "none", md: "flex" }}
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        position="fixed"
        top="0"
        left="0"
      >
        <NavbarContent />
      </Box>

      {/* For small devices */}
      <Box
        bg="white"
        _dark={{ bg: "gray.800" }}
        borderBottom="1px solid"
        borderColor="gray.600"
        p={5}
        w="100vw"
        display={{ base: "flex", md: "none" }}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        position="fixed"
        top="0"
        left="0"
        boxShadow="0 1px 5px grey"
        zIndex={10}
      >
        <NavbarContent nameRotate={false} />
      </Box>
    </>
  );
};

export default Navbar;
