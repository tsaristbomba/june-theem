import React from "react";

import styled from "styled-components";
import { Link } from "gatsby";
import ButtonLink from "./common/ButtonLink";
import ProgressBar from "./common/ProgressBar";
import Image from "./common/Image";
import Dropdown from "./common/Dropdown";

import {
  RiMenu5Fill,
  RiCloseFill,
  RiArrowDropDownFill,
  RiLogoutBoxRFill,
} from "react-icons/ri";

import info from "../../data/info";

import handleBlockScroll from "../functions/handleBlockScroll";
import useQuerySvg from "../functions/useQuerySvg";
import { ThemeContext } from "styled-components";
import Anchor from "./common/AnchorLink";
import ButtonAnchor from "./common/ButtonAnchor";

const TransparentNav = styled.nav`
  background: ${({ theme, scrolled }) =>
    scrolled ? theme.colors.neutralLight : "transparent"};
  color: #fff;
  height: ${({ scrolled }) => (scrolled ? "60px" : "80px")};
  display: flex;
  justify-content: center;
  align-items: center;
  position: ${({ sticky }) => (sticky ? "sticky" : "relative")};
  top: 0;
  z-index: 15;
  border-bottom: ${({ theme, scrolled, progress }) =>
    scrolled && !progress
      ? `1px solid ${theme.colors.neutralMedium}`
      : `1px solid transparent`};
  transition: all 0.2s ease;

  svg {
    color: ${({ theme, scrolled }) =>
      scrolled ? theme.colors.neutralDark : "#fff !important"};
  }

  @media screen and (min-width: 768px) {
    border-bottom: ${({ theme, scrolled, progress }) =>
      scrolled && !progress
        ? `1px solid ${theme.colors.neutralMedium}`
        : `1px solid transparent`};

    a {
      color: ${({ theme, scrolled }) =>
        scrolled ? theme.colors.neutralDark : "#fff"};
      border-color: ${({ theme, scrolled }) =>
        scrolled ? theme.colors.neutralDark : "#fff"};
    }
    a:hover {
      color: ${({ theme, scrolled }) =>
        scrolled ? theme.colors.primary : theme.colors.neutralDark};
    }

    button {
      color: ${({ theme, scrolled }) =>
        scrolled ? theme.colors.neutralDark : "#fff"};
    }
  }
`;
const Nav = styled.nav`
  background: ${(props) => props.theme.colors.neutralLight};
  color: ${({ theme, scrolled }) =>
    scrolled ? theme.colors.neutralDark : theme.colors.neutralLight};
  height: ${({ scrolled }) => (scrolled ? "60px" : "80px")};
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 15;
  border-bottom: ${({ theme, scrolled, progress }) =>
    scrolled && !progress
      ? `1px solid ${theme.colors.neutralMedium}`
      : `1px solid transparent`};
  transition: all 0.2s ease;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${({ scrolled }) => (scrolled ? "60px" : "80px")};
  z-index: 1;
  width: 100%;
  max-width: 1150px;
  padding: 0 1.5rem;
  transition: all 0.2s ease;
`;
const Logo = styled(Link)`
  color: ${(props) => props.theme.colors.neutralDark};
  text-decoration: none;
  display: flex;
  align-items: center;

  img {
    width: 150px;
    height: 100%;
    max-width: 50vw;

    @media screen and (min-width: 768px) {
      width: 200px;
    }
  }
`;
const NavLink = styled(Link)`
  color: ${(props) => props.theme.colors.neutralDark};
  text-decoration: none;
  padding: 1rem 1.5rem;
  transition: all 0.2s ease-in-out;
  font-weight: 400;

  :hover {
    color: ${(props) => props.theme.colors.primary};
  }

  @media screen and (min-width: 768px) {
    :hover {
      color: ${(props) => props.theme.colors.primary} !important;
    }
  }
`;
const MobileIcon = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  z-index: 20;
  cursor: pointer;

  svg {
    color: ${({ theme, scrolled, normal }) =>
      scrolled || normal
        ? theme.colors.neutralDark
        : theme.colors.neutralLight};
    font-size: 1.8rem;

    :hover {
      color: ${(props) => props.theme.colors.primary};
    }
  }

  @media screen and (min-width: 825px) {
    display: none;
  }
