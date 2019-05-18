/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    const path = createFilePath({ node, getNode, basePath: 'articles' })

    if (path === '/draft/') {
      createNodeField({ node, name: 'slug', value: 'draft' })
    } else {
      const [_, year, month, day, slug] = path.split('/')
      const date = `${year}-${month}-${day}`

      createNodeField({ node, name: 'date', value: date })
      createNodeField({ node, name: 'slug', value: slug })
      createNodeField({ node, name: 'path', value: `/articles/${slug}` })
    }
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const Article = path.resolve('src/templates/article.js')

  return graphql(`
    {
      allMarkdownRemark(
        filter: { fields: { slug: { ne: "draft" } } }
        sort: { order: DESC, fields: fields___date }
      ) {
        edges {
          node {
            fields {
              path
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

    const { edges } = result.data.allMarkdownRemark

    edges.forEach(({ node }, index) => {
      const prevNode = edges[index + 1]
      const nextNode = edges[index - 1]
      const context = {
        slug: node.fields.slug,
        prevSlug: prevNode && prevNode.node.fields.slug,
        nextSlug: nextNode && nextNode.node.fields.slug,
      }

      createPage({ path: node.fields.path, component: Article, context })
    })
  })
}
