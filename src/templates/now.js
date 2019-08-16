import React from 'react'
import { graphql } from 'gatsby'

import Author from '../components/author'
import Layout from '../components/layout'
import SEO from '../components/seo'

const NowTemplate = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark

  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description}
        keywords={frontmatter.keywords}
      />

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

export const pageQuery = graphql`
  query {
    markdownRemark(fields: { slug: { eq: "now" } }) {
      html
      frontmatter {
        title
        description
        keywords
      }
    }
  }
`
