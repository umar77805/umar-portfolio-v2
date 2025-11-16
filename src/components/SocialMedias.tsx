import { For, Icon, Link } from "@chakra-ui/react";
import { SlideButton } from "./SlideButton";
import { CiInstagram, CiLinkedin } from "react-icons/ci";
import useGlobal from "../utils/hooks/useGlobal";
import { Tooltip } from "./ui/tooltip";
import { PiPlugsConnected } from "react-icons/pi";

interface Props {
  initialColor?: string;
  flipColor?: string;
}

const SocialMedias = ({
  initialColor = "white",
  flipColor = "black",
}: Props) => {
  const { data } = useGlobal();

  const getSocialMedia = () => {
    if (!data) return [];

    return data.contact.filter((con) => con.social_media);
  };

  const getSocialMediaIcons = (alias: string) => {
    switch (alias) {
      case "instagram":
        return <CiInstagram />;
      case "linkedin":
        return <CiLinkedin />;
      default:
        return (
          <Tooltip content={alias}>
            <PiPlugsConnected />
          </Tooltip>
        );
    }
  };

  return (
    <>
      <For each={getSocialMedia()}>
        {({ target, alias, id }) => (
          <Link href={target} target="_blank" key={id}>
            <SlideButton
              padding={2}
              border="1px solid white"
              color={initialColor}
              _hover={{ color: flipColor }}
              cursor="pointer"
              borderRadius="10px"
            >
              <Icon size="lg">{getSocialMediaIcons(alias || "")}</Icon>
            </SlideButton>
          </Link>
        )}
      </For>
    </>
  );
};

export default SocialMedias;
