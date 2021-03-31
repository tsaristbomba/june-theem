import styled from "styled-components";

const InfoContainer = styled.div`
  display: grid;
  grid-auto-columns: minmax(49%, 1fr);
  grid-template-areas: "col1" "col2";
  margin: ${({ thick }) => (thick ? "2rem 0" : "1rem 0")};
  grid-gap: 1.5rem;
  max-width: ${({ wide }) => (wide ? "none" : "1150px")};
  width: ${({ wide }) => (wide ? "100%" : "100%")};
  height: 100%;
  color: ${(props) => props.theme.colors.neutralDark};

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  div {
    background: ${({ theme, box }) =>
      box ? theme.colors.neutralLight : "transparent"};
    padding: ${({ box }) => (box ? "1rem" : "0")};
    border-radius: ${({ rounded }) => (rounded ? "4px" : "0")};
    display: flex;
    flex-direction: column;
    transition: all 0.2s ease-in-out;
    box-shadow: ${({ box }) =>
      box ? "0px 2px 50px 0px rgb(110 130 208 / 18%)" : "none"};
    max-width: ${({ box }) => (box ? "300px" : "none")};
    margin: 0 auto;

    div {
      display: block;
      padding: 0;
      box-shadow: none;

      small {
        display: inline-block;
        width: 100%;
      }

      h2 {
        margin-bottom: 1rem;
        text-align: center;
      }
    }
  }

  @media screen and (min-width: 768px) {
    /* grid-auto-columns: ${({ large, imageLarge }) =>
      imageLarge ? "1fr 1fr" : large ? "1fr 1fr" : "minmax(49%, 1fr)"};
    grid-template-areas: ${({ reverse }) =>
      reverse ? "'col2 col1'" : "'col1 col2'"};
    grid-gap: 1.5rem;
    margin: ${({ thick }) => (thick ? "3rem 0" : "1rem 0")};
    max-height: ${({ wide }) => (wide ? "600px" : "none")};
    justify-items: stretch;
    justify-content: stretch; */
    display: flex;
    flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
    width: 100%;
    justify-content: space-between;
    align-items: center;

    /* div {
      max-width: none;
      justify-self: end;
      margin: ${({ mLeft }) => (mLeft ? "0 0 0 auto" : "0")};
      display: flex;
      flex-direction: column;
      justify-content: ${({ center }) => (center ? "center" : "normal")};

      div {
        h2 {
          text-align: start;
        }
        small {
          display: inline;
        }
      }
    }
    */
    img {
      margin-left: ${({ reverse, normal }) =>
        normal ? "0" : reverse ? "0" : "auto"};
      margin-right: ${({ reverse, normal }) =>
        normal ? "0" : reverse ? "auto" : "0"};
    }
  }
`;

export default InfoContainer;
