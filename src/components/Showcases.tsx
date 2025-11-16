import { Flex, Spinner, Text } from "@chakra-ui/react";
import ShowcaseContent from "./ShowcaseContent";
import { Fragment } from "react";
import useShowcases from "../utils/hooks/useShowcases";

const Showcases = () => {
  const { data: showCaseInfo, isLoading } = useShowcases();
  // const showCaseInfo = [
  //   {
  //     image: GameDiscoveryHome,
  //     title: "Game Discovery",
  //     desc: [
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fringilla, erat vitae ullamcorper tempor, ligula orci varius arcu, eget semper felis nulla id est. Phasellus egestas est sed arcu porta iaculis. Nunc et vestibulum nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum accumsan mollis. Aliquam volutpat arcu eget consequat aliquam. Donec vel blandit est, sed volutpat nunc. Nullam ultrices ligula sit amet lectus facilisis, non tristique dui tincidunt.",
  //       "Vivamus porta molestie quam, quis auctor dui mattis at. Etiam quis viverra est. Quisque nec dapibus velit, eu commodo sapien. Curabitur id lorem et lorem placerat lacinia. Pellentesque sollicitudin commodo velit et finibus. Fusce neque leo, dignissim a euismod quis, sodales eu diam. In et sapien leo.",
  //     ],
  //     links: [
  //       {
  //         linkDesc: "Live",
  //         target: "https://umar-game-discovery.netlify.app/",
  //       },
  //       {
  //         linkDesc: "GitHub",
  //         target: "https://github.com/umar77805/Game-discovery",
  //       },
  //     ],
  //   },
  //   {
  //     image: PortfolioV1Home,
  //     title: "Portfolio v1",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fringilla, erat vitae ullamcorper tempor, ligula orci varius arcu, eget semper felis nulla id est. Phasellus egestas est sed arcu porta iaculis. Nunc et vestibulum nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum accumsan mollis. Aliquam volutpat arcu eget consequat aliquam. Donec vel blandit est, sed volutpat nunc. Nullam ultrices ligula sit amet lectus facilisis, non tristique dui tincidunt.",
  //     links: [
  //       {
  //         linkDesc: "Live",
  //         target: "https://portfolio-umar.netlify.app/",
  //       },
  //       {
  //         linkDesc: "GitHub",
  //         target: "https://github.com/umar77805/portfolio-umar",
  //       },
  //     ],
  //   },
  // ];

  const isEndOfShowcases = (idx: number) => idx + 1 === showCaseInfo?.length;

  if (isLoading)
    return (
      <Flex
        width="100%"
        height="100vh"
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        <Spinner />
        <Text>Loading showcases</Text>
      </Flex>
    );

  return (
    <Flex
      direction="column"
      padding={{ md: "10vh 10vw", mdDown: "10vh 0" }}
      justifyContent="center"
      alignItems="center"
      id="showcases"
      // width="100%"
    >
      {showCaseInfo &&
        showCaseInfo.length &&
        showCaseInfo.map((info, idx) => {
          const { description, image, links, title, id } = info;
          return (
            <Fragment key={id}>
              <ShowcaseContent
                desc={description}
                image={image || ""}
                title={title}
                links={links || null}
                flipped={idx % 2 === 1}
              />
              {!isEndOfShowcases(idx) && (
                <hr
                  style={{
                    width: "20px",
                    margin: "50px 0",
                  }}
                />
              )}
            </Fragment>
          );
        })}
    </Flex>
  );
};

export default Showcases;
