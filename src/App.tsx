import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import { ColorModeButton } from "./components/ui/color-mode";
import Hero from "./components/Hero";
import About from "./components/About";
import Quote from "./components/Quote";

function App() {
  return (
    <Box minHeight="500vh" maxWidth="100vw">
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
      <Hero />
      <About />
      <Quote />
    </Box>
  );
}

export default App;
