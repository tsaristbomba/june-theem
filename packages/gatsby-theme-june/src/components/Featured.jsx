import React from "react";
import Container from "./common/Container";
import Grid from "./common/Grid";
import TitleWrapper from "./common/TitleWrapper";
import useQuerySvg from "../functions/useQuerySvg";
import Image from "./common/Image";
import Fade from "react-reveal";

const Featured = ({
  data,
  wave,
  triangle,
  curve,
  tilt,
  bg,
  thick,
  rounded,
  image,
  background,
  fixed,
  fade,
}) => {
  return (
    <Container
      thick={thick}
      bg={bg || wave || tilt || curve || triangle}
      wave={wave}
      tilt={tilt}
      curve={curve}
      triangle={triangle}
      background={background}
      id={data.anchor}
    >
      <TitleWrapper center>
        <small>{data.small}</small>
        <h2>{data.title}</h2>
      </TitleWrapper>
      {fade ? (
        <Fade duration={800}>
          <Grid columns={data.items.length} center>
            {data.items.map((item, key) => (
              <Image
                key={key}
                src={useQuerySvg(item.image)}
                alt={item.alt}
                normalize
                gray
                huge
              />
            ))}
          </Grid>
        </Fade>
      ) : (
        <Grid columns={data.items.length} center>
          {data.items.map((item, key) => (
            <Image
              key={key}
              src={useQuerySvg(item.image)}
              alt={item.alt}
              normalize
              gray
              huge
            />
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Featured;
