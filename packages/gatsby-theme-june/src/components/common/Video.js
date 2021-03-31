import React from "react";
import styled from "styled-components";

const VideoComponent = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%;
`;
const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;

const Video = ({ videoId, alt }) => {
  return (
    <VideoComponent>
      <Iframe
        src={`https://www.youtube.com/embed/${videoId}?controls=0`}
        title={alt}
        allowFullScreen
        modestBranding
        controls="0"
        frameBorder="0"
        rel="0"
        showInfo="0"
        autoHide="1"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      />
    </VideoComponent>
  );
};

export default Video;
