/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

// Articles live at src/pages/articles/<year>/<month>/<day>/<slug>.md and are
// published at /articles/<slug>; everything else (draft, now) is slug-only.
const STANDALONE_PAGE = /^\/(draft|now)\/$/

exports.onCreateNode = ({ node, actions, getNode }) => {
  if (node.internal.type !== 'MarkdownRemark') return

  const { createNodeField } = actions
  const filePath = createFilePath({ node, getNode, basePath: 'articles' })

  if (STANDALONE_PAGE.test(filePath)) {
    createNodeField({ node, name: 'slug', value: filePath.split('/')[1] })
    return
  }

  const [, year, month, day, slug] = filePath.split('/')

  createNodeField({ node, name: 'date', value: `${year}-${month}-${day}` })
  createNodeField({ node, name: 'slug', value: slug })
  createNodeField({ node, name: 'path', value: `/articles/${slug}` })
}

exports.createPages = async params => {
  await Promise.all([createArticles(params), createNow(params)])
}

async function createArticles({ actions, graphql, reporter }) {
  const result = await graphql(`
    query CreateArticles {
      allMarkdownRemark(
        filter: { fields: { date: { ne: null } } }
        sort: { fields: { date: DESC } }
      ) {
        nodes {
          fields {
            path
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('Failed to query articles', result.errors)
    return
  }

  const { nodes } = result.data.allMarkdownRemark

  nodes.forEach((node, index) => {
    actions.createPage({
      path: node.fields.path,
      component: path.resolve('src/templates/article.js'),
      context: {
        slug: node.fields.slug,
        prevSlug: nodes[index + 1]?.fields.slug,
        nextSlug: nodes[index - 1]?.fields.slug,
      },
    })
  })
}

async function createNow({ actions, graphql, reporter }) {
  const result = await graphql(`
    query CreateNow {
      markdownRemark(fields: { slug: { eq: "now" } }) {
        fields {
          slug
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('Failed to query the now page', result.errors)
    return
  }

  actions.createPage({
    path: '/now',
    component: path.resolve('src/templates/now.js'),
    context: { slug: result.data.markdownRemark.fields.slug },
  })
}
