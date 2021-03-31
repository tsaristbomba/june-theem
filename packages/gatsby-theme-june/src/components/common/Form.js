import React from "react";
import styled from "styled-components";
import handleHexToRgba from "../../functions/handleHexToRgba";

const Element = styled.form`
  text-align: center;

  input {
    width: 100%;
    padding: 6px;
    margin: 4px 0;
    border-radius: ${({ rounded }) => (rounded ? "4px" : "0")};
    border-width: 1px;
    border: none;
    margin-bottom: 8px;
    border: 1px solid ${(props) => props.theme.colors.neutralMedium};

    :focus {
      border: 1px solid transparent;
      outline: none;
      box-shadow: ${(props) => `0 0 3pt 2pt
        ${handleHexToRgba(props.theme.colors.primaryDark, 0.3)}`};
    }
  }
  textarea {
    padding: 6px;
    margin: 4px 0;
    width: 100%;
    height: 150px;
    resize: none;
    border-radius: ${({ rounded }) => (rounded ? "4px" : "0")};
    border: 1px solid ${(props) => props.theme.colors.neutralMedium};

    :focus {
      border: 1px solid transparent;
      outline: none;
      box-shadow: ${(props) => `0 0 3pt 2pt
        ${handleHexToRgba(props.theme.colors.primaryDark, 0.3)}`};
    }
  }

  button {
    border-radius: ${({ rounded }) => (rounded ? "4px" : "0")};

    @media screen and (max-width: 768px) {
      padding: 4px 6px;
    }
  }
`;

const ElementInline = styled.form`
  text-align: center;
  display: ${({ inline }) => (inline ? "inline-flex" : "block")};

  input {
    width: 100%;
    padding: 6px;
    margin: 4px 0;
    border-radius: ${({ rounded }) => (rounded ? "4px" : "0")};
    border-width: 1px;
    border: none;
    border: 1px solid ${(props) => props.theme.colors.neutralMedium};

    :focus {
      border: 1px solid transparent;
      outline: none;
      box-shadow: ${(props) => `0 0 3pt 2pt
        ${handleHexToRgba(props.theme.colors.primaryDark, 0.3)}`};
    }
  }
  textarea {
    padding: 6px;
    margin: 4px 0;
    width: 100%;
    height: 150px;
    resize: none;
    border-radius: ${({ rounded }) => (rounded ? "4px" : "0")};
    border: 1px solid ${(props) => props.theme.colors.neutralMedium};

    :focus {
      border: 1px solid transparent;
      outline: none;
      box-shadow: ${(props) => `0 0 3pt 2pt
        ${handleHexToRgba(props.theme.colors.primaryDark, 0.3)}`};
    }
  }

  button {
    margin: ${({ inline }) => (inline ? " 4px 0 !important" : "0")};
    border-radius: ${({ rounded }) => (rounded ? "0 4px 4px 0" : "0")};

    @media screen and (max-width: 768px) {
      padding: 4px 6px;
    }
  }

  @media screen and (min-width: 768px) {
    width: 100%;
    max-width: 500px;
    min-width: 400px;
  }
`;
const Hidden = styled.p`
  display: none;
`;

const Form = ({ children, rounded, inline, action }) => {
  return (
    <>
      {inline ? (
        <ElementInline
          name="contact v1"
          method="post"
          data-netlify="true"
          // onSubmit="submit"
          data-netlify-honeypot="bot-field"
          action={action}
          rounded={rounded}
          inline={inline}
        >
          <input type="hidden" name="form-name" value="contact v1" />
          <Hidden>
            <label>
              <input name="bot-field" />
            </label>
          </Hidden>
          {children}
        </ElementInline>
      ) : (
        <Element
          name="contact v1"
          method="post"
          data-netlify="true"
          // onSubmit="submit"
          data-netlify-honeypot="bot-field"
          action={action}
          rounded={rounded}
          inline={inline}
        >
          <input type="hidden" name="form-name" value="contact v1" />
          <Hidden>
            <label>
              <input name="bot-field" />
            </label>
          </Hidden>
          {children}
        </Element>
      )}
    </>
  );
};

export default Form;
