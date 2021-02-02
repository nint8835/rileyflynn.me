/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Riley Flynn",
    titleTemplate: "%s - rileyflynn.me",
    description: "Full Stack Developer for CoLab Software",
    siteUrl: "https://rileyflynn.me",
    image: "/images/st_johns.jpg",
    twitterUsername: "@BootlegJohn",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typescript`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/terraform`,
        name: "terraform-pages",
      },
    },
    {
      resolve: `gatsby-transformer-terraform`,
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              showLineNumbers: true,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Riley Flynn - Software Developer`,
        short_name: `Riley Flynn`,
        start_url: `/`,
        background_color: `#292d3e`,
        theme_color: `#32374c`,
        display: `standalone`,
        icon: `static/Favicon.png`,
      },
    },
    `gatsby-plugin-remove-serviceworker`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-111281238-1",
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        whitelist: ["DRONE_COMMIT", "DRONE_COMMIT_LINK"],
      },
    },
  ],
};
