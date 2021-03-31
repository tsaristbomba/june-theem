import React from "react";
import styled from "styled-components";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const RegularButton = styled(AnchorLink)`
  background-color: ${({ theme, large }) =>
    large ? theme.colors.primary : "transparent"};
  border: 1px solid;
  border-color: ${({ theme, large }) =>
    large ? theme.colors.primary : theme.colors.neutralDark};
  padding: ${({ large }) => (large ? "10px 1rem !important" : "6px 10px")};
  color: ${({ theme, large }) =>
    large ? `${theme.colors.neutralLight}` : `${theme.colors.neutralDark} `};
  border-radius: ${({ rounded }) => (rounded ? "4px" : "0")};
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  display: inline-block;
  cursor: pointer;
  margin: 0 auto;
  min-width: ${({ large }) => (large ? "120px" : "none")};

  :hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    background: ${({ theme, large }) =>
      large ? theme.colors.primaryDark : theme.colors.primary};
    border: 1px solid;
    border-color: ${({ theme, large }) =>
      large ? theme.colors.primaryDark : theme.colors.primary};
    color: ${(props) => `${props.theme.colors.neutralLight} !important`};
  }

  /* @media screen and (min-width: 768px) {
    margin-left: ${({ large }) => (large ? "0" : "4px")};
  } */
`;
const HighlightedButton = styled(AnchorLink)`
  background-color: ${({ theme, large }) =>
    !large ? theme.colors.primaryDark : "transparent"};
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.secondary};
  padding: ${({ large }) => (large ? "10px 1rem !important" : "6px 10px")};
  color: ${({ theme, large }) =>
    !large ? theme.colors.neutralLight : theme.colors.secondary};
  border-radius: ${({ rounded }) => (rounded ? "4px" : "0")};
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  display: inline-block;
  cursor: pointer;

  :hover {
    background: ${(props) => props.theme.colors.secondary};
    /* border: 1px solid; */
    color: ${(props) => props.theme.colors.neutralLight};
    border-color: ${(props) => props.theme.colors.secondary};
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  @media screen and (min-width: 768px) {
    margin-left: ${({ large }) => (large ? "0" : "4px")};
  }
`;

const ButtonAnchor = ({
  children,
  highlight,
  large,
  rounded,
  title,
  ariaLabel,
  slug,
}) => {
  return (
    <>
      {highlight ? (
        <HighlightedButton
          to={slug}
          highlight={highlight}
          large={large}
          rounded={rounded}
          title={title}
          aria-label={ariaLabel}
        >
          {children}
        </HighlightedButton>
      ) : (
        <RegularButton
          to={slug}
          large={large}
          rounded={rounded}
          title={title}
          aria-label={ariaLabel}
        >
          {children}
        </RegularButton>
      )}
    </>
  );
};

export default ButtonAnchor;
