import {
  Image,
  Flex,
  Icon,
  SimpleGrid,
  Link,
  Box,
  Spinner,
} from "@chakra-ui/react";
import { BsArrowDown } from "react-icons/bs";
import HeroContent from "./HeroContent";
import useHero from "../utils/hooks/useHero";

const Hero = () => {
  const { data, isLoading } = useHero();
  return (
    <SimpleGrid
      columns={{ mdDown: 1, md: 2 }}
      position="relative"
      id="hero"
      maxWidth="100vw"
    >
      <Flex
        justifyContent="center"
        alignItems="center"
        minHeight={{ md: "100vh" }}
        position={{ mdDown: "absolute" }}
        top={{ mdDown: "35%" }}
        zIndex={1}
      >
        <HeroContent
          company_logo={data?.company_logo || ""}
          name={data?.name || ""}
          subtitle={data?.subtitle || ""}
          isLoading={isLoading}
        />
      </Flex>
      <Box maxHeight="100vh">
        {isLoading ? (
          <Flex
            width="100%"
            height={{ md: "100%", mdDown: "100vh" }}
            as="div"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Spinner />
          </Flex>
        ) : (
          <Image
            height="100%"
            width="100%"
            src={data?.profile_image || ""}
            objectFit="cover"
            objectPosition={{ md: "top" }}
            zIndex={0}
          />
        )}
      </Box>
      {!isLoading && (
        <Link href="#about" _focus={{ boxShadow: "none", outline: "none" }}>
          <Icon
            position="absolute"
            bottom="10vh"
            left="40%"
            cursor="pointer"
            background="#DA6A52"
            boxShadow="0 5px 20px grey"
            padding="10px"
            zIndex={5}
          >
            <BsArrowDown size="50px" color="white" />
          </Icon>
        </Link>
      )}
    </SimpleGrid>
  );
};

export default Hero;
