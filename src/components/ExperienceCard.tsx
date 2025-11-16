import { Flex, Heading, Text } from "@chakra-ui/react";

export interface ValidExperience {
  id: string;
  start: {
    year: number;
    month: string;
  };
  end: {
    year: number | null;
    month: string | null;
  };
  isCurrent: boolean;
  position: string;
  company: string;
  desc: string[];
}

const ExperienceCard = ({
  start,
  end,
  company,
  desc,
  isCurrent,
  position,
}: ValidExperience) => {
  return (
    <Flex margin="3 0" direction="column">
      <Text fontSize="sm" color="#DA6A52" fontStyle="italic">{`${start.month} ${
        start.year
      } -- ${isCurrent ? "Present" : `${end.month} ${end.year}`}`}</Text>
      <Flex alignItems="center">
        <Heading as="h3" marginBottom={1} fontSize="lg">
          {position}
        </Heading>
        <Text color="grey" fontSize="sm" paddingLeft={{ md: 4 }}>
          / {company}
        </Text>
      </Flex>
      {desc.length &&
        desc.map((des, idx) => (
          <Text key={idx} color="grey" fontSize="sm">
            {des}
          </Text>
        ))}
    </Flex>
  );
};

export default ExperienceCard;
