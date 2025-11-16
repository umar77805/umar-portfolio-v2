import { Box, Flex, Heading, Icon, Image, Link, Text } from "@chakra-ui/react";
import { Fragment } from "react";
import { MdHorizontalRule } from "react-icons/md";
import type { ProjectLink } from "../../database.types";

interface Props {
  image: string;
  title: string;
  desc: string | string[];
  links: ProjectLink[] | null;
  flipped?: boolean;
}

const ShowcaseContent = ({ image, desc, title, flipped, links }: Props) => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      direction={{ md: flipped ? "row-reverse" : "row", mdDown: "column" }}
      gap="20"
      width="100%"
    >
      <Image
        src={image}
        width={{ md: "50%", mdDown: "80%" }}
        // aspectRatio="16/9"
        objectFit="fill"
        _dark={{ border: "1px solid white" }}
        data-aos={flipped ? "fade-left" : "fade-right"}
      />
      <Box as="section" height="100%" width={{ md: "50%", mdDown: "80%" }}>
        <Heading as="h3" fontSize="2xl">
          {title}
        </Heading>
        <Box
          maxH="20vh"
          overflow="scroll"
          marginBottom={3}
          _scrollbar={{ display: "none" }}
          scrollbarWidth="none"
          // overflowX="hidden"
        >
          {Array.isArray(desc) ? (
            desc.map((para, idx) => (
              <Text key={idx} marginTop={2} fontSize="sm" color="gray">
                {para}
              </Text>
            ))
          ) : (
            <Text marginTop={5} fontSize="sm" color="gray">
              {desc}
            </Text>
          )}
        </Box>
        {links?.map((linkObj, idx) => (
          <Fragment key={idx}>
            <Link
              href={linkObj.target}
              fontSize="sm"
              color="#DA6A52"
              target="_blank"
              _focus={{ boxShadow: "none", outline: "none" }}
              textDecoration="underline dashed"
            >
              {linkObj.linkDesc}
            </Link>
            <Icon transform="rotate(90deg)" margin="0 1" color="gray">
              <MdHorizontalRule />
            </Icon>
          </Fragment>
        ))}
      </Box>
    </Flex>
  );
};

export default ShowcaseContent;
