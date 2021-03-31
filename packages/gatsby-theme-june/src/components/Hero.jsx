import React from "react";
import InfoContainer from "../components/common/InfoContainer";
import Image from "./common/Image";
import GatsbyImage from "./common/GatsbyImage";
import ButtonLink from "./common/ButtonLink";
import TitleWrapper from "./common/TitleWrapper";
import Container from "./common/Container";
import styled, { ThemeContext } from "styled-components";
import useQuerySvg from "../functions/useQuerySvg";
import BgImg from "./common/BgImg";
import { BiMouse } from "react-icons/bi";

const HeroIcon = styled(BiMouse)`
  font-size: 1.5rem;
  margin-top: 1rem;
`;

// const BgContainer = styled(BgImg)`
//   margin-top: -80px;
//   height: ${({ small }) => (small ? "300px" : "calc(100vh - 80px)")};
//   min-height: ${({ small }) => (small ? "300px" : "600px")};
//   background-size: cover;
//   background-position: center;
//   background-attachment: ${({ fixed }) => (fixed ? "fixed" : "scroll")};
//   padding: 0 2rem;

//   div {
//     max-height: 100%;
//     width: 100%;
//   }

//   @media screen and (min-width: 768px) {
//     height: ${({ small }) => (small ? "420px" : "calc(100vh - 80px)")};
//     min-height: ${({ small }) => (small ? "420px" : "600px")};
//   }
// `;
const BgItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 600px;
  min-height: ${({ small }) => (small ? "300px" : "600px")};
  height: ${({ small }) => (small ? "300px" : "calc(100vh - 80px)")};
  max-height: 100%;
  color: #fff;
  line-height: 1;
  width: 100%;
  margin: 0 auto;
  padding-top: 80px;

  small {
    color: ${(props) => props.theme.colors.primary};
    text-transform: uppercase;
    font-weight: bold;
  }

  h1 {
    margin-bottom: 1rem;
    font-size: 3rem;
    line-height: 3rem;
    width: 100%;
    text-transform: uppercase;
    font-weight: bold;
  }

  p {
    margin-bottom: 2rem;
    color: #fff;
  }

  @media screen and (min-width: 768px) {
    height: ${({ small }) => (small ? "420px" : "calc(100vh - 80px)")};
    min-height: ${({ small }) => (small ? "420px" : "600px")};

    h1 {
      font-size: 4rem;
      line-height: 4rem;
    }
  }
`;

const Hero = ({ rounded, bg, data, fade, small, attach, svg, home }) => {
  const theme = React.useContext(ThemeContext);

  return (
    <>
      {bg ? (
        <>
          <BgImg
            attach={attach}
            small={small}
            // image={data.image.default}
            image={data.image}
            gradient
            hero
          >
            <BgItems small={small}>
              <small>{data.topTitle}</small>
              <h1>{data.title}</h1>
              <p>{data.description}</p>
              {data.buttonLabel && (
                <div>
                  <ButtonLink
                    rounded={rounded}
                    large="true"
                    slug={data.buttonSlug}
                    title={data.buttonLabel}
                    ariaLabel={data.buttonLabel}
                  >
                    {data.buttonLabel}
                  </ButtonLink>
                </div>
              )}
            </BgItems>
          </BgImg>
          {home && (
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                background: theme.colors.neutralLight,
              }}
            >
              <HeroIcon style={{ color: theme.colors.primaryDark }} />
            </div>
          )}
        </>
      ) : (
        <Container fade={!fade}>
          <InfoContainer large="true">
            <TitleWrapper large="true">
              <small>{data.topTitle}</small>
              <h1>{data.title}</h1>
              <div>
                <ButtonLink
                  rounded={rounded}
                  large="true"
                  slug={data.buttonSlug}
                  title={data.buttonLabel}
                  ariaLabel={data.buttonLabel}
                >
                  {data.buttonLabel}
                </ButtonLink>
              </div>
            </TitleWrapper>
            <div>
              {svg ? (
                <Image src={useQuerySvg(data.img)} alt={data.alt} />
              ) : (
                <GatsbyImage image={data.img} alt={data.alt} />
              )}
            </div>
          </InfoContainer>
        </Container>
      )}
    </>
  );
};

export default Hero;
