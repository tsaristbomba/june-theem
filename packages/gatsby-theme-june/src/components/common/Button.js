import styled from "styled-components";

const Button = styled.button`
  background-color: ${({ theme, transparent }) =>
    transparent ? "transparent" : theme.colors.primary};
  border: ${({ theme, transparent }) =>
    transparent
      ? `1px solid ${theme.colors.neutralDark}`
      : `1px solid ${theme.colors.primary}`};
  padding: ${({ large }) =>
    large ? "10px 1rem !important" : "5px 5px !important"};
  color: ${({ theme, transparent }) =>
    transparent ? theme.colors.neutralDark : theme.colors.neutralLight};
  border-radius: ${({ rounded }) => (rounded ? "4px" : "0")};
  min-width: 150px;
  cursor: pointer;
  font-size: 1rem;
  display: ${({ center }) => (center ? "flex" : "inline-block")};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  :hover {
    box-shadow: ${({ transparent }) =>
      transparent ? "none" : "rgba(0, 0, 0, 0.24) 0px 3px 8px"};
    background: ${({ theme, transparent }) =>
      transparent ? "transparent" : theme.colors.primaryDark};
    color: ${({ theme, transparent }) =>
      transparent ? theme.colors.primaryDark : theme.colors.primaryLight};
    border: ${(props) => `1px solid ${props.theme.colors.primaryDark}`};
  }
`;

export default Button;
