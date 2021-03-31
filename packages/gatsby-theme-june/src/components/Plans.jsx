import React from "react";
import Container from "./common/Container";
import TitleWrapper from "./common/TitleWrapper";
import Card from "./common/Card";
import ButtonLink from "./common/ButtonLink";
import styled from "styled-components";
import Fade from "react-reveal";

const CardContainer = styled.div`
  display: grid;
  grid-auto-columns: minmax(31%, 1fr);
  grid-template-areas: "col1" "col2";
  grid-gap: 2rem;
  margin: 1rem 0;

  @media screen and (min-width: 768px) {
    grid-template-areas: "col1 col2 col3";
    grid-gap: 2rem;
  }
`;

const Plans = ({
  data,
  rounded,
  wave,
  triangle,
  curve,
  tilt,
  thick,
  center,
  bg,
  reverse,
  fade,
}) => {
  return (
    <Container
      wave={wave}
      triangle={triangle}
      curve={curve}
      tilt={tilt}
      thick={thick}
      center={center}
      bg={bg}
      reverse={reverse}
      id={data.anchor}
    >
      <TitleWrapper center>
        <small>{data.small}</small>
        <h2>{data.title}</h2>
      </TitleWrapper>
      <CardContainer>
        {fade ? (
          <Fade duration={800}>
            {data.prices.map((price, key) => (
              <Card
                key={key}
                divide
                tall
                rounded={rounded}
                highlight={price.highlight}
              >
                <h2>{price.title}</h2>
                <h3>
                  <small>{price.currencySymbol}</small>
                  {price.price}
                  <small>{price.term}</small>
                </h3>
                {price.description ? (
                  <p>{price.description}</p>
                ) : (
                  <ul>
                    {price.listDescription.map((item, key) => (
                      <li key={key}>
                        <small>-</small>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                <ButtonLink
                  rounded={rounded}
                  large="true"
                  slug="/contact"
                  highlight={price.highlight}
                  title={price.buttonLabel}
                  aria-label={price.buttonLabel}
                >
                  {price.buttonLabel}
                </ButtonLink>
              </Card>
            ))}
          </Fade>
        ) : (
          <>
            {data.prices.map((price, key) => (
              <Card
                key={key}
                divide
                tall
                rounded={rounded}
                highlight={price.highlight}
              >
                <h2>{price.title}</h2>
                <h3>
                  <small>{price.currencySymbol}</small>
                  {price.price}
                  <small>{price.term}</small>
                </h3>
                {price.description ? (
                  <p>{price.description}</p>
                ) : (
                  <ul>
                    {price.listDescription.map((item, key) => (
                      <li key={key}>
                        <small>-</small>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                <ButtonLink
                  rounded={rounded}
                  large="true"
                  slug="/contact"
                  highlight={price.highlight}
                  title={price.buttonLabel}
                  aria-label={price.buttonLabel}
                >
                  {price.buttonLabel}
                </ButtonLink>
              </Card>
            ))}
          </>
        )}
      </CardContainer>
    </Container>
  );
};

export default Plans;