`;
const Menu = styled.div`
  display: flex;
  position: absolute;
  width: auto;
  height: 100vh;
  background: ${(props) => props.theme.colors.neutralLight};
  left: 0;
  right: 0;
  opacity: ${({ click }) => (click ? "100%" : "0")};
  top: ${({ click }) => (click ? "100%" : "-1000px")};
  transition: all 0.4s ease-in-out;
  align-items: center;

  @media screen and (min-width: 825px) {
    position: static;
    width: 100%;
    /* height: 80px; */
    background: transparent;
    top: 100%;
    opacity: 1;
    height: auto;
  }
`;
const MenuList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content;
  /* grid-template-rows: ${({ size }) =>
    `repeat(${size}, 60px)`}; // row min height */
  /* display: flex; */
  /* flex-direction: column; */
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-weight: 500;
  margin-top: -80px;
  transition: 0.2s grid-template-rows ease;

  li {
    margin: 0 auto;
    min-height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  li:last-of-type {
    margin-right: 0;
    margin-top: 1rem;
    margin-left: 0;
  }

  @media screen and (min-width: 820px) {
    display: flex;
    justify-content: flex-end;
    margin-top: 0;

    li {
      margin: 0;
    }

    li:last-of-type {
      margin-top: 0;
      margin-left: 1rem;
    }
  }
`;

