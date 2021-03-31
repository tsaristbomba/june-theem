import React from "react";
import GatsbyImage from "./GatsbyImage";
import styled from "styled-components";
import handleHexToRgba from "../../functions/handleHexToRgba";
import { RiCloseFill } from "react-icons/ri";
import handleBlockScroll from "../../functions/handleBlockScroll";
import useOutsideClick from "../../functions/useOutsideClick";

const Overlay = styled.div`
  position: fixed;
  z-index: 12;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${(props) =>
    handleHexToRgba(props.theme.colors.neutralDark, 0.7)};
  animation: 0.2s fade;
`;
const ImgWrapper = styled.div`
  display: flex;
  margin: 0 10px;

  @media screen and (min-width: 768px) {
    max-width: 60%;
    max-height: 80%;
    margin-top: 60px;
    padding: 0;
  }
`;
const ContentWrapper = styled.div`
  box-shadow: 3px 5px 7px
    ${(props) => handleHexToRgba(props.theme.colors.neutralDark, 0.4)};
`;
const CloseIcon = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  z-index: 20;
  cursor: pointer;
  position: absolute;
  top: 80px;
  right: 0;
  margin-right: 1rem;

  svg {
    color: ${(props) => props.theme.colors.neutralLight};
    font-size: 1.8rem;

    :hover {
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;

const Modal = ({ image, alt, setOpenModal, openModal, rounded }) => {
  const wrapperRef = React.useRef(null);
  useOutsideClick(wrapperRef, handleClose);

  // Block scroll on open
  React.useEffect(() => {
    let mounted = true;

    mounted && handleBlockScroll(openModal);

    return () => (mounted = false);
  }, [openModal]);
  //

  function handleClose() {
    setOpenModal(false);

    // Unblock scroll on close
    handleBlockScroll(false);
  }

  return (
    <Overlay>
      <CloseIcon onClick={handleClose}>
        <RiCloseFill />
      </CloseIcon>
      <ImgWrapper ref={wrapperRef}>
        <ContentWrapper duration={300}>
          <GatsbyImage rounded={rounded} image={image} alt={alt} />
        </ContentWrapper>
      </ImgWrapper>
    </Overlay>
  );
};

export default Modal;
