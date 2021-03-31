import React from "react";
import Container from "./common/Container";
import Faq from "react-faq-component";
import TitleWrapper from "./common/TitleWrapper";
import Fade from "react-reveal";
import Wrapper from "./common/Wrapper";

const FAQ = ({ data, wave, tilt, thick, center, bg, fade }) => {
  const { faq } = data;

  const styles = {
    arrowColor: `${(props) => props.theme.colors.primary}`,
    rowContentColor: `${(props) => props.theme.colors.primary}`,
    bgColor: `${(props) => props.theme.colors.neutralLight}`,
    rowTitleColor: `${(props) => props.theme.colors.neutralDark}`,
    // titleTextColor: `${(props) => props.theme.colors.neutralDark}`,
  };
  const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
  };

  return (
    <Wrapper id={data.anchor}>
      <Container wave={wave} tilt={tilt} thick={thick} center={center} bg={bg}>
        <TitleWrapper center>
          <small>{data.small}</small>
          <h2>{data.title}</h2>
        </TitleWrapper>
        {fade ? (
          <Fade duration={600}>
            <Faq data={faq} styles={styles} config={config} />
          </Fade>
        ) : (
          <Faq data={faq} styles={styles} config={config} />
        )}
      </Container>
    </Wrapper>
  );
};

export default FAQ;
