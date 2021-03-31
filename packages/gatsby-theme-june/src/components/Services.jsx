import React from "react";
import Image from "../components/common/Image";
import GatsbyImage from "./common/GatsbyImage";
import Container from "../components/common/Container";
import InfoContainer from "./common/InfoContainer";
import TitleWrapper from "./common/TitleWrapper";
import useQuerySvg from "../functions/useQuerySvg";
import Fade from "react-reveal/Fade";
import TextWrapper from "./common/TextWrapper";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";

const Services = ({
  data,
  triangle,
  curve,
  wave,
  tilt,
  thick,
  bg,
  fade,
  side,
  svg,
  large,
  wide,
}) => {
  return (
    <Container
      thick={thick}
      bg={bg}
      wave={wave}
      tilt={tilt}
      triangle={triangle}
      curve={curve}
      wide={wide}
      id={data.anchor}
    >
      <TitleWrapper center>
        <small>{data.small}</small>
        <h2>{data.title}</h2>
      </TitleWrapper>
      {data.services.map((service, key) => (
        <InfoContainer
          key={key}
          reverse={key % 2 == 0}
          thick={thick}
          large={large}
          imageLarge={key % 2 == 0 && large}
          wide={wide}
          mLeft
        >
          <div style={{ margin: "auto", gridArea: "col1", overflow: "hidden" }}>
            {fade ? (
              <Fade
                duration={800}
                big
                right={side && key % 2 == 0}
                left={side && !(key % 2) == 0}
              >
                <TextWrapper small reverse={key % 2 == 0} normal={!wide}>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </TextWrapper>
              </Fade>
            ) : (
              <TextWrapper small reverse={key % 2 == 0} normal={!wide}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </TextWrapper>
            )}
          </div>
          {fade ? (
            <div style={{ overflow: "hidden" }}>
              <Fade
                duration={800}
                big
                left={side && key % 2 == 0}
                right={side && !(key % 2) == 0}
              >
                {svg ? (
                  <Image
                    style={{ gridArea: "col2" }}
                    svg={svg}
                    small
                    src={useQuerySvg(service.img)}
                    alt={service.alt}
                  />
                ) : (
                  <GatsbyImage
                    image={service.img}
                    alt={service.alt}
                    wide={wide}
                  />
                )}
              </Fade>
            </div>
          ) : (
            <>
              {svg ? (
                <Image
                  style={{ gridArea: "col2" }}
                  svg={svg}
                  small
                  src={useQuerySvg(service.img)}
                  alt={service.alt}
                />
              ) : (
                <GatsbyImage
                  image={service.img}
                  alt={service.alt}
                  wide={wide}
                />
              )}
            </>
          )}
        </InfoContainer>
      ))}
    </Container>
  );
};

export default Services;
