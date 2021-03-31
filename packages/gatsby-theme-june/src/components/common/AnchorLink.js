import styled from "styled-components";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Anchor = styled(AnchorLink)`
  color: ${(props) => props.theme.colors.neutralDark};
  text-decoration: none;
  padding: 1rem 1.5rem;
  transition: all 0.2s ease-in-out;
  font-weight: 400;

  :hover {
    color: ${(props) => props.theme.colors.primary};
  }

  :active {
    color: ${(props) => props.theme.colors.primary};
  }

  @media screen and (min-width: 768px) {
    :hover {
      color: ${(props) => props.theme.colors.primary} !important;
    }
  }
`;

export default Anchor;
