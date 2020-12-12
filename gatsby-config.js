module.exports = {
  siteMetadata: {
    title: `sunny.gg`,
    description: `My Website`,
    author: `@sgolovine`,
    siteUrl: "https://sunny.gg",
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        develop: false,
        tailwind: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/static/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        data: `vcard`,
        path: `${__dirname}/static/vcard`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `sunny.gg`,
        short_name: `sunny.gg`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/images/profile-avatar.png`,
      },
    },
  ],
}
