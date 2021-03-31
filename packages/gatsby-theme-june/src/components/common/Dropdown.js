import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { RiArrowDropDownFill } from "react-icons/ri";

const Ul = styled.ul`
  position: relative;
  width: 160px;
  list-style: none;
  text-align: center;
  display: flex;
  flex-direction: column;
  /* left: 0; */
  /* right: 0; */
  /* padding-right: 20px; */
  animation: 0.3s fade;

  li {
    background: ${(props) => props.theme.colors.primary};
    /* border-left: 1px solid ${(props) => props.theme.colors.primary}; */
    /* border-right: 1px solid ${(props) => props.theme.colors.primary}; */
    cursor: pointer;
    padding: 6px;
    margin: 0 !important;
    display: inline-block;
    animation: 0.3s fade;
    border-bottom: 1px solid ${(props) => props.theme.colors.neutralMedium};

    :last-of-type {
      border-bottom: 1px solid ${(props) => props.theme.colors.primary};
    }

    a {
      color: ${(props) => props.theme.colors.neutralLight};
      text-decoration: none;
      padding: 6px;
      font-size: 0.9rem;
    }

    :hover {
      background: ${(props) => props.theme.colors.primary};
      a {
        color: ${(props) => props.theme.colors.neutralLight};
      }
    }

    a:hover {
      color: ${(props) => props.theme.colors.neutralLight};
    }
  }

  @media screen and (min-width: 768px) {
    width: 150px;
    position: absolute;
    top: 58px;
    list-style: none;
    text-align: start;
    display: flex;
    flex-direction: column;
    /* left: 0; */
    /* right: 0; */
    /* padding-right: 20px; */

    li {
      background: ${(props) => props.theme.colors.neutralLight};
      cursor: pointer;
      padding: 6px;
      margin: 0 !important;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 40px;
      border: none;

      a {
        color: ${(props) => props.theme.colors.neutralDark};
        text-decoration: none;
        padding: 6px;
        font-size: 0.9rem;
      }

      :hover {
        background: ${(props) => props.theme.colors.primary};
        a {
          color: ${(props) => props.theme.colors.neutralLight};
        }
      }

      a:hover {
        color: ${(props) => props.theme.colors.neutralLight};
      }
    }
  }
`;
const NavButton = styled.button`
  color: ${({ theme, scrolled, transparent, normal }) =>
    (scrolled && transparent) || normal
      ? theme.colors.neutralDark
      : theme.colors.neutralLight};
  text-decoration: none;
  padding: 1rem 1.5rem;
  transition: all 0.2s ease-in-out;
  font-weight: 400;
  border: none;
  background: transparent;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  :focus {
    border: none;
    outline: none;
    box-shadow: none;
  }

  :hover {
    color: ${(props) => props.theme.colors.primary};
  }

  @media screen and (min-width: 768px) {
    color: ${({ theme, scrolled, transparent, normal }) =>
      (scrolled && transparent) || normal
        ? theme.colors.neutralDark
        : theme.colors.neutralLight};
    flex-direction: row;

    :hover {
      color: ${(props) => props.theme.colors.primary} !important;
    }
  }
`;
const Deactivated = styled.ul`
  display: none;
`;

const Dropdown = ({ data, item, scrolled, transparent, normal }) => {
  const [drop, setDropdown] = React.useState(false);

  return (
    <>
      <NavButton
        normal={normal}
        scrolled={scrolled}
        transparent={transparent}
        onMouseEnter={() => setDropdown(true)}
        onMouseLeave={() => setDropdown(false)}
        onClick={() => setDropdown(!drop)}
      >
        {item.name} <RiArrowDropDownFill />
        {drop ? (
          <Ul
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
          >
            {data.map((item, key) => (
              <li key={key}>
                <Link to={item.slug} title={item.title} aria-label={item.title}>
                  {item.title}
                </Link>
              </li>
            ))}
          </Ul>
        ) : (
          <Deactivated />
        )}
      </NavButton>
    </>
  );
};

export default Dropdown;
