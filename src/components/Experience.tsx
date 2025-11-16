import { Flex, Heading, Icon, Spinner } from "@chakra-ui/react";
import ExperienceCard from "./ExperienceCard";
import { MdHorizontalRule } from "react-icons/md";
import { Fragment } from "react/jsx-runtime";
import useExperiences from "../utils/hooks/useExperiences";
import { type ValidExperience } from "./ExperienceCard";

interface DbExperience {
  company: string;
  description: string[];
  end_date: string | null;
  id: string;
  is_current: boolean;
  start_date: string;
  title: string;
}

const convertExperience = ({
  company,
  description: desc,
  end_date,
  start_date,
  id,
  is_current: isCurrent,
  title: position,
}: DbExperience): ValidExperience => {
  const startInDateFormat = new Date(start_date);
  const endInDateFormat = end_date ? new Date(end_date) : null;

  return {
    company,
    desc,
    isCurrent,
    id,
    position,
    start: {
      month: startInDateFormat.toLocaleString("default", { month: "short" }),
      year: startInDateFormat.getFullYear(),
    },
    end: {
      month: endInDateFormat
        ? endInDateFormat.toLocaleString("default", { month: "short" })
        : "",
      year: endInDateFormat ? endInDateFormat.getFullYear() : null,
    },
  };
};

const Experience = () => {
  const { data: allExperiences, isLoading } = useExperiences();

  if (isLoading) return <Spinner />;
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
      {allExperiences &&
        allExperiences.length &&
        allExperiences
          .sort((a, b) => {
            return (
              new Date(b.start_date).getTime() -
              new Date(a.start_date).getTime()
            );
          })
          .map((experience) => (
            <Fragment key={experience.id}>
              <ExperienceCard {...convertExperience(experience)} />
              <Icon marginTop={2}>
                <MdHorizontalRule />
              </Icon>
            </Fragment>
          ))}
    </Flex>
  );
};

export default Experience;
