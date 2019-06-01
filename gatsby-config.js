/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Riley Flynn",
    titleTemplate: "%s - rileyflynn.me",
    description: "Full-stack software developer and Vice President of the MUN Computer Science Society",
    url: "https://rileyflynn.me",
    image: "/images/st_johns.jpg",
    twitterUsername: "@BootlegJohn",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Riley Flynn - Software Developer`,
        short_name: `Riley Flynn`,
        start_url: `/`,
        background_color: `#292d3e`,
        theme_color: `#32374c`,
        display: `standalone`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-111281238-1",
      },
    }
  ],
}
