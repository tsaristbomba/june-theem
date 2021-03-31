import React from "react";
import Fade from "react-reveal";
import Container from "../components/common/Container";
import Grid from "./common/Grid";
import InfoContainer from "./common/InfoContainer";
import TitleWrapper from "./common/TitleWrapper";
import TextWrapper from "./common/TextWrapper";

const TextGrid = ({
  data,
  triangle,
  curve,
  wave,
  tilt,
  rounded,
  box,
  thick,
  bg,
  fade,
  side,
}) => {
  return (
    <Container
      thick={thick}
      bg={bg}
      wave={wave}
      tilt={tilt}
      triangle={triangle}
      curve={curve}
      id="Services"
    >
      <TitleWrapper center>
        <small>{data.small}</small>
        <h2>{data.title}</h2>
      </TitleWrapper>
      <Grid columns={2}>
        {data.services.map((service, key) => (
          <React.Fragment key={key}>
            {fade ? (
              <Fade
                duration={800}
                right={side && !(key % 2) == 0}
                left={side && key % 2 == 0}
              >
                <TextWrapper normal>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </TextWrapper>
              </Fade>
            ) : (
              <TextWrapper normal>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </TextWrapper>
            )}
          </React.Fragment>
        ))}
      </Grid>
    </Container>
  );
};

export default TextGrid;
