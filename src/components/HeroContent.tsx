import {
  Flex,
  Heading,
  VStack,
  Image,
  SkeletonText,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Tooltip } from "../components/ui/tooltip";

interface Props {
  name: string;
  subtitle: string;
  company_logo: string;
  isLoading: boolean;
}

const HeroContent = ({ company_logo, name, subtitle, isLoading }: Props) => {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      // alignItems="center"
      maxWidth={{ md: "25vw" }}
      padding={{ mdDown: "5" }}
      backgroundColor={{
        mdDown: { _dark: "blackAlpha.800", _light: "whiteAlpha.800" },
      }}
      marginX={{ mdDown: "5" }}
      borderRadius={{ mdDown: "10px" }}
      width="100%"
    >
      {isLoading ? (
        <Stack gap="6">
          <VStack width="full">
            <SkeletonText noOfLines={1} height="5" />
            <SkeletonText noOfLines={2} />
            {/* <SkeletonCircle size="10" /> */}
          </VStack>
        </Stack>
      ) : (
        <>
          <Heading
            as="h2"
            fontSize={{ md: "4xl", sm: "3xl" }}
            lineHeight="1em"
            fontWeight="light"
            marginBottom={5}
            // color={{ md: { _dark: "white", _light: "black" }, mdDown: "black" }}
          >
            {name || ""}
          </Heading>
          <Text marginBottom={5}>{subtitle || ""}</Text>
          <Tooltip content="Lentra AI">
            <Image
              width="50px"
              src={company_logo || ""}
              alt="Lentra AI Logo"
              draggable="false"
            />
          </Tooltip>
        </>
      )}
    </Flex>
  );
};

export default HeroContent;
