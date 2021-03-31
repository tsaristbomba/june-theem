import React from "react";
import styled from "styled-components";
import handleHexToRgba from "../../functions/handleHexToRgba";

const RegularCard = styled.div`
  text-align: center;
  box-shadow: 0px 2px 20px 0px ${handleHexToRgba("#333", 0.3)};
  outline: none;
  display: ${({ tall }) => (tall ? "flex" : "block")};
  flex-direction: column;
  justify-content: space-between;
  padding: ${({ tall }) => (tall ? "1rem" : "0")};
  background: ${({ theme, tall }) =>
    tall ? theme.colors.neutralLight : "transparent"};
  max-width: ${({ tall }) => (tall ? "280px" : "380px")};

  div {
    border-radius: ${({ rounded }) => (rounded ? "4px" : "0")};
    margin-top: 4px;
  }

  a {
    margin: 0;
  }

  h2 {
    padding: ${({ tall }) => (tall ? "0 0 12px 0" : "0")};
    font-weight: 400;
    display: flex;
    align-items: center;
    text-align: center;
    text-transform: uppercase;
    justify-content: center;
    font-size: 1.2rem;
    color: ${({ theme, highlight }) =>
      !highlight ? theme.colors.primaryDark : theme.colors.secondary};
  }

  h3 {
    font-size: ${({ tall }) => (tall ? "2rem" : "1rem")};
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: ${({ theme, divide }) =>
      divide ? `1px solid ${theme.colors.neutralMedium}` : "none"};
    color: ${(props) => props.theme.colors.neutralDark};
  }

  small {
    color: ${(props) => props.theme.colors.primaryDark};
    padding: ${({ tall }) => (tall ? "1rem 0 !important" : "0")};
    font-size: 0.835rem;
    margin: 0 4px;
  }

  p {
    padding: ${({ tall }) => (tall ? "1rem 0" : "0")};
    margin: 1rem;
  }

  ul {
    list-style: none;
    padding: ${({ tall }) => (tall ? "1rem 0" : "0")};
    margin: 1rem;
  }

  @media screen and (min-width: 768px) {
    margin: ${({ tall }) => (tall ? "0" : "2.5rem 1rem")};
    height: 100%;
    padding: 1rem;
    border-radius: ${({ rounded }) => (rounded ? "4px" : "0")};
    background: ${(props) => props.theme.colors.neutralLight};
  }
`;

const StylishCard = styled.div`
  border-top: ${({ theme, highlight }) =>
    !highlight
      ? `3px solid ${theme.colors.primary}`
      : `3px solid ${theme.colors.secondary}`};
  text-align: center;
  box-shadow: 0px 2px 50px 0px
    ${(props) => handleHexToRgba(props.theme.colors.primaryDark, 0.2)};
  outline: none;
  display: ${({ tall }) => (tall ? "flex" : "block")};
  flex-direction: column;
  justify-content: space-between;
  padding: ${({ tall }) => (tall ? "1rem" : "0")};
  background: ${({ theme, tall }) =>
    tall ? theme.colors.neutralLight : "transparent"};
  max-width: ${({ tall }) => (tall ? "280px" : "none")};

  div {
    border-radius: ${({ rounded }) => (rounded ? "4px" : "0")};
  }

  a {
    margin: 0;
  }

  h2 {
    padding: ${({ tall }) => (tall ? "0 0 12px 0" : "0")};
    font-weight: 400;
    display: flex;
    align-items: center;
    text-align: center;
    text-transform: uppercase;
    justify-content: center;
    font-size: 1.2rem;
    color: ${({ theme, highlight }) =>
      !highlight ? theme.colors.primaryDark : theme.colors.secondary};
  }

  h3 {
    font-size: ${({ tall }) => (tall ? "2rem" : "1rem")};
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: ${({ theme, divide }) =>
      divide ? `1px solid ${theme.colors.neutralMedium}` : "none"};
    color: ${({ theme, highlight }) =>
      !highlight ? theme.colors.primary : theme.colors.secondary};
  }

  small {
    color: ${(props) => props.theme.colors.secondary};
    padding: ${({ tall }) => (tall ? "1rem 0 !important" : "0")};
    font-size: 0.835rem;
    margin: 0 4px;
  }

  p {
    padding: ${({ tall }) => (tall ? "1rem 0" : "0")};
    margin: 1rem;
    color: ${({ theme, highlight }) =>
      !highlight ? theme.colors.neutralDark : theme.colors.secondary};
  }

  ul {
    list-style: none;
    padding: ${({ tall }) => (tall ? "1rem 0" : "0")};
    margin: 1rem;
    color: ${({ theme, highlight }) =>
      !highlight ? theme.colors.neutralDark : theme.colors.secondary};
  }

  @media screen and (min-width: 768px) {
    margin: ${({ tall }) => (tall ? "0" : "2rem 1rem")};
    padding: 1rem;
    border-radius: ${({ rounded }) => (rounded ? "4px" : "0")};
    background: ${(props) => props.theme.colors.neutralLight};
  }
`;

const Card = ({ children, regular, tall, rounded, highlight, divide }) => {
  return (
    <>
      {regular ? (
        <RegularCard
          divide={divide}
          tall={tall}
          rounded={rounded}
          highlight={highlight}
        >
          {children}
        </RegularCard>
      ) : (
        <StylishCard
          divide={divide}
          tall={tall}
          rounded={rounded}
          highlight={highlight}
        >
          {children}
        </StylishCard>
      )}
    </>
  );
};

export default Card;
