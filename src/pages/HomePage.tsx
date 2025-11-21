import { Box } from "@chakra-ui/react";
import About from "../components/About";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Showcases from "../components/Showcases";
import Quote from "../components/Quote";

const HomePage = () => {
  return (
    <Box maxWidth="100vw">
      <Navbar />
      <Hero />
      <About />
      <Quote />
      <Showcases />
    </Box>
  );
};

export default HomePage;
