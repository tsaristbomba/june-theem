import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  /* position: relative;
  left: 0;
  width: 100%;
  height: 100%; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: ${({ thick }) => (thick ? "5rem 1.5rem" : "2.8rem 1.5rem")};
  margin: 0 auto;
  background-color: ${(props) => props.theme.colors.neutralDark};
  max-width: ${({ center }) => (center ? "1150px" : "none")};
  position: relative;
  color: ${({ theme, light }) =>
    light ? theme.colors.neutralLight : theme.colors.neutralDark};

  ::after {
    content: "";
    background: ${({ image }) => `url(${image})`};
    opacity: 0.2;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: 0;
  }

  @media screen and (min-width: 768px) {
    height: 100%;
    padding: ${({ thick }) => (thick ? "6rem 1rem" : "3rem 1rem")};
  }
`;

const Overlay = ({ children, image }) => {
  return <Wrapper image={image}>{children}</Wrapper>;
};

export default Overlay;
