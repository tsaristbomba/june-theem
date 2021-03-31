import styled from "styled-components";

const TitleWrapper = styled.div`
  display: flex;
  text-align: ${({ center }) => (center ? "center" : "start !important")};
  flex-direction: column;
  margin-bottom: 1rem;
  color: ${({ theme, light }) => (light ? "#fff" : theme.colors.neutralDark)};
  align-items: ${({ center }) => (center ? "center" : "none")};

  small {
    text-transform: uppercase;
    font-weight: bold;
    color: ${({ theme, light }) =>
      light ? theme.colors.primary : theme.colors.primaryDark};
    letter-spacing: 2px;
    text-align: center;
    margin-top: 1rem;
  }
  h1 {
    font-size: ${({ large }) => (large ? "3rem" : "2rem")};
    margin-bottom: 2rem;
    line-height: ${({ large }) => (large ? "3.2rem" : "2rem")};
  }
  h2 {
    font-size: ${({ large }) => (large ? "3rem" : "2rem")};
    margin-bottom: 2rem !important;
    line-height: ${({ large }) => (large ? "3.2rem" : "2rem")};
    text-align: center;
  }
  div {
    margin-top: 1rem;
    padding-left: 0;
    display: inline-flex !important;
    justify-content: center;
    width: 100%;
  }

  p {
    text-align: start;
  }

  img {
    margin-top: 1rem;
  }

  button {
    margin: 0 auto;
  }
  a {
    margin-top: 1rem;
  }

  @media screen and (min-width: 768px) {
    flex-direction: column !important;
    margin: 1.5rem auto;
    max-width: 1150px;

    a {
      margin: ${({ center }) => (center ? "0 auto" : "0 auto 0 0")};
      margin-top: 1rem;
    }
    small {
      text-align: ${({ center }) =>
        center ? "center !important" : "start !important"};
    }
    p {
      width: ${({ side }) => (side ? "50%" : "100%")};
    }
    h2 {
      text-align: start;
    }
    h1 {
      font-size: ${({ large }) => (large ? "4rem" : "3rem")};
    }
  }
`;

export default TitleWrapper;
