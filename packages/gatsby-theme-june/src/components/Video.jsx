import React from "react";
import Container from "./common/Container";
import TitleWrapper from "./common/TitleWrapper";
import Video from "./common/Video";
import Wrapper from "./common/Wrapper";

const VideoComponent = ({ data, thick, wave, triangle, curve, tilt, bg }) => {
  return (
    <Wrapper id={data.anchor}>
      <Container
        center
        thick={thick}
        wave={wave}
        triangle={triangle}
        curve={curve}
        tilt={tilt}
        bg={bg}
      >
        <TitleWrapper center>
          <small>{data.small}</small>
          <h2>{data.title}</h2>
        </TitleWrapper>
        <Video alt={data.alt} videoId={data.videoId} />
      </Container>
    </Wrapper>
  );
};

export default VideoComponent;
