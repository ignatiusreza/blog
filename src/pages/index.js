import { graphql } from 'gatsby'

import Articles from '../components/articles'
import Author from '../components/author'
import Layout from '../components/layout'
import Seo from '../components/seo'

const Home = ({ data }) => (
  <Layout>
    <Author />
    <Articles articles={data.allMarkdownRemark.nodes} />
  </Layout>
)

export default Home

export const Head = ({ location }) => (
  <Seo
    title="Home"
    keywords="blog, gatsby, rails, react"
    pathname={location.pathname}
  />
)

export const pageQuery = graphql`
  query Home {
    allMarkdownRemark(
      filter: { fields: { date: { ne: null } } }
      sort: { fields: { date: DESC } }
    ) {
      nodes {
        id
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
`
