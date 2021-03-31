import { graphql, useStaticQuery } from "gatsby";

const QuerySvg = (src) => {
  let arr;
  let image;

  const query = useStaticQuery(graphql`
    query {
      allFile(filter: { ext: { regex: "/(svg)/" } }) {
        nodes {
          publicURL
        }
      }
    }
  `);
  arr = query.allFile.nodes;
  image = arr.find((item) => item.publicURL.includes(src));

  return image.publicURL;
};

export default QuerySvg;
