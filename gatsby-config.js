const config = {
  siteMetadata: {
    siteUrl: 'https://erauqssidlroweht.com',
    title: 'A Rather Perpendicular View',
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
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
      },
    },
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
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) =>
              allMarkdownRemark.edges.map(edge => ({
                ...edge.node.frontmatter,
                date: edge.node.fields.date,
                url: site.siteMetadata.siteUrl + edge.node.fields.path,
                guid: site.siteMetadata.siteUrl + edge.node.fields.path,
              })),
            query: `
              {
                site {
                  siteMetadata {
                    siteUrl
                  }
                }
                allMarkdownRemark(
                  filter: { fields: { date: { ne: null } } }
                  sort: { order: DESC, fields: fields___date }
                ) {
                  edges {
                    node {
                      fields {
                        date
                        path
                      }
                      frontmatter {
                        title
                        description
                      }
                    }
                  }
                }
              }
            `,
            output: '/articles.atom',
          },
        ],
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
