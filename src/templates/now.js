import { graphql } from 'gatsby'

import Author from '../components/author'
import Layout from '../components/layout'
import Seo from '../components/seo'

const NowTemplate = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark

  return (
    <Layout>
      <section className="article flex-wrap">
        <h1 className="article-title text-3xl md:text-4xl md:-mt-px">
          {frontmatter.title}
        </h1>

        <div
          className="article-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </section>

      <Author />
    </Layout>
  )
}

export default NowTemplate

export const Head = ({ data: { markdownRemark }, location }) => (
  <Seo
    title={markdownRemark.frontmatter.title}
    description={markdownRemark.frontmatter.description}
    keywords={markdownRemark.frontmatter.keywords}
    pathname={location.pathname}
  />
)

export const pageQuery = graphql`
  query Now($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        keywords
      }
    }
  }
`
