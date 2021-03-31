import React from "react";
import { MDXProvider } from "@mdx-js/react";
import styled, { ThemeProvider } from "styled-components";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Icons from "./Icons";
import GlobalStyles from "../styles/globalStyles";
import ScrollButton from "./Scroll";
import CookieConsent from "./CookieConsent";

// Functions
import getMetadata from "../functions/getMetadata";
import usePersistState from "../functions/usePersistState";

import footerData from "../../data/footer";
import floatingData from "../../data/floating";
import scrollData from "../../data/scroll";
import lightTheme from "../styles/themes/light";
import darkTheme from "../styles/themes/dark";

const ContentWrapper = styled.div`
  animation: 0.2s fade;
`;

const components = {
  // h1: (props) => (
  //   <h1
  //     style={{
  //       fontFamily: "Nunito",
  //       fontSize: "2rem",
  //       color: "red",
  //     }}
  //     {...props}
  //   />
  // ),
  // a: link,
};

const Layout = ({ children, transparent, sticky, progress, light, anchor }) => {
  const meta = getMetadata().meta.siteMetadata;
  const slugs = getMetadata().slugs;
  const [theme, setTheme] = usePersistState("theme", lightTheme);

  // Toggle dark / light mode
  function handleChange() {
    setTheme(theme.title === "light" ? darkTheme : lightTheme);
  }
  //

  return (
    <MDXProvider components={components}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navbar
          {...meta}
          data={slugs}
          transparent={transparent}
          sticky={sticky}
          light={light}
          progress={progress}
          anchor={anchor}
        />
        <Icons data={floatingData} menu rounded />
        <ScrollButton data={scrollData} rounded />
        <CookieConsent />
        <ContentWrapper fade>{children}</ContentWrapper>
        <Footer
          {...meta}
          data={footerData.image}
          anchor={anchor}
          handleChange={handleChange}
        />
      </ThemeProvider>
    </MDXProvider>
  );
};

export default Layout;
