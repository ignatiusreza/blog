const config = {
  siteMetadata: {
    title: '□ A Rather Perpendicular View',
    description:
      'Personal blog/playground of Ignatius Reza. Learn something about everything, and everything about something.',
    author: '@ignatiusreza',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: ['gatsby-remark-prismjs', 'gatsby-remark-external-links'],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown-pages',
        path: `${__dirname}/src/pages`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}

if (process.env.UA_ID) {
  config.plugins.push({
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      trackingId: process.env.UA_ID,
    },
  })
}

module.exports = config
