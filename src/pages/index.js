import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div>
        {posts.map(post => (
          <div key={post.node.id}>
            <h2>{post.node.frontmatter.title}</h2>
            <p>{post.node.frontmatter.date}</p>
            <div>
              <p>{post.node.frontmatter.description}</p>
            </div>
            <Link to={post.node.fields.path}>Read More</Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default BlogPage

// Get all markdown data, in descending order by date, and grab the id, excerpt, slug, date, and title
export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { fields: { slug: { ne: "draft" } } }
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
