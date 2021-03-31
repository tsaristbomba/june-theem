import React from "react";
import styled from "styled-components";
import info from "../../data/info";
import Image from "./common/Image";
import { Link } from "gatsby";
import handleSocials from "../functions/handleSocials";
import useQuerySvg from "../functions/useQuerySvg";
import Overlay from "./common/Overlay";
import Container from "./common/Container";
import Anchor from "./common/AnchorLink";
import ToggleSwitch from "./ToggleSwitch";
import { ThemeContext } from "styled-components";
import { FiSun, FiMoon } from "react-icons/fi";

const FooterWrapper = styled.footer`
  display: grid;
  grid-auto-columns: minmax(22%, 1fr);
  grid-template-areas: "col1" "col2" "col3" "col4";
  margin: 1rem 0;
  grid-gap: 1.5rem;
  max-width: 1150px;
  width: 100%;
  color: ${({ theme, light }) =>
    light ? theme.colors.neutralDark : theme.colors.neutralMedium};

  svg {
    font-size: 1.8rem;
  }

  p {
    margin-bottom: 1rem;
  }

  div {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    text-align: center;
    /* margin: 1rem 0; */

    h4 {
      font-size: 1.2rem;
      margin-bottom: 10px;
      color: ${({ theme, light }) =>
        light ? theme.colors.neutralDark : theme.colors.neutralMedium};
    }

    ul {
      list-style: none;
      z-index: 2;

      li {
        margin-bottom: 4px;
        a {
          text-decoration: none;
          color: ${(props) => props.theme.colors.neutralMedium};
          font-weight: 400;
          color: ${({ theme, light }) =>
            light ? theme.colors.neutralDark : theme.colors.neutralMedium};

          :hover {
            color: ${(props) => props.theme.colors.primary};
          }
        }
      }
    }

    img {
      margin-bottom: 1rem;
      max-width: 150px;
      padding: 12px 0;
      /* fill: rgb(1, 1, 1); */
      filter: ${({ title }) =>
        title === "light"
          ? "grayscale(100%) contrast(0.1%) brightness(80)"
          : "grayscale(100%) contrast(0.1%) brightness(1)"};
    }

    div {
      display: flex;
      justify-content: center;
      flex-direction: row;

      a {
        margin: 0 10px;
        color: ${({ theme, light }) =>
          light ? theme.colors.neutralDark : theme.colors.neutralMedium};
        z-index: 2;

        :hover {
          color: ${(props) => props.theme.colors.primary};
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    grid-template-areas: "col1 col2 col3 col4";
    margin: 1rem 0;
    max-width: 1150px;
    width: 100%;
    color: ${({ theme, light }) =>
      light ? theme.colors.neutralDark : theme.colors.neutralMedium};

    div {
      justify-content: flex-start;
    }
  }
`;
const UnderFooter = styled.div`
  background: ${(props) => props.theme.colors.neutralMedium};
  border-top: 1px solid ${(props) => props.theme.colors.neutralLight};

  div {
    display: flex;
    justify-content: space-between;
    padding: 8px 1rem;
    max-width: 1150px;
    margin: 0 auto;

    a {
      text-decoration: none;
      color: ${(props) => props.theme.colors.neutralDark};
      font-weight: bold;

      :hover {
        color: ${(props) => props.theme.colors.primary};
      }
    }
  }
`;

const Footer = ({
  title,
  logo,
  light,
  data,
  overlay,
  handleChange,
  anchor,
}) => {
  const theme = React.useContext(ThemeContext);

  return (
    <>
      {overlay ? (
        <Overlay light={light} bg background image={data.default}>
          <FooterWrapper light={light}>
            <div>
              <Image
                normalize
                light={light}
                src={useQuerySvg(logo)}
                alt={title}
              />
              <p>{info.workingHours}</p>
              <p>{info.address}</p>
              <div>
                {info.socials.map((social, key) => (
                  <React.Fragment key={key}>
                    {handleSocials(social.title, social.link)}
                  </React.Fragment>
                ))}
              </div>
              <FiSun style={{ fontSize: "16px", marginRight: "5px" }} />
              <ToggleSwitch handleChange={handleChange} />
              <FiMoon style={{ fontSize: "16px" }} />
            </div>
            <div>
              <h4>Quick Links</h4>
              <ul>
                {info.nav.map((item, key) => (
                  <li key={key}>
                    {item.dropdown ? (
                      <React.Fragment />
                    ) : anchor ? (
                      <Anchor
                        to={`/#${item.slug}`}
                        title={item.name}
                        aria-label={item.name}
                      >
                        {item.name}
                      </Anchor>
                    ) : (
                      <Link
                        to={`/${item.slug}`}
                        title={item.name}
                        aria-label={item.name}
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            {info.footerLinks.map((item, key) => (
              <div key={key}>
                <h4>{item.title}</h4>
                <ul>
                  {item.links.map((link, key) => (
                    <li key={key}>
                      <Link
                        to={`/${link.slug}`}
                        title={link.title}
                        aria-label={link.title}
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </FooterWrapper>
        </Overlay>
      ) : (
        <Container light={light} bg background>
          <FooterWrapper title={theme.title} light={light}>
            <div>
              <Image
                normalize
                light={light}
                src={useQuerySvg(logo)}
                alt={title}
              />
              <p>{info.workingHours}</p>
              <p>{info.address}</p>
              <div style={{ margin: "1rem 0" }}>
                {info.socials.map((social, key) => (
                  <React.Fragment key={key}>
                    {handleSocials(social.title, social.link)}
                  </React.Fragment>
                ))}
              </div>
              <div>
                <FiSun style={{ fontSize: "16px", marginRight: "5px" }} />
                <ToggleSwitch handleChange={handleChange} />
                <FiMoon style={{ fontSize: "16px" }} />
              </div>
            </div>
            <div>
              <h4>Quick Links</h4>
              <ul>
                {info.nav.map((item, key) => (
                  <li key={key}>
                    {item.dropdown ? (
                      <React.Fragment />
                    ) : anchor ? (
                      <Anchor
                        to={`/#${item.slug}`}
                        title={item.name}
                        aria-label={item.name}
                      >
                        {item.name}
                      </Anchor>
                    ) : (
                      <Link
                        to={`/${item.slug}`}
                        title={item.name}
                        aria-label={item.name}
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            {info.footerLinks.map((item, key) => (
              <div key={key}>
                <h4>{item.title}</h4>
                <ul>
                  {item.links.map((link, key) => (
                    <li key={key}>
                      <Link
                        to={`/${link.slug}`}
                        title={link.title}
                        aria-label={link.title}
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </FooterWrapper>
        </Container>
      )}
      <UnderFooter>
        <div>
          <small>
            ⓒ {new Date().getFullYear()} {title}
          </small>
          <small>
            Desenvolvido por{" "}
            <a
              href="http://envoysites.cc"
              title="Envoy Sites"
              aria-label="Website do Desenvolvedor"
            >
              EnvoySites
            </a>
          </small>
        </div>
      </UnderFooter>
    </>
  );
};

export default Footer;
