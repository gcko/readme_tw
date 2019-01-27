module.exports = {
  siteMetadata: {
    title: 'Taichung Dev Meetup',
    siteDescription: 'Readme.tw helps interested software developers find relevant meetups that are occurring in Taiwan',
    siteKeywords: 'Software Development, Software, Frontend, Front-end, backend, back-end, Javascript, JS, React, Mobile, development, meetups, meetings, Taichung, Taiwan, Taipei',
    pastEvents: [],
    currentEvent: {
      unixTime: 1547121600,
      location: 'Passenger, Taichung',
      locationLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116444.80245764508!2d120.7084002!3d24.21027895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d9be446dd93%3A0x246540f9df2293dd!2sPassenger!5e0!3m2!1sen!2stw!4v1545975181667'
    },
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
