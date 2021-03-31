import { createGlobalStyle } from "styled-components";
import handleHexToRgba from "../functions/handleHexToRgba";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: "Montserrat", sans-serif;
        line-height: 1.7rem;
        /* color: ${(props) => props.theme.colors.neutralDark}; */
    }

    @keyframes fade {
      0% {
      opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
    @keyframes fadeOut {
      0% {
      opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }

    button:focus {
      border: 1px solid transparent;
      outline: none;
      box-shadow: 0 0 3pt 2pt ${(props) =>
        handleHexToRgba(props.theme.colors.primaryDark, 0.3)};
    }

    input:focus {
      border: 1px solid transparent;
      outline: none;
      box-shadow: 0 0 3pt 2pt ${(props) =>
        handleHexToRgba(props.theme.colors.primaryDark, 0.3)};
    }

    textarea:focus {
      border: 1px solid transparent;
      outline: none;
      box-shadow: 0 0 3pt 2pt ${(props) =>
        handleHexToRgba(props.theme.colors.primaryDark, 0.3)};
    }

    // FAQ
    .row-title-text {
        font-weight: bold !important;
    }
`;

export default GlobalStyles;
