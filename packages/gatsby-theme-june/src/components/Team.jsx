import React from "react";
import Carousel from "react-elastic-carousel";
import TitleWrapper from "./common/TitleWrapper";
import Container from "../components/common/Container";
import GatsbyImage from "./common/GatsbyImage";
import Card from "./common/Card";
import styled from "styled-components";

const CarouselWrapper = styled(Carousel)`
  max-width: 1150px;
  animation: 0.2s fade;

  button {
    background-color: transparent;
    border-radius: ${({ rounded }) => (rounded ? "50%" : "0")};
    border: 1px solid ${(props) => props.theme.colors.primaryDark};
    box-shadow: none;
    color: ${(props) => props.theme.colors.primaryDark};

    :hover:enabled {
      background-color: ${(props) => props.theme.colors.primaryDark} !important;
    }
    :focus:enabled {
      background-color: ${(props) => props.theme.colors.primaryDark} !important;
    }
    :disabled {
      visibility: hidden;
    }
  }

  :focus {
    outline: none;
  }
`;

const Team = ({
  data,
  wave,
  tilt,
  triangle,
  curve,
  rounded,
  bg,
  thick,
  center,
  reverse,
  fade,
}) => {
  const bp = [
    {
      width: 550,
      itemsToShow: 1,
      pagination: false,
      showArrows: false,
    },
    {
      width: 768,
      itemsToShow: data.team.length <= 3 ? data.team.length : 3,
      pagination: false,
      itemsToScroll: data.team.length < 3 ? false : 1,
      enableTilt: false,
      showArrows: data.team.length < 3 ? false : true,
      enableSwipe: false,
    },
  ];

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
      <CarouselWrapper fade={fade} rounded={rounded} breakPoints={bp}>
        {data.team.map((member, key) => (
          <Card regular rounded={rounded} key={key}>
            <GatsbyImage image={member.img} alt={member.alt} />
            <div>
              <small>{member.small}</small>
              <h3>{member.name}</h3>
            </div>
          </Card>
        ))}
      </CarouselWrapper>
    </Container>
  );
};

export default Team;
