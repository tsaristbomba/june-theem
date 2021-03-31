import React from "react";
import styled from "styled-components";
import handleHexToRgba from "../../functions/handleHexToRgba";
import useFilterImage from "../../functions/useFilterImage";
// import styled, { ThemeContext } from "styled-components";

import Container from "./Container";

const BgWrapper = styled.div`
  background: ${({ theme, side, image }) =>
    side
      ? `linear-gradient(
      to right,
      ${handleHexToRgba("#333", 0.8)},
      ${handleHexToRgba(theme.colors.primaryDark, 0.4)}
    ),
    url(${image})`
      : `linear-gradient(
      to bottom,
      ${handleHexToRgba("#333", 0.8)},
      ${handleHexToRgba(theme.colors.primaryDark, 0.4)}
    ),
    url(${image})`};
  background-size: cover;
  background-position: center;
  padding: ${({ thick }) => (thick ? "6rem 0" : "4rem 0")};
  background-attachment: ${({ fixed }) => (fixed ? "fixed" : "scroll")};
`;
const Content = styled.div`
  height: auto;
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);

  h1 {
    color: ${(props) => props.theme.colors.neutralLight};
  }
`;

const BgImage = ({ children, image, thick, side, fixed }) => {
  const filteredImage = useFilterImage(image);

  // const backgroundImageStack = [
  //   `linear-gradient(
  //     to bottom,
  //     ${handleHexToRgba("#333", 0.7)},
  //     ${handleHexToRgba(theme.colors.primaryDark, 0.4)})`,
  //   filteredImage,
  // ];

  return (
    <BgWrapper image={image} thick={thick} side={side} fixed={fixed}>
      <Content>
        <Container transparent>{children}</Container>
      </Content>
    </BgWrapper>
  );
};

export default BgImage;
