module.exports = {
  siteMetadata: {
    title: 'Taichung Dev Meetup',
    siteDescription: 'Readme.tw helps interested software developers find relevant meetups that are occurring in Taiwan',
    siteKeywords: 'Software Development, Software, Frontend, Front-end, backend, back-end, Javascript, JS, React, Mobile, development, meetups, meetings, Taichung, Taiwan, Taipei',
    currentEvent: {

    },
    mailingListLink: 'https://mailchi.mp/83e22a017c9f/readmetw-subscribe'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-json',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://api.readme.tw:`,
        queryLimit: 100, // Default to 0
        contentTypes: [`event`, `speaker`, `topic`, `socialmedialink`],
        // Possibility to login with a strapi user, when content types are not publically available (optional).
        // loginData: {
        //   identifier: "",
        //   password: "",
        // },
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
        icon: 'src/images/readme-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-135617135-2",
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        // implementation: require("sass"),
        precision: 8
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Roboto Mono']
        }
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
