import React from 'react'
import { Link, graphql } from 'gatsby'

import Author from '../components/author'
import Date from '../components/date'
import Layout from '../components/layout'
import SEO from '../components/seo'

const PostTemplate = ({ data }) => {
  const { page, prevPage, nextPage } = data
  const { fields, frontmatter, html } = page

  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description}
        keywords={frontmatter.keywords}
      />

      <section className="article flex-wrap">
        <div className="article-date mt-2">
          <Date date={fields.date} />
        </div>

        <h1 className="article-title text-3xl md:text-4xl md:-mt-px">
          {frontmatter.title}
        </h1>

        <div
          className="article-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </section>

      <Author />

      <ul className="flex justify-between mb-8">
        <li className="self-start">
          {prevPage && (
            <Link to={prevPage.fields.path}>
              &lt; {prevPage.frontmatter.title}
            </Link>
          )}
        </li>
        <li className="self-end">
          {nextPage && (
            <Link to={nextPage.fields.path}>
              {nextPage.frontmatter.title} &gt;
            </Link>
          )}
        </li>
      </ul>
    </Layout>
  )
}

export default PostTemplate

export const pageQuery = graphql`
  query($slug: String!, $prevSlug: String, $nextSlug: String) {
    page: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        date
      }
      frontmatter {
        title
        description
        keywords
      }
    }
    prevPage: markdownRemark(fields: { slug: { eq: $prevSlug } }) {
      fields {
        path
      }
      frontmatter {
        title
      }
    }
    nextPage: markdownRemark(fields: { slug: { eq: $nextSlug } }) {
      fields {
        path
      }
      frontmatter {
        title
      }
    }
  }
`
