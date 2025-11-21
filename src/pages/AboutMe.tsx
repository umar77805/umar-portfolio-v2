import { Heading, VStack, Spinner } from "@chakra-ui/react";
import Hr from "../components/Hr";
import MoreAboutMeSections from "../components/MoreAboutMeSections";
import useAboutSection from "../utils/hooks/useAboutSection";

const AboutMe = () => {
  const { data, isLoading } = useAboutSection();
  const personalInfo = data?.find(
    (abouInfo) => abouInfo.section_name === "Personal Info"
  );
  const educationInfo = data?.find(
    (abouInfo) => abouInfo.section_name === "Education"
  );

  return (
    <VStack paddingY={10} width="100%" display="flex" justifyContent="center">
      <Hr />
      <Heading
        as="h1"
        fontFamily="Black Ops One"
        fontSize="7xl"
        marginY={10}
        color="#DA6A52"
      >
        ABOUT ME
      </Heading>
      <Hr />
      {isLoading ? (
        <Spinner />
      ) : (
        <MoreAboutMeSections
          image={personalInfo?.image || ""}
          info={personalInfo?.elaborated_info || []}
          sectionTitle="Personal Life"
          id="personalLife"
        />
      )}
      {isLoading ? (
        <Spinner />
      ) : (
        <MoreAboutMeSections
          image={educationInfo?.image || ""}
          info={educationInfo?.elaborated_info || []}
          sectionTitle="Education"
          imgFloat="right"
          id="education"
        />
      )}
      {/* {isLoading ? <Spinner /> : <Image
        src={Education1}
        width="90%"
        // height="50vh"
        objectFit="cover"
      />} */}
    </VStack>
  );
};

export default AboutMe;
