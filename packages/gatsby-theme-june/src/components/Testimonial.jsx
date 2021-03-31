import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import styled from "styled-components";
import TitleWrapper from "./common/TitleWrapper";
import Container from "./common/Container";
import Grid from "./common/Grid";
import GatsbyImage from "./common/GatsbyImage";
import Fade from "react-reveal";

const Profile = styled.div`
  border-top: 1px solid ${(props) => props.theme.colors.neutralLight};
  /* margin: 2rem 0 !important; */
  display: flex !important;

  div {
    display: flex !important;
    flex-direction: column !important;
    align-items: center;
    margin-top: 1.5rem;
    justify-items: center;
    justify-content: center;
    margin: 0 auto;

    img {
      width: 150px;
      height: 150px;
      object-fit: cover;
      border-radius: ${({ rounded }) => (rounded ? "50%" : "0")};
      margin-bottom: 4px;
      filter: ${({ gray }) => (gray ? "grayscale(100%)" : "none")};
      box-shadow: 0px 2px 50px 0px rgb(110 130 208 / 18%);
    }
    small {
      letter-spacing: normal !important;
      line-height: 1rem !important;
      text-transform: none !important;
      color: ${(props) => props.theme.colors.primaryDark};
      font-weight: 500;
      margin-bottom: 0.2rem;
    }
    p {
      font-style: italic;
      text-align: center;
    }
    svg {
      font-size: 1rem;
    }
  }

  @media screen and (min-width: 768px) {
    align-items: center;

    div {
      /* margin-right: 1rem; */

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
  color: ${(props) => props.theme.colors.secondary} !important;
`;
const QuoteRight = styled(FaQuoteRight)`
  align-self: flex-end;
  color: ${(props) => props.theme.colors.secondary} !important;
`;

const Testimonial = ({
  data,
  thick,
  bg,
  center,
  wave,
  tilt,
  rounded,
  gray,
  fade,
}) => {
  return (
    <Container
      id={data.anchor}
      thick={thick}
      wave={wave}
      tilt={tilt}
      bg={bg}
      center={center}
    >
      <TitleWrapper center>
        <small>{data.small}</small>
        <h2>{data.title}</h2>
      </TitleWrapper>

      <Grid columns={data.array.length}>
        {data.array.map((item, key) => (
          <React.Fragment key={key}>
            {fade ? (
              <React.Fragment key={key}>
                <Fade duration={600}>
                  <Profile gray={gray} rounded={rounded}>
                    <div>
                      <GatsbyImage
                        small="true"
                        image={item.testimonialImage}
                        alt={item.testimonialAlt}
                      />
                      <small>{item.testimonialInfo}</small>
                      <h4>{item.testimonialName}</h4>
                    </div>
                    <div>
                      <QuoteLeft />
                      <p>{item.testimonial}</p>
                      <QuoteRight />
                    </div>
                  </Profile>
                </Fade>
              </React.Fragment>
            ) : (
              <Profile gray={gray} rounded={rounded}>
                <div>
                  <GatsbyImage
                    small="true"
                    image={item.testimonialImage}
                    alt={item.testimonialAlt}
                  />
                  <small>{item.testimonialInfo}</small>
                  <h3>{item.testimonialName}</h3>
                </div>
                <div>
                  <QuoteLeft />
                  <p>{item.testimonial}</p>
                  <QuoteRight />
                </div>
              </Profile>
            )}
          </React.Fragment>
        ))}
      </Grid>
    </Container>
  );
};

export default Testimonial;
