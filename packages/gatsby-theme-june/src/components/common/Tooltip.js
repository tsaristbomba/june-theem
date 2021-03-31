import React from "react";
import styled from "styled-components";

const TooltipWrapper = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    z-index: 12;
    position: fixed;
    /* bottom: 7vh; */
    opacity: 1;
    right: ${({ small }) => (small ? "13vh" : "13.8vh")};
    background: ${(props) => props.theme.colors.neutralDark};
    color: ${(props) => props.theme.colors.neutralLight};
    padding: 0 10px;
    display: inline-flex;
    max-width: 150px;
    transition: 0.2s opacity ease;
    font-size: 12px;
    border-radius: ${({ rounded }) => (rounded ? "4px" : "0")};
    animation: 0.3s fade;

    /* To the right of the tooltip */
    ::after {
      content: " ";
      position: absolute;
      top: 50%;
      left: 100%;
      margin-top: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: transparent transparent transparent
        ${(props) => props.theme.colors.neutralDark};
    }

    /* At the bottom of the tooltip */
    /* ::after {
      content: " ";
      position: absolute;
      top: 100%;
      left: 50%;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: black transparent transparent transparent;
    } */

    /* At the top of the tooltip */
    /* ::after {
      content: " ";
      position: absolute;
      bottom: 100%; 
      left: 50%;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: transparent transparent black transparent;
    } */

    /* To the left of the tooltip */
    /* ::after {
      content: " ";
      position: absolute;
      top: 50%;
      right: 100%;
      margin-top: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: transparent black transparent transparent;
    } */
  }
`;

const Tooltip = ({ children, rounded, small }) => {
  return (
    <TooltipWrapper small={small} rounded={rounded}>
      {children}
    </TooltipWrapper>
  );
};

export default Tooltip;
