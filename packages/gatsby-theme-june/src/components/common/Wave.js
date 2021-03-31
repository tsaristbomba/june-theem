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
  transform: ${({ reverse }) => (reverse ? "rotate(180deg)" : "none")};

  svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 52px;
    transform: ${({ bot }) => (bot ? "rotateY(180deg)" : "none")};
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

const Wave = ({ bot, secondary, reverse }) => {
  return (
    <Element bot={bot} secondary={secondary} reverse={reverse}>
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
      </svg>
    </Element>
  );
};

export default Wave;
