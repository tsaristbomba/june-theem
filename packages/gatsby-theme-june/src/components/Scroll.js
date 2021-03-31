import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BsArrowUp } from "react-icons/bs";
import Tooltip from "./common/Tooltip";
import handleHexToRgba from "../functions/handleHexToRgba";

const Button = styled.button`
  display: ${({ scrolled }) => (scrolled ? "flex" : "none")};
  z-index: 12;
  position: fixed;
  bottom: 7.3vh;
  right: 45vw;
  cursor: pointer;
  background: ${(props) => props.theme.colors.primary};
  border: none;
  height: 40px;
  width: 40px;
  border-radius: ${({ rounded }) => (rounded ? "50%" : "none")};
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 3px 3px
    ${(props) => handleHexToRgba(props.theme.colors.primaryDark, 0.2)};
  transition: background 0.2s ease;

  // Transition group
  .transition-enter {
    opacity: 0.01;
    transform: translate(0, -10px);
  }
  .transition-enter-active {
    opacity: 1;
    transform: translate(0, 0);
    transition: opacity 300ms ease-in, transform 300ms ease-in;
  }
  .transition-exit {
    opacity: 1;
    transform: translate(0, 0);
  }
  .transition-exit-active {
    opacity: 0.01;
    transform: translate(0, 10px);
    transition: opacity 300ms ease-in, transform 300ms ease-in;
  }
  //

  svg {
    color: ${(props) => props.theme.colors.neutralLight};
  }

  :hover {
    background: ${(props) => props.theme.colors.primaryDark};
    /* filter: drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.24)); */

    svg {
      color: ${(props) => props.theme.colors.neutralLight};
    }
  }

  @media screen and (min-width: 768px) {
    right: 8.2vh;
    height: 30px;
    width: 30px;
  }
`;
const Arrow = styled(BsArrowUp)`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.primary};
`;

const ScrollButton = ({ rounded, data, msg }) => {
  const [scrolled, setScrolled] = useState(false);
  const [tooltip, setTooltip] = React.useState(true);

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  function handleScroll() {
    if (window.scrollY >= 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  React.useEffect(() => {
    // Deactivate Tooltip after 10s
    if (msg) {
      setTimeout(() => {
        setTooltip(false);
        // setIsOpen(false);
      }, 5000);
    } else {
      setTooltip(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return function cleanup() {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Button
      onMouseEnter={() => setTooltip(true)}
      onMouseLeave={() => setTooltip(false)}
      rounded={rounded}
      scrolled={scrolled}
      onClick={scrollToTop}
      aria-label={data.message}
    >
      <Arrow />
      {tooltip && (
        <Tooltip small rounded={rounded}>
          {data.message}
        </Tooltip>
      )}
    </Button>
  );
};

export default ScrollButton;
