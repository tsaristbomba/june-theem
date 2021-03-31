import styled from "styled-components";

const TextWrapper = styled.div`
  max-width: ${({ small }) => (small ? "1600px !important" : "1150px")};
  padding: ${({ normal }) => (normal ? "0" : "0 1rem !important")};

  h1 {
    font-size: ${({ large }) => (large ? "3rem" : "2rem")};
    margin-bottom: 1rem;
    line-height: ${({ large }) => (large ? "3.2rem" : "2rem")};
  }
  h2 {
    font-size: ${({ large }) => (large ? "3rem" : "2rem")};
    margin-bottom: 1rem;
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
    margin-left: ${({ reverse, normal }) =>
      normal ? "0" : reverse ? "0" : "5vw !important"};
    margin-right: ${({ reverse, normal }) =>
      normal ? "0" : reverse ? "5vw !important" : "0"};

    a {
      margin: ${({ center }) => (center ? "0 auto" : "0 auto 0 0")};
      margin-top: 1rem;
    }
    small {
      text-align: ${({ center }) => (center ? "center" : "start")};
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

export default TextWrapper;
