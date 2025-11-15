import { Icon, Link } from "@chakra-ui/react";
import { SlideButton } from "./SlideButton";
import { CiInstagram, CiLinkedin } from "react-icons/ci";

interface Props {
  initialColor?: string;
  flipColor?: string;
}

const SocialMedias = ({
  initialColor = "white",
  flipColor = "black",
}: Props) => {
  return (
    <>
      <Link href="https://www.linkedin.com/in/umar7780/" target="_blank">
        <SlideButton
          padding={2}
          border="1px solid white"
          color={initialColor}
          _hover={{ color: flipColor }}
          cursor="pointer"
          borderRadius="10px"
        >
          <Icon size="lg">
            <CiLinkedin />
          </Icon>
        </SlideButton>
      </Link>
      <Link href="https://www.instagram.com/umar_7780/" target="_blank">
        <SlideButton
          padding={2}
          border="1px solid white"
          color={initialColor}
          _hover={{ color: flipColor }}
          cursor="pointer"
          borderRadius="10px"
        >
          <Icon size="lg">
            <CiInstagram />
          </Icon>
        </SlideButton>
      </Link>
    </>
  );
};

export default SocialMedias;
