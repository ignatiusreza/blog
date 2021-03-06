import React from 'react'
import { graphql } from 'gatsby'

import Articles from '../components/articles'
import Author from '../components/author'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Home = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords="blog, gatsby, rails, react" />
    <Author />
    <Articles articles={data.allMarkdownRemark.edges} />
  </Layout>
)

export default Home

// Get all markdown data, in descending order by date, and grab the id, excerpt, slug, date, and title
export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { fields: { date: { ne: null } } }
      sort: { order: DESC, fields: fields___date }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          fields {
            date
            path
            slug
          }
          frontmatter {
            title
            description
          }
        }
      }
    }
  }
`
