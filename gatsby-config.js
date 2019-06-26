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
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    // Add a collection called "posts" that looks
    // for files in content/posts/
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/content/`,
      },
    },
    // Add support for *.mdx files in gatsby
    "gatsby-mdx",
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
};
