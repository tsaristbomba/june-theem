import { graphql, useStaticQuery } from "gatsby";

const useFilterImage = (src, grayscale) => {
  let arr;
  let image;

  const query = useStaticQuery(graphql`
    query {
      allImageSharp {
        nodes {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      grayscale: allImageSharp {
        nodes {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            transformOptions: { grayscale: true }
          )
        }
      }
    }
  `);
  if (grayscale) {
    arr = query.grayscale.nodes;
    image = arr.find((item) =>
      item.gatsbyImageData.images.fallback.src.includes(src)
    );
    return image.gatsbyImageData;
  } else {
    arr = query.allImageSharp.nodes;
    image = arr.find((item) =>
      item.gatsbyImageData.images.fallback.src.includes(src)
    );
    return image.gatsbyImageData;
  }
};

export default useFilterImage;
