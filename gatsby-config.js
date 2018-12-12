module.exports = {
  siteMetadata: {
    title: 'Readme Taiwan',
    siteDescription: 'Readme Taiwan helps interested software developers find relevant meetups that are occurring in Taiwan',
    siteKeywords: 'Software Development, Software, Frontend, Front-end, backend, back-end, Javascript, JS, React, Mobile, development, meetups, meetings, Taichung, Taiwan, Taipei'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        // implementation: require("sass"),
        precision: 8
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
