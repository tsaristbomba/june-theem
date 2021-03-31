import React from "react";
import Image from "../components/common/Image";
import Container from "../components/common/Container";
import InfoContainer from "./common/InfoContainer";
import TitleWrapper from "./common/TitleWrapper";
import GatsbyImage from "./common/GatsbyImage";
import Button from "./common/Button";
import Form from "./common/Form";
import BgImage from "./common/BgImage";
import useFilterImageQuery from "../functions/useFilterImage";
import useQuerySvg from "../functions/useQuerySvg";
import Fade from "react-reveal";
import Wrapper from "./common/Wrapper";
import BgImg from "./common/BgImg";

const Contact = ({
  data,
  rounded,
  wave,
  tilt,
  thick,
  center,
  bg,
  image,
  attach,
  fade,
  side,
  wide,
  svg,
}) => {
  return (
    <>
      {image ? (
        <BgImg attach={attach} image={data.image} id={data.anchor}>
          <TitleWrapper light center={center}>
            <small>{data.small}</small>
            <h2>{data.title}</h2>
            {fade ? (
              <div style={{ overflow: "hidden" }}>
                <Fade duration={800}>
                  <Form rounded={rounded}>
                    <input
                      placeholder={data.placeholders.input1}
                      type="text"
                      name="name"
                      required
                    />
                    <input
                      placeholder={data.placeholders.input2}
                      type="email"
                      name="name"
                      required
                    />
                    <input
                      placeholder={data.placeholders.input3}
                      type="text"
                      name="name"
                      required
                    />
                    <textarea
                      maxLength={250}
                      placeholder={data.placeholders.input4}
                      name="name"
                      required
                    />
                    <Button large type="submit">
                      Submit
                    </Button>
                  </Form>
                </Fade>
              </div>
            ) : (
              <Form rounded={rounded}>
                <input
                  placeholder={data.placeholders.input1}
                  type="text"
                  name="name"
                  required
                />
                <input
                  placeholder={data.placeholders.input2}
                  type="email"
                  name="name"
                  required
                />
                <input
                  placeholder={data.placeholders.input3}
                  type="text"
                  name="name"
                  required
                />
                <textarea
                  maxLength={250}
                  placeholder={data.placeholders.input4}
                  name="name"
                  required
                />
                <Button large type="submit">
                  Submit
                </Button>
              </Form>
            )}
          </TitleWrapper>
        </BgImg>
      ) : (
        <Container
          wave={wave}
          tilt={tilt}
          thick={thick}
          center={center}
          bg={bg}
          id={data.anchor}
          wide={wide}
        >
          <InfoContainer wide={wide} normal>
            {fade ? (
              <div style={{ overflow: "hidden" }}>
                <Fade left={side} duration={800}>
                  {svg ? (
                    <Image
                      svg={svg}
                      src={
                        svg
                          ? useQuerySvg(data.img)
                          : useFilterImageQuery(data.img)
                      }
                      alt={data.alt}
                    />
                  ) : (
                    <GatsbyImage image={data.img} alt={data.alt} wide={wide} />
                  )}
                </Fade>
              </div>
            ) : (
              <>
                {svg ? (
                  <Image
                    svg={svg}
                    src={
                      svg
                        ? useQuerySvg(data.img)
                        : useFilterImageQuery(data.img)
                    }
                    alt={data.alt}
                  />
                ) : (
                  <GatsbyImage image={data.img} alt={data.alt} wide={wide} />
                )}
              </>
            )}

            {fade ? (
              <Wrapper padding={wide} wide={wide}>
                <Fade right={side} duration={800}>
                  <div>
                    <TitleWrapper>
                      <small>{data.small}</small>
                      <h2>{data.title}</h2>

                      <Form rounded={rounded} action={data.actionSlug}>
                        <input
                          placeholder={data.placeholders.input1}
                          type="text"
                          name="name"
                          required
                        />
                        <input
                          placeholder={data.placeholders.input2}
                          type="email"
                          name="email"
                          required
                        />
                        <input
                          placeholder={data.placeholders.input3}
                          type="text"
                          name="subject"
                          required
                        />
                        <textarea
                          maxLength={250}
                          placeholder={data.placeholders.input4}
                          name="message"
                          required
                        />
                        <Button large type="submit">
                          Submit
                        </Button>
                      </Form>
                    </TitleWrapper>
                  </div>
                </Fade>
              </Wrapper>
            ) : (
              <Wrapper padding={wide} style={wide && { marginRight: "5vw" }}>
                <TitleWrapper>
                  <small>{data.small}</small>
                  <h2>{data.title}</h2>
                </TitleWrapper>
                <Form rounded={rounded} action={data.actionSlug}>
                  <input
                    placeholder={data.placeholders.input1}
                    type="text"
                    name="name"
                    required
                  />
                  <input
                    placeholder={data.placeholders.input2}
                    type="email"
                    name="email"
                    required
                  />
                  <input
                    placeholder={data.placeholders.input3}
                    type="text"
                    name="subject"
                    required
                  />
                  <textarea
                    maxLength={250}
                    placeholder={data.placeholders.input4}
                    name="message"
                    required
                  />
                  <Button large type="submit">
                    Submit
                  </Button>
                </Form>
              </Wrapper>
            )}
          </InfoContainer>
        </Container>
      )}
    </>
  );
};

export default Contact;
