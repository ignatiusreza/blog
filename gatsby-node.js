/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode, basePath: "articles" })

    createNodeField({
      node,
      name: "slug",
      value: `/articles${slug}`,
    })
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const Article = path.resolve("src/templates/article.js")

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: Article,
        context: { slug: node.fields.slug },
      })
    })
  })
}
