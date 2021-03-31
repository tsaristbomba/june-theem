import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";

import BackgroundImage from "gatsby-background-image";

const BackgroundSection = ({ src }) => {
  const query = useStaticQuery(
    graphql`
      query {
        allFile {
          nodes {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
        }
      }
    `
  );

  const arr = query.allFile.nodes;
  const image = arr.find((item) =>
    item.childImageSharp.fluid.originalName.includes(src)
  );

  return (
    <BackgroundImage
      Tag="section"
      //   className={className}
      fluid={image.childImageSharp.fluid}
      backgroundColor={`#040e18`}
    >
      <h2>gatsby-background-image</h2>
    </BackgroundImage>
  );
};

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`;

export default StyledBackgroundSection;
