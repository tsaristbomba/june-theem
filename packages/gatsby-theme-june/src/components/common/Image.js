import React from "react";
import styled from "styled-components";

const RegularImage = styled.img`
  width: ${({ small }) => (small ? "300px" : "100%")};
  height: 100%;
  max-width: 100%;
  box-shadow: ${({ shadow }) =>
    shadow ? "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" : "none"};

  @media screen and (min-width: 768px) {
    border-radius: ${({ rounded }) => (rounded ? "4px" : "0")};
  }
`;
const NormalizedImg = styled.img`
  max-width: ${({ huge }) => (huge ? "220px" : "150px")};
  padding: 12px 0;
  /* fill: rgb(1, 1, 1); */
  margin: 0 auto;
  filter: ${({ light, gray }) =>
    light
      ? "grayscale(100%) contrast(0.1%) brightness(1.8)"
      : gray
      ? "grayscale(100%) contrast(0.1%) brightness(1.4)"
      : "grayscale(100%) brightness(0.1)"};
  transition: 0.2s all ease;

  :hover {
    filter: none;
  }

  @media screen and (min-width: 768px) {
    border-radius: ${({ rounded }) => (rounded ? "4px" : "0")};
  }
`;

const Image = ({
  src,
  alt,
  normalize,
  light,
  small,
  shadow,
  rounded,
  gray,
  huge,
}) => {
  return (
    <>
      {normalize ? (
        <NormalizedImg
          src={src}
          alt={alt}
          light={light}
          gray={gray}
          huge={huge}
        />
      ) : (
        <RegularImage
          src={src}
          alt={alt}
          small={small}
          shadow={shadow}
          rounded={rounded}
        />
      )}
    </>
  );
};

export default Image;
