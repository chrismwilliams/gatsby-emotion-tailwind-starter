module.exports = {
  siteMetadata: {
    title: `Gatsby Emotion Tailwind Starter`,
    author: `Chris Williams`,
    description: `An example Gatsby starter making use of emotion and tailwind`,
    siteUrl: `https://gatsby-emotion-tailwind-starter.netlify.com/`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/`,
        name: `images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
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
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-subfont`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-offline`,
  ],
};
