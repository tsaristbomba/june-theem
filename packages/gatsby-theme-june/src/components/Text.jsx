import React from "react";
import Container from "../components/common/Container";
import TitleWrapper from "./common/TitleWrapper";
import styled from "styled-components";
import Fade from "react-reveal";

const TextWrapper = styled.div`
  max-width: 1150px;

  p {
    margin-bottom: 1rem;
  }
`;

const TextGrid = ({ triangle, curve, wave, tilt, thick, bg, data, fade }) => {
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
      <TextWrapper>
        {data.paragraphs.map((paragraph, key) => (
          <React.Fragment key={key}>
            {fade ? (
              <Fade duration={600}>
                <p key={key}>{paragraph}</p>
              </Fade>
            ) : (
              <p key={key}>{paragraph}</p>
            )}
          </React.Fragment>
        ))}
      </TextWrapper>
    </Container>
  );
};

export default TextGrid;
