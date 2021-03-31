import React from "react";
import styled from "styled-components";

const Element = styled.div`
  position: absolute;
  top: ${({ bot }) => (bot ? "auto" : "0")};
  bottom: ${({ bot }) => (bot ? "0" : "auto")};
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  background: ${({ theme, secondary }) =>
    secondary ? theme.colors.secondaryLight : theme.colors.primaryLight};
  transform: ${({ bot }) => (bot ? "rotate(180deg)" : "none")};

  svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 52px;
    transform: ${({ reverse }) => (reverse ? "rotateY(180deg)" : "none")};
  }

  path {
    fill: ${(props) => props.theme.colors.neutralLight};
  }

  @media (max-width: 767px) {
    svg {
      width: calc(100% + 1.3px);
      height: 30px;
    }
  }
`;

const Tilt = ({ bot, reverse, secondary }) => {
  return (
    <Element bot={bot} reverse={reverse} secondary={secondary}>
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z"></path>
      </svg>
    </Element>
  );
};

export default Tilt;
