import React from "react";
import FloatingIcon from "./common/FloatingIcon";
import { RiMessage3Line, RiCloseFill } from "react-icons/ri";
import Tooltip from "./common/Tooltip";
import styled from "styled-components";
import handleHexToRgba from "../functions/handleHexToRgba";
import useOutsideClick from "../functions/useOutsideClick";

const IconDot = styled(RiMessage3Line)`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.neutralLight};
`;
const IconClose = styled(RiCloseFill)`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.neutralDark};
`;
const Button = styled.button`
  display: flex;
  z-index: 12;
  position: fixed;
  bottom: 7vh;
  right: 7vw;
  cursor: pointer;
  background: ${({ theme, open }) =>
    open ? theme.colors.primaryLight : theme.colors.primary};
  border: none;
  height: 50px;
  width: 50px;
  border-radius: ${({ rounded }) => (rounded ? "50%" : "none")};
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 3px 3px
    ${(props) => handleHexToRgba(props.theme.colors.primaryDark, 0.2)};
  transition: background 0.2s, box-shadow 0.2s, ease;

  :hover {
    background: ${(props) => props.theme.colors.primaryDark};
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.24);

    div {
      /* opacity: 1; */
    }

    svg {
      color: ${(props) => props.theme.colors.neutralLight};
    }
  }

  @media screen and (min-width: 768px) {
    right: 7vh;
    /* height: 50px; */
    /* width: 50px; */
    bottom: 16vh;
  }
`;

const Icons = ({ data, menu, rounded }) => {
  const [isOpen, setIsOpen] = React.useState(data.openOnStart);
  const [tooltip, setTooltip] = React.useState(false);

  const wrapperRef = React.useRef(null);
  useOutsideClick(wrapperRef, handleClose);

  React.useEffect(() => {
    // Close icons menu after 5s
    const timer =
      data.openOnStart &&
      setTimeout(() => {
        setIsOpen(false);
      }, 5000);

    return () => data.openOnStart && clearTimeout(timer);
  }, []);

  React.useEffect(() => {
    // Activate Tooltip after 5s
    const timer =
      data.openOnStart &&
      setTimeout(() => {
        setTooltip(true);
      }, 5000);

    return () => data.openOnStart && clearTimeout(timer);
  }, []);

  React.useEffect(() => {
    // Deactivate Tooltip after 10s or 5s
    const timer = setTimeout(
      () => {
        setTooltip(false);
      },
      data.openOnStart ? 10000 : 5000
    );

    return () => clearTimeout(timer);
  }, []);

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <div ref={wrapperRef}>
      {data.icons.map((item, key) => (
        <FloatingIcon
          key={key}
          data={item}
          rounded={rounded}
          index={key * 65}
          open={isOpen || data.icons.length === 1}
          single={data.icons.length === 1}
        />
      ))}
      {data.icons.length >= 2 && menu && (
        <Button
          onClick={() => {
            setIsOpen(!isOpen);
            setTooltip(false);
          }}
          open={isOpen}
          rounded
          onMouseEnter={() => setTooltip(true)}
          onMouseLeave={() => setTooltip(false)}
          aria-label={data.tooltip}
        >
          {isOpen ? <IconClose /> : <IconDot />}
          {tooltip && <Tooltip rounded={rounded}>{data.tooltip}</Tooltip>}
        </Button>
      )}
    </div>
  );
};

export default Icons;
