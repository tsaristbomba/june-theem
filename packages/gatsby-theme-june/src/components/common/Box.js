import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: ${(props) => props.theme.colors.primary};
  padding: 1rem;
`;

export default ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
