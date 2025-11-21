import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ColorModeButton } from "../components/ui/color-mode";

const Layout = () => {
  return (
    <>
      <Navbar />
      <ColorModeButton
        position="fixed"
        right="20px"
        bottom="100px"
        zIndex={5}
        background="#DA6A52"
        color="white"
        padding={3}
        size="xl"
      />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
