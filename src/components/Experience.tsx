import { Flex, Heading, Icon } from "@chakra-ui/react";
import ExperienceCard from "./ExperienceCard";
import { MdHorizontalRule } from "react-icons/md";

export interface Experience {
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
  desc: string;
}

const Experience = () => {
  const allExperiences: Experience[] = [
    {
      start: {
        year: 2023,
        month: "Oct",
      },
      end: {
        year: null,
        month: null,
      },
      isCurrent: true,
      position: "Associate - Fullstack Developer",
      company: "Lentra AI",
      desc: "Developed and maintained core fintech platforms, working across the full stack to build performant and reliable systems. Partnered with clients and cross-functional teams to translate business requirements into robust technical solutions. Contributed to architecture design, implementation, and documentation of key product modules, helping deliver high-quality releases in a fast-paced environment.",
    },
    {
      start: {
        year: 2023,
        month: "May",
      },
      end: {
        year: 2023,
        month: "Sept",
      },
      isCurrent: false,
      position: "Software Development Intern",
      company: "Lentra AI",
      desc: "Built and deployed a full-stack analytical B2B application for a banking client, designed to process and analyze large-scale loan applicant data. Implemented dynamic data visualizations to highlight key drop-off points in the loan application workflow, enabling business teams to identify and address process inefficiencies. The solution provided the bank with critical, data-driven insights to optimize customer acquisition and conversion rates.",
    },
  ];
  return (
    <Flex
      direction="column"
      maxWidth={{ md: "23vw" }}
      data-aos="fade-left"
      data-aos-delay="200"
      marginTop={{ mdDown: 2 }}
    >
      <Heading
        as="h2"
        marginBottom={10}
        data-aos-duration="500"
        data-aos="fade-left"
        data-aos-easing="ease-out"
        data-aos-delay="0"
        fontSize={{ md: "2rem", sm: "1rem" }}
      >
        Experience
      </Heading>
      <Icon>
        <MdHorizontalRule />
      </Icon>
      {allExperiences.map((experience) => (
        <>
          <ExperienceCard {...experience} />
          <Icon marginTop={2}>
            <MdHorizontalRule />
          </Icon>
        </>
      ))}
    </Flex>
  );
};

export default Experience;
