require("dotenv").config({
  path: `.env.${process.env.GATSBY_GOOGLE_API_URL}`,
});

const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: `June`,
    description: `June is a great theme`,
    author: `@tsaristbomba`,
    logo: "june.svg",
    image: "/june.png",
  },
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -60,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `#29ABFF`,
        // Disable the loading spinner.
        showSpinner: true,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `JUNE Theme`,
        short_name: `JUNE`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#29ABFF`,
        display: `standalone`,
        icon: `${__dirname}/src/images/icon.jpeg`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          default: require.resolve("./src/components/Layout.jsx"),
        },
      },
    },
  ],
};
