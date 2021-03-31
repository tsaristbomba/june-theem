import React from "react";
import styled from "styled-components";

const InfoContainer = styled.div`
  display: grid;
  grid-auto-columns: 99%;
  /* grid-template-areas: "col1" "col2"; */
  margin: ${({ thick }) => (thick ? "1.5rem 0" : "1rem 0")};
  grid-gap: 2.5rem;
  max-width: 1150px;
  width: 100%;
  color: ${(props) => props.theme.colors.neutralDark};
  justify-content: center;
  justify-items: center;
  align-items: ${({ centerY }) => (centerY ? "center" : "start")};

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: start; */
    text-align: center;
    margin-bottom: 1rem;

    svg {
      font-size: 2.5rem;
      color: ${(props) => props.theme.colors.primary};
      margin-bottom: 1rem;
    }
    h3 {
      font-size: 1rem;
      text-transform: uppercase;
      margin-bottom: 0.2rem;
    }
    p {
      max-width: ${({ smallP }) => (smallP ? "320px" : "none")};
    }
  }

  @media screen and (min-width: 520px) {
    grid-auto-columns: ${({ little }) => little && "48% 48%"};
    grid-template-areas: ${({ little }) => (little ? `"col1 col2"` : null)};
  }

  @media screen and (min-width: 768px) {
    grid-auto-columns: ${({ qty }) => qty};
    grid-template-areas: ${({ area }) => area};

    div {
      align-items: start;
    }
  }
`;

const Grid = ({ children, columns, thick, little }) => {
  const [qty, setQty] = React.useState();
  const [area, setArea] = React.useState();

  React.useEffect(() => {
    handleQty();
  }, []);

  function handleQty() {
    const col = columns > 3 ? 3 : columns;

    switch (col) {
      case 2:
        setArea(`"col1 col2"`);
        setQty("49% 49%");
        break;
      case 3:
        setArea(`"col1 col2 col3"`);
        setQty("31% 31% 31%");
        break;
      default:
        break;
    }
  }

  return (
    <InfoContainer area={area} qty={qty} thick={thick} little={little}>
      {children}
    </InfoContainer>
  );
};

export default Grid;
