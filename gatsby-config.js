require('dotenv').config({ path: `.env` });

module.exports = {
  siteMetadata: {
    author: `Chris Williams`,
    title: `Gatsby Emotion Tailwind Starter`,
    description: `An example Gatsby starter making use of emotion and tailwind`,
    siteUrl: `https://gatsby-emotion-tailwind-starter.netlify.app/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/`,
        name: `images`,
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Emotion Tailwind Starter`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/images/icon/logo.png`,
        theme_color_in_head: false,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
