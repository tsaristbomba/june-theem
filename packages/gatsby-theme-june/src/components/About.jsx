import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import styled from "styled-components";
import InfoContainer from "../components/common/InfoContainer";
import Image from "./common/Image";
import GatsbyImage from "./common/GatsbyImage";
import Button from "./common/ButtonLink";
import TitleWrapper from "./common/TitleWrapper";
import Container from "./common/Container";
import useQuerySvg from "../functions/useQuerySvg.js";
import Fade from "react-reveal/Fade";
import TextWrapper from "./common/TextWrapper";
import Grid from "./common/Grid";

const Testimonial = styled.div`
  border-top: 1px solid ${(props) => props.theme.colors.neutralMedium};
  margin: 2rem 0 !important;
  display: flex !important;

  div {
    display: flex !important;
    flex-direction: column !important;
    justify-content: center;
    align-items: center;

    small {
      letter-spacing: normal !important;
      line-height: 1rem !important;
      text-transform: none !important;
      margin-top: 4px;
    }
    p {
      font-style: italic;
      text-align: center;
    }
  }

  @media screen and (min-width: 768px) {
    align-items: center;

    div {
      small {
        text-align: center;
      }
      p {
        margin: 4px 0;
      }
    }
  }
`;
const QuoteLeft = styled(FaQuoteLeft)`
  align-self: flex-start;
  color: ${({ theme }) => theme.colors.secondary};
`;
const QuoteRight = styled(FaQuoteRight)`
  align-self: flex-end;
  color: ${({ theme }) => theme.colors.secondary};
`;

const Hero = ({ data, thick, bg, center, wave, tilt, fade, side }) => {
  return (
    <Container
      id={data.anchor}
      thick={thick}
      wave={wave}
      tilt={tilt}
      bg={bg}
      center={center}
    >
      <Grid columns={2} thick>
        <div>
          <TitleWrapper center>
            <small>{data.small}</small>
            <h2>{data.title}</h2>
          </TitleWrapper>
          <TextWrapper normal>
            {fade ? (
              <div style={{ overflow: "hidden" }}>
                <Fade duration={800} big left={side}>
                  <p>{data.description}</p>
                  <div>
                    <Button
                      large="true"
                      slug={data.buttonSlug}
                      title={data.buttonLabel}
                      ariaLabel={data.buttonLabel}
                    >
                      {data.buttonLabel}
                    </Button>
                  </div>
                  {/* <Testimonial>
                    <div>
                      <GatsbyImage
                        small="true"
                        layout="fixed"
                        image={data.testimonialImage}
                        alt={data.testimonialAlt}
                      />
                      <small>{data.testimonialInfo}</small>
                    </div>
                    <div>
                      <QuoteLeft />
                      <p>{data.testimonial}</p>
                      <QuoteRight />
                    </div>
                  </Testimonial> */}
                </Fade>
              </div>
            ) : (
              <>
                <p>{data.description}</p>
                <div>
                  <Button
                    large="true"
                    slug={data.buttonSlug}
                    title={data.buttonLabel}
                    ariaLabel={data.buttonLabel}
                  >
                    {data.buttonLabel}
                  </Button>
                </div>
                <Testimonial>
                  <div>
                    <GatsbyImage
                      small="true"
                      layout="fixed"
                      image={data.testimonialImage}
                      alt={data.testimonialAlt}
                    />
                    <small>{data.testimonialInfo}</small>
                  </div>
                  <div>
                    <QuoteLeft />
                    <p>{data.testimonial}</p>
                    <QuoteRight />
                  </div>
                </Testimonial>
              </>
            )}
          </TextWrapper>
        </div>

        {fade ? (
          <div style={{ overflow: "hidden", justifyContent: "center" }}>
            <Fade duration={800} right={side}>
              {data.isSvg ? (
                <Image
                  svg={data.isSvg}
                  src={useQuerySvg(data.image)}
                  alt={data.alt}
                />
              ) : (
                <GatsbyImage image={data.image} alt={data.alt} />
              )}
            </Fade>
          </div>
        ) : (
          <>
            {data.isSvg ? (
              <Image
                svg={data.isSvg}
                src={useQuerySvg(data.image)}
                alt={data.alt}
              />
            ) : (
              <GatsbyImage image={data.image} alt={data.alt} />
            )}
          </>
        )}
      </Grid>
    </Container>
  );
};

export default Hero;
