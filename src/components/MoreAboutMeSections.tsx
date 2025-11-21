import { Box, Heading, Image, Text } from "@chakra-ui/react";
import Hr from "./Hr";

interface Props {
  sectionTitle: string;
  image: string;
  info: string[];
  id: string;
  imgFloat?: "left" | "right";
}

const MoreAboutMeSections = ({
  image,
  info,
  sectionTitle,
  id,
  imgFloat: float = "left",
}: Props) => {
  return (
    <Box
      as="section"
      width="90%"
      // border="1px solid #DA6A52"
      borderRadius="10px"
      marginY={10}
      id={id}
    >
      <Heading
        as="h2"
        width="100%"
        display="flex"
        justifyContent="center"
        fontSize="3xl"
        marginY={5}
      >
        {sectionTitle}
      </Heading>
      <Hr borderColor="#DA6A52" />
      <Box marginTop={5} padding={5}>
        {/* Text ABOVE image */}
        <Text fontSize="xl">{info[0]}</Text>

        {/* Image */}
        <Image
          src={image}
          width={{ md: "300px", mdDown: "100%", lg: "250px" }}
          float={float}
          marginY={5}
          marginRight={5}
          aspectRatio="3/4"
          data-aos="fade-left"
        />

        {/* Remaining paragraphs BELOW image */}
        {info.slice(1).map((para, idx) => (
          <Text key={idx} marginTop={7} fontSize="xl">
            {para}
          </Text>
        ))}
      </Box>
    </Box>
  );
};

export default MoreAboutMeSections;
