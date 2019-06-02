module.exports = {
  siteMetadata: {
    title: `hammes.io`,
    author: `Adam Hammes`,
    description: `Adam Hammes's personal website.`,
    siteUrl: `https://hammes.io`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/recipes`,
        name: `recipes`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Hammes.io`,
        short_name: `hammes.io`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#007acc`,
        display: `minimal-ui`,
        icon: `src/favicon.png`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-favicon`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
}
