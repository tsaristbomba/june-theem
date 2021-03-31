import React from "react";
import ButtonLink from "./common/ButtonLink";
import Button from "./common/Button";
import TitleWrapper from "./common/TitleWrapper";
import Form from "./common/Form";
import BgImage from "./common/BgImage";
import Fade from "react-reveal";
import BgImg from "./common/BgImg";

const TextImageBg = ({ data, form, rounded, center, attach, fade, side }) => {
  return (
    <BgImage attach={attach} side thick image={data.image} id={data.anchor}>
      <TitleWrapper side light center={center}>
        <small>{data.small}</small>
        <h2>{data.title}</h2>
        {fade ? (
          <>
            <div style={{ overflow: "hidden", flexDirection: "column" }}>
              <Fade duration={800} left={side}>
                <p>{data.description}</p>
                {form ? (
                  <Form inline rounded={rounded}>
                    <input type="email" placeholder={data.placeholder} />
                    <Button type="submit">{data.buttonLabel}</Button>
                  </Form>
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
              </Fade>
            </div>
          </>
        ) : (
          <>
            <p>{data.description}</p>
            {form ? (
              <Form inline rounded={rounded}>
                <input type="email" placeholder={data.placeholder} />
                <Button type="submit">{data.buttonLabel}</Button>
              </Form>
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
          </>
        )}
      </TitleWrapper>
    </BgImage>
  );
};

export default TextImageBg;
