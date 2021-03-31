import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import handleHexToRgba from "../../functions/handleHexToRgba";
import useFilterImage from "../../functions/useFilterImage";

const Img = styled(GatsbyImage)`
  width: ${({ small }) => (small ? "150px !important" : "100% !important")};
  height: ${({ small }) => (small ? "150px !important" : "100% !important")};
  animation: 0.2s fade;
  overflow: hidden;
  max-height: ${({ wide }) => (wide ? "600px" : "none")};

  div {
    justify-content: center;
  }

  img {
    width: ${({ small }) => (small ? "150px !important" : "100%")};
    height: ${({ small }) => (small ? "150px !important" : "100%")};
    margin: 0 auto;
    align-self: center;
    border-radius: ${({ rounded }) => (rounded ? "4px" : "0")};
    max-height: ${({ wide }) => (wide ? "600px" : "none")};
    transition: opacity 0.25s linear, transform 0.2s ease !important;

    :hover {
      transform: ${({ cursor }) => (cursor ? "scale(1.1)" : "none")};
    }
  }
  /* max-width: 100%; */

  @media screen and (min-width: 768px) {
    border-radius: ${({ rounded }) => (rounded ? "4px" : "0")};
    cursor: ${({ cursor }) => (cursor ? "pointer" : "auto")};
    box-shadow: ${({ shadow }) =>
      shadow ? `0px 2px 50px 0px ${handleHexToRgba("#333", 0.3)}` : "none"};
    /* max-height: ${({ limit }) => (limit ? "350px !important" : "100%")}; */

    img {
      max-width: ${({ wide }) => (wide ? "55vw !important" : "none")};
      margin: 0;
    }
  }
`;

const Image = ({
  onClick,
  rounded,
  image,
  cursor,
  shadow,
  alt,
  small,
  layout,
  wide,
}) => {
  return (
    <Img
      onClick={onClick}
      image={useFilterImage(image)}
      alt={alt}
      rounded={rounded}
      cursor={cursor}
      shadow={shadow}
      small={small}
      layout={layout}
      wide={wide}
    />
  );
};

export default Image;
