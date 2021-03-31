import React from "react";
import Container from "./common/Container";
import InfoContainer from "./common/InfoContainer";
import TitleWrapper from "./common/TitleWrapper";
import Map from "./Map";
import Fade from "react-reveal";

const AltMap = ({
  data,
  thick,
  bg,
  wave,
  tilt,
  triangle,
  curve,
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
      id={data.anchor}
    >
      <InfoContainer center large columns={2}>
        <TitleWrapper>
          {fade ? (
            <div style={{ overflow: "hidden" }}>
              <Fade duration={800} left={side}>
                <small>{data.small}</small>
                <h2>{data.title}</h2>
                <p>{data.description}</p>
              </Fade>
            </div>
          ) : (
            <>
              <small>{data.small}</small>
              <h2>{data.title}</h2>
              <p>{data.description}</p>
            </>
          )}
        </TitleWrapper>
        {fade ? (
          <div style={{ overflow: "hidden" }}>
            <Fade duration={800} right={side}>
              <Map />
            </Fade>
          </div>
        ) : (
          <Map />
        )}
      </InfoContainer>
    </Container>
  );
};

export default AltMap;
