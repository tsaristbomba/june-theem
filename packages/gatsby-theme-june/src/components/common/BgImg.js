import React from "react";
import BackgroundImage from "gatsby-background-image";
import { convertToBgImage, BgImage } from "gbimage-bridge";
import useFilterImage from "../../functions/useFilterImage";
import handleHexToRgba from "../../functions/handleHexToRgba";
import styled, { ThemeContext } from "styled-components";

const GradientHero = styled(BgImage)`
  margin-top: -80px;
  height: ${({ small }) => (small ? "300px" : "calc(100vh - 80px)")};
  min-height: ${({ small }) => (small ? "300px" : "600px")};
  background-size: cover;
  background-position: center;
  background-attachment: ${({ attach }) => (attach ? "fixed" : "scroll")};
  padding: 0 2rem;
  width: 100% !important;

  ::before {
    width: 100%;
  }

  div {
    max-height: 100%;
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    height: ${({ small }) => (small ? "420px" : "calc(100vh - 80px)")};
    min-height: ${({ small }) => (small ? "420px" : "600px")};
  }
`;
const Gradient = styled(BgImage)``;
const RegularBgImg = styled(BackgroundImage)`
  width: 150px;
  height: 100px;
  background-size: cover;
  background-position: center;
  background-attachment: ${({ attach }) => (attach ? "fixed" : "scroll")};
`;

const BgImg = ({
  children,
  tag,
  image,
  gradient,
  hero,
  attach,
  small,
  thick,
}) => {
  const [bgImage, setBgImage] = React.useState(null);
  const theme = React.useContext(ThemeContext);

  React.useEffect(() => {
    handleBg();
  }, []);

  const filteredImage = useFilterImage(image);

  function handleBg() {
    const converted = convertToBgImage(filteredImage);

    setBgImage(converted);
  }

  const backgroundImageStack = [
    `linear-gradient(
      to bottom,
      ${handleHexToRgba("#333", 0.7)},
      ${handleHexToRgba(theme.colors.primaryDark, 0.4)})`,
    filteredImage,
  ];

  return (
    <>
      {hero ? (
        <GradientHero
          attach={attach}
          small={small}
          image={backgroundImageStack}
        >
          {children}
        </GradientHero>
      ) : gradient ? (
        <Gradient
          style={{ padding: `${thick ? "1rem 5rem" : "0"}` }}
          image={backgroundImageStack}
        >
          {children}
        </Gradient>
      ) : (
        <RegularBgImg Tag={tag} {...bgImage} preserveStackingContext>
          {children}
        </RegularBgImg>
      )}
    </>
  );
};

export default BgImg;
