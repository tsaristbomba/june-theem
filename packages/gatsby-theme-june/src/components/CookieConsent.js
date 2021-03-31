import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "./common/Button";
import data from "../../data/cookieConsent";

const ConsentContainer = styled.div`
  display: ${({ $pop }) => ($pop ? "none" : "block")};
  border-top: 1px solid ${(props) => props.theme.colors.neutralMedium};
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.neutralLight};
  opacity: 1;
  text-shadow: none;
  z-index: 3;
  margin: 0 auto;
  transition: all 0.2s ease;

  div {
    max-width: 1150px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  a {
    text-shadow: none;
  }

  button {
    margin-top: 1rem;
    height: 100%;
  }

  @media screen and (min-width: 768px) {
    /* width: 650px;
    max-height: 200px; */

    div {
      width: 650px;
      max-height: 200px;
      margin: 0 auto;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    button {
      margin-left: 1rem;
    }
  }
`;

const CookieConsent = () => {
  const [pop, setPop] = useState(true);
  const [answer, setAnswer] = useState(null);

  function shouldPopup() {
    return !localStorage.getItem("cookie_consent");
  }

  function saveToStorage() {
    localStorage.setItem("cookie_consent", true);
  }

  function handleQuestion() {
    saveToStorage();
    setAnswer(true);
    setPop(true);
  }

  useEffect(() => {
    if (shouldPopup()) {
      setPop(false);
    } else {
      setPop(true);
    }
  }, []);

  return (
    <ConsentContainer $answer={answer} $pop={pop}>
      <div>
        <small>{data.message}</small>
        <Button onClick={handleQuestion}>Ok</Button>
      </div>
    </ConsentContainer>
  );
};

export default CookieConsent;