const Navbar = ({
  title,
  transparent,
  data,
  sticky,
  light,
  logo,
  progress,
  anchor,
}) => {
  const { colors } = React.useContext(ThemeContext);
  const theme = React.useContext(ThemeContext);
  // Change styles if scroll down from home
  const [scrolled, setScrolled] = React.useState(false);
  const [click, setClick] = React.useState(false);
  const [menuSize, setMenuSize] = React.useState();

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", changeNav);

    return function cleanup() {
      window.removeEventListener("scroll", changeNav);
    };
  }, []);
  //

  const slugs = data.edges; // wrong slugs

  React.useEffect(() => {
    handleMenuSize();
  }, []);

  // Block scroll
  React.useEffect(() => {
    handleBlockScroll(click);
  }, [click]);
  //

  function handleMobile() {
    setClick(!click);

    // Block transparency
    if (window.scrollY <= 80) {
      setScrolled(!scrolled);
    }
  }

  // Calculate the size of the grid
  function handleMenuSize() {
    const size = slugs.length + 2; //wrong slugs array

    setMenuSize(size);
  }

  return (
    <>
      {transparent ? (
        <TransparentNav
          scrolled={scrolled}
          transparent={transparent}
          sticky={sticky}
          progress={progress}
        >
          <Container scrolled={scrolled}>
            <Logo
              onClick={() => setClick(false)}
              to="/"
              title="Logo"
              aria-label="Home"
            >
              <Image
                normalize={light && !scrolled}
                light={!scrolled}
                src={useQuerySvg(logo)}
                alt={title}
                svg
              />
            </Logo>
            <MobileIcon scrolled={scrolled} onClick={handleMobile}>
              {click ? <RiCloseFill /> : <RiMenu5Fill />}
            </MobileIcon>

            <Menu click={click}>
              <MenuList size={menuSize}>
                <li>
                  {!anchor && (
                    <NavLink
                      activeStyle={{ color: colors.primary }}
                      to="/"
                      title="Home"
                      aria-label="Home"
                      onClick={() => setClick(false)}
                    >
                      Home
                    </NavLink>
                  )}
                </li>
                {info.nav.map((item, key) => (
                  <li key={key}>
                    {item.dropdown ? (
                      <Dropdown
                        transparent={transparent}
                        scrolled={scrolled}
                        data={item.dropdown}
                        item={item}
                      />
                    ) : anchor ? (
                      <Anchor
                        activeStyle={{ color: colors.primary }}
                        to={`/#${item.slug}`}
                        title={item.name}
                        aria-label={item.name}
                        onAnchorLinkClick={() => setClick(false)}
                      >
                        {item.name}
                      </Anchor>
                    ) : (
                      <NavLink
                        activeStyle={{ color: colors.primary }}
                        to={`/${item.slug}`}
                        title={item.name}
                        aria-label={item.name}
                        onClick={() => setClick(false)}
                      >
                        {item.name}
                      </NavLink>
                    )}
                  </li>
                ))}
                <li>
                  {anchor ? (
                    <ButtonAnchor
                      transparent
                      slug="/#contact"
                      title="Contact"
                      aria-label="Contact"
                      onAnchorLinkClick={() => setClick(false)}
                    >
                      Contact
                    </ButtonAnchor>
                  ) : (
                    <ButtonLink
                      transparent
                      slug="/contact"
                      title="Contact"
                      aria-label="Contact"
                      onClick={() => setClick(false)}
                    >
                      Contact
                    </ButtonLink>
                  )}
                </li>
              </MenuList>
            </Menu>
          </Container>
          {progress && !click && <ProgressBar regular={!sticky} />}
        </TransparentNav>
      ) : (
        <Nav scrolled={scrolled} sticky={sticky}>
          <Container scrolled={scrolled}>
            <Logo
              onClick={() => setClick(false)}
              to="/"
              title="Logo"
              aria-label="Home"
            >
              <Image
                src={useQuerySvg(logo)}
                alt={title}
                svg
                normalize={theme.title === "dark"}
                light={theme.title === "dark"}
              />
            </Logo>
            <MobileIcon normal onClick={handleMobile}>
              {click ? <RiCloseFill /> : <RiMenu5Fill />}
            </MobileIcon>

            <Menu click={click}>
              <MenuList size={menuSize}>
                <li>
                  {!anchor && (
                    <NavLink
                      activeStyle={{ color: colors.primary }}
                      to="/"
                      title="Home"
                      aria-label="Home"
                      onClick={() => setClick(false)}
                    >
                      Home
                    </NavLink>
                  )}
                </li>

                {info.nav.map((item, key) => (
                  <li key={key}>
                    {item.dropdown ? (
                      <Dropdown
                        normal
                        scrolled={scrolled}
                        data={item.dropdown}
                        item={item}
                      />
                    ) : anchor ? (
                      <Anchor
                        activeStyle={{ color: colors.primary }}
                        to={`/#${item.slug}`}
                        title={item.name}
                        aria-label={item.name}
                        onAnchorLinkClick={() => setClick(false)}
                      >
                        {item.name}
                      </Anchor>
                    ) : (
                      <NavLink
                        activeStyle={{ color: colors.primary }}
                        to={`/${item.slug}`}
                        title={item.name}
                        aria-label={item.name}
                        onClick={() => setClick(false)}
                      >
                        {item.name}
                      </NavLink>
                    )}
                  </li>
                ))}
                <li>
                  {anchor ? (
                    <ButtonAnchor
                      slug="/#contact"
                      title="Contact"
                      aria-label="Contact"
                      onAnchorLinkClick={() => setClick(false)}
                    >
                      Contact
                    </ButtonAnchor>
                  ) : (
                    <ButtonLink
                      slug="/contact"
                      title="Contact"
                      aria-label="Contact"
                      onClick={() => setClick(false)}
                    >
                      Contact
                    </ButtonLink>
                  )}
                </li>
              </MenuList>
            </Menu>
          </Container>
        </Nav>
      )}
    </>
  );
};

export default Navbar;
