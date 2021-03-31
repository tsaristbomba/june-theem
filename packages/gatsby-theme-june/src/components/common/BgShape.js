import React from "react";
import styled from "styled-components";
import Wave from "./Wave";
import Tilt from "./Tilt";
import Triangle from "./Triangle";
import Curve from "./Curve";

const Box = styled.div`
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: center; */
  /* flex-direction: column; */
  /* padding: ${({ thick }) => (thick ? "5rem 1rem" : "4rem 1rem")}; */
  margin: 0 auto;
  /* background: ${({ bg }) => (bg ? primaryLight : "transparent")}; */
  /* position: ${({ relative }) => (relative ? "relative" : "static")}; */

  @media screen and (min-width: 768px) {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-width: 1150px;
  }
`;

const BgShape = ({ children, reverse, wave, tilt, triangle, curve }) => {
  return (
    <Box wave={wave} tilt={tilt} triangle={triangle} reverse={reverse}>
      {wave ? (
        <>
          <Wave />
          <Wave bot reverse />
        </>
      ) : (
        <></>
      )}
      {tilt ? (
        <>
          <Tilt />
          <Tilt bot reverse />
        </>
      ) : (
        <></>
      )}
      {triangle ? (
        <>
          <Triangle reverse={reverse} />
        </>
      ) : (
        <></>
      )}
      {curve ? (
        <>
          <Curve reverse />
          <Curve bot />
        </>
      ) : (
        <></>
      )}
      {children}
    </Box>
  );
};

export default BgShape;
