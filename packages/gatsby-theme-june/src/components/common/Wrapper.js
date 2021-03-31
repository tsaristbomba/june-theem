import styled from "styled-components";

const Wrapper = styled.div`
  background: ${(props) => props.theme.colors.neutralLight};
  max-width: ${(props) => (props.limit ? "1150px" : "none")};
  padding: ${({ padding }) => (padding ? "1rem" : "0")};

  @media screen and (min-width: 768px) {
    margin: ${({ wide }) => (wide ? "5vw !important" : "0")};
  }
`;

export default Wrapper;
