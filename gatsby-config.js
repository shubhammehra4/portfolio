module.exports = {
  siteMetadata: {
    title: `SM`,
    description: `Shubham Mehra's Portfolio Website`,
    author: `@shubhammehra4`,
    keywords: [
      `Shubham`,
      `Shubham Mehra`,
      `shubhammehra4`,
      `Shubham portfolio`,
    ],
    siteUrl: `https://shubhammehra.gatsbyjs.io/`,
  },
  flags: {
    FUNCTIONS: true,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Shubham Mehra`,
        description: `Shubham Mehra's Portfolio Website`,
        short_name: `SM`,
        start_url: `/`,
        background_color: `#111827`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `src/images/Logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-webpack-bundle-analyser-v2`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
