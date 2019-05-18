import React from 'react';
import { graphql } from 'gatsby';

import Author from '../components/author';
import Date from '../components/date';
import Layout from '../components/layout';

const PostTemplate = ({ data }) => {
  const { markdownRemark } = data;
  const { fields, frontmatter, html } = markdownRemark;
  return (
    <Layout>
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
    </Layout>
  );
};

export default PostTemplate;

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        date
      }
      frontmatter {
        title
      }
    }
  }
`;
