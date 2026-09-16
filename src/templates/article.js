import { Link, graphql } from 'gatsby'

import Author from '../components/author'
import ArticleDate from '../components/date'
import Layout from '../components/layout'
import Seo from '../components/seo'

const ArticleTemplate = ({ data }) => {
  const { page, prevPage, nextPage } = data
  const { fields, frontmatter, html } = page

  return (
    <Layout>
      <section className="article flex-wrap">
        <div className="article-date mt-2">
          <ArticleDate date={fields.date} />
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

export default ArticleTemplate

export const Head = ({ data: { page }, location }) => (
  <Seo
    title={page.frontmatter.title}
    description={page.frontmatter.description}
    keywords={page.frontmatter.keywords}
    pathname={location.pathname}
  />
)

export const pageQuery = graphql`
  query Article($slug: String!, $prevSlug: String, $nextSlug: String) {
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
