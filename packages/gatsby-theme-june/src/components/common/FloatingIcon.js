import React from "react";
import styled from "styled-components";
import Tooltip from "./Tooltip";
import handleHexToRgba from "../../functions/handleHexToRgba";

const ButtonLink = styled.a`
  display: ${({ open }) => (open ? "flex" : "none")};
  z-index: 12;
  position: fixed;
  bottom: ${({ single, index }) =>
    single ? "15vh" : `calc(130px + ${`${index}px`})`};
  right: 7vw;
  cursor: pointer;
  background: ${({ backgroundColor, theme }) =>
    backgroundColor ? backgroundColor : theme.colors.primary};
  border: none;
  height: 50px;
  width: 50px;
  border-radius: ${({ rounded }) => (rounded ? "50%" : "none")};
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 3px 3px
    ${(props) => handleHexToRgba(props.theme.colors.primaryDark, 0.2)};
  transition: background 0.2s, box-shadow 0.2s, display 0.2s, ease;

  svg {
    font-size: 1.5rem;
    color: ${({ color }) => (color ? color : "#fff")};
  }

  :hover {
    background: ${(props) => props.theme.colors.primaryDark};
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.24);

    div {
      opacity: 1;
    }

    svg {
      color: ${(props) => props.theme.colors.neutralLight};
    }
  }

  @media screen and (min-width: 768px) {
    right: 7vh;
    bottom: ${({ single, index }) =>
      single ? "16vh" : `calc(220px + ${`${index}px`})`};
    animation: fade ease 0.3s;
  }

  /* @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  } */
`;

const FloatingIcon = ({ rounded, data, index, open, single }) => {
  const [tooltip, setTooltip] = React.useState(false);

  return (
    <>
      {open ? (
        <ButtonLink
          href={data.link}
          open={open} // use is open to display via css
          rounded={rounded}
          single={single}
          onMouseEnter={() => setTooltip(true)}
          onMouseLeave={() => setTooltip(false)}
          index={index}
          backgroundColor={data.backgroundColor}
          color={data.color}
          title={data.tooltip}
          aria-label={data.tooltip}
        >
          <data.icon open={open} />
          {tooltip && <Tooltip rounded={rounded}>{data.tooltip}</Tooltip>}
        </ButtonLink>
      ) : (
        <></>
      )}
    </>
  );
};

export default FloatingIcon;
