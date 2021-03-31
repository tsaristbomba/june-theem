import React from "react";
import styled from "styled-components";
import BgShape from "./BgShape";

const Box = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: ${({ thick }) => (thick ? "5rem 1.5rem" : "2.8rem 1.5rem")};
  margin: 0 auto;
  background: ${({ theme, bg, transparent }) =>
    bg
      ? theme.colors.primaryLight
      : transparent
      ? "transparent"
      : theme.colors.neutralLight};
  max-width: ${({ center }) => (center ? "1150px" : "none")};
  position: relative;
  color: ${({ theme, light }) =>
    light ? theme.colors.neutralLight : theme.colors.neutralDark};
  animation: ${({ fade }) => (fade ? ".2s fade" : "none")};

  @media screen and (min-width: 768px) {
    height: 100%;
    padding: ${({ thick, wide }) =>
      wide && thick
        ? "6rem 0"
        : thick
        ? "6rem 1rem"
        : wide
        ? "0"
        : "3rem 1rem"};
  }
`;
const BgBox = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: ${({ thick }) => (thick ? "5rem 1.5rem" : "3rem 1.5rem")};
  margin: 0 auto;
  background: ${({ theme, light }) =>
    light ? theme.colors.neutralMedium : theme.colors.neutralDark};
  max-width: ${({ center }) => (center ? "1150px" : "none")};
  position: relative;
  color: ${({ theme, light }) =>
    light ? theme.colors.neutralDark : theme.colors.neutralLight};
  animation: ${({ fade }) => (fade ? ".2s fade" : "none")};

  h2 {
    color: ${({ theme, light }) =>
      light ? theme.colors.neutralDark : theme.colors.neutralLight};
  }

  @media screen and (min-width: 768px) {
    height: 100%;
    padding: ${({ thick, wide }) =>
      wide && thick
        ? "6rem 0"
        : thick
        ? "6rem 1rem"
        : wide
        ? "0"
        : "3rem 1rem"};
  }
`;

const Container = ({
  children,
  triangle,
  curve,
  thick,
  bg,
  center,
  wave,
  tilt,
  reverse,
  light,
  background,
  fade,
  transparent,
  wide,
  id,
}) => {
  return (
    <>
      {background ? (
        <BgBox
          wide={wide}
          thick={thick}
          bg={bg}
          center={center}
          light={light}
          fade={fade}
          id={id}
        >
          {bg ? (
            <BgShape
              tilt={tilt}
              wave={wave}
              triangle={triangle}
              curve={curve}
              reverse={reverse}
            >
              {children}
            </BgShape>
          ) : (
            <>{children}</>
          )}
        </BgBox>
      ) : (
        <Box
          transparent={transparent}
          thick={thick}
          bg={bg}
          center={center}
          light={light}
          fade={fade}
          wide={wide}
          id={id}
        >
          {bg ? (
            <BgShape
              tilt={tilt}
              wave={wave}
              triangle={triangle}
              curve={curve}
              reverse={reverse}
            >
              {children}
            </BgShape>
          ) : (
            <>{children}</>
          )}
        </Box>
      )}
    </>
  );
};

export default Container;
