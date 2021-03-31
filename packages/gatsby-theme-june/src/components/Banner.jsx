import React from "react";
import ButtonLink from "./common/ButtonLink";
import Container from "./common/Container";
import Button from "./common/Button";
import TitleWrapper from "./common/TitleWrapper";
import Form from "./common/Form";
import BgImage from "./common/BgImage";
import Fade from "react-reveal";
import BgImg from "./common/BgImg";

const Banner = ({
  data,
  newsletter,
  wave,
  triangle,
  curve,
  tilt,
  bg,
  thick,
  rounded,
  image,
  background,
  attach,
  fade,
}) => {
  return (
    <>
      {image ? (
        <BgImg
          attach={attach}
          // image={data.image.default}
          image={data.image}
          id={data.anchor}
          gradient
          thick
        >
          <TitleWrapper light center>
            <small>{data.small}</small>
            <h2>{data.title}</h2>
            {newsletter ? (
              <>
                {fade ? (
                  <Fade duration={600}>
                    <Form inline rounded={rounded}>
                      <input type="email" placeholder={data.placeholder} />
                      <Button type="submit">{data.buttonLabel}</Button>
                    </Form>
                  </Fade>
                ) : (
                  <Form inline rounded={rounded}>
                    <input type="email" placeholder={data.placeholder} />
                    <Button type="submit">{data.buttonLabel}</Button>
                  </Form>
                )}
              </>
            ) : (
              <ButtonLink
                large="true"
                slug={`/${data.slug}`}
                title={data.buttonLabel}
                aria-label={data.buttonLabel}
              >
                {data.buttonLabel}
              </ButtonLink>
            )}
          </TitleWrapper>
        </BgImg>
      ) : (
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
            {newsletter ? (
              <>
                {fade ? (
                  <Fade duration={600}>
                    <Form inline rounded={rounded}>
                      <input type="email" placeholder={data.placeholder} />
                      <Button type="submit">{data.buttonLabel}</Button>
                    </Form>
                  </Fade>
                ) : (
                  <Form inline rounded={rounded}>
                    <input type="email" placeholder={data.placeholder} />
                    <Button type="submit">{data.buttonLabel}</Button>
                  </Form>
                )}
              </>
            ) : (
              <ButtonLink
                large="true"
                slug={`/${data.slug}`}
                title={data.buttonLabel}
                aria-label={data.buttonLabel}
              >
                {data.buttonLabel}
              </ButtonLink>
            )}
          </TitleWrapper>
        </Container>
      )}
    </>
  );
};

export default Banner;
