module.exports = {
  siteMetadata: {
    title: `Gatsby Emotion Tailwind Starter`,
    author: `Chris Williams`,
    description: `An example Gatsby starter making use of emotion and tailwind`,
    siteUrl: `https://gatsby-emotion-tailwind-starter.netlify.com/`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/`,
        name: `images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
        display: `minimal-ui`,
        icon: `${__dirname}/src/images/icon/logo.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-subfont`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-offline`,
  ],
};
