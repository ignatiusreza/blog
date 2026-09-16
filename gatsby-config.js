/**
 * Configure the site and its plugins.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

const siteMetadata = {
  siteUrl: 'https://erauqssidlroweht.com',
  title: 'A Rather Perpendicular View',
  description:
    'Personal blog/playground of Ignatius Reza. Learn something about everything, and everything about something.',
  author: '@ignatiusreza',
}

const plugins = [
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: `${__dirname}/src/images`,
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'markdown-pages',
      path: `${__dirname}/src/pages`,
    },
  },
  'gatsby-plugin-image',
  'gatsby-plugin-sharp',
  'gatsby-transformer-sharp',
  'gatsby-plugin-postcss',
  {
    resolve: 'gatsby-transformer-remark',
    options: {
      plugins: ['gatsby-remark-external-links', 'gatsby-remark-prismjs'],
    },
  },
  {
    resolve: 'gatsby-plugin-feed',
    options: {
      feeds: [
        {
          title: siteMetadata.title,
          output: '/articles.atom',
          serialize: ({ query: { site, allMarkdownRemark } }) =>
            allMarkdownRemark.nodes.map(node => ({
              ...node.frontmatter,
              date: node.fields.date,
              url: site.siteMetadata.siteUrl + node.fields.path,
              guid: site.siteMetadata.siteUrl + node.fields.path,
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
                sort: { fields: { date: DESC } }
              ) {
                nodes {
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
          `,
        },
      ],
    },
  },
]

// Universal Analytics is gone; GA_MEASUREMENT_ID is a GA4 id (G-XXXXXXX).
// UA_ID is still read so an existing deployment keeps working until it is renamed.
const trackingId = process.env.GA_MEASUREMENT_ID || process.env.UA_ID

if (trackingId) {
  plugins.push({
    resolve: 'gatsby-plugin-google-gtag',
    options: {
      trackingIds: [trackingId],
      pluginConfig: { respectDNT: true },
    },
  })
}

module.exports = {
  // Gatsby 5 defaults to "always"; the site's published URLs have no trailing slash.
  trailingSlash: 'never',
  // The React 17+ JSX transform, so components don't import React just for JSX.
  jsxRuntime: 'automatic',
  siteMetadata,
  plugins,
}
