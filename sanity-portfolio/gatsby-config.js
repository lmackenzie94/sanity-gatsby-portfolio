module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // removed sharp plugins
    {
      resolve: `gatsby-source-sanity`,
      options: {
        // find in sanity.json of studio codebase
        projectId: `uh140dpg`,
        dataset: `production`,
        // the below enabled watch mode (get token from manage.sanity.io > Settings > API > create new Read token)
        overlayDrafts: true,
        watchMode: true,
        token: `skr7iTfEQNxZWYQcgTXVMofwabLlWnyI3h5oGSgNW3BoJWCQfW9t7tA0Bpgk0oVD8aFlJVgLzX6JyZnTJKUlreILT9vAYMtD0SshRoPgkNPatvAuHtUkyvb5ZzNYG2G0tIPgTRAwZkSva5dkWN6AdML7lNvEGMKAlomwzQ4BRp4bESY5wuu0`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
