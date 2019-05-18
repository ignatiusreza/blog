import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import Date from './date';

const Articles = ({ articles }) => (
  <div>
    {articles.map(({ node }) => (
      <div key={node.id} className="article">
        <div className="article-date">
          <Date date={node.fields.date} />
        </div>

        <div>
          <Link to={node.fields.path} className="article-title">
            <h2>{node.frontmatter.title}</h2>
          </Link>

          <p className="article-excerpt">{node.frontmatter.description}</p>
        </div>
      </div>
    ))}
  </div>
);
Articles.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        fields: PropTypes.shape({
          date: PropTypes.date,
          path: PropTypes.string,
        }),
        frontmatter: PropTypes.shape({
          title: PropTypes.string,
          description: PropTypes.string,
        }),
      }),
    })
  ),
};

export default Articles;
