import React from "react";
import Container from "./common/Container";
import Grid from "./common/Grid";
import TitleWrapper from "./common/TitleWrapper";
import Fade from "react-reveal";
import styled from "styled-components";

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 1rem;

  svg {
    font-size: 2.5rem;
    color: ${(props) => props.theme.colors.primary};
    margin-bottom: 1rem;
    align-self: center;
    justify-self: center;
  }
  h3 {
    font-size: 1rem;
    text-transform: uppercase;
    margin-bottom: 0.2rem;
    text-align: center;
    align-self: center;
    justify-self: center;
  }
  p {
    max-width: ${({ smallP }) => (smallP ? "320px" : "none")};
  }
`;

const IconGrid = ({ data, thick, bg, wave, tilt, triangle, curve, fade }) => {
  return (
    <Container
      thick={thick}
      bg={bg}
      wave={wave}
      tilt={tilt}
      triangle={triangle}
      curve={curve}
      id={data.anchor}
    >
      <TitleWrapper center>
        <small>{data.small}</small>
        <h2>{data.title}</h2>
      </TitleWrapper>
      {fade ? (
        <Fade duration={800}>
          <Grid columns={data.items.length} center>
            {data.items.map((item, key) => (
              <ItemWrapper key={key}>
                <item.icon />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </ItemWrapper>
            ))}
          </Grid>
        </Fade>
      ) : (
        <Grid columns={data.items.length} center>
          {data.items.map((item, key) => (
            <ItemWrapper key={key}>
              <item.icon />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </ItemWrapper>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default IconGrid;
