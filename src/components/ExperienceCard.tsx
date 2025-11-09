import { Flex, Heading, Text } from "@chakra-ui/react";
import { type Experience } from "./Experience";

const ExperienceCard = ({
  start,
  end,
  company,
  desc,
  isCurrent,
  position,
}: Experience) => {
  return (
    <Flex margin="3 0" direction="column">
      <Text fontSize="sm" color="#DA6A52" fontStyle="italic">{`${start.month} ${
        start.year
      } -- ${isCurrent ? "Present" : `${end.month}`} ${end.year}`}</Text>
      <Flex alignItems="center">
        <Heading as="h3" marginBottom={1} fontSize="lg">
          {position}
        </Heading>
        <Text color="grey" fontSize="sm" paddingLeft={{ md: 4 }}>
          / {company}
        </Text>
      </Flex>
      <Text color="grey" fontSize="sm">
        {desc}
      </Text>
    </Flex>
  );
};

export default ExperienceCard;
