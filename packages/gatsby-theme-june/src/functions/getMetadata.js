import { graphql, useStaticQuery } from "gatsby";

export default function useMetadata() {
  const query = useStaticQuery(graphql`
    {
      meta: site {
        siteMetadata {
          title
          description
          logo
        }
      }
      slugs: allSitePage(filter: { path: { regex: "/^((?!404).)*$/gm" } }) {
        edges {
          node {
            path
          }
        }
      }
    }
  `);
  return query;
}
